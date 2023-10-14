<script lang="ts">
	export let tags: string[] = [];
</script>

<div class="flex">
	{#each tags as tag}
		<a
			href={'/blog/tag/' + tag}
			class="tag-colors mr-4 mt-4 inline-block rounded px-2 py-1 text-sm font-light no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
			>{tag}</a
		>
	{/each}
</div>
