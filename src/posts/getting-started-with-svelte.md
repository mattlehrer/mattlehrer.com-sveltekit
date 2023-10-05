---
title: Getting Started With Svelte
description: What are the right resources to explore if you want to start learning Svelte?
date: '2021-03-24'
categories: [svelte, webdev]
published: true
---

I wrote this up for my friend [Justin](https://www.twitter.com/jstn) who is, among other things, mostly a Ruby developer but also Objective C, a little React and has probably dabbled in a bunch more. I've been telling him how much I love Svelte and this is how I recommend getting started right now.

## What is Svelte?

### History

My naive and unquestionably lacking-in-experience understanding of the ecosystem looks like this (based mostly on blog posts and podcasts):

- Jquery made it possible to get stuff done with one syntax and stop worrying about what was possible and what the syntax was for different browsers
- Angular is heavy but added a lot of functionality (I don’t know what)
- React gets away from HTML in an interesting way: you output HTML from JS. It’s set up to make reactive(-ish) lists of similar things very easy. That was obviously the main point: its first use case was the Facebook newsfeed.
- Vue is a different (and I think better for most people) syntax from React but basically has the same goals.
- Svelte takes a new approach, moving from a library to a compiler. The compiler can figure out exactly which parts of the DOM need to be reactive and deploys only the JS necessary to make that happen. It uses a lot of the best parts of React and Vue and built-in some things that divided other communities - props and context, single file components that automatically scope CSS. Transitions and state management are built in. The community is almost completely focused on one SSR framework because it’s made by the core team (Sapper, SvelteKit in beta now).

### It just feels right

My favorite thing is that it just feels simple. There’s barely any syntax to learn. It looks almost like plain HTML (prettier than nunjucks and liquid, IMO).

The transitions are a pretty killer feature. You don’t need to learn Framer Motion or something else, they just work - and they're CSS-based, the more performant way. Actions look pretty powerful and interesting but I haven’t used them. I would guess I have had a use case for them and didn’t know it.

Another thing I haven’t done that’s interesting is that you can compile your Svelte, and export it as a web component that you could use in any project.

## How to Get Started

The why: [Rethinking Reactivity](https://youtu.be/AdNJ3fydeao)

The how: Start with the [official tutorial](https://svelte.dev/tutorial/basics), it's incredible.

Some cool stuff:

- MadewithSvelte.com is interesting, has things like this [reactive map list](https://madewithsvelte.com/reactive-map-list).
- [Sveltefire](https://github.com/codediodeio/sveltefire/) - Firebase integration
- [Mdsvex](https://mdsvex.com/) - Svelte components in Markdown (like React in MD with MDX)
- Interview with Amelia Wattenberger([Overcast link](https://overcast.fm/+DLNRLoIc)) on using Svelte for data viz on the [Data Stories podcast](https://datastori.es/163-svelte-js-for-web-based-dataviz-with-amelia-wattenberger/)(official site). It's a great intro to Svelte thinking in general but particularly for data viz.

The future: [SvelteKit](https://youtu.be/luM5uobewhA) (Snowpack mentioned in this announcement video but now using Vite v2, which is similar)

Things in SvelteKit are changing pretty frequently and in big ways so it's not how I would get started right now unless you love messing with settings and updating packages and googling new errors... New [docs](https://kit.svelte.dev/docs) are up as of yesterday.

## An early, small community has pros and cons

Because it’s fairly early there are some pain points:
ESLint is kind of annoying to [get working](https://codechips.me/eslint-svelte-typescript/). Maybe that's normal for every toolchain, though.

There are no docs and barely anything online about setting up AWS Amplify (but it’s [not that hard either](https://github.com/mattlehrer/svelte-snowpack-tailwind/tree/amplify)).

And that’s pretty common: no docs or support from things you want to integrate with.

The upside of it being early is that basically anything you learn can be turned into a blog post that’s useful for a lot of people… if you’re into that.

Have you tried it? Let me know what you think on [twitter](https://www.twitter.com/mattlehrer).
