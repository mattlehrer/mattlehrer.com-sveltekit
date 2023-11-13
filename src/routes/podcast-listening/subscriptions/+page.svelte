<script lang="ts">
	import PodcastSubscription from '$lib/components/podcasts/PodcastSubscription.svelte';
	import { url } from '$lib/config';
	import { ArrowRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Matt Lehrer's recent podcast episode recommendations</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Matt Lehrer's recent podcast episode recommendations" />
	<meta
		content="{url}api/og?title=Matt Lehrer's recent podcast episode recommendations"
		property="og:image"
	/>
	<meta content="Matt Lehrer's recent podcast episode recommendations" property="og:image:alt" />
</svelte:head>

<article class="w-full overflow-hidden">
	<div class="px-6 sm:px-16">
		<h1 id="recent-subs" class="mb-4 mt-8 text-2xl sm:text-4xl">Recent podcast subscriptions</h1>
		<div class="mx-auto flex flex-wrap gap-6">
			{#each data.recentSubs as podcast}
				<PodcastSubscription {podcast} />
			{/each}
		</div>
		<p class="mt-12 sm:mt-16">
			<a class="text-lg sm:text-xl" href="/podcast-listening/episodes"
				>Go to episode recommendations <ArrowRight class="inline-block text-inherit" /></a
			>
		</p>
	</div>
</article>

<style lang="postcss">
	#recent-subs {
		view-transition-name: recent-subs;
	}
</style>
