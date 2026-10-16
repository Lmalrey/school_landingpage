import { marked } from 'marked';
import type { Post, PostMetadata } from '../types';

const postFiles = import.meta.glob<string>('#lib/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const postImages = import.meta.glob<string>('#lib/assets/blog-images/*', {
	eager: true,
	query: '?url',
	import: 'default'
});

function resolvePostImage(filename: string | undefined): string | undefined {
	if (!filename) return undefined;

	const image = Object.entries(postImages).find(([path]) => path.endsWith(`/${filename}`));
	if (!image) {
		throw new Error(`No se encontró la imagen del artículo: ${filename}`);
	}

	return image[1];
}

function parsePost(path: string, frontmatter: string): Post {
	const metadata = frontmatter.split(/\r?\n/).reduce<Partial<PostMetadata>>((result, line) => {
		const separator = line.indexOf(':');
		if (separator === -1) return result;

		const key = line.slice(0, separator).trim() as keyof PostMetadata;
		const value = line.slice(separator + 1).trim();
		if (['title', 'date', 'author', 'image', 'description'].includes(key)) {
			result[key] = value.replace(/^(['"])(.*)\1$/, '$2');
		}
		return result;
	}, {});

	if (!metadata.title || !metadata.date || !metadata.author) {
		throw new Error(`El artículo ${path} debe definir title, date y author.`);
	}

	const slug = path.split('/').pop()?.replace(/\.md$/, '');
	if (!slug) {
		throw new Error(`No se pudo determinar el slug del artículo ${path}.`);
	}

	return {
		slug,
		title: metadata.title,
		date: metadata.date,
		author: metadata.author,
		image: resolvePostImage(metadata.image),
		description: metadata.description,
		content: ''
	};
}

async function loadPost(path: string, source: string): Promise<Post> {
	const frontmatter = source.match(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/);
	if (!frontmatter) {
		throw new Error(`El artículo ${path} no contiene metadatos YAML válidos.`);
	}

	const metadata = frontmatter[0].replace(/^---\s*\r?\n|\r?\n---\s*(?:\r?\n|$)/g, '');
	const post = parsePost(path, metadata);
	post.content = await marked.parse(source.slice(frontmatter[0].length));
	return post;
}

export async function getPosts(): Promise<Post[]> {
	const posts = await Promise.all(
		Object.entries(postFiles).map(([path, source]) => loadPost(path, source))
	);

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | undefined> {
	const entry = Object.entries(postFiles).find(([path]) => path.endsWith(`/${slug}.md`));
	return entry ? loadPost(entry[0], entry[1]) : undefined;
}
