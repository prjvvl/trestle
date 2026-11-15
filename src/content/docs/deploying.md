---
title: "Deploying"
description: "Push to GitHub, flip Pages to GitHub Actions, and push to main."
---

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main` — the `deploy.yml` workflow builds and publishes the site.
4. If using a custom domain, set it in `src/site.config.ts` (`domain` field) before pushing, and
   point your DNS at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Every pull request also runs `.github/workflows/ci.yml` — a type-check and a full build — before
merge.
