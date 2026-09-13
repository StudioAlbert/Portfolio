import { getAllPosts } from "@/data/post";
import type { Lang } from "@/i18n/ui";
import { getEntrySlug, localizePath, useTranslations } from "@/i18n/utils";
import { siteConfig } from "@/site-config";
import rss from "@astrojs/rss";

/** Flux RSS des posts d'une langue (/rss.xml, /en/rss.xml). */
export async function getRssFeed(lang: Lang) {
	const posts = await getAllPosts(lang);

	return rss({
		title: siteConfig.title,
		description: useTranslations(lang)("site.description"),
		site: new URL(localizePath("/", lang), import.meta.env.SITE).toString(),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `posts/${getEntrySlug(post.id)}/`,
		})),
	});
}
