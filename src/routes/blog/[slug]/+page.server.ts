import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPostBySlug } from '#lib/server/notion.ts';

export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
	const result = await getPostBySlug(params.slug);
	if (!result) error(404, 'Artículo no encontrado');

	return result;
};
