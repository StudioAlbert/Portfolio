import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/post" }),
	schema: ({ image }) =>
		z.object({
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			description: z.string().min(10).max(160),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			title: z.string().max(120),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
});

const page = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/page" }),
	schema: z.object({
		title: z.string().max(120),
		description: z.string().max(160).optional(),
	}),
});

const project = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/project" }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(120),
			description: z.string().min(10).max(200),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			// Diaporama photo/vidéo affiché sur la page projet (ordre = ordre d'affichage).
			// Images : co-localisées et optimisées (chemin relatif ./_media/...).
			// Vidéos : fichier mp4 servi depuis /public, ou embed YouTube via son id.
			gallery: z
				.array(
					z.discriminatedUnion("type", [
						z.object({
							type: z.literal("image"),
							src: image(),
							alt: z.string(),
							caption: z.string().optional(),
						}),
						z.object({
							type: z.literal("video"),
							src: z.string(),
							poster: z.string().optional(),
							caption: z.string().optional(),
						}),
						z.object({
							type: z.literal("youtube"),
							id: z.string(),
							caption: z.string().optional(),
						}),
					]),
				)
				.default([]),
			stack: z.array(z.string()).default([]),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			// Unity WebGL build folder served from /public, or external URL (itch.io, etc.)
			demoUrl: z.string().optional(),
			// Hauteur fixe de l'iframe démo en px (sinon ratio 16:9). Utile pour les widgets verticaux.
			demoHeight: z.number().optional(),
			repoUrl: z.string().url().optional(),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { post, page, project };
