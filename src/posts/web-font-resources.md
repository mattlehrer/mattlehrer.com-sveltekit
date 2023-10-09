---
title: What to know about web fonts
description: The best resources to learn about web fonts
date: '2021-03-03'
created: 2021-02-25
categories:
  - webdev
  - typography
published: true
---

Some quick research notes on fonts, how they work on the web, and what performance and experience tradeoffs exist

- General resources and introductions to the concepts to know
  - Zach Leatherman's blog is [a great place to start](https://www.zachleat.com/web/css-tricks-web-fonts/)
  - Lee Robinson on [web fonts in 2021](https://leerob.io/blog/fonts) has seemingly one difference of opinion: `font-display: optional;` is the best choice (vs `swap`)
  - [Font Falsehoods](https://github.com/RoelN/Font-Falsehoods)
  - [Technical aspects from Google's web.dev](https://web.dev/fast/#optimize-webfonts)
  - Robin Rendle on [why fonts are worth paying attention to](https://www.robinrendle.com/notes/in-defense-of-webfonts)
- How to choose a font
  - [By flowchart](https://www.labnol.org/home/choose-fonts-with-flowchart/13488/)
  - [By expert (Typewolf)](https://www.typewolf.com/recommendations)
- Tools for typography
  - [Typeset, an NPM package for a professional look](https://github.com/davidmerfield/Typeset) - I haven't tried this but looks interesting
  - [Wakamai Fondue - /what can my font do/](https://wakamaifondue.com/)
  - [Fonttools - a python library that has an ffmpeg for fonts vibe](https://github.com/fonttools/fonttools)
  - [Subfont Netlify build plugin](https://github.com/munter/netlify-plugin-subfont) - Strip out all the unused characters from your web fonts on each build for maximum performance. Very nice, but I've had some issues running out of memory
