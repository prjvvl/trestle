---
title: "Configuration"
description: "site.config.ts is the single source of truth for metadata, navigation, and feature flags."
---

`src/site.config.ts` is the single source of truth for site metadata, navigation, and feature
flags — not scattered across components. It holds:

- `name` / `description` — used in page titles, meta tags, and the homepage hero.
- `domain` — set this to enable a custom domain; the `CNAME` file is generated from it on every
  build, so it survives a rebuild.
- `url` — fallback base URL used when `domain` is empty, i.e. the default `username.github.io/repo`
  address.
- `repo` — the canonical GitHub URL, used for "View on GitHub" and "Edit this page" links.
- `social` — links rendered in the footer; empty entries are hidden automatically.
- `nav` — the links shown in the header and mobile menu.
- `docs` — the order of pages in the docs sidebar, as an array of ids matching files in
  `src/content/docs/`.
- `features` — toggles for fast-follow integrations (search, comments, contact form) that aren't
  built yet.

Brand colors, fonts, and spacing live separately, in the `@theme` block of
`src/styles/global.css` — Tailwind v4's config is CSS-first, so there's no `tailwind.config.js` to
keep in sync.
