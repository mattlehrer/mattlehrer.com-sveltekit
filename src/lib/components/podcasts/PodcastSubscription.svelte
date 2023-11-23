<script lang="ts">
	import { decodeHtml } from '$lib/utils';
	import type { FeedSubscription } from '$lib/types';

	export let podcast: FeedSubscription;
</script>

<a
	class="group rounded-sm bg-primary-200 p-4 shadow-inner hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
	target="_blank"
	href={podcast.htmlUrl}
>
	<article class="flex w-full flex-col text-lg sm:w-[24rem] sm:p-4">
		<img
			src="https://public.overcast-cdn.com/art/{podcast.overcastId}?v1"
			alt={`Cover art for ${podcast.title}`}
			loading="lazy"
			class="mx-auto h-auto w-full shadow-xl transition-all group-hover:scale-110"
		/>
		<h3 class="mt-4 font-semibold sm:mt-6">{decodeHtml(podcast.title)}</h3>
		<date class="font-light">
			Added {new Intl.DateTimeFormat(undefined, {
				dateStyle: 'short',
			}).format(new Date(podcast.dateAdded))}
		</date>
	</article>
</a>
