// Textes qui diffèrent entre les langues du site. Données pures, sans import :
// ce fichier est aussi lu par site.config.ts et astro.config.ts.
// Les libellés déjà en anglais hérités du template (Writing, Share, Dark/Light…)
// restent en dur dans les composants, identiques dans les deux langues.

export const languages = {
	fr: "Français",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "fr";

export const locales: Record<Lang, { htmlLang: string; hreflang: string; ogLocale: string }> = {
	fr: { htmlLang: "fr-FR", hreflang: "fr", ogLocale: "fr_FR" },
	en: { htmlLang: "en-GB", hreflang: "en", ogLocale: "en_GB" },
};

const fr = {
	"site.description":
		"Je conçois le gameplay, l'IA et les systèmes interactifs temps réel des jeux, et je forme les programmeurs de demain.",
	"profile.jobTitle": "Programmeur Gameplay & IA · Systèmes temps réel",

	"nav.home": "Accueil",
	"nav.resume": "CV",
	"nav.blog": "Blog",
	"nav.projects": "Projets",
	"lang.label": "Langue",

	// Cartes social (Open Graph) — générées par scripts/generate-og-cards.mjs
	"og.fallback": "/social-card.png",
	"og.home": "/og/accueil.png",
	"og.projects": "/og/projets.png",
	"og.resume": "/og/cv.png",

	"home.credsLabel": "Certifications & rôles",
	"home.credTeaching": "Enseignant & Coordinateur académique · SAE Genève",
	"home.experience": "Expérience",
	// HTML autorisé (rendu via set:html)
	"home.experienceText":
		"Enseignant &amp; coordinateur académique de la section Games Programming à <strong>SAE Institute Genève</strong> — conception de cursus, encadrement de projets, masterclasses.",
	"home.experienceLink": "Voir le parcours complet →",

	"projects.title": "Projets",
	"projects.intro": "Sélection de projets — jeux Unity, expérimentations, prototypes.",

	"project.demo": "Démo",
	"project.demoTitle": "Démo jouable",
	"project.fallbackPrompt": "L'aperçu ne se charge pas ?",
	"project.fallbackItch": "Jouer sur itch.io →",
	"project.fallbackOther": "Ouvrir dans un nouvel onglet →",

	"gallery.roleDescription": "carrousel",
	"gallery.label": "Galerie",
	"gallery.playVideo": "Lire la vidéo",
	"gallery.prev": "Média précédent",
	"gallery.next": "Média suivant",
	"gallery.dots": "Sélection du média",
	"gallery.goTo": "Aller au média",
	"gallery.youtubeTitle": "Vidéo YouTube",

	"resume.contactLabel": "Coordonnées",
	"resume.pdf": "/CV_Sebastien_Albert.pdf",
	"resume.download": "Télécharger en PDF",
	"resume.expandAll": "Tout déplier",
	"resume.collapseAll": "Tout replier",
};

export type UIKey = keyof typeof fr;

// Record<UIKey, string> : une clé manquante en anglais fait échouer `astro check`.
const en: Record<UIKey, string> = {
	"site.description":
		"I design gameplay, AI and real-time interactive systems for games — and train the next generation of game programmers.",
	"profile.jobTitle": "Gameplay & AI Programmer · Real-time Systems",

	"nav.home": "Home",
	"nav.resume": "CV",
	"nav.blog": "Blog",
	"nav.projects": "Projects",
	"lang.label": "Language",

	"og.fallback": "/og/en/social-card.png",
	"og.home": "/og/en/home.png",
	"og.projects": "/og/en/projects.png",
	"og.resume": "/og/en/cv.png",

	"home.credsLabel": "Certifications & roles",
	"home.credTeaching": "Lecturer & Academic Coordinator · SAE Geneva",
	"home.experience": "Experience",
	"home.experienceText":
		"Lecturer &amp; academic coordinator for the Games Programming programme at <strong>SAE Institute Geneva</strong> — curriculum design, project supervision, masterclasses.",
	"home.experienceLink": "View full background →",

	"projects.title": "Projects",
	"projects.intro": "Selected projects — Unity games, experiments, prototypes.",

	"project.demo": "Demo",
	"project.demoTitle": "Playable demo",
	"project.fallbackPrompt": "Preview not loading?",
	"project.fallbackItch": "Play on itch.io →",
	"project.fallbackOther": "Open in a new tab →",

	"gallery.roleDescription": "carousel",
	"gallery.label": "Gallery",
	"gallery.playVideo": "Play video",
	"gallery.prev": "Previous slide",
	"gallery.next": "Next slide",
	"gallery.dots": "Choose a slide",
	"gallery.goTo": "Go to slide",
	"gallery.youtubeTitle": "YouTube video",

	"resume.contactLabel": "Contact details",
	"resume.pdf": "/CV_Sebastien_Albert_EN.pdf",
	"resume.download": "Download PDF",
	"resume.expandAll": "Expand all",
	"resume.collapseAll": "Collapse all",
};

export const ui: Record<Lang, Record<UIKey, string>> = { fr, en };
