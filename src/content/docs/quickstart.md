---
title: "Quickstart"
description: "Two ways to get Trestle: a dedicated repo for the site, or a subfolder inside one you already have."
---

Trestle is a GitHub template repository, not a project you clone directly — cloning it would drag
along its own history and remote. Pick whichever of these matches what you're building.

## A dedicated repo for the site

Use this when the site is the whole project — a blog, a portfolio, docs for something that doesn't
already have a repo of its own.

1. On [github.com/prjvvl/trestle](https://github.com/prjvvl/trestle), click **Use this template →
   Create a new repository**. This creates a clean copy under your own account, with no shared
   history or remote.
2. Clone *your* new repository and run it:

```bash
git clone https://github.com/you/your-site.git
cd your-site
npm install
npm run dev
```

## Adding it into a repo you already have

Use this when the site is secondary to an existing project — e.g. a docs/marketing site living
alongside an app or library's code, the way this exact pattern shows up in practice. "Use this
template" always creates a brand-new top-level repo, so it doesn't fit here; instead, pull
Trestle's files straight into a subfolder with [tiged](https://github.com/tiged/tiged) (no git
history, no new repo):

```bash
cd your-existing-repo
npx tiged prjvvl/trestle site
cd site
npm install
npm run dev
```

The Astro project now lives at `your-existing-repo/site/`. The one thing this doesn't handle for
you: `.github/workflows/ci.yml` and `deploy.yml` assume the Astro project sits at the repo root. If
it's in a subfolder, add `working-directory: ./site` to their build steps and point
`actions/upload-pages-artifact`'s `path` at `site/dist`.

## Either way, open it up

Open `http://localhost:4321`. From there:

1. Edit `src/site.config.ts` — name, description, domain, social links, navigation.
2. Edit brand colors and fonts in `src/styles/global.css` (the `@theme` block).
3. Add content as Markdown files in `src/content/posts/`.
4. Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically. See [Deploying](../deploying/).
