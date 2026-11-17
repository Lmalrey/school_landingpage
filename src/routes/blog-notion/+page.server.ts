import type { PageServerLoad } from './$types';
import { getPublishedPosts } from '#lib/server/notion.ts';

export const load: PageServerLoad = async () => {
	const posts = await getPublishedPosts();
	return { posts };
};