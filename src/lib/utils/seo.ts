export const SITE_URL = 'https://lmalrey.github.io/school_landingpage/';

export function siteUrlFor(path = ''): string {
	const siteRoot = new URL(SITE_URL);
	const normalizedPath = path.replace(/^\/+/, '');
	const basePath = siteRoot.pathname.replace(/^\/|\/$/g, '');

	if (basePath && normalizedPath.startsWith(`${basePath}/`)) {
		return new URL(`/${normalizedPath}`, siteRoot.origin).toString();
	}

	return new URL(normalizedPath, siteRoot).toString();
}
