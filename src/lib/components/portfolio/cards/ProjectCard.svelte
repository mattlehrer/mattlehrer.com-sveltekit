<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { ExternalLink } from 'lucide-svelte';

	export let id: string;
	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string;
</script>

<article class="rounded">
	<a
		href="/projects/#{id}"
		class="block h-full rounded bg-primary-200 hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
	>
		<div class="flex h-full w-full flex-col rounded p-6 shadow-inner lg:p-4 xl:p-6">
			<div class="mb-2 flex items-start justify-between">
				<div class="flex items-center gap-3">
					<Img src={image} alt="{title} logo" class="h-6 w-6 rounded-sm shadow" />
					<h3 class="text-xl font-bold">
						{title}
					</h3>
				</div>
				<span class="sr-only">{title}</span>
			</div>
			<p class="w-full sm:px-9 lg:px-0">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html description}
			</p>
			<div class="mt-auto flex w-full justify-end">
				<a
					target="_blank"
					{href}
					class="rounded p-1 hover:bg-primary-800 hover:text-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-700 sm:focus-visible:outline-offset-1"
				>
					<ExternalLink class="-mt-1 inline-block h-5 w-5 opacity-60" />
				</a>
			</div>
		</div>
	</a>
</article>
