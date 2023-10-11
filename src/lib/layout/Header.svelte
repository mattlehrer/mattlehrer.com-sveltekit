<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav class="items-center justify-between py-8 md:flex">
		{#if $page.route.id !== '/'}
			<a href="/">
				<span class="fancy-serif-bold text-5xl font-black">ML</span>
			</a>
		{/if}
	</nav>
</header>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
