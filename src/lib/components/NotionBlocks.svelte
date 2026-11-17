<script lang="ts">
	import type { RichTextItemResponse } from '@notionhq/client';
	import type { NotionBlock } from '#lib/server/notion.ts';

	let { blocks }: { blocks: NotionBlock[] } = $props();
</script>

{#snippet richText(items: RichTextItemResponse[])}
	{#each items as item, i (i)}
		{@const a = item.annotations}
		{#if item.href}
			<a
				href={item.href}
				target="_blank"
				rel="external noopener noreferrer"
				class="text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-800"
			>
				{@render formattedSpan(item.plain_text, a)}
			</a>
		{:else}
			{@render formattedSpan(item.plain_text, a)}
		{/if}
	{/each}
{/snippet}

{#snippet formattedSpan(text: string, a: RichTextItemResponse['annotations'])}
	{#if a.code}
		<code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-800">
			{text}
		</code>
	{:else}
		<span
			class="{a.bold ? 'font-bold' : ''} {a.italic ? 'italic' : ''} {a.underline
				? 'underline'
				: ''} {a.strikethrough ? 'line-through' : ''}"
		>
			{text}
		</span>
	{/if}
{/snippet}

{#snippet renderBlocks(list: NotionBlock[])}
	{#each list as block (block.id)}
		{#if block.type === 'paragraph'}
			<p class="mb-4">{@render richText(block.paragraph.rich_text)}</p>
		{:else if block.type === 'heading_1'}
			<h2 class="mt-8 mb-3 text-3xl font-bold text-slate-900">
				{@render richText(block.heading_1.rich_text)}
			</h2>
		{:else if block.type === 'heading_2'}
			<h3 class="mt-6 mb-2.5 text-2xl font-bold text-slate-900">
				{@render richText(block.heading_2.rich_text)}
			</h3>
		{:else if block.type === 'heading_3'}
			<h4 class="mt-5 mb-2 text-xl font-semibold text-slate-900">
				{@render richText(block.heading_3.rich_text)}
			</h4>
		{:else if block.type === 'bulleted_list'}
			<ul class="mb-5 list-disc space-y-1.5 pl-6">
				{#each block.items as item (item.id)}
					{#if item.type === 'bulleted_list_item'}
						<li>
							{@render richText(item.bulleted_list_item.rich_text)}
							{#if item.children?.length}
								<div class="mt-2">{@render renderBlocks(item.children)}</div>
							{/if}
						</li>
					{/if}
				{/each}
			</ul>
		{:else if block.type === 'numbered_list'}
			<ol class="mb-5 list-decimal space-y-1.5 pl-6">
				{#each block.items as item (item.id)}
					{#if item.type === 'numbered_list_item'}
						<li>
							{@render richText(item.numbered_list_item.rich_text)}
							{#if item.children?.length}
								<div class="mt-2">{@render renderBlocks(item.children)}</div>
							{/if}
						</li>
					{/if}
				{/each}
			</ol>
		{:else if block.type === 'quote'}
			<blockquote class="my-5 border-l-4 border-blue-600 bg-slate-50 px-4 py-2.5 text-slate-700">
				{@render richText(block.quote.rich_text)}
			</blockquote>
		{:else if block.type === 'callout'}
			<div class="my-5 flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-slate-800">
				{#if block.callout.icon?.type === 'emoji'}
					<span class="shrink-0 text-xl">{block.callout.icon.emoji}</span>
				{/if}
				<div class="min-w-0 flex-1">
					{@render richText(block.callout.rich_text)}
					{#if block.children?.length}
						<div class="mt-2">{@render renderBlocks(block.children)}</div>
					{/if}
				</div>
			</div>
		{:else if block.type === 'to_do'}
			<label class="mb-2 flex items-center gap-2.5 text-slate-700">
				<input
					type="checkbox"
					checked={block.to_do.checked}
					disabled
					class="h-4 w-4 rounded border-slate-300 text-blue-600"
				/>
				<span class={block.to_do.checked ? 'text-slate-400 line-through' : ''}>
					{@render richText(block.to_do.rich_text)}
				</span>
			</label>
		{:else if block.type === 'toggle'}
			<details class="my-4 rounded-lg border border-slate-200 px-4 py-3">
				<summary class="cursor-pointer font-semibold text-slate-900">
					{@render richText(block.toggle.rich_text)}
				</summary>
				{#if block.children?.length}
					<div class="mt-3">{@render renderBlocks(block.children)}</div>
				{/if}
			</details>
		{:else if block.type === 'image'}
			{@const src =
				block.image.type === 'external' ? block.image.external.url : block.image.file.url}
			{@const caption = block.image.caption.map((c) => c.plain_text).join('')}
			<figure class="my-6 text-center">
				<img {src} alt={caption || 'Imagen del artículo'} loading="lazy" class="mx-auto rounded-lg" />
				{#if caption}
					<figcaption class="mt-2 text-sm text-slate-500">{caption}</figcaption>
				{/if}
			</figure>
		{:else if block.type === 'code'}
			<pre class="my-5 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50"><code>{block.code.rich_text.map((t) => t.plain_text).join('')}</code></pre>
		{:else if block.type === 'divider'}
			<hr class="my-8 border-slate-200" />
		{:else if block.type === 'bookmark'}
			<p class="mb-4">
				<a
					href={block.bookmark.url}
					target="_blank"
					rel="external noopener noreferrer"
					class="text-blue-600 underline hover:text-blue-800"
				>
					{block.bookmark.url}
				</a>
			</p>
		{/if}
	{/each}
{/snippet}

<div class="text-[1.05rem] leading-relaxed text-slate-800">
	{@render renderBlocks(blocks)}
</div>