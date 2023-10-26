<script lang="ts">
	import { title as siteTitle, url } from '$lib/config';

	const title = "Matt Lehrer's work and project timeline";
</script>

<svelte:head>
	<title>Work history | {siteTitle}</title>
	<meta content="{url}api/og?title={title}" property="og:image" />
	<meta content={title} property="og:image:alt" />
</svelte:head>

<article class="wrapper">
	<h1 class="my-8 text-4xl">Work and project history</h1>

	<ol
		id="work"
		class="list-outside list-none space-y-6 text-base font-light sm:mt-8 sm:space-y-8 sm:text-xl md:max-w-7xl"
	>
		<li>
			<div>21-23 •</div>
			<div>
				<div class="mr-2">Masters in Computer Science</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://mau.se/en/study-education/programme/TAICS">Malmö University</a>
				</div>
			</div>
		</li>
		<li>
			<div>22-23 •</div>
			<div>
				<div class="mr-2">Full-stack Developer</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.mimir.global">Mimir</a>
				</div>
			</div>
		</li>
		<li>
			<div>20-21 •</div>
			<div>
				<div class="mr-2">Founder</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.quicksilvercre.com">Quicksilver CRE</a>
				</div>
			</div>
		</li>
		<li>
			<div>20-20 •</div>
			<div>
				<div class="mr-2">Volunteer business coach</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.venturesnonprofit.org/">Ventures</a>
				</div>
			</div>
		</li>
		<li>
			<div>20-20 •</div>
			<div>
				<div class="mr-2">Developer</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://github.com/mattlehrer/itsdifferent">It's Different This Time</a>
				</div>
			</div>
		</li>
		<li>
			<div>19-20 •</div>
			<div class="mr-2">Freelance finance and strategy consulting</div>
		</li>
		<li>
			<div>19-20 •</div>
			<div>
				<div class="mr-2">Developer</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://github.com/mattlehrer/echopig">Echopig</a>
				</div>
			</div>
		</li>
		<li>
			<div>17-19 •</div>
			<div>
				<div class="mr-2">Cofounder, Finance & business operations</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.losthorsesupply.com">Lost Horse Supply Co.</a>
				</div>
			</div>
		</li>
		<li>
			<div>15-16 •</div>
			<div>
				<div class="mr-2">Strategist, emerging technologies</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://ipglab.com">IPG Media Lab</a>
				</div>
			</div>
		</li>
		<li>
			<div>14-15 •</div>
			<div>
				<div class="mr-2">Product Manager, Dashbrd</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://ipglab.com">IPG Media Lab</a>
				</div>
			</div>
		</li>
		<li>
			<div>11-13 •</div>
			<div>
				<div class="mr-2">Finance & business operations</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.tumblr.com">Tumblr, Inc.</a>
				</div>
			</div>
		</li>
		<li>
			<div>10-11 •</div>
			<div class="mr-2">Freelance financial strategy consulting</div>
		</li>
		<li>
			<div>10-10 •</div>
			<div>
				<div class="mr-2">Finance & analytics</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://anyclip.com">AnyClip</a>
				</div>
			</div>
		</li>
		<li>
			<div>08-09 •</div>
			<div>
				<div class="mr-2">Investment consultant</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://europac.com">Euro Pacific Capital</a>
				</div>
			</div>
		</li>
		<li>
			<div>06-07 •</div>
			<div>
				<div class="mr-2">Bridge & Mezzanine Lending</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://pantheonproperties.com">Pantheon Properties</a>
				</div>
			</div>
		</li>
		<li>
			<div>05-06 •</div>
			<div>
				<div class="mr-2">CRE investment analysis</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://pantheonproperties.com">Pantheon Properties</a>
				</div>
			</div>
		</li>
		<li>
			<div>03-05 •</div>
			<div>
				<div class="mr-2">Financial & market analysis</div>
				<div>
					<span class="mr-2">@</span>
					<a href="https://www.gtlaw.com">GT Advisory Co.</a>
				</div>
			</div>
		</li>
		<li>
			<div>99-03 •</div>
			<div>
				<div class="mr-2">Bachelor of Science in Engineering, Computer Science & Engineering</div>
				<div>
					<span class="mr-2">@</span>
					<a
						href="https://ugradadm.seas.upenn.edu/majors-program-options/bachelor-of-science-in-engineering-bse/computer-science/"
					>
						University of Pennsylvania</a
					>
				</div>
			</div>
		</li>
	</ol>
</article>

<style lang="postcss">
	li {
		grid-column: 1/3;
		display: grid;
		grid-template-columns: 7ch 1fr;
	}

	li > div:first-child {
		@apply font-mono;
		vertical-align: top;
	}

	li > div > div {
		@apply sm:inline;
	}

	li > div + div {
		display: inline;
	}
</style>
