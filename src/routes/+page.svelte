<script lang="ts">
	import { resolve } from '$app/paths';
	import heroImage from '#lib/assets/hero1.png';
	import heroImage2 from '#lib/assets/hero2.png';
	import Seo from '#lib/components/Seo.svelte';

	let { data } = $props();

	const slides = [
		{ src: heroImage, alt: 'Fachada del Centro de Educación Especial Dr. Carlos Seguías' },
		{
			src: heroImage2,
			alt: 'Estudiantes recibiendo certificados del Instituto Dr. Carlos Seguías'
		},
		{ src: heroImage, alt: 'Siguiente imagen del instituto' },
		{ src: heroImage2, alt: 'Siguiente imagen del instituto' },
		{ src: heroImage, alt: 'Siguiente imagen del instituto' }
	];

	let activeSlide = $state(0);

	function showSlide(index: number) {
		activeSlide = (index + slides.length) % slides.length;
	}
</script>

<Seo
	title="Educación especial en Maturín | Instituto Dr. Carlos Seguías"
	description="Conoce el Instituto Dr. Carlos Seguías en Maturín, Monagas. Educación especial adaptada, atención cercana y acompañamiento para cada estudiante."
	path=""
	image={heroImage}
/>

<section
	class="relative isolate min-h-[36rem] overflow-hidden bg-slate-950 sm:min-h-[40rem] lg:min-h-[42rem]"
	aria-label="Galería del Instituto"
	aria-roledescription="carrusel"
>
	{#each slides as slide, index (index)}
		<img
			class="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-700 ease-in-out"
			class:opacity-100={activeSlide === index}
			src={slide.src}
			alt={slide.alt}
		/>
	{/each}

	<div
		class="absolute inset-0 -z-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/10"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-x-0 bottom-0 -z-0 h-40 bg-gradient-to-t from-slate-950/50 to-transparent"
		aria-hidden="true"
	></div>

	<div
		class="relative z-10 mx-auto flex min-h-[36rem] w-full max-w-7xl items-center px-6 py-20 sm:min-h-[40rem] sm:px-10 lg:min-h-[42rem] lg:px-12"
	>
		<div class="max-w-3xl text-white">
			<p
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm backdrop-blur-md"
			>
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				Educación especial · Maturín, Monagas
			</p>
			<h1
				class="max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-7xl"
			>
				Cada aprendizaje abre un mundo de posibilidades.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				En el Instituto Dr. Carlos Seguías acompañamos a cada estudiante con una educación cercana,
				respetuosa y pensada para su desarrollo.
			</p>
			<div class="mt-9 flex flex-col gap-3 sm:flex-row">
				<a
					class="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300 hover:text-slate-950 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
					href={resolve('/contacto')}
				>
					Conoce nuestra escuela
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
				<a
					class="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
					href={resolve('/nosotros')}
				>
					Sobre el instituto
				</a>
			</div>
		</div>
	</div>

	<button
		class="absolute top-1/2 left-4 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-slate-950/35 text-white backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-white hover:bg-slate-950/70 sm:left-8 sm:h-12 sm:w-12"
		type="button"
		aria-label="Mostrar imagen anterior"
		onclick={() => showSlide(activeSlide - 1)}
	>
		<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="m15 18-6-6 6-6"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/>
		</svg>
	</button>

	<button
		class="absolute top-1/2 right-4 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-slate-950/35 text-white backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-white hover:bg-slate-950/70 sm:right-8 sm:h-12 sm:w-12"
		type="button"
		aria-label="Mostrar imagen siguiente"
		onclick={() => showSlide(activeSlide + 1)}
	>
		<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="m9 18 6-6-6-6"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/>
		</svg>
	</button>

	<div
		class="absolute right-0 bottom-6 left-0 z-20 flex justify-center gap-3"
		aria-label="Seleccionar imagen"
	>
		{#each slides, index (index)}
			<button
				class="h-3 w-3 rounded-full border border-white/90 bg-slate-950/40 transition duration-200 hover:scale-125"
				class:bg-white={activeSlide === index}
				class:scale-125={activeSlide === index}
				type="button"
				aria-label={`Mostrar imagen ${index + 1}`}
				aria-pressed={activeSlide === index}
				onclick={() => showSlide(index)}
			></button>
		{/each}
	</div>
</section>

<section
	class="relative z-10 mx-auto -mt-1 grid max-w-7xl gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10 lg:-mt-10 lg:px-12"
>
	<article
		class="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
	>
		<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-sky-700">
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
		<h2 class="text-lg font-bold text-slate-900">Aprendizaje con propósito</h2>
		<p class="mt-2 text-sm leading-6 text-slate-600">
			Un entorno educativo que valora las fortalezas y el potencial de cada estudiante.
		</p>
	</article>
	<article
		class="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
	>
		<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<h2 class="text-lg font-bold text-slate-900">Acompañamiento cercano</h2>
		<p class="mt-2 text-sm leading-6 text-slate-600">
			Construimos junto a las familias una comunidad de apoyo, respeto y confianza.
		</p>
	</article>
	<article
		class="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
	>
		<div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M12 3v18m0-14c-3.5 0-5.5-1.7-5.5-4m5.5 7c3.5 0 5.5-1.7 5.5-4M12 15c-3.5 0-5.5-1.7-5.5-4m5.5 7c3.5 0 5.5-1.7 5.5-4"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<h2 class="text-lg font-bold text-slate-900">Desarrollo a su ritmo</h2>
		<p class="mt-2 text-sm leading-6 text-slate-600">
			Celebramos los avances cotidianos y acompañamos cada etapa de crecimiento.
		</p>
	</article>
</section>

<section
	class="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
	aria-labelledby="latest-posts-heading"
>
	<header class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<p class="mb-2 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Ideas y recursos
			</p>
			<h2
				id="latest-posts-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Últimas entradas de blog
			</h2>
		</div>
		<a
			class="inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:gap-3 hover:text-sky-900"
			href={resolve('/blog')}
		>
			Ver todas las entradas
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
	</header>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post (post.slug)}
			<article
				class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				{#if post.image}
					<img
						class="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
						src={post.image}
						alt={post.title}
					/>
				{/if}
				<div class="p-6">
					<p class="mb-3 text-sm text-slate-500">{post.date} · {post.author}</p>
					<h3
						class="text-xl leading-snug font-bold text-slate-900 transition group-hover:text-sky-700"
					>
						<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
					</h3>
					{#if post.description}
						<p class="mt-3 leading-7 text-slate-600">{post.description}</p>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<section
	class="bg-gradient-to-br from-sky-50 via-slate-50 to-amber-50/60 py-16 sm:py-20"
	aria-labelledby="testimonials-heading"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
		<header class="mx-auto mb-10 max-w-2xl text-center">
			<p class="mb-2 text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">
				Nuestra comunidad
			</p>
			<h2
				id="testimonials-heading"
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Testimonios de padres
			</h2>
			<p class="mt-4 text-sm leading-6 text-slate-500">
				Textos ilustrativos de ejemplo, pendientes de reemplazar por testimonios reales.
			</p>
		</header>

		<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			<figure
				class="relative rounded-2xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
			>
				<div class="absolute top-5 right-5 h-9 w-9 text-sky-100" aria-hidden="true">
					<svg class="h-full w-full" viewBox="0 0 48 48" focusable="false">
						<path
							d="M21 8C10 10 5 17 5 28v12h16V24h-8c.5-5 3.2-8 8-10V8Zm22 0C32 10 27 17 27 28v12h16V24h-8c.5-5 3.2-8 8-10V8Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<div class="mb-5 flex items-center gap-3 pr-10">
					<div
						class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-200 text-sky-700"
						role="img"
						aria-label="Avatar ilustrativo, sin fotografía"
					>
						<svg class="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5c0-2.5-3-4.5-7-4.5Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div class="grid gap-1">
						<strong class="text-sm font-bold text-slate-900"
							>Madre de estudiante de primer grado</strong
						>
						<span class="text-xs text-slate-500">Texto ilustrativo de ejemplo</span>
					</div>
				</div>
				<blockquote class="text-base leading-7 text-slate-600">
					<p>
						“Encontramos un equipo atento que acompaña a nuestra familia y celebra cada avance de
						nuestro hijo.”
					</p>
				</blockquote>
			</figure>

			<figure
				class="relative rounded-2xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
			>
				<div class="absolute top-5 right-5 h-9 w-9 text-sky-100" aria-hidden="true">
					<svg class="h-full w-full" viewBox="0 0 48 48" focusable="false">
						<path
							d="M21 8C10 10 5 17 5 28v12h16V24h-8c.5-5 3.2-8 8-10V8Zm22 0C32 10 27 17 27 28v12h16V24h-8c.5-5 3.2-8 8-10V8Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<div class="mb-5 flex items-center gap-3 pr-10">
					<div
						class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-200 text-sky-700"
						role="img"
						aria-label="Avatar ilustrativo, sin fotografía"
					>
						<svg class="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5c0-2.5-3-4.5-7-4.5Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div class="grid gap-1">
						<strong class="text-sm font-bold text-slate-900"
							>Representante de Educación Inicial</strong
						>
						<span class="text-xs text-slate-500">Texto ilustrativo de ejemplo</span>
					</div>
				</div>
				<blockquote class="text-base leading-7 text-slate-600">
					<p>
						“Nos sentimos escuchados y orientados. La comunicación con el equipo nos da confianza
						para acompañar su aprendizaje.”
					</p>
				</blockquote>
			</figure>

			<figure
				class="relative rounded-2xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
			>
				<div class="absolute top-5 right-5 h-9 w-9 text-sky-100" aria-hidden="true">
					<svg class="h-full w-full" viewBox="0 0 48 48" focusable="false">
						<path
							d="M21 8C10 10 5 17 5 28v12h16V24h-8c.5-5 3.2-8 8-10V8Zm22 0C32 10 27 17 27 28v12h16V24h-8c.5-5 3.2-8 8-10V8Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<div class="mb-5 flex items-center gap-3 pr-10">
					<div
						class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-blue-200 text-sky-700"
						role="img"
						aria-label="Avatar ilustrativo, sin fotografía"
					>
						<svg class="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5c0-2.5-3-4.5-7-4.5Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div class="grid gap-1">
						<strong class="text-sm font-bold text-slate-900"
							>Madre de estudiante de bachillerato</strong
						>
						<span class="text-xs text-slate-500">Texto ilustrativo de ejemplo</span>
					</div>
				</div>
				<blockquote class="text-base leading-7 text-slate-600">
					<p>
						“Cada día vemos cuánto disfruta aprender en un espacio donde respetan su ritmo y
						reconocen sus fortalezas.”
					</p>
				</blockquote>
			</figure>
		</div>
	</div>
</section>
