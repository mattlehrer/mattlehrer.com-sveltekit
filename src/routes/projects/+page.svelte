<script lang="ts">
	import Projects from '$lib/components/portfolio/Projects.svelte';
	import { url } from '$lib/config';
</script>

<svelte:head>
	<title>Matt Lehrer's web development projects and portfolio</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Matt Lehrer's web development projects and portfolio" />
	<meta
		content="{url}api/og?title=Matt Lehrer's web development projects and portfolio"
		property="og:image"
	/>
	<meta content="Matt Lehrer's web development projects and portfolio" property="og:image:alt" />
</svelte:head>

<Projects />
