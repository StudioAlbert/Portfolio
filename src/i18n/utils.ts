import { withBase } from "@/utils/path";
import { type Lang, type UIKey, defaultLang, languages, ui } from "./ui";

// Langues préfixées dans l'URL (/en/…) ; la langue par défaut reste à la racine.
const prefixedLangs = (Object.keys(languages) as Lang[]).filter((l) => l !== defaultLang);

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

function stripBase(pathname: string): string {
	if (!BASE) return pathname;
	if (pathname === BASE) return "/";
	return pathname.startsWith(`${BASE}/`) ? pathname.slice(BASE.length) : pathname;
}

function langOfPath(path: string): Lang {
	const segment = path.split("/")[1];
	return prefixedLangs.find((l) => l === segment) ?? defaultLang;
}

/** Langue de la page, déduite de l'URL. */
export function getLangFromUrl(url: URL): Lang {
	return langOfPath(stripBase(url.pathname));
}

/** Chemin de la page sans base ni préfixe de langue : "/Portfolio/en/projects/" → "/projects/". */
export function getNeutralPath(url: URL): string {
	const path = stripBase(url.pathname);
	const lang = langOfPath(path);
	return lang === defaultLang ? path : path.slice(lang.length + 1) || "/";
}

/** Chemin localisé et base-aware : localizePath("/projects/", "en") → "/Portfolio/en/projects/". */
export function localizePath(path: string, lang: Lang): string {
	const rel = path.startsWith("/") ? path : `/${path}`;
	return withBase(lang === defaultLang ? rel : `/${lang}${rel}`);
}

export function useTranslations(lang: Lang) {
	return (key: UIKey): string => ui[lang][key];
}

/** Langue d'une entrée de collection : les traductions sont rangées dans un sous-dossier (ex. "en/aiguillages"). */
export function getEntryLang(id: string): Lang {
	return prefixedLangs.find((l) => id.startsWith(`${l}/`)) ?? defaultLang;
}

/** Slug d'une entrée sans son dossier de langue : "en/aiguillages" → "aiguillages". */
export function getEntrySlug(id: string): string {
	const lang = getEntryLang(id);
	return lang === defaultLang ? id : id.slice(lang.length + 1);
}
