<script lang="ts">
	import Card from '$lib/components/og/OGCard.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		document.body.style['overflow'] = 'hidden';
		document.body.style['overflowY'] = 'hidden';
	});
</script>

<div class="card">
	<Card title={data.title} />
</div>

<style>
	.card {
		height: 630px;
		width: 1200px;
	}
</style>
