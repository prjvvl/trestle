/**
 * Single source of truth for site metadata, navigation, and feature toggles.
 * Brand colors and fonts live in src/styles/global.css (the @theme block).
 * Tailwind v4's config is CSS-first, so tokens stay there, not here.
 */
export const siteConfig = {
  name: "Trestle",
  description: "A GitHub Pages site-building kit that ships with deploy, SEO, and content already wired up.",

  /** Set this to your custom domain (e.g. "example.com") to enable one.
   *  Leave empty to use the default <user>.github.io/<repo> URL.
   *  Whatever is set here is written to dist/CNAME on every build automatically. */
  domain: "",

  /** Fallback base URL used when `domain` is empty. Update the path to match your repo name. */
  url: "https://prjvvl.github.io/trestle",

  /** The canonical GitHub URL — used for "View on GitHub" and "Edit this page" links,
   *  regardless of whether social.github is also set (that one can be hidden). */
  repo: "https://github.com/prjvvl/trestle",

  social: {
    github: "https://github.com/prjvvl/trestle",
    twitter: "",
    linkedin: "",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs/quickstart", match: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],

  /** Sidebar order for src/content/docs/*.md, by filename (without .md). */
  docs: ["quickstart", "configuration", "content", "deploying"],

  /** Off by default. Each is a self-contained fast-follow, not required for a working site. */
  features: {
    search: false,
    comments: false,
    contactForm: false,
  },
} as const;
