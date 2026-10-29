<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '#lib/assets/logo.png';
</script>

<footer class="site-footer">
	<div class="footer-content">
		<a class="footer-brand" href={resolve('/')} aria-label="Instituto Dr. Carlos Seguías, inicio">
			<img src={logo} alt="Logo del Centro de Educación Especial Dr. Carlos Seguías" />
		</a>

		<div class="footer-information">
			<p>Copyright ©️ 2026 - Instituto Dr. Carlos Seguías.</p>
			<p>Todos los derechos reservados.</p>
			<p class="rif">RIF: 507012476</p>
		</div>

		<nav class="social-links" aria-label="Redes sociales">
			<a
				href="https://wa.me/584224980765"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chatear por WhatsApp"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.41ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.89-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.27.49 1.71.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
					/>
				</svg>
			</a>
			<a
				href="https://www.instagram.com/institutodrcarlosseguias/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visitar Instagram"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
					/>
				</svg>
			</a>
		</nav>
	</div>
</footer>

<style>
	.site-footer {
		padding: 1.5rem 1rem;
		background: var(--color-navy);
		color: #fff;
	}

	.footer-content {
		display: flex;
		width: min(100%, 1200px);
		margin-inline: auto;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.footer-brand {
		display: inline-flex;
		flex: 0 0 auto;
	}

	.footer-brand img {
		width: 76px;
		height: 76px;
		border-radius: 50%;
		background: #fff;
		object-fit: contain;
	}

	.footer-information {
		text-align: center;
	}

	.footer-information p {
		margin: 0.25rem 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.footer-information .rif {
		margin-top: 0.5rem;
		font-weight: 600;
	}

	.social-links {
		display: flex;
		flex: 0 0 auto;
		align-items: center;
		gap: 0.75rem;
	}

	.social-links a {
		display: grid;
		width: 44px;
		height: 44px;
		place-items: center;
		border: 1px solid rgb(255 255 255 / 45%);
		border-radius: 50%;
		color: #fff;
		transition:
			background-color 150ms ease,
			color 150ms ease;
	}

	.social-links a:hover {
		background: #fff;
		color: #16324f;
	}

	.social-links svg {
		width: 22px;
		height: 22px;
		fill: currentColor;
	}

	@media (max-width: 640px) {
		.footer-content {
			flex-direction: column;
			gap: 1rem;
		}

		.footer-brand img {
			width: 68px;
			height: 68px;
		}
	}
	@media (min-width: 1231px) {
		.footer-content {
			width: min(100% - 2rem, 1600px);
		}
	}
</style>
