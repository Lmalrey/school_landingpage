<script lang="ts">
	import heroImage from '#lib/assets/hero1.png';
	import heroImage2 from '#lib/assets/hero2.png';

	const slides = [
		{ src: heroImage, alt: 'Fachada del Centro de Educación Especial Dr. Carlos Seguías' },
		{
			src: heroImage2,
			alt: 'Estudiantes recibiendo certificados del Instituto Dr. Carlos Seguías'
		},
		{ src: heroImage2, alt: 'Siguiente imagen del instituto' },
		{ src: heroImage2, alt: 'Siguiente imagen del instituto' },
		{ src: heroImage2, alt: 'Siguiente imagen del instituto' }
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
		{#each slides as slide, index (index)}
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
</style>
