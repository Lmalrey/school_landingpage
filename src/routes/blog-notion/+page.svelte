<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import type { PageProps } from './$types';
	import type { BlogPost } from '#lib/server/notion.ts';

	let { data }: PageProps = $props();

	let selectedCategory = $state('Todas');

	let categories = $derived([
		'Todas',
		...new Set(data.posts.map((post) => post.categoria).filter(Boolean))
	]);

	let filteredPosts = $derived(
		selectedCategory === 'Todas'
			? data.posts
			: data.posts.filter((post) => post.categoria === selectedCategory)
	);

	function formatDate(dateStr: string | null): string {
		if (!dateStr) return '';
		const date = dateStr.includes('T') ? new Date(dateStr) : new Date(`${dateStr}T00:00:00`);
		return Number.isNaN(date.getTime())
			? dateStr
			: new Intl.DateTimeFormat('es-ES', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}).format(date);
	}
</script>

<Seo
	title="Blog escolar | Instituto Dr. Carlos Seguías"
	description="Noticias, actividades, eventos y guías para las familias y estudiantes del Instituto Dr. Carlos Seguías."
	path="blog-notion/"
/>

{#snippet postCard(post: BlogPost)}
	<article
		class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
	>
		<a
			href={resolve('/blog-notion/[slug]', { slug: post.slug })}
			class="flex h-full flex-col rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
		>
			<div class="relative aspect-16/10 overflow-hidden bg-linear-to-br from-sky-100 to-amber-50">
				{#if post.portada}
					<img
						src={post.portada}
						alt={post.titulo}
						loading="lazy"
						class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
					/>
				{:else}
					<div class="grid h-full place-items-center text-sm font-medium text-slate-500">
						Sin portada
					</div>
				{/if}

				{#if post.categoria}
					<span
						class="absolute top-4 left-4 rounded-full border border-white/30 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
					>
						{post.categoria}
					</span>
				{/if}
			</div>

			<div class="flex flex-1 flex-col p-6 sm:p-7">
				{#if post.fecha}
					<time datetime={post.fecha} class="text-sm font-semibold text-sky-700">
						{formatDate(post.fecha)}
					</time>
				{/if}

				<h2
					class="mt-3 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-sky-700 sm:text-2xl"
				>
					{post.titulo}
				</h2>

				{#if post.extracto}
					<p class="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
						{post.extracto}
					</p>
				{:else}
					<div class="flex-1"></div>
				{/if}

				<div
					class="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm"
				>
					<span class="font-medium text-slate-500">Por {post.autor}</span>
					<span
						class="inline-flex shrink-0 items-center gap-2 font-bold text-sky-700 transition-colors group-hover:text-sky-900"
					>
						Leer artículo
						<svg
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
							viewBox="0 0 24 24"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M5 12h14m-6-6 6 6-6 6"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</div>
			</div>
		</a>
	</article>
{/snippet}

<section
	class="relative isolate overflow-hidden bg-slate-950"
	aria-labelledby="blog-notion-heading"
>
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
				Noticias y recursos para nuestra comunidad
			</p>
			<h1
				id="blog-notion-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Blog escolar
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Actividades, eventos y guías para acompañar el aprendizaje de nuestras familias y
				estudiantes.
			</p>
		</div>
	</div>
</section>

<section
	class="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
	aria-label="Artículos del blog"
>
	{#if categories.length > 1}
		<div class="mb-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-sky-700 uppercase">Explora el blog</p>
				<p class="mt-1 text-slate-600">Filtra los artículos por tema.</p>
			</div>
			<div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
				{#each categories as category (category)}
					<button
						type="button"
						aria-pressed={selectedCategory === category}
						onclick={() => (selectedCategory = category)}
						class="cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 {selectedCategory ===
						category
							? 'border-sky-700 bg-sky-700 text-white'
							: 'border-slate-300 bg-white text-slate-700 hover:border-sky-700 hover:text-sky-700'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#if filteredPosts.length === 0}
		<p
			class="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600"
		>
			{data.posts.length === 0
				? 'Próximamente compartiremos nuevos artículos.'
				: 'No hay artículos publicados en esta categoría todavía.'}
		</p>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post (post.id)}
				{@render postCard(post)}
			{/each}
		</div>
	{/if}
</section>
