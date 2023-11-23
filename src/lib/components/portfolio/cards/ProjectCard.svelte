<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { ExternalLink } from 'lucide-svelte';

	export let id: string;
	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string;
</script>

<article class="max-w-min rounded bg-primary-200 hover:bg-primary-400">
	<a
		href="/projects/#{id}"
		class="block h-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
	>
		<div
			class="flex w-full flex-col rounded px-6 py-6 shadow-inner @sm:w-96
	@4xl:w-72 @4xl:px-4 @4xl:py-4"
		>
			<div class="mb-2 flex items-center justify-between">
				<div class=" flex items-center gap-3">
					<Img src={image} alt="{title} logo" class="h-6 w-6 rounded-sm shadow" />
					<h3 class="text-xl font-bold">
						{title}
					</h3>
				</div>
				<a
					target="_blank"
					{href}
					class="rounded p-1 hover:bg-primary-800 hover:text-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
				>
					<span class="sr-only">{title}</span>
					<ExternalLink class="inline-block h-5 w-5 opacity-60" />
				</a>
			</div>
			<p class="w-full">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html description}
			</p>
		</div>
	</a>
</article>
