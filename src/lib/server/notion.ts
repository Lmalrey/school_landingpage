import {
	Client,
	isFullBlock,
	isFullPage,
	type BlockObjectResponse,
	type PageObjectResponse,
	type RichTextItemResponse
} from '@notionhq/client';
import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$app/env/private';

const notion = new Client({ auth: NOTION_API_KEY });

export interface BlogPost {
	id: string;
	titulo: string;
	slug: string;
	extracto: string;
	autor: string;
	categoria: string;
	estado: string;
	fecha: string | null;
	portada: string | null;
}

export type NotionBlock =
	| (BlockObjectResponse & { children?: NotionBlock[] })
	| {
			id: string;
			type: 'bulleted_list' | 'numbered_list';
			items: (BlockObjectResponse & { children?: NotionBlock[] })[];
	  };

let cachedDataSourceId: string | null = null;

async function getDataSourceId(): Promise<string> {
	if (cachedDataSourceId) return cachedDataSourceId;

	const db = await notion.databases.retrieve({
		database_id: NOTION_DATABASE_ID
	});

	if (!('data_sources' in db) || db.data_sources.length === 0) {
		throw new Error('No se encontró ningún data_source en la base de datos Blog.');
	}

	cachedDataSourceId = db.data_sources[0].id;
	return cachedDataSourceId;
}

function getRichText(richText: RichTextItemResponse[]): string {
	return richText.map((t) => t.plain_text).join('').trim();
}

function getCoverUrl(page: PageObjectResponse): string | null {
	const prop = page.properties['Portada'];

	if (prop?.type === 'files' && prop.files.length > 0) {
		const file = prop.files[0];
		if (file.type === 'external') return file.external.url;
		if (file.type === 'file') return file.file.url;
	}

	if (prop?.type === 'url' && prop.url) {
		return prop.url;
	}

	// Respaldo: portada nativa de la página de Notion
	if (page.cover?.type === 'external') return page.cover.external.url;
	if (page.cover?.type === 'file') return page.cover.file.url;

	return null;
}

function mapPageToPost(page: PageObjectResponse): BlogPost {
	const props = page.properties;

	const tituloProp = props['Título'];
	const slugProp = props['Slug'];
	const extractoProp = props['Extracto'];
	const autorProp = props['Autor'];
	const categoriaProp = props['Categoría'];
	const estadoProp = props['Estado'];
	const fechaProp = props['Fecha'];

	return {
		id: page.id,
		titulo: tituloProp?.type === 'title' ? getRichText(tituloProp.title) : 'Sin título',
		slug: slugProp?.type === 'rich_text' ? getRichText(slugProp.rich_text) : '',
		extracto: extractoProp?.type === 'rich_text' ? getRichText(extractoProp.rich_text) : '',
		autor: autorProp?.type === 'rich_text' ? getRichText(autorProp.rich_text) : 'Equipo Escolar',
		categoria:
			categoriaProp?.type === 'select' ? (categoriaProp.select?.name ?? 'General') : 'General',
		estado: estadoProp?.type === 'select' ? (estadoProp.select?.name ?? '') : '',
		fecha: fechaProp?.type === 'date' ? (fechaProp.date?.start ?? null) : null,
		portada: getCoverUrl(page)
	};
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
	const dataSourceId = await getDataSourceId();

	const response = await notion.dataSources.query({
		data_source_id: dataSourceId,
		filter: {
			property: 'Estado',
			select: { equals: 'Publicado' }
		},
		sorts: [{ property: 'Fecha', direction: 'descending' }]
	});

	return response.results
		.filter((item): item is PageObjectResponse => isFullPage(item))
		.map(mapPageToPost)
		.filter((post) => post.slug.length > 0);
}

async function fetchBlockChildren(blockId: string): Promise<NotionBlock[]> {
	const rawBlocks: (BlockObjectResponse & { children?: NotionBlock[] })[] = [];
	let cursor: string | undefined = undefined;

	do {
		const response = await notion.blocks.children.list({
			block_id: blockId,
			start_cursor: cursor,
			page_size: 100
		});

		for (const block of response.results) {
			if (!isFullBlock(block)) continue;

			const item: BlockObjectResponse & { children?: NotionBlock[] } = { ...block };
			if (block.has_children) {
				item.children = await fetchBlockChildren(block.id);
			}
			rawBlocks.push(item);
		}

		cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
	} while (cursor);

	return groupListBlocks(rawBlocks);
}

// Agrupa ítems de lista consecutivos en <ul> / <ol>
function groupListBlocks(
	blocks: (BlockObjectResponse & { children?: NotionBlock[] })[]
): NotionBlock[] {
	const grouped: NotionBlock[] = [];

	for (const block of blocks) {
		const last = grouped.at(-1);

		if (block.type === 'bulleted_list_item') {
			if (last && last.type === 'bulleted_list') {
				last.items.push(block);
			} else {
				grouped.push({ id: `ul-${block.id}`, type: 'bulleted_list', items: [block] });
			}
		} else if (block.type === 'numbered_list_item') {
			if (last && last.type === 'numbered_list') {
				last.items.push(block);
			} else {
				grouped.push({ id: `ol-${block.id}`, type: 'numbered_list', items: [block] });
			}
		} else {
			grouped.push(block);
		}
	}

	return grouped;
}

export async function getPostBySlug(
	slug: string
): Promise<{ post: BlogPost; blocks: NotionBlock[] } | null> {
	const dataSourceId = await getDataSourceId();

	const response = await notion.dataSources.query({
		data_source_id: dataSourceId,
		filter: {
			and: [
				{ property: 'Estado', select: { equals: 'Publicado' } },
				{ property: 'Slug', rich_text: { equals: slug } }
			]
		},
		page_size: 1
	});

	const page = response.results.find((item): item is PageObjectResponse => isFullPage(item));
	if (!page) return null;

	const post = mapPageToPost(page);
	const blocks = await fetchBlockChildren(page.id);

	return { post, blocks };
}