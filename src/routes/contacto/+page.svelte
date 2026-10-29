<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';

	let submitted = $state(false);
	let feedbackElement = $state<HTMLDivElement | undefined>(undefined);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget;
		if (form instanceof HTMLFormElement) {
			form.reset();
		}

		submitted = true;
		requestAnimationFrame(() =>
			feedbackElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		);
	}
</script>

<Seo
	title="Contacto | Instituto Dr. Carlos Seguías"
	description="Comunícate con el Instituto Dr. Carlos Seguías en Maturín, Monagas. Consulta sobre inscripciones, educación especial y atención pedagógica."
	path="contacto/"
/>

<section class="relative isolate overflow-hidden bg-slate-950" aria-labelledby="contact-heading">
	<div
		class="absolute inset-0 -z-10 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"
		aria-hidden="true"
	></div>
	<div
		class="absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
		<div class="max-w-3xl">
			<p
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md"
			>
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				Estamos aquí para ayudarte
			</p>
			<h1
				id="contact-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Contacto
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Estamos atentos para responder tus dudas e inquietudes sobre nuestras inscripciones y
				atención pedagógica.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12" aria-label="Ubicación">
	<div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
		<div class="h-80 sm:h-96">
			<iframe
				class="h-full w-full border-0 grayscale transition duration-500 hover:grayscale-0"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.83202344771166!2d-63.195512030241176!3d9.728482199495657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sus!4v1793233305093!5m2!1ses-419!2sus"
				title="Mapa de ubicación del Instituto Dr. Carlos Seguías en Fundemos, Maturín"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				allowfullscreen
			></iframe>
		</div>
		<div
			class="absolute right-4 bottom-4 left-4 flex max-w-sm items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:right-auto sm:bottom-6 sm:left-6"
		>
			<span
				class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-700 text-white"
				aria-hidden="true"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
					<path
						d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8" />
				</svg>
			</span>
			<div>
				<h2 class="text-sm font-bold text-slate-900">Avenida Principal de Fundemos #25</h2>
				<p class="mt-1 text-xs text-slate-500">Maturín, Estado Monagas · Venezuela</p>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-7xl items-start gap-8 px-6 pb-16 sm:px-10 sm:pb-20 lg:grid-cols-12 lg:gap-10 lg:px-12"
	aria-label="Información y formulario de contacto"
>
	<div class="space-y-4 lg:col-span-5">
		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h2 class="text-xl font-bold text-slate-900">Dirección</h2>
					<address class="mt-2 text-sm leading-6 text-slate-600 not-italic">
						Av. Principal de Fundemos Local 25<br />
						Maturín, Venezuela
					</address>
				</div>
				<span
					class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"
					aria-hidden="true"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
						<path
							d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8" />
					</svg>
				</span>
			</div>
		</div>

		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<div class="flex items-start justify-between gap-4">
				<div class="min-w-0">
					<h2 class="text-xl font-bold text-slate-900">Correo electrónico</h2>
					<a
						class="mt-2 block text-sm font-medium break-all text-sky-700 transition-colors hover:text-sky-900 hover:underline"
						href="mailto:ceedrcarlosseguias@gmail.com"
					>
						ceedrcarlosseguias@gmail.com
					</a>
					<a
						class="mt-1 block text-sm font-medium break-all text-sky-700 transition-colors hover:text-sky-900 hover:underline"
						href="mailto:ceedrcarlosseguias1@gmail.com"
					>
						ceedrcarlosseguias1@gmail.com
					</a>
				</div>
				<span
					class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"
					aria-hidden="true"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
						<rect
							x="3"
							y="5"
							width="18"
							height="14"
							rx="2"
							stroke="currentColor"
							stroke-width="1.8"
						/>
						<path
							d="m4 7 8 6 8-6"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</div>
		</div>

		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h2 class="text-xl font-bold text-slate-900">Teléfono</h2>
					<a
						class="mt-2 inline-block text-sm font-semibold text-slate-700 transition-colors hover:text-sky-700"
						href="tel:+584224980765"
					>
						+(58) 422-4980765
					</a>
				</div>
				<span
					class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"
					aria-hidden="true"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
						<path
							d="M7 3h3l2 5-2.5 1.5a15 15 0 0 0 5 5L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 5c0-1.1.9-2 2-2Z"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</div>
		</div>

		<div
			class="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-6 text-slate-700"
		>
			<svg
				class="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
				<path
					d="M12 7v5l3 2"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<p>
				<strong class="font-bold text-slate-900">Horario de atención presencial:</strong>
				Lunes a viernes, de 7:00 am a 11:45 am.
			</p>
		</div>
	</div>

	<div
		class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7 lg:p-10"
	>
		<header class="mb-7 border-b border-slate-200 pb-5">
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">Escríbenos</p>
			<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Contáctanos</h2>
			<div class="mt-4 h-1.5 w-16 rounded-full bg-amber-400"></div>
		</header>

		{#if submitted}
			<div
				bind:this={feedbackElement}
				class="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 font-medium text-emerald-800"
				role="status"
				aria-live="polite"
			>
				<svg
					class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="m5 12 4 4L19 6"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
				</svg>
				<p>¡Gracias por escribirnos! Hemos recibido tu mensaje y responderemos a la brevedad.</p>
			</div>
		{/if}

		<form class="space-y-6" onsubmit={handleSubmit}>
			<div class="grid gap-5 sm:grid-cols-2 sm:gap-6">
				<div>
					<label class="mb-2 block text-sm font-semibold text-slate-700" for="nombre">
						Nombre <span class="text-sky-700" aria-hidden="true">*</span>
					</label>
					<input
						class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20 focus:outline-none"
						id="nombre"
						name="nombre"
						type="text"
						autocomplete="name"
						placeholder="Ingresa tu nombre"
						required
					/>
				</div>

				<div>
					<label class="mb-2 block text-sm font-semibold text-slate-700" for="correo">
						Correo <span class="text-sky-700" aria-hidden="true">*</span>
					</label>
					<input
						class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20 focus:outline-none"
						id="correo"
						name="correo"
						type="email"
						autocomplete="email"
						placeholder="ejemplo@correo.com"
						required
					/>
				</div>

				<div>
					<label class="mb-2 block text-sm font-semibold text-slate-700" for="asunto">
						Asunto <span class="text-sky-700" aria-hidden="true">*</span>
					</label>
					<input
						class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20 focus:outline-none"
						id="asunto"
						name="asunto"
						type="text"
						placeholder="Motivo de consulta"
						required
					/>
				</div>

				<div>
					<label class="mb-2 block text-sm font-semibold text-slate-700" for="telefono">
						Teléfono <span class="text-sky-700" aria-hidden="true">*</span>
					</label>
					<input
						class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20 focus:outline-none"
						id="telefono"
						name="telefono"
						type="tel"
						autocomplete="tel"
						placeholder="0412-0000000"
						required
					/>
				</div>
			</div>

			<div>
				<label class="mb-2 block text-sm font-semibold text-slate-700" for="mensaje">
					Mensaje <span class="text-sky-700" aria-hidden="true">*</span>
				</label>
				<textarea
					class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20 focus:outline-none"
					id="mensaje"
					name="mensaje"
					rows="5"
					placeholder="Escribe tu mensaje o consulta detallada aquí..."
					required></textarea>
			</div>

			<p class="text-xs text-slate-500">
				Los campos marcados con <span class="font-semibold text-sky-700">*</span> son obligatorios.
			</p>

			<button
				class="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-700 px-7 py-3 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
				type="submit"
			>
				Enviar mensaje
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M5 12h14m-6-6 6 6-6 6"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</form>
	</div>
</section>
