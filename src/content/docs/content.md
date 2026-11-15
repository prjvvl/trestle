---
title: "Content"
description: "Posts are Markdown with YAML frontmatter, schema-validated through Astro's Content Layer API."
---

Posts live in `src/content/posts/*.md` as Markdown with YAML frontmatter, loaded through Astro's
Content Layer API and validated against the schema in `src/content.config.ts`. A post missing a
required field, or with the wrong type, fails the build with an error naming the file and field —
not a silently broken page.

Set `draft: true` in frontmatter, or date a post in the future, to keep it out of
`npm run build` output while still seeing it in `npm run dev`.

Docs pages (what you're reading right now) work the same way, as a separate `docs` collection in
`src/content/docs/*.md` — add a file there and its id to the `docs` array in `site.config.ts` to
add it to the sidebar.
