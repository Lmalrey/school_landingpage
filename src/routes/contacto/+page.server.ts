import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createContactMessage } from '#lib/server/notion.ts';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const nombre = String(formData.get('nombre') ?? '').trim();
		const correo = String(formData.get('correo') ?? '').trim();
		const asunto = String(formData.get('asunto') ?? '').trim();
		const telefono = String(formData.get('telefono') ?? '').trim();
		const mensaje = String(formData.get('mensaje') ?? '').trim();

		const values = { nombre, correo, asunto, telefono, mensaje };

		if (!nombre || !correo || !asunto || !telefono || !mensaje) {
			return fail(400, {
				error: 'Por favor completa todos los campos obligatorios.',
				values
			});
		}

		if (!EMAIL_REGEX.test(correo)) {
			return fail(400, {
				error: 'Por favor ingresa un correo electrónico válido.',
				values
			});
		}

		try {
			await createContactMessage(values);
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