<script lang="ts">
	export let tags: string[] = [];
</script>

<div class="flex">
	{#each tags as tag}
		<a
			href={'/blog/tag/' + tag}
			class="mr-4 mt-4 inline-block rounded bg-secondary-300 px-2 py-1 text-sm font-light text-tertiary-900 no-underline hover:bg-secondary-200"
			>{tag}</a
		>
	{/each}
</div>
