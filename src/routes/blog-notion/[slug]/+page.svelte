<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	import NotionBlocks from '#lib/components/NotionBlocks.svelte';

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

<svelte:head>
	<title>{data.post.titulo} | Blog Escolar</title>
	<meta name="description" content={data.post.extracto} />
</svelte:head>

<article class="mx-auto max-w-3xl px-5 pt-10 pb-16">
	<a
		href={resolve('/blog-notion')}
		class="mb-6 inline-flex items-center gap-1 font-medium text-blue-600 hover:underline"
	>
		← Volver al blog
	</a>

	<header class="mb-8">
		<span
			class="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
		>
			{data.post.categoria}
		</span>

		<h1 class="mb-3 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl">
			{data.post.titulo}
		</h1>

		<div class="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
			<span>
				Por <strong class="font-semibold text-slate-700">{data.post.autor}</strong>
			</span>
			{#if formattedDate}
				<span>•</span>
				<time datetime={data.post.fecha}>{formattedDate}</time>
			{/if}
		</div>

		{#if data.post.portada}
			<img
				src={data.post.portada}
				alt={data.post.titulo}
				class="max-h-[440px] w-full rounded-xl object-cover"
			/>
		{/if}
	</header>

	<NotionBlocks blocks={data.blocks} />
</article>