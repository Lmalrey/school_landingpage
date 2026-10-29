<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '#lib/assets/logo.png';

	let menuOpen = $state(false);

	const links = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Nosotros', href: '/nosotros' },
		{ label: 'Servicios', href: '/servicios' },
		{ label: 'Instalaciones', href: '/instalaciones' },
		{ label: 'Contacto', href: '/contacto' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Blog', href: '/blog' }
	] as const;
</script>

<header class="relative z-10 w-full border-b border-slate-200 bg-white">
	<nav
		class="mx-auto flex min-h-20.5 w-[min(100%-3rem,1200px)] items-center justify-between gap-8 max-[760px]:relative max-[760px]:min-h-18 max-[760px]:w-[min(100%-2rem,1200px)] max-[760px]:gap-4 min-[1231px]:w-[min(100%-2rem,1600px)]"
		aria-label="Navegación principal"
	>
		<a
			class="inline-flex items-center gap-3 text-base leading-tight font-bold text-slate-800 no-underline"
			href={resolve('/')}
			aria-label="Instituto Dr. Carlos Seguías, inicio"
			onclick={() => (menuOpen = false)}
		>
			<img
				src={logo}
				alt=""
				class="h-14 w-14 shrink-0 object-contain max-[760px]:h-12 max-[760px]:w-12"
			/>
			<span
				class="max-w-47.5 max-[760px]:max-w-52.5 max-[760px]:text-[0.95rem] max-[380px]:max-w-41.25 max-[380px]:text-[0.85rem]"
				>Instituto Dr. Carlos Seguías</span
			>
		</a>

		<button
			class="hidden h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 max-[760px]:grid"
			type="button"
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={menuOpen}
			aria-controls="primary-navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				{#if menuOpen}
					<path
						d="m6 6 12 12M18 6 6 18"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				{:else}
					<path
						d="M4 6h16M4 12h16M4 18h16"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				{/if}
			</svg>
		</button>

		<div
			id="primary-navigation"
			class={`absolute top-[calc(100%-1px)] -right-4 -left-4 flex flex-col gap-0 border-b border-slate-200 bg-white px-4 pt-2 pb-4 shadow-lg shadow-slate-900/5 min-[761px]:static min-[761px]:flex min-[761px]:flex-row min-[761px]:items-center min-[761px]:gap-[clamp(0.75rem,2vw,1.75rem)] min-[761px]:border-0 min-[761px]:bg-transparent min-[761px]:p-0 min-[761px]:shadow-none ${menuOpen ? 'flex' : 'hidden'}`}
		>
			{#each links as link (link.href)}
				<a
					href={resolve(link.href)}
					class={`relative py-2 text-[0.95rem] font-semibold no-underline transition-colors max-[760px]:px-1 max-[760px]:py-[0.85rem] ${page.route.id === link.href ? 'text-sky-700 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:bg-sky-700 max-[760px]:after:right-auto max-[760px]:after:w-8' : 'text-slate-600 hover:text-sky-700'}`}
					aria-current={page.route.id === link.href ? 'page' : undefined}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</nav>
</header>
