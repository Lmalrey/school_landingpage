<script lang="ts">
	import { resolve } from '$app/paths';
	import heroImage from '#lib/assets/hero1.png';
	import heroImage2 from '#lib/assets/hero2.png';

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

<svelte:head>
	<title>Inicio | Instituto Dr. Carlos Seguías</title>
	<meta
		name="description"
		content="Conoce el Instituto Dr. Carlos Seguías, un centro de educación especial en Maturín y Monagas."
	/>
</svelte:head>

<section class="hero-carousel" aria-label="Galería del Instituto" aria-roledescription="carrusel">
	{#each slides as slide, index (index)}
		<img class="hero-image" class:active={activeSlide === index} src={slide.src} alt={slide.alt} />
	{/each}

	<button
		class="carousel-arrow previous"
		type="button"
		aria-label="Mostrar imagen anterior"
		onclick={() => showSlide(activeSlide - 1)}
	>
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="m15 18-6-6 6-6" />
		</svg>
	</button>

	<button
		class="carousel-arrow next"
		type="button"
		aria-label="Mostrar imagen siguiente"
		onclick={() => showSlide(activeSlide + 1)}
	>
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="m9 18 6-6-6-6" />
		</svg>
	</button>

	<div class="carousel-indicators" aria-label="Seleccionar imagen">
		{#each slides, index (index)}
			<button
				class="carousel-indicator"
				class:active={activeSlide === index}
				type="button"
				aria-label={`Mostrar imagen ${index + 1}`}
				aria-pressed={activeSlide === index}
				onclick={() => showSlide(index)}
			></button>
		{/each}
	</div>
</section>

<section class="latest-posts container" aria-labelledby="latest-posts-heading">
	<header class="latest-posts-header">
		<h2 id="latest-posts-heading">Últimas entradas de blog</h2>
		<a class="all-posts-link" href={resolve('/blog')}>Ver todas las entradas</a>
	</header>

	<div class="posts-grid">
		{#each data.posts as post (post.slug)}
			<article class="post-card">
				{#if post.image}
					<img class="post-image" src={post.image} alt={post.title} />
				{/if}
				<div class="post-content">
					<p class="post-meta">{post.date} · {post.author}</p>
					<h3>
						<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
					</h3>
					{#if post.description}
						<p class="post-description">{post.description}</p>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="testimonials" aria-labelledby="testimonials-heading">
	<div class="container">
		<header class="testimonials-header">
			<h2 id="testimonials-heading">Testimonios de padres</h2>
			<p class="testimonials-note">
				Textos ilustrativos de ejemplo, pendientes de reemplazar por testimonios reales.
			</p>
		</header>

		<div class="testimonials-grid">
			<figure class="testimonial-card">
				<blockquote>
					<p>
						“Encontramos un equipo atento que acompaña a nuestra familia y celebra cada avance de
						nuestro hijo.”
					</p>
				</blockquote>
				<figcaption>Madre de estudiante <span>· Texto de ejemplo</span></figcaption>
			</figure>

			<figure class="testimonial-card">
				<blockquote>
					<p>
						“Nos sentimos escuchados y orientados. La comunicación con el equipo nos da confianza
						para acompañar su aprendizaje.”
					</p>
				</blockquote>
				<figcaption>Padre de estudiante <span>· Texto de ejemplo</span></figcaption>
			</figure>

			<figure class="testimonial-card">
				<blockquote>
					<p>
						“Cada día vemos cuánto disfruta aprender en un espacio donde respetan su ritmo y
						reconocen sus fortalezas.”
					</p>
				</blockquote>
				<figcaption>Familiar de estudiante <span>· Texto de ejemplo</span></figcaption>
			</figure>
		</div>
	</div>
</section>

<style>
	.hero-carousel {
		position: relative;
		width: 100%;
		height: clamp(24rem, 55vw, 42rem);
		overflow: hidden;
		background: var(--color-navy);
	}

	.hero-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		object-fit: fill;
		object-position: center;
		transition: opacity 220ms ease;
		pointer-events: none;
	}

	.hero-image.active {
		opacity: 1;
	}

	.carousel-arrow {
		position: absolute;
		top: 50%;
		display: grid;
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		transform: translateY(-50%);
		place-items: center;
		border: 1px solid rgb(255 255 255 / 55%);
		border-radius: 50%;
		background: rgb(22 50 79 / 35%);
		color: #fff;
		cursor: pointer;
		transition:
			background-color 150ms ease,
			border-color 150ms ease;
	}

	.carousel-arrow:hover {
		border-color: #fff;
		background: rgb(22 50 79 / 75%);
	}

	.carousel-arrow svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: none;
		stroke: currentColor;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2;
	}

	.previous {
		left: clamp(1rem, 3vw, 2.5rem);
	}

	.next {
		right: clamp(1rem, 3vw, 2.5rem);
	}

	.carousel-indicators {
		position: absolute;
		right: 1rem;
		bottom: 1.25rem;
		left: 1rem;
		display: flex;
		justify-content: center;
		gap: 0.75rem;
	}

	.carousel-indicator {
		width: 0.75rem;
		height: 0.75rem;
		padding: 0;
		border: 1px solid #fff;
		border-radius: 50%;
		background: rgb(22 50 79 / 35%);
		cursor: pointer;
		transition:
			background-color 150ms ease,
			transform 150ms ease;
	}

	.carousel-indicator:hover {
		transform: scale(1.15);
	}

	.carousel-indicator.active {
		background: #fff;
	}

	.latest-posts {
		padding-block: clamp(2.5rem, 6vw, 5rem);
	}

	.latest-posts-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.latest-posts-header h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2.25rem);
	}

	.all-posts-link {
		flex-shrink: 0;
		font-weight: 600;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.post-card {
		overflow: hidden;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-card);
		background: var(--color-surface);
	}

	.post-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.post-content {
		padding: 1.25rem;
	}

	.post-meta {
		margin: 0 0 0.6rem;
		color: var(--color-muted);
		font-size: 0.875rem;
	}

	.post-content h3 {
		margin: 0;
		font-size: 1.2rem;
	}

	.post-content h3 a {
		color: inherit;
		text-decoration: none;
	}

	.post-content h3 a:hover {
		color: var(--color-primary-hover);
	}

	.post-description {
		margin: 0.75rem 0 0;
	}

	.testimonials {
		padding-block: clamp(2.5rem, 6vw, 5rem);
		background: #f5f8fb;
	}

	.testimonials-header {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.testimonials-header h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2.25rem);
	}

	.testimonials-note {
		margin: 0.75rem 0 0;
		color: var(--color-muted);
		font-size: 0.9rem;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.testimonial-card {
		margin: 0;
		padding: 1.5rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-card);
		background: var(--color-surface);
	}

	.testimonial-card blockquote {
		margin: 0 0 1.25rem;
		font-size: 1.05rem;
	}

	.testimonial-card blockquote p {
		margin: 0;
	}

	.testimonial-card figcaption {
		color: var(--color-heading);
		font-weight: 600;
	}

	.testimonial-card figcaption span {
		color: var(--color-muted);
		font-size: 0.875rem;
		font-weight: 400;
	}

	@media (max-width: 600px) {
		.hero-carousel {
			height: clamp(20rem, 75vh, 32rem);
		}

		.carousel-arrow {
			width: 2.75rem;
			height: 2.75rem;
		}

		.carousel-indicators {
			gap: 0.6rem;
		}
	}

	@media (max-width: 760px) {
		.posts-grid,
		.testimonials-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 520px) {
		.latest-posts-header {
			align-items: flex-start;
			flex-direction: column;
		}

		.posts-grid,
		.testimonials-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
