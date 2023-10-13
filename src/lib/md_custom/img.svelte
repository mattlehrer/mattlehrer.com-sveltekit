<script lang="ts">
	import Img from '@zerodevx/svelte-img';

	export let src: string;
	export let alt: string;
</script>

{#if typeof src === 'object'}
	<!-- import with ?as= to go through vite-imagetools pipeline -->
	<Img class="border border-secondary-800" {src} {alt} />
{:else}
	<img class="border border-secondary-800" {src} {alt} loading="lazy" />
{/if}
