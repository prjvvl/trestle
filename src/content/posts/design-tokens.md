---
title: "Why Trestle uses design tokens"
description: "Colors, spacing, and type scale live in one place so a site stays visually consistent as it grows."
date: 2026-08-29
tags: ["design", "meta"]
---

Every component in Trestle reads from a small set of CSS variables, defined once in the `@theme`
block of `src/styles/global.css`, instead of hardcoding hex codes or pixel values inline. A full
brand color scale (`brand-50` through `brand-900`), semantic `success`/`warning`/`error`/`info`
colors, and a mathematical type scale all live there. Change a value once and every component that
reads the token updates with it.

Dark is the base palette, not an afterthought bolted onto a light-first design — light only applies
when the system explicitly prefers it, or a visitor toggles it with the control in the header (see
[Components](../../components/#theme-toggle)). The choice persists in `localStorage`, independent of
whatever the OS preference is doing.

The payoff of a token system shows up the first time you need to rebrand: edit one file, not every
component that happens to reference a color.
