<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="full-bleed px-8 sm:px-16">
	<nav class="flex items-center justify-between py-8">
		{#if $page.route.id !== '/'}
			<a
				class="pt-1 text-inherit no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
				href="/"
			>
				<span class="fancy-serif-bold text-3xl font-black sm:text-5xl">ML</span>
			</a>
			<div class="flex gap-2 text-sm sm:gap-6 sm:text-base">
				<a
					class="px-2 hover:scale-110 hover:text-primary-800 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
					href="/about">About</a
				>
				<a
					class="px-2 hover:scale-110 hover:text-primary-800 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
					href="/blog">Blog</a
				>
				<a
					class="px-2 hover:scale-110 hover:text-primary-800 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
					href="/reading/books">Book reviews</a
				>
			</div>
		{/if}
	</nav>
</header>
