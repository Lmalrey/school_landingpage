import type { RequestHandler } from './$types';
import { getPosts } from '../../lib/utils/posts';
import { siteUrlFor } from '../../lib/utils/seo';

export const prerender = true;

const staticPages = ['', 'nosotros/', 'servicios/', 'contacto/', 'faq/', 'blog/'];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	const urls: { loc: string; lastmod?: string }[] = [
		...staticPages.map((path) => ({ loc: siteUrlFor(path) })),
		...posts.map((post) => ({
			loc: siteUrlFor(`blog/${post.slug}/`),
			lastmod: post.date
		}))
	];
	const entries = urls
		.map(
			({ loc, lastmod }) =>
				`<url><loc>${escapeXml(loc)}</loc>${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''}</url>`
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8'
			}
		}
	);
};
