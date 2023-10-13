<script lang="ts">
	export let tags: string[] = [];
</script>

<div class="flex">
	{#each tags as tag}
		<a
			href={'/blog/tag/' + tag}
			class="tag-colors mr-4 mt-4 inline-block rounded px-2 py-1 text-sm font-light no-underline"
			>{tag}</a
		>
	{/each}
</div>
