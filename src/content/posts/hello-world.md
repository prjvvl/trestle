---
title: "Introducing Trestle"
description: "A GitHub Pages site-building kit that ships with deploy, SEO, and content already wired up — and why it exists."
date: 2026-08-29
tags: ["meta"]
---

Most static sites spend their first day solving problems that have nothing to do with the actual
content: wiring a GitHub Actions deploy, getting a custom domain and `CNAME` file right, adding
meta tags and a sitemap so the site is discoverable, and building a handful of components that
actually look consistent with each other. Static site generators and themes are a solved problem —
that glue around them isn't, and gets re-wired by hand on every new site.

Trestle bundles that glue once. Use it as a GitHub template, edit `src/site.config.ts`, push to
`main` — GitHub Actions builds and publishes to GitHub Pages automatically.

## What's in v0.1.0

- A GitHub Actions deploy workflow, already wired to `actions/deploy-pages`
- Custom domain support — set `domain` in `site.config.ts` and the `CNAME` file regenerates on every build
- Markdown content via Astro's Content Layer API, schema-validated so bad frontmatter fails the build instead of shipping a broken page
- A design-token-driven component set: Nav, Footer, Hero, Card, Button, plus a dark/light theme toggle
- An SEO baseline — meta tags, Open Graph tags, a sitemap
- CI that type-checks and builds every pull request

This site is built on Trestle itself, not a separate page bolted on top of it. See
[Components](../../components/) for the pieces it ships with, and [Docs](../../docs/quickstart/) for how to configure and
deploy one of your own.
