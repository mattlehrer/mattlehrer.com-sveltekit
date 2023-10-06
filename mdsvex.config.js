import { escapeSvelte } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';
import shiki from 'shiki';

import t from './src/theme/night-owl.json' assert { type: 'json' };

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/lib/md_custom/mdsvex_layout.svelte',
	},
	smartypants: true,
	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [rehypeSlug],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: t,
			});
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\` }`;
		},
	},
};
