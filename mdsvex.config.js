import { escapeSvelte } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';
import {  createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['night-owl'],
	langs: ['javascript', 'svelte', 'typescript', 'html', 'css', 'json', 'markdown', 'zsh'],
});

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
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'night-owl' }));
			return `{@html \`${html}\` }`;
		},
	},
};
