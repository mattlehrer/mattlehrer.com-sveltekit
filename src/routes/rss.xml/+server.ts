import * as config from '$lib/config';
import { create } from 'xmlbuilder2';
import type { Post } from '$lib/types';

export const prerender = true;

export async function GET({ fetch }) {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	};

	return new Response(await getRssXml(fetch), { headers });
}

async function getRssXml(
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
): Promise<string> {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	const rssUrl = `${config.url}/rss.xml`;
	const root = create({ version: '1.0', encoding: 'utf-8' })
		.ele('feed', {
			xmlns: 'http://www.w3.org/2005/Atom',
		})
		.ele('title')
		.txt(config.title)
		.up()
		.ele('link', { href: config.url })
		.up()
		.ele('link', { rel: 'self', href: rssUrl })
		.up()
		.ele('updated')
		.txt(new Date().toISOString())
		.up()
		.ele('id')
		.txt(config.url)
		.up()
		.ele('author')
		.ele('name')
		.txt(config.author)
		.up()
		.ele('email')
		.txt(config.email)
		.up()
		.up()
		.ele('subtitle')
		.txt(config.description)
		.up();

	for await (const post of posts) {
		const postUrl = `${config.url}blog/${post.slug}`;

		root
			.ele('entry')
			.ele('title')
			.txt(post.title)
			.up()
			.ele('link', { href: postUrl })
			.up()
			.ele('updated')
			.txt(post.date)
			.up()
			.ele('id')
			.txt(postUrl)
			.up()
			.ele('summary')
			.txt(post.description)
			.up()
			.up();
	}

	return root.end();
}
