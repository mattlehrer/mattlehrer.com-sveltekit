<script lang="ts">
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
	import { description, url } from '$lib/config';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const hexTheme = new Color(colors.primary[100]).to('srgb').toString({ format: 'hex' });
</script>

<svelte:head>
	<link rel="canonical" href={`${url.slice(0, url.length - 1)}${$page.url.pathname}`} />
	<meta name="theme-color" content={hexTheme} />
	<meta name="description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{#if $page.route?.id?.startsWith('/api/og/render')}
	<slot />
{:else}
	<div class="wrapper">
		<Header />

		<main class="full-bleed">
			<slot />
		</main>

		<Footer />
	</div>
{/if}

<style lang="postcss">
	div {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
