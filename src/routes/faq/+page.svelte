<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
	title="Preguntas frecuentes | Instituto Dr. Carlos Seguías"
	description="Resuelve tus dudas sobre educación especial, servicios, horario, ubicación e inscripciones en el Instituto Dr. Carlos Seguías, en Maturín, Monagas."
	path="faq/"
/>

<section class="relative isolate overflow-hidden bg-slate-950" aria-labelledby="faq-heading">
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"
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
				Información para las familias
			</p>
			<h1
				id="faq-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Preguntas frecuentes
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Encuentra respuestas sobre nuestra propuesta educativa, los servicios y cómo comunicarte con
				el instituto.
			</p>
		</div>
	</div>
</section>

<section
	class="bg-gradient-to-br from-sky-50 via-white to-amber-50/70 py-16 sm:py-20"
	aria-labelledby="faq-list-heading"
>
	<div class="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12">
		<header class="mb-8">
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Te ayudamos a resolver tus dudas
			</p>
			<h2
				id="faq-list-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Acerca del instituto
			</h2>
			<p class="mt-3 leading-7 text-slate-600">
				Selecciona una pregunta para consultar su respuesta.
			</p>
		</header>

		<div class="space-y-4">
			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
								<path
									d="M12 3v18m-6-3 6 3 6-3M6 6h12M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM5 21h14"
									stroke="currentColor"
									stroke-width="1.7"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span class="pt-1">¿Qué tipo de institución es el Instituto Dr. Carlos Seguías?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						Es un centro privado de educación especial ubicado en Maturín, estado Monagas. Su
						propuesta acompaña el aprendizaje y el desarrollo integral de niños, niñas y jóvenes.
					</p>
				</div>
			</details>

			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
								<path
									d="M12 3a4 4 0 0 0-4 4v.2a3.5 3.5 0 0 0-2 6.3A3.5 3.5 0 0 0 9 19h3V3Zm0 0a4 4 0 0 1 4 4v.2a3.5 3.5 0 0 1 2 6.3A3.5 3.5 0 0 1 15 19h-3M8 9h1m6 0h1m-8 5h2m4 0h2"
									stroke="currentColor"
									stroke-width="1.7"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span class="pt-1">¿A quiénes está dirigida la atención educativa?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						La propuesta está dirigida a niños, niñas y jóvenes, con atención especializada en
						autismo (grados 2 y 3), discapacidad intelectual moderada y síndrome de Down. Para
						consultar sobre un caso particular, puedes comunicarte directamente con el instituto.
					</p>
				</div>
			</details>

			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
								<path
									d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
									stroke="currentColor"
									stroke-width="1.7"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span class="pt-1">¿Qué servicios ofrece el instituto?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						Entre sus servicios principales se encuentran educación física adaptada, terapia
						ocupacional, fisioterapia y clases de música y arte. También ofrece servicios
						complementarios como terapia conductual, terapia de lenguaje, reflexología y escuela de
						arte.
					</p>
				</div>
			</details>

			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
								<path
									d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span class="pt-1">¿Cuál es el horario de atención presencial?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						El horario de atención presencial es de lunes a viernes, de 7:00 am a 11:45 am.
					</p>
				</div>
			</details>

			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700"
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
						<span class="pt-1">¿Dónde está ubicado el instituto?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						Estamos en la Avenida Principal de Fundemos, Local 25, en Maturín, estado Monagas,
						Venezuela. Puedes consultar el mapa en nuestra
						<a
							class="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
							href={resolve('/contacto')}
						>
							página de contacto
						</a>.
					</p>
				</div>
			</details>

			<details
				class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 open:border-sky-200 open:shadow-md sm:p-6"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-start gap-4">
						<span
							class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
								<path
									d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span class="pt-1">¿Cómo puedo solicitar información sobre inscripciones?</span>
					</span>
					<svg
						class="h-5 w-5 shrink-0 text-sky-700 transition-transform duration-200 group-open:rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="m6 9 6 6 6-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="mt-4 border-t border-slate-100 pt-4 pl-[3.25rem]">
					<p class="text-sm leading-7 text-slate-600 sm:text-base">
						Comunícate con el instituto para consultar disponibilidad, requisitos y los pasos a
						seguir. Puedes escribir a
						<a
							class="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
							href="mailto:ceedrcarlosseguias@gmail.com"
						>
							ceedrcarlosseguias@gmail.com
						</a>
						o llamarnos al
						<a
							class="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
							href="tel:+584224980765"
						>
							+(58) 422-4980765
						</a>.
					</p>
				</div>
			</details>
		</div>

		<aside
			class="mt-10 flex flex-col gap-5 rounded-3xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-900/10 sm:flex-row sm:items-center sm:justify-between sm:p-8"
		>
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-amber-300 uppercase">
					¿Tienes otra duda?
				</p>
				<h2 class="mt-2 text-xl font-bold text-white sm:text-2xl">Estamos para orientarte</h2>
				<p class="mt-2 max-w-xl text-sm leading-6 text-slate-300">
					Comunícate con nuestro equipo y con gusto te brindaremos más información.
				</p>
			</div>
			<a
				class="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
				href={resolve('/contacto')}
			>
				Ir a contacto
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M5 12h14m-6-6 6 6-6 6"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</aside>
	</div>
</section>
