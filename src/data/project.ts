import { type CollectionEntry, getCollection } from "astro:content";
import type { Lang } from "@/i18n/ui";
import { getEntryLang } from "@/i18n/utils";

/** Projets d'une langue, du plus récent au plus ancien. Brouillons exclus en production. */
export async function getProjects(lang: Lang): Promise<CollectionEntry<"project">[]> {
	const projects = await getCollection(
		"project",
		({ data, id }) => getEntryLang(id) === lang && (import.meta.env.PROD ? !data.draft : true),
	);
	return projects.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
