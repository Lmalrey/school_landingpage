<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
	title="Servicios educativos y terapéuticos | Instituto Dr. Carlos Seguías"
	description="Conoce la educación especial inclusiva, terapias y servicios complementarios del Instituto Dr. Carlos Seguías en Maturín, Monagas."
	path="servicios/"
/>

<section class="relative isolate overflow-hidden bg-slate-950" aria-labelledby="services-heading">
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"
		aria-hidden="true"
	></div>
	<div
		class="absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24"
	>
		<div class="max-w-3xl">
			<p
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md"
			>
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				Propuesta integral y especializada
			</p>
			<h1
				id="services-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Servicios educativos y terapéuticos
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Acompañamos el aprendizaje, la autonomía y el bienestar de cada estudiante.
			</p>
		</div>
		<div
			class="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md"
		>
			<svg
				class="h-6 w-6 shrink-0 text-amber-300"
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span>Horario: 7:00 am – 11:45 am</span>
		</div>
	</div>
</section>

<section
	class="bg-gradient-to-br from-sky-50 via-white to-amber-50/70 py-16 sm:py-20"
	aria-labelledby="education-heading"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
		<div class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
			<header class="max-w-4xl">
				<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
					Área pedagógica
				</p>
				<h2
					id="education-heading"
					class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
				>
					Educación Especial Inclusiva
				</h2>
				<p class="mt-5 text-lg leading-8 text-slate-600">
					La educación está dirigida a niños, niñas y jóvenes con condiciones especiales que afectan
					su capacidad para adaptarse al entorno que los rodea, lo cual incluye:
				</p>
			</header>

			<div class="mt-8 grid gap-4 sm:grid-cols-3">
				<div class="flex items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
					<span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-700 text-white">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M12 3a4 4 0 0 0-4 4v.2a3.5 3.5 0 0 0-2 6.3A3.5 3.5 0 0 0 9 19h3V3Zm0 0a4 4 0 0 1 4 4v.2a3.5 3.5 0 0 1 2 6.3A3.5 3.5 0 0 1 15 19h-3M8 9h1m6 0h1m-8 5h2m4 0h2"
								stroke="currentColor"
								stroke-width="1.7"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<span class="font-semibold text-slate-800">Discapacidad intelectual moderada</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
					<span
						class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400 text-slate-950"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M9 3H6a3 3 0 0 0-3 3v3h3a2 2 0 1 1 0 4H3v2a3 3 0 0 0 3 3h3v-3a2 2 0 1 1 4 0v3h2a3 3 0 0 0 3-3v-3h-3a2 2 0 1 1 0-4h3V6a3 3 0 0 0-3-3h-3v3a2 2 0 1 1-4 0V3Z"
								stroke="currentColor"
								stroke-width="1.7"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<span class="font-semibold text-slate-800">Autismo (Grado 2 y 3)</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
					<span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-700 text-white">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<span class="font-semibold text-slate-800">Síndrome de Down</span>
				</div>
			</div>

			<div
				class="mt-8 flex flex-col gap-5 rounded-2xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-900/10 sm:flex-row sm:items-center sm:justify-between sm:p-7"
			>
				<div class="flex items-start gap-4">
					<div
						class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-500/20 text-amber-300"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-3h4v3"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-bold text-white">Formación e inserción</h3>
						<p class="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
							El Instituto Dr. Carlos Seguías ofrece educación especial adaptada y
							<strong class="font-semibold text-white">talleres de formación laboral</strong>
							encaminados a potenciar la autonomía del estudiante.
						</p>
					</div>
				</div>
				<span
					class="w-fit shrink-0 rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-amber-200 uppercase"
				>
					Programa activo
				</span>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
	aria-labelledby="main-services-heading"
>
	<header class="mb-8 border-b border-slate-200 pb-5 sm:flex sm:items-end sm:justify-between">
		<div>
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Acompañamiento diario
			</p>
			<h2
				id="main-services-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Servicios principales
			</h2>
			<p class="mt-3 leading-7 text-slate-600">
				Atención multidisciplinaria integrada en nuestro plan diario de estudio.
			</p>
		</div>
		<span class="mt-4 text-sm font-bold text-sky-700 sm:mt-0">4 áreas de desarrollo</span>
	</header>

	<div class="grid gap-6 sm:grid-cols-2">
		<article
			class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
		>
			<div
				class="flex min-h-36 items-center justify-between bg-gradient-to-br from-sky-100 to-sky-50 p-6"
			>
				<span
					class="grid h-16 w-16 place-items-center rounded-2xl bg-sky-700 text-white shadow-lg transition-transform group-hover:scale-105"
				>
					<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="m13 5-2 5 4 1-6 8 1-6-3-1 6-7Zm-5.5 0h.01M18 7h.01M19 15h.01M5 15h.01"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<span class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700">
					Profesor especializado
				</span>
			</div>
			<div class="flex flex-1 flex-col justify-between gap-5 p-6">
				<div>
					<h3 class="text-xl font-bold text-slate-900">Educación Física Adaptada</h3>
					<p class="mt-2 text-sm leading-6 text-slate-600">
						Orientada al fortalecimiento psicomotor, equilibrio, coordinación corporal y el fomento
						de la integración social mediante actividades recreativas guiadas.
					</p>
				</div>
				<p class="border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
					<span class="font-semibold text-sky-700">Dirigido por:</span> Profesor Avilio Díaz
				</p>
			</div>
		</article>

		<article
			class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
		>
			<div
				class="flex min-h-36 items-center justify-between bg-gradient-to-br from-amber-100 to-amber-50 p-6"
			>
				<span
					class="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg transition-transform group-hover:scale-105"
				>
					<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M7 11V5a2 2 0 0 1 4 0v5-2a2 2 0 0 1 4 0v2-1a2 2 0 0 1 4 0v5c0 4-2.5 7-6.5 7H11c-2 0-3.5-1-4.5-2.5L4 14a2 2 0 0 1 3-3l2 2"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<span class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700">
					Evaluación continua
				</span>
			</div>
			<div class="flex flex-1 flex-col justify-between gap-5 p-6">
				<div>
					<h3 class="text-xl font-bold text-slate-900">Terapia Ocupacional</h3>
					<p class="mt-2 text-sm leading-6 text-slate-600">
						Facilitando la independencia funcional en la vida cotidiana del estudiante, potenciando
						destrezas finas, integración sensorial y autonomía personal.
					</p>
				</div>
				<p class="border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
					<span class="font-semibold text-sky-700">A cargo de:</span> Lcda. María Alejandra Rodríguez
				</p>
			</div>
		</article>

		<article
			class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
		>
			<div
				class="flex min-h-36 items-center justify-between bg-gradient-to-br from-sky-100 to-sky-50 p-6"
			>
				<span
					class="grid h-16 w-16 place-items-center rounded-2xl bg-sky-700 text-white shadow-lg transition-transform group-hover:scale-105"
				>
					<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M12 3v18m-6-3 6 3 6-3M6 6h12M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM5 21h14"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<span class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700">
					Atención físico-motora
				</span>
			</div>
			<div class="flex flex-1 flex-col justify-between gap-5 p-6">
				<div>
					<h3 class="text-xl font-bold text-slate-900">Fisioterapia</h3>
					<p class="mt-2 text-sm leading-6 text-slate-600">
						Programas terapéuticos individualizados para la rehabilitación física, estimulación del
						tono muscular y optimización de patrones de movimiento.
					</p>
				</div>
				<p class="border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
					<span class="font-semibold text-sky-700">Fisioterapeuta:</span> Lcda. María de los Ángeles Rodríguez
				</p>
			</div>
		</article>

		<article
			class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
		>
			<div
				class="flex min-h-36 items-center justify-between bg-gradient-to-br from-amber-100 to-amber-50 p-6"
			>
				<span
					class="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg transition-transform group-hover:scale-105"
				>
					<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M9 18V5l12-2v13M9 18a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3Zm12-2a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3Z"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<span class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700">
					Expresión cultural
				</span>
			</div>
			<div class="flex flex-1 flex-col justify-between gap-5 p-6">
				<div>
					<h3 class="text-xl font-bold text-slate-900">Clases de Música</h3>
					<p class="mt-2 text-sm leading-6 text-slate-600">
						Estimulación auditiva, ritmo y expresión creativa que favorece el canal socio-emocional
						y fortalece las habilidades del lenguaje no verbal.
					</p>
				</div>
				<p class="border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
					<span class="font-semibold text-sky-700">A cargo de:</span> Instructor Eduardo Cedeño
				</p>
			</div>
		</article>
	</div>
</section>

<section
	class="bg-gradient-to-br from-sky-50 via-white to-amber-50/70 py-16 sm:py-20"
	aria-labelledby="additional-services-heading"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
		<header class="mb-8">
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Bienestar integral
			</p>
			<h2
				id="additional-services-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Servicios adicionales y complementarios
			</h2>
			<p class="mt-3 leading-7 text-slate-600">
				Terapias enfocadas en el bienestar integral y avance continuo.
			</p>
		</header>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<article
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
			>
				<span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-700">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<h3 class="text-lg font-bold text-slate-900">Terapia Conductual</h3>
				<p class="mt-2 text-sm leading-6 text-slate-600">
					Intervención enfocada en desarrollar habilidades de autorregulación y promover conductas
					adaptativas favorables.
				</p>
			</article>

			<article
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
			>
				<span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-700">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M12 18V5m0 0C9 5 7 3.5 7 2m5 3c3 0 5-1.5 5-3M5 11c0 3.9 3.1 7 7 7s7-3.1 7-7M8 21h8m-4-3v3"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<h3 class="text-lg font-bold text-slate-900">Terapia de Lenguaje</h3>
				<p class="mt-2 text-sm leading-6 text-slate-600">
					Desarrollo del área comunicativa, expresión verbal, vocabulario y métodos alternativos de
					comunicación.
				</p>
			</article>

			<article
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
			>
				<span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-700">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M12 3c-3.5 4-6 7.3-6 11a6 6 0 0 0 12 0c0-3.7-2.5-7-6-11Zm-2 12a2 2 0 0 0 2 2"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<h3 class="text-lg font-bold text-slate-900">Reflexología</h3>
				<p class="mt-2 text-sm leading-6 text-slate-600">
					Técnicas de relajación y estimulación táctil para la reducción del estrés sensorial y la
					ansiedad.
				</p>
			</article>

			<article
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
			>
				<span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-700">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h1.4a3.5 3.5 0 0 0 3.5-3.5A8.2 8.2 0 0 0 12 3Z"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.5 10h.01M10 7.5h.01M14 7.5h.01M16.5 10h.01"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				<h3 class="text-lg font-bold text-slate-900">Escuela de Arte</h3>
				<p class="mt-2 text-sm leading-6 text-slate-600">
					Espacio creativo para el descubrimiento de habilidades plásticas, dibujo, pintura y
					motricidad fina libre.
				</p>
			</article>
		</div>
	</div>
</section>
