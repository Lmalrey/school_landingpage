<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '#lib/assets/logo.png';
</script>

<footer
	class="bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-8 text-white sm:px-10 lg:px-12"
>
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6"
	>
		<a
			class="inline-flex shrink-0 rounded-full bg-white p-1 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
			href={resolve('/')}
			aria-label="Instituto Dr. Carlos Seguías, inicio"
		>
			<img
				class="h-16 w-16 rounded-full object-contain sm:h-19 sm:w-19"
				src={logo}
				alt="Logo del Centro de Educación Especial Dr. Carlos Seguías"
			/>
		</a>

		<div class="text-center text-sm leading-6 text-slate-200">
			<p>Copyright ©️ 2026 - Instituto Dr. Carlos Seguías.</p>
			<p class="text-slate-300">Todos los derechos reservados.</p>
			<p class="mt-1 font-semibold text-white">RIF: 507012476</p>
		</div>

		<nav class="flex shrink-0 items-center gap-3" aria-label="Redes sociales">
			<a
				class="grid h-11 w-11 place-items-center rounded-full border border-white/45 text-white transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
				href="https://wa.me/584224980765"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chatear por WhatsApp"
			>
				<svg class="h-5.5 w-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.49-8.41ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.89-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.27.49 1.71.62.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
					/>
				</svg>
			</a>
			<a
				class="grid h-11 w-11 place-items-center rounded-full border border-white/45 text-white transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
				href="https://www.instagram.com/institutodrcarlosseguias/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visitar Instagram"
			>
				<svg class="h-5.5 w-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
					/>
				</svg>
			</a>
		</nav>
	</div>
</footer>
