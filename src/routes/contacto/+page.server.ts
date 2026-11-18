import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createContactMessage } from '#lib/server/notion.ts';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d\s()-]{7,25}$/;

const LIMITS = {
	nombre: { min: 2, max: 100 },
	correo: { min: 5, max: 150 },
	asunto: { min: 3, max: 150 },
	telefono: { min: 7, max: 25 },
	mensaje: { min: 10, max: 2000 }
} as const;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const recent = (rateLimitMap.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);

	if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
		rateLimitMap.set(ip, recent);
		return true;
	}

	recent.push(now);
	rateLimitMap.set(ip, recent);
	return false;
}

function stripUnsafeChars(text: string): string {
	let result = '';

	for (const ch of text) {
		const code = ch.codePointAt(0) ?? 0;
		const isControl =
			(code <= 0x1f && code !== 0x09 && code !== 0x0a && code !== 0x0d) || code === 0x7f;
		const isBidi =
			(code >= 0x202a && code <= 0x202e) || (code >= 0x2066 && code <= 0x2069);

		if (!isControl && !isBidi) {
			result += ch;
		}
	}

	return result;
}

function cleanText(input: FormDataEntryValue | null, allowNewlines = false): string {
	let text = typeof input === 'string' ? stripUnsafeChars(input) : '';

	if (!allowNewlines) {
		text = text.replace(/[\r\n]+/g, ' ');
	}

	return text.trim();
}

function neutralizeFormula(value: string): string {
	return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export const actions = {
	default: async ({ request, getClientAddress }) => {
		const formData = await request.formData();

		// 1. Honeypot: si un bot llenó el campo oculto "empresa", simulamos éxito sin guardar nada
		const honeypot = cleanText(formData.get('empresa'));
		if (honeypot.length > 0) {
			return { success: true };
		}

		// 2. Sanitización básica
		const nombre = cleanText(formData.get('nombre'));
		const correo = cleanText(formData.get('correo')).toLowerCase();
		const asunto = cleanText(formData.get('asunto'));
		const telefono = cleanText(formData.get('telefono'));
		const mensaje = cleanText(formData.get('mensaje'), true);

		const values = { nombre, correo, asunto, telefono, mensaje };

		// 3. Rate limit por IP
		const ip = getClientAddress();
		if (isRateLimited(ip)) {
			return fail(429, {
				error: 'Has enviado demasiados mensajes en poco tiempo. Espera unos minutos e intenta de nuevo.',
				values
			});
		}

		// 4. Validación estricta en servidor (nunca confiar solo en el HTML)
		if (nombre.length < LIMITS.nombre.min || nombre.length > LIMITS.nombre.max) {
			return fail(400, {
				error: `El nombre debe tener entre ${LIMITS.nombre.min} y ${LIMITS.nombre.max} caracteres.`,
				values
			});
		}

		if (
			correo.length < LIMITS.correo.min ||
			correo.length > LIMITS.correo.max ||
			!EMAIL_REGEX.test(correo)
		) {
			return fail(400, {
				error: 'Por favor ingresa un correo electrónico válido.',
				values
			});
		}

		if (asunto.length < LIMITS.asunto.min || asunto.length > LIMITS.asunto.max) {
			return fail(400, {
				error: `El asunto debe tener entre ${LIMITS.asunto.min} y ${LIMITS.asunto.max} caracteres.`,
				values
			});
		}

		if (!PHONE_REGEX.test(telefono)) {
			return fail(400, {
				error: 'Por favor ingresa un número de teléfono válido (solo números, +, -, paréntesis).',
				values
			});
		}

		if (mensaje.length < LIMITS.mensaje.min || mensaje.length > LIMITS.mensaje.max) {
			return fail(400, {
				error: `El mensaje debe tener entre ${LIMITS.mensaje.min} y ${LIMITS.mensaje.max} caracteres.`,
				values
			});
		}

		// 5. Envío seguro a Notion (neutralizando fórmulas peligrosas en textos libres)
		try {
			await createContactMessage({
				nombre: neutralizeFormula(nombre),
				correo,
				asunto: neutralizeFormula(asunto),
				telefono,
				mensaje: neutralizeFormula(mensaje)
			});

			return { success: true };
		} catch (err) {
			console.error('Error al guardar contacto en Notion:', err);
			return fail(500, {
				error:
					'Ocurrió un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos por teléfono.',
				values
			});
		}
	}
} satisfies Actions;