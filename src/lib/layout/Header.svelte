<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav class="items-center justify-between py-8 md:flex">
		{#if $page.route.id !== '/'}
			<a
				class="pt-1 text-inherit no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
				href="/"
			>
				<span class="fancy-serif-bold text-5xl font-black">ML</span>
			</a>
		{/if}
	</nav>
</header>
