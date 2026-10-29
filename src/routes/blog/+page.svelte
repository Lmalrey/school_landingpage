<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title="Blog de educación especial | Instituto Dr. Carlos Seguías"
	description="Lee noticias, experiencias y consejos sobre educación especial, terapias y desarrollo integral en el blog del Instituto Dr. Carlos Seguías."
	path="blog/"
/>

<section class="relative isolate overflow-hidden bg-slate-950" aria-labelledby="blog-heading">
	<div
		class="absolute inset-0 -z-10 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"
		aria-hidden="true"
	></div>
	<div
		class="absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
		<div class="max-w-3xl">
			<p
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md"
			>
				<span class="h-2 w-2 rounded-full bg-amber-400"></span>
				Historias de nuestra comunidad
			</p>
			<h1
				id="blog-heading"
				class="text-4xl leading-tight font-bold tracking-tight text-amber-300 drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				Blog
			</h1>
			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
				Noticias, experiencias y novedades del Instituto Dr. Carlos Seguías.
			</p>
		</div>
	</div>
</section>

<section
	class="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
	aria-label="Artículos del blog"
>
	{#if data.posts.length > 0}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.slug)}
				<article
					class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
				>
					<a
						class="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
						href={resolve('/blog/[slug]', { slug: post.slug })}
					>
						{#if post.image}
							<div class="aspect-16/10 overflow-hidden bg-slate-100">
								<img
									class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
									src={post.image}
									alt={post.title}
									loading="lazy"
								/>
							</div>
						{/if}
						<div class="p-6 sm:p-7">
							<p class="text-sm font-semibold text-sky-700">
								{post.date} <span class="px-1 text-slate-400" aria-hidden="true">·</span>
								{post.author}
							</p>
							<h2
								class="mt-3 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-sky-700 sm:text-2xl"
							>
								{post.title}
							</h2>
							<span
								class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors group-hover:text-sky-700"
							>
								Leer artículo
								<svg
									class="h-4 w-4 transition-transform group-hover:translate-x-1"
									viewBox="0 0 24 24"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M5 12h14m-6-6 6 6-6 6"
										stroke="currentColor"
										stroke-width="1.8"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</div>
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<p
			class="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600"
		>
			Próximamente compartiremos nuevos artículos.
		</p>
	{/if}
</section>
