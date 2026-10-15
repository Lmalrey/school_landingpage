<script lang="ts">
	import { page } from '$app/state';
	import logo from '#lib/assets/logo.png';

	let menuOpen = $state(false);

	const links = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Nosotros', href: '/nosotros' },
		{ label: 'Servicios', href: '/servicios' },
		{ label: 'Instalaciones', href: '/instalaciones' },
		{ label: 'Contacto', href: '/contacto' },
		{ label: 'Blog', href: '/blog' }
	];
</script>

<header class="site-header">
	<nav class="navbar" aria-label="Navegación principal">
		<a class="brand" href="/" aria-label="Instituto Dr. Carlos Seguías, inicio" onclick={() => (menuOpen = false)}>
			<img src={logo} alt="" class="brand-logo" />
			<span class="brand-name">Instituto Dr. Carlos Seguías</span>
		</a>

		<button
			class="menu-toggle"
			type="button"
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={menuOpen}
			aria-controls="primary-navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div id="primary-navigation" class:open={menuOpen} class="navigation">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class:active={page.url.pathname === link.href}
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</nav>
</header>

<style>
	.site-header {
		position: relative;
		z-index: 10;
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #e7ebf0;
	}

	.navbar {
		display: flex;
		width: min(100% - 3rem, 1200px);
		min-height: 82px;
		margin-inline: auto;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	@media (min-width: 1231px) {
		.navbar {
			width: min(100% - 2rem, 1600px);
		}
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: #16324f;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.25;
		text-decoration: none;
	}

	.brand-logo {
		width: 56px;
		height: 56px;
		flex: 0 0 auto;
		object-fit: contain;
	}

	.brand-name {
		max-width: 190px;
	}

	.navigation {
		display: flex;
		align-items: center;
		gap: clamp(0.75rem, 2vw, 1.75rem);
	}

	.navigation a {
		position: relative;
		padding-block: 0.5rem;
		color: #3c4b5b;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		transition: color 150ms ease;
	}

	.navigation a:hover,
	.navigation a.active {
		color: #0879b9;
	}

	.navigation a.active::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 2px;
		background: #0879b9;
		content: '';
	}

	.menu-toggle {
		display: none;
		width: 44px;
		height: 44px;
		padding: 0.7rem;
		border: 1px solid #dce3ea;
		border-radius: 0.5rem;
		background: #fff;
		cursor: pointer;
	}

	.menu-toggle span {
		display: block;
		height: 2px;
		margin-block: 4px;
		background: #16324f;
	}

	@media (max-width: 760px) {
		.navbar {
			position: relative;
			width: min(100% - 2rem, 1200px);
			min-height: 72px;
			gap: 1rem;
		}

		.brand-logo {
			width: 48px;
			height: 48px;
		}

		.brand-name {
			max-width: 210px;
			font-size: 0.95rem;
		}

		.menu-toggle {
			display: block;
			flex: 0 0 auto;
		}

		.navigation {
			position: absolute;
			top: calc(100% - 1px);
			right: -1rem;
			left: -1rem;
			display: none;
			padding: 0.5rem 1rem 1rem;
			border-bottom: 1px solid #e7ebf0;
			background: #fff;
			box-shadow: 0 12px 18px rgb(22 50 79 / 8%);
		}

		.navigation.open {
			display: flex;
			align-items: stretch;
			flex-direction: column;
			gap: 0;
		}

		.navigation a {
			padding: 0.85rem 0.25rem;
		}

		.navigation a.active::after {
			right: auto;
			width: 2rem;
		}
	}

	@media (max-width: 380px) {
		.brand-name {
			max-width: 165px;
			font-size: 0.85rem;
		}
	}
</style>