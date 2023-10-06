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

	const hexTheme = new Color(colors.primary[300]).to('srgb').toString({ format: 'hex' });
</script>

<svelte:head>
	<title>Matt Lehrer</title>
	<link rel="canonical" href={`https://mattlehrer.com${$page.url.pathname}`} />
	<meta name="theme-color" content={hexTheme} />
	<meta
		name="description"
		content="The personal web site of Matt Lehrer, an American web developer, reader, and podcast fan in Malmö, Sweden, who is always available for beta or taste testing."
	/>
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
