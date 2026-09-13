import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import { type UIKey, ui } from "./i18n/ui";

export const siteConfig: SiteConfig = {
	author: "Sebastien Albert",
	date: {
		locale: "fr-FR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Valeurs FR par défaut (webmanifest) ; les pages lisent la langue courante via src/i18n.
	description: ui.fr["site.description"],
	lang: "fr-FR",
	ogLocale: "fr_FR",
	sortPostsByUpdatedDate: false,
	title: "Sebastien Albert",
	hideThemeCredit: false,
	profile: {
		name: "Sebastien Albert",
		email: "sebastien.albert.perso@gmail.com",
		github: "https://github.com/StudioAlbert",
		linkedin: "https://www.linkedin.com/in/sebastien-albert",
		jobTitle: ui.fr["profile.jobTitle"],
		employer: "SAE Institute",
		employerUrl: "https://www.sae.edu",
		alumni: "",
		avatar: "/avatar.png",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
	// Uncomment to enable analytics. Both providers load via Partytown.
	// analytics: {
	// 	googleAnalyticsId: "G-XXXXXXX",
	// 	goatcounterUrl: "https://your-handle.goatcounter.com/count",
	// },
};

// Libellés traduits dans src/i18n/ui.ts ; `path` est sans préfixe de langue.
export const menuLinks: { path: string; key: UIKey }[] = [
	{
		path: "/",
		key: "nav.home",
	},
	{
		path: "/resume/",
		key: "nav.resume",
	},
	{
		path: "/posts/",
		key: "nav.blog",
	},
	{
		path: "/projects/",
		key: "nav.projects",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
