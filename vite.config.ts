import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			profiles: {
				sm: new URLSearchParams('w=300;450;640&format=avig;webp;jpg'),
				lg: new URLSearchParams('w=640;1024;1920&format=avig;webp;jpg'),
			},
		}),
	],
});
