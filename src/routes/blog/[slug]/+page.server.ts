import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPost } from '../../../lib/utils/posts';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	if (!post) error(404, 'Artículo no encontrado');

	return { post };
};
