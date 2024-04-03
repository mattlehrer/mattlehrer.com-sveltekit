<script lang="ts">
	import DividerBehindHeading from '$lib/components/DividerBehindHeading.svelte';
	import ProjectCard from '$lib/components/portfolio/cards/ProjectCard.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import whomToFollow from '$lib/components/portfolio/cards/images/wtf.png?format=avif;webp;png&as=sm';
	import manicPixieDreamUrl from '$lib/components/portfolio/cards/images/manicpixiedreamurl.png?format=avif;webp;png&as=sm';
	import quicksilvercre from '$lib/components/portfolio/cards/images/quicksilvercre.png?format=avif;webp;png&as=sm';

	const projectBriefs = [
		{
			id: 'manicpixie',
			title: 'Manic Pixie Dream URL',
			description: `A social network for parked domains.`,
			image: manicPixieDreamUrl,
			href: 'https://manicpixiedreamurl.com',
		},
		{
			id: 'whomtofollow',
			title: 'Whom To Follow',
			description:
				'A privacy-focused social discovery tool for ActivityPub social networks like Mastodon.',
			image: whomToFollow,
			href: 'https://whomtofollow.com',
		},
		{
			id: 'quicksilvercre',
			title: 'QuicksilverCRE',
			description:
				'A commercial real estate investment analysis tool, starting with a multi-tenant industrial buildings.',
			image: quicksilvercre,
			href: 'https://app.quicksilvercre.com',
		},
	];
</script>

<section class="wrapper pb-8 sm:pb-16" aria-labelledby="projects-heading">
	<div class="full-bleed relative py-8 sm:py-16">
		<DividerBehindHeading />
		<h2 id="projects-heading" class="relative flex justify-center">
			<span>Projects</span>
		</h2>
	</div>
	<div class=" mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
		{#each projectBriefs as projectBrief}
			<ProjectCard
				id={projectBrief.id}
				title={projectBrief.title}
				description={projectBrief.description}
				image={projectBrief.image}
				href={projectBrief.href}
			/>
		{/each}
	</div>
	<!-- div takes padding to align with the rest of the page  -->
	<div>
		<a
			href="/projects"
			class="tag-colors mt-8 flex max-w-max items-center rounded px-4 py-2 text-lg font-light hover:scale-110 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>More projects and details <ArrowRight class="ml-2 inline-block" /></a
		>
	</div>
</section>
