<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';
	import NotionBlocks from '#lib/components/NotionBlocks.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let formattedDate = $derived(
		data.post.fecha
			? new Intl.DateTimeFormat('es-ES', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}).format(new Date(`${data.post.fecha}T00:00:00`))
			: ''
	);
</script>

<Seo
	title={`${data.post.titulo} | Instituto Dr. Carlos Seguías`}
	description={data.post.extracto}
	path={`blog/${data.post.slug}/`}
	type="article"
	image={data.post.portada ?? undefined}
	publishedTime={data.post.fecha ?? undefined}
	author={data.post.autor}
/>

<article class="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-16">
	<a
		href={resolve('/blog')}
		class="mb-8 inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:gap-3 hover:text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
	>
		<svg class="h-5 w-5 rotate-180" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M5 12h14m-6-6 6 6-6 6"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		Volver al blog
	</a>

	<header class="mb-10">
		<p class="mb-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
			{data.post.categoria}
		</p>
		<h1 class="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
			{data.post.titulo}
		</h1>

		<div class="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-500">
			<span>Por <strong class="font-semibold text-slate-700">{data.post.autor}</strong></span>
			{#if formattedDate}
				<span aria-hidden="true">·</span>
				<time datetime={data.post.fecha}>{formattedDate}</time>
			{/if}
		</div>

		{#if data.post.portada}
			<img
				src={data.post.portada}
				alt={data.post.titulo}
				class="mt-8 max-h-[440px] w-full rounded-2xl object-cover shadow-lg shadow-slate-900/10"
			/>
		{/if}
	</header>

	<NotionBlocks blocks={data.blocks} />
</article>
