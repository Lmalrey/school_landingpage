<script lang="ts">
	import logo from '#lib/assets/logo.png';
	import { siteUrlFor } from '../utils/seo';

	let {
		title,
		description,
		path,
		type = 'website',
		image = logo,
		publishedTime,
		author,
		index = true
	}: {
		title: string;
		description: string;
		path: string;
		type?: 'website' | 'article';
		image?: string;
		publishedTime?: string;
		author?: string;
		index?: boolean;
	} = $props();

	const canonicalUrl = $derived(siteUrlFor(path));
	const imageUrl = $derived(siteUrlFor(image));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="robots"
		content={index
			? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
			: 'noindex,follow'}
	/>
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:locale" content="es_VE" />
	<meta property="og:site_name" content="Instituto Dr. Carlos Seguías" />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content="Instituto Dr. Carlos Seguías" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if author}
		<meta name="author" content={author} />
		<meta property="article:author" content={author} />
	{/if}
</svelte:head>
