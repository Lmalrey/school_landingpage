import { Client, isFullDatabase, isFullPage, type PageObjectResponse } from '@notionhq/client';
import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$app/env/private';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { NotionToMarkdown } from 'notion-to-md';
import sanitizeHtml from 'sanitize-html';

let notion: Client | undefined;
let notionToMarkdown: NotionToMarkdown | undefined;

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	author: string;
	category: string;
	date: string;
	image?: string;
}

export interface BlogArticle extends BlogPost {
	content: string;
}

function getNotionClient(): Client {
	if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
		throw new Error('Configura NOTION_API_KEY y NOTION_DATABASE_ID en el entorno del servidor.');
	}
	if (!notion) notion = new Client({ auth: NOTION_API_KEY });
	return notion;
}

async function getDataSourceId(): Promise<string> {
	const database = await getNotionClient().databases.retrieve({ database_id: NOTION_DATABASE_ID });
	if (!isFullDatabase(database) || database.data_sources.length !== 1) {
		throw new Error('La base de datos de Notion debe tener exactamente una fuente de datos.');
	}

	return database.data_sources[0].id;
}

function readTextProperty(
	page: PageObjectResponse,
	name: string,
	expectedType: 'title' | 'rich_text' = 'rich_text'
): string {
	const property = page.properties[name];
	if (expectedType === 'title' && property?.type === 'title') {
		return property.title.map((item) => item.plain_text).join('');
	}
	if (expectedType === 'rich_text' && property?.type === 'rich_text') {
		return property.rich_text.map((item) => item.plain_text).join('');
	}

	throw new Error(`La propiedad "${name}" debe tener el tipo "${expectedType}" en Notion.`);
}

function mapPost(page: PageObjectResponse): BlogPost {
	const dateProperty = page.properties['Fecha'];
	const categoryProperty = page.properties['Categoría'];
	const coverProperty = page.properties['Portada'];

	if (dateProperty?.type !== 'date' || !dateProperty.date?.start) {
		throw new Error('La propiedad "Fecha" debe contener una fecha de publicación en Notion.');
	}
	if (categoryProperty?.type !== 'select' || !categoryProperty.select) {
		throw new Error('La propiedad "Categoría" debe ser de tipo select y tener un valor.');
	}
	if (coverProperty && coverProperty.type !== 'files') {
		throw new Error('La propiedad "Portada" debe ser de tipo files en Notion.');
	}

	const coverFile = coverProperty?.files[0];
	const image =
		coverFile?.type === 'file'
			? coverFile.file.url
			: coverFile?.type === 'external'
				? coverFile.external.url
				: undefined;

	return {
		slug: readTextProperty(page, 'Slug'),
		title: readTextProperty(page, 'Título', 'title'),
		description: readTextProperty(page, 'Extracto'),
		author: readTextProperty(page, 'Autor'),
		category: categoryProperty.select.name,
		date: dateProperty.date.start,
		image
	};
}

async function queryPublishedPages(slug?: string) {
	const dataSourceId = await getDataSourceId();
	const pages = [];
	let cursor: string | undefined;

	do {
		const response = await getNotionClient().dataSources.query({
			data_source_id: dataSourceId,
			filter: {
				and: [
					{ property: 'Estado', select: { equals: 'Publicado' } },
					...(slug ? [{ property: 'Slug', rich_text: { equals: slug } }] : [])
				]
			},
			sorts: [{ property: 'Fecha', direction: 'descending' }],
			page_size: 100,
			...(cursor ? { start_cursor: cursor } : {})
		});
		pages.push(...response.results.filter(isFullPage));
		cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
	} while (cursor);

	return pages;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
	const pages = await queryPublishedPages();
	return pages.map(mapPost);
}

export async function getPublishedPost(slug: string): Promise<BlogArticle> {
	const pages = await queryPublishedPages(slug);
	const page = pages[0];
	if (!page) error(404, 'Artículo no encontrado');

	const client = getNotionClient();
	if (!notionToMarkdown) notionToMarkdown = new NotionToMarkdown({ notionClient: client });
	const markdownBlocks = await notionToMarkdown.pageToMarkdown(page.id);
	const markdown = notionToMarkdown.toMarkdownString(markdownBlocks).parent ?? '';
	const html = await marked.parse(markdown);
	const content = sanitizeHtml(html, {
		allowedTags: [
			...sanitizeHtml.defaults.allowedTags,
			'img',
			'figure',
			'figcaption',
			'table',
			'thead',
			'tbody',
			'tr',
			'th',
			'td'
		],
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			a: ['href', 'name', 'target', 'rel'],
			img: ['src', 'alt', 'title', 'width', 'height'],
			code: ['class'],
			pre: ['class']
		},
		allowedSchemes: ['http', 'https', 'mailto']
	});

	return { ...mapPost(page), content };
}
