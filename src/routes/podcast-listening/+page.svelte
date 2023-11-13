<script lang="ts">
	import PodcastEpisodeRecommendation from '$lib/components/podcasts/PodcastEpisodeRecommendation.svelte';

	import PodcastSubscription from '$lib/components/podcasts/PodcastSubscription.svelte';
	import { url } from '$lib/config';
	import { ArrowRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Matt Lehrer's recent podcast subscriptions and episode recommendations</title>
	<meta property="og:type" content="article" />
	<meta
		property="og:title"
		content="Matt Lehrer's recent podcast subscriptions and episode recommendations"
	/>
	<meta
		content="{url}api/og?title=Matt Lehrer's recent podcast subscriptions and episode recommendations"
		property="og:image"
	/>
	<meta
		content="Matt Lehrer's recent podcast subscriptions and episode recommendations"
		property="og:image:alt"
	/>
</svelte:head>

<article class="w-full overflow-hidden px-6 sm:px-16">
	<h1 class="mb-4 mt-8 text-4xl sm:text-5xl">Podcast Recommendations</h1>

	<section>
		<h2 id="episode-recs" class="mb-6 mt-16 text-2xl sm:text-4xl">
			Recent podcast episode recommendations
		</h2>
		<div class="mx-auto flex flex-wrap gap-4 sm:gap-6">
			{#each data.recentRecs as episode (episode.enclosureUrl)}
				<PodcastEpisodeRecommendation {episode} />
			{/each}
		</div>
		<p class="mt-4">
			<a class="text-lg sm:text-xl" href="/podcast-listening/episodes"
				>See all episode recommendations <ArrowRight class="inline-block text-inherit" /></a
			>
		</p>
	</section>

	<section>
		<h2 id="recent-subs" class="mb-6 mt-16 text-2xl sm:text-4xl">Recent podcast subscriptions</h2>
		<div class="mx-auto flex flex-wrap gap-6">
			{#each data.recentSubs as podcast}
				<PodcastSubscription {podcast} />
			{/each}
		</div>
		<p class="mt-4">
			<a class="text-lg sm:text-xl" href="/podcast-listening/subscriptions"
				>See all subscriptions <ArrowRight class="inline-block text-inherit" /></a
			>
		</p>
	</section>
</article>

<style lang="postcss">
	#episode-recs {
		view-transition-name: episode-recs;
	}

	#recent-subs {
		view-transition-name: recent-subs;
	}
</style>
