import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import fs from 'node:fs';

export default defineConfig({
	plugins: [
		sveltekit(),
		rawFonts(['.ttf']),
		imagetools({
			profiles: {
				sm: new URLSearchParams('w=300;450;640&format=avif;webp;jpg'),
				lg: new URLSearchParams('w=640;1024;1920&format=avif;webp;jpg'),
			},
		}),
	],
});

function rawFonts(ext: string[]) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code: string, id: string) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		},
	};
}
