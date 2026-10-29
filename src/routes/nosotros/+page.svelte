<script lang="ts">
	import { resolve } from '$app/paths';
	import studentsImage from '#lib/assets/hero2.png';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
	title="Nosotros | Instituto Dr. Carlos Seguías"
	description="Conoce la historia y el compromiso del Instituto Dr. Carlos Seguías, centro de educación especial para niños, niñas y jóvenes en Maturín, Monagas."
	path="nosotros/"
	image={studentsImage}
/>

<section class="relative isolate overflow-hidden bg-slate-950" aria-labelledby="about-heading">
	<div
		class="absolute inset-0 -z-10 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"
		aria-hidden="true"
	></div>
	<div
		class="absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="mx-auto grid min-h-100 max-w-7xl items-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-120 lg:px-12"
	>
		<div class="max-w-3xl">
			<p
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md"
			>
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				Conoce nuestra historia
			</p>
			<h1
				id="about-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Educación que reconoce todo lo que cada persona puede lograr.
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Somos una comunidad comprometida con el aprendizaje, la dignidad y el desarrollo integral de
				niños, niñas y jóvenes neurodivergentes.
			</p>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12"
>
	<div>
		<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">Sobre nosotros</p>
		<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
			Un espacio para aprender, crecer y pertenecer
		</h2>
		<p class="mt-6 text-lg leading-8 text-slate-600">
			El Instituto “Dr. Carlos Seguías” es el primer y único instituto privado en el oriente del
			país adscrito al Ministerio del Poder Popular para la Educación del Estado Monagas
			especializado en la atención de estudiantes con Autismo Nivel II y Discapacidad Intelectual
			Moderada.
		</p>
		<p class="mt-4 leading-7 text-slate-600">
			Creemos en una educación que mira a cada estudiante de manera integral y crea oportunidades
			para desarrollar sus capacidades, intereses y autonomía.
		</p>
	</div>

	<div class="relative mx-auto w-full max-w-lg">
		<div
			class="absolute -top-4 -left-4 h-24 w-24 rounded-tl-4xl border-t-4 border-l-4 border-amber-400 sm:-top-6 sm:-left-6"
		></div>
		<img
			class="relative aspect-4/3 w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/15"
			src={studentsImage}
			alt="Estudiantes del instituto reunidos con sus certificados"
			loading="lazy"
		/>
		<div
			class="absolute right-4 -bottom-5 left-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8 sm:left-8"
		>
			<p class="text-sm font-bold tracking-wide text-sky-700 uppercase">Nuestra razón de ser</p>
			<p class="mt-1 text-lg font-semibold text-slate-900">
				Acompañar cada avance con respeto, compromiso y esperanza.
			</p>
		</div>
	</div>
</section>

<section
	class="bg-linear-to-br from-sky-50 via-white to-amber-50/70 py-16 sm:py-20"
	aria-labelledby="inspiration-heading"
>
	<div
		class="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16 lg:px-12"
	>
		<div>
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Nuestra inspiración
			</p>
			<h2
				id="inspiration-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Un legado dedicado a la infancia
			</h2>
			<div class="mt-6 h-1.5 w-16 rounded-full bg-amber-400"></div>
		</div>
		<div class="space-y-5 text-lg leading-8 text-slate-600">
			<p>
				Fundado por la Dra. Neuropediatra Carolina Reyes y el Abogado Luis Alcalá, el instituto nace
				como un homenaje al Dr. Carlos Seguías, primer neuropediatra del oriente del país, recordado
				por su incansable labor y dedicación a la infancia y a los niños con necesidades educativas
				especiales.
			</p>
			<p>
				Inspirados en su legado, promovemos una educación inclusiva, personalizada y orientada a
				potenciar las capacidades individuales de cada niño y joven neurodivergente, facilitando su
				independencia y desarrollo integral.
			</p>
			<div class="rounded-2xl bg-white/80 p-5 text-base font-medium text-slate-700 sm:p-6">
				“Una educación centrada en las potencialidades, los intereses y las necesidades de cada
				estudiante.”
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
	aria-labelledby="facts-heading"
>
	<header class="mx-auto mb-10 max-w-2xl text-center">
		<p class="mb-3 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">Nuestra comunidad</p>
		<h2 id="facts-heading" class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
			Datos clave del instituto
		</h2>
		<p class="mt-4 leading-7 text-slate-600">
			Un proyecto educativo que crece con compromiso y vocación de servicio.
		</p>
	</header>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<article
			class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z"
						stroke="currentColor"
						stroke-width="1.7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<p class="text-sm font-semibold text-slate-500">Inauguración</p>
			<p class="mt-1 text-lg font-bold text-slate-900">8 de noviembre de 2025</p>
			<p class="mt-2 text-sm leading-6 text-slate-600">
				Actividades iniciadas el 15 de septiembre de 2025.
			</p>
		</article>

		<article
			class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-700">
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20m6-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.5a4 4 0 0 1 0 7.7m1 3.3h1.5a4.5 4.5 0 0 1 4.5 4.5V20"
						stroke="currentColor"
						stroke-width="1.7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<p class="text-sm font-semibold text-slate-500">Matrícula inicial</p>
			<p class="mt-1 text-lg font-bold text-slate-900">38 estudiantes</p>
			<p class="mt-2 text-sm leading-6 text-slate-600">
				33 varones y 5 hembras, entre 3 y 14 años.
			</p>
		</article>

		<article
			class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						stroke="currentColor"
						stroke-width="1.7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<p class="text-sm font-semibold text-slate-500">Horario de atención</p>
			<p class="mt-1 text-lg font-bold text-slate-900">7:00 a. m. – 11:45 a. m.</p>
			<p class="mt-2 text-sm leading-6 text-slate-600">
				Una jornada dedicada al aprendizaje y desarrollo.
			</p>
		</article>

		<article
			class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-rose-50 text-rose-600">
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0ZM12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
						stroke="currentColor"
						stroke-width="1.7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<p class="text-sm font-semibold text-slate-500">Ubicación</p>
			<p class="mt-1 text-lg font-bold text-slate-900">Avenida principal de Fundemos</p>
			<p class="mt-2 text-sm leading-6 text-slate-600">N.º 25, Maturín, Estado Monagas.</p>
		</article>
	</div>
</section>

<section class="bg-slate-950 py-16 text-white sm:py-20" aria-labelledby="team-heading">
	<div
		class="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12"
	>
		<div>
			<p class="mb-3 text-sm font-bold tracking-[0.16em] text-amber-300 uppercase">
				Nuestro equipo
			</p>
			<h2 id="team-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Compromiso que se construye en equipo
			</h2>
			<p class="mt-6 leading-8 text-slate-300">
				Bajo la Dirección de la Profa. Rosanna González, el instituto cuenta con un equipo
				multidisciplinario altamente comprometido con la excelencia y el amor hacia nuestra
				población especial.
			</p>
		</div>
		<div
			class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-8"
		>
			<p class="mb-5 text-sm font-semibold tracking-wide text-slate-300 uppercase">
				Áreas que nos acompañan
			</p>
			<ul class="grid gap-3 sm:grid-cols-2">
				{#each ['Coordinación pedagógica', 'Cultura', 'Área administrativa', 'Docentes especialistas en educación especial', 'Educación física', 'Fisioterapia', 'Terapia ocupacional', 'Personal ambientalista y de apoyo'] as area (area)}
					<li
						class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100"
					>
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-amber-300"
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
						</svg>
						{area}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section
	class="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:px-12"
	aria-label="Misión y visión"
>
	<article
		class="rounded-2xl border border-sky-100 bg-linear-to-br from-sky-50 to-white p-8 shadow-lg shadow-sky-900/10 sm:p-10"
	>
		<div
			class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-sky-700 text-white shadow-lg shadow-sky-900/15"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Zm-6 7.1V15c0 1.8 2.7 3.5 6 3.5s6-1.7 6-3.5v-4.9M20.5 8v7"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<p class="mb-2 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">Nuestro propósito</p>
		<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Misión</h2>
		<p class="mt-5 leading-7 text-slate-700">
			Brindar atención educativa integral especializada a niños, niñas y jóvenes que presentan
			discapacidad intelectual moderada con autismo, síndrome de Down, disfunción motora o cualquier
			patología de base, desarrollando al máximo las diferentes áreas y destrezas sociales, de
			comunicación y lenguaje apoyándonos en sus potencialidades, intereses y necesidades para
			facilitar su adaptación a la vida productiva del país.
		</p>
	</article>

	<article
		class="rounded-2xl border border-amber-100 bg-linear-to-br from-amber-50 to-white p-8 shadow-lg shadow-amber-900/10 sm:p-10"
	>
		<div
			class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-900/10"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<p class="mb-2 text-sm font-bold tracking-[0.16em] text-amber-700 uppercase">
			Hacia dónde vamos
		</p>
		<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Visión</h2>
		<p class="mt-5 leading-7 text-slate-700">
			Garantizar el ingreso, permanencia y prosecución escolar a los niños con discapacidad
			intelectual moderada, autismo, síndrome de Down y discapacidad motora, centrados en los
			principios del Sistema Educativo Bolivariano Venezolano y una filosofía humanista-social.
			Hacemos énfasis en sus potencialidades más que en sus limitaciones y promovemos la
			articulación y la acción coordinada para cumplir la política de atención integral a esta
			población.
		</p>
	</article>
</section>

<section class="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-12">
	<div
		class="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-linear-to-r from-sky-800 to-sky-700 px-7 py-9 text-white shadow-xl shadow-sky-900/15 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10"
	>
		<div class="max-w-2xl">
			<p class="mb-2 text-sm font-bold tracking-[0.16em] text-amber-300 uppercase">
				Estamos para acompañarte
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
				Conversemos sobre el camino de aprendizaje de tu familia.
			</h2>
		</div>
		<a
			class="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
			href={resolve('/contacto')}
		>
			Contáctanos
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
	</div>
</section>
