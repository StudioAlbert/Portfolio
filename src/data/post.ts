import { type CollectionEntry, getCollection } from "astro:content";
import type { Lang } from "@/i18n/ui";
import { getEntryLang } from "@/i18n/utils";
import { siteConfig } from "@/site-config";

/** Fetch all posts — only those in `lang` when given. Drafts are excluded in production builds. */
export async function getAllPosts(lang?: Lang): Promise<CollectionEntry<"post">[]> {
	return await getCollection("post", ({ data, id }) => {
		if (lang && getEntryLang(id) !== lang) return false;
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** Date used for sorting — `updatedDate` if `siteConfig.sortPostsByUpdatedDate`, else `publishDate`. */
export function getPostSortDate(post: CollectionEntry<"post">): Date {
	return siteConfig.sortPostsByUpdatedDate && post.data.updatedDate !== undefined
		? new Date(post.data.updatedDate)
		: new Date(post.data.publishDate);
}

/** Sort by `getPostSortDate`, newest first. Mutates input. */
export function sortMDByDate(posts: CollectionEntry<"post">[]): CollectionEntry<"post">[] {
	return posts.sort((a, b) => {
		const aDate = getPostSortDate(a).valueOf();
		const bDate = getPostSortDate(b).valueOf();
		return bDate - aDate;
	});
}
