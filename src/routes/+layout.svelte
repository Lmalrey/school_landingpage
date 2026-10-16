<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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
