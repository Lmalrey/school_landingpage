<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';

	let { data } = $props();

	const description = $derived(
		data.post.description ??
			data.post.content
				.replace(/<[^>]*>/g, ' ')
				.replace(/\s+/g, ' ')
				.trim()
				.slice(0, 160)
	);
</script>

<Seo
	title={`${data.post.title} | Instituto Dr. Carlos Seguías`}
	{description}
	path={`blog/${data.post.slug}/`}
	type="article"
	image={data.post.image}
	publishedTime={data.post.date}
	author={data.post.author}
/>

<article class="article-detail">
	<header>
		<h1>{data.post.title}</h1>
		<p class="meta-info">Por <strong>{data.post.author}</strong> el {data.post.date}</p>
		{#if data.post.image}
			<img src={data.post.image} alt={data.post.title} class="hero-img" />
		{/if}
	</header>

	<div class="content">
		{data.post.content}
	</div>

	<a href={resolve('/blog')} class="back-btn">← Volver al Blog</a>
</article>

<style>
	.article-detail {
		max-width: 800px;
		margin: 40px auto;
		padding: 0 20px;
	}
	.hero-img {
		width: 100%;
		max-height: 400px;
		object-fit: cover;
		border-radius: 8px;
		margin-top: 20px;
	}
	.meta-info {
		color: var(--color-muted);
		margin-top: 10px;
	}
	.content {
		margin-top: 30px;
		line-height: 1.7;
	}
	.back-btn {
		display: inline-block;
		margin-top: 40px;
		color: var(--color-primary);
		text-decoration: none;
	}
</style>
