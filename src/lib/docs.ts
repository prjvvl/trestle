import { getCollection, type CollectionEntry } from "astro:content";
import { siteConfig } from "../site.config";

export type Doc = CollectionEntry<"docs">;

/** Docs in `site.config.ts`'s `docs` order, not filesystem order. A doc
 *  whose id isn't listed there yet still builds a page (via its own route),
 *  but sorts to the end here instead of jumping to the front — rank() would
 *  otherwise map its missing entry's -1 to "first". */
export async function allDocs(): Promise<Doc[]> {
  const docs = await getCollection("docs");
  const order: readonly string[] = siteConfig.docs;
  const rank = (id: string) => {
    const i = order.indexOf(id);
    return i === -1 ? Infinity : i;
  };
  return [...docs].sort((a, b) => rank(a.id) - rank(b.id));
}

/** The pages immediately before/after `id` in `docs`' sidebar order. */
export function docNeighbors(docs: Doc[], id: string) {
  const i = docs.findIndex((d) => d.id === id);
  return {
    prev: i > 0 ? { id: docs[i - 1].id, title: docs[i - 1].data.title } : undefined,
    next: i >= 0 && i < docs.length - 1 ? { id: docs[i + 1].id, title: docs[i + 1].data.title } : undefined,
  };
}
