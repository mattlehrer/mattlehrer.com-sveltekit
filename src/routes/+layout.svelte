<script>
	// Supports weights 200-800
	import '@fontsource-variable/plus-jakarta-sans';
	// Supports weights 200-900
	import '@fontsource-variable/source-code-pro';
	import Color from 'colorjs.io';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import colors from '../theme/colors';
	import { onNavigate } from '$app/navigation';
	import { description, title, url } from '$lib/config';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				console.log({ navigation });
				await navigation.complete;
			});
		});
	});

	const hexTheme = new Color(colors.primary[300]).to('srgb').toString({ format: 'hex' });
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={`${url}${$page.url.pathname}`} />
	<meta name="theme-color" content={hexTheme} />
	<meta name="description" content={description} />
</svelte:head>

<div class="mx-auto grid max-w-full px-8 sm:max-w-7xl">
	<Header />

	<main class="py-8 sm:py-12">
		<slot />
	</main>

	<Footer />
</div>

<style>
	div {
		min-height: 100dvh;
		grid-template-rows: auto 1fr auto;
	}
</style>
