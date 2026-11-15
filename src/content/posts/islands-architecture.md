---
title: "Islands, not a single-page app"
description: "Why most of a Trestle site ships zero JavaScript, and how React fits in only where you actually need it."
date: 2026-08-29
tags: ["astro", "react"]
---

A Trestle page is plain HTML by default. Nav, Footer, Hero, Card, Button — none of them ship a byte
of JavaScript on their own. When a page needs real interactivity — a filter, a live counter, a form
with client-side validation — you drop in a React component and hydrate it with a `client:*`
directive. Only that component's JavaScript reaches the browser; everything else on the page stays
static.

The [blog page](../) is the real example: the tag filter is a React island
(`client:load`), but the post list itself, the layout, and everything else on the page is
server-rendered HTML with no client-side framework attached. Open devtools, click a tag, and
nothing outside that one component re-renders — because nothing outside it is JavaScript to begin
with.

This is also why `@astrojs/react` is the only UI framework integration installed: islands work
per-component, so there's no reason to standardize on a framework for the whole site just to get
interactivity in one corner of it.
