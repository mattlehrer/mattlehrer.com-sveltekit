<script lang="ts">
	import { title } from '$lib/config';
</script>

<svelte:head>
	<title>About | {title}</title>
</svelte:head>

<div class="wrapper">
	<article class=" mt-8 text-lg sm:text-xl">
		<h1 class="my-8 text-4xl sm:text-5xl">About Matt</h1>
		<p>
			Matt is a full-stack software developer and finished a masters in computer science at Malmö
			University in September 2023. He has spent the last six years focusing on programming,
			transitioning from a career as a business operations and finance leader.
		</p>
		<p>
			At Malmö University, he learned about the pillars of sustainability, design thinking, and
			innovation. <a href="http://www.diva-portal.org/smash/record.jsf?pid=diva2:1797108"
				>His thesis developed a method</a
			>, building on Dijkstra's algorithm, for determining which electric vehicle charging stops
			result in the lowest possible charging cost for a given route. The method was tested on
			charging station data and routes in Sweden.
		</p>
		<p>
			At IPG Media Lab, he helped the world’s biggest brands identify, understand, and take
			advantage of emerging media and technology opportunities to better connect with their
			audiences. He was the first finance & operations lead at Tumblr, overseeing HR & benefits,
			investor relations, and reporting key metrics to management and the board as the social
			network scaled from 37 to 187 employees.
		</p>
		<p>
			He is an avid reader, podcast listener, electronics tinkerer, gourmet mushroom enthusiast,
			husband and father of three lovable monsters.
		</p>
		<p>See the <a href="/work">work and project history</a> for more details.</p>
	</article>
</div>

<style lang="postcss">
	p {
		margin: 1.5rem 0;
		max-width: 50ch;
	}

	a {
		text-decoration: none;
	}
</style>
