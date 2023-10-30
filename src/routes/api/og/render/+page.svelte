<script lang="ts">
	import Card from '$lib/components/og/OGCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="card">
	<Card title={data.title} />
</div>

<style>
	@font-face {
		font-family: 'Plus Jakarta Sans';
		src: url('/src/lib/components/og/PlusJakartaSans-Regular.ttf');
	}

	.card {
		height: 630px;
		width: 1200px;
	}
</style>
