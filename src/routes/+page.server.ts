import { getPublishedPosts } from '#lib/server/notion.ts';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async () => {
	const posts = await getPublishedPosts();
	return { posts: posts.slice(0, 3) };
};
