<script lang="ts">
	import './layout.css';
	import './global.css';
	import favicon from '#lib/assets/logo.png';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { siteUrlFor } from '../lib/utils/seo';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: 'Instituto Dr. Carlos Seguías',
		description:
			'Centro de educación especial en Maturín, Monagas, dedicado a la educación adaptada y al desarrollo integral de sus estudiantes.',
		url: siteUrlFor(),
		logo: siteUrlFor(favicon),
		telephone: '+584224980765',
		email: ['ceedrcarlosseguias@gmail.com', 'ceedrcarlosseguias1@gmail.com'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Avenida Principal de Fundemos, Local 25',
			addressLocality: 'Maturín',
			addressRegion: 'Monagas',
			addressCountry: 'VE'
		}
	};
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>

<div class="page-layout">
	<Navbar />
	<main class="page-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.page-layout {
		display: flex;
		min-height: 100vh;
		min-height: 100dvh;
		flex-direction: column;
	}

	.page-content {
		flex: 1;
	}
</style>
