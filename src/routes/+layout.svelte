<script>
	// Supports weights 200-800
	import '@fontsource-variable/plus-jakarta-sans';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Matt Lehrer</title>
</svelte:head>

<div class="7xl:px-0 mx-auto grid max-w-7xl px-8 sm:px-16">
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
