export const SITE_URL = 'https://school-landingpage.onrender.com/';

export function siteUrlFor(path = ''): string {
	const siteRoot = new URL(SITE_URL);
	const normalizedPath = path.replace(/^\/+/, '');

	return new URL(normalizedPath, siteRoot).toString();
}
