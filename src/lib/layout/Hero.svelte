<section id="hero" class="wrapper" aria-labelledby="hero-heading">
	<div class="relative isolate py-12">
		<div class=" max-w-2xl py-12 lg:py-32">
			<div class="fancy-serif-regular">
				<h1 id="hero-heading" class="text-4xl tracking-tight sm:text-6xl">
					<span class="opacity-90">Hi, I'm </span><span class="fancy-serif-bold">Matt Lehrer</span>
				</h1>
				<p class="mt-6 text-xl leading-7 sm:text-3xl">
					An inquisitive American web developer, dad, and former finance strategist in Malmö,
					Sweden.
				</p>
				<p class="mt-4 flex gap-4 text-lg font-thin sm:text-2xl">
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/reading/books">Book reviews</a>
					<a href="/#projects">Portfolio</a>
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	p {
		text-wrap: balance;
	}

	section#hero a {
		background-image: linear-gradient(theme(colors.primary.800), theme(colors.primary.800)),
			linear-gradient(theme(colors.secondary.500/0.7), theme(colors.secondary.500/0.7)),
			linear-gradient(theme(colors.primary.400/0.7), theme(colors.primary.400/0.7));
		background-size:
			10px var(--underline-width),
			100% var(--underline-width),
			0 var(--underline-width);
		background-position:
			calc(10px * -1) 85%,
			100% 85%,
			0 85%;
		@apply focus-visible:outline-primary-500;
	}

	section#hero a:hover {
		background-size:
			10px var(--underline-width),
			0% var(--underline-width),
			100% var(--underline-width);
		background-position:
			calc(100% + 10px) 85%,
			100% 85%,
			0 85%;
	}
</style>
