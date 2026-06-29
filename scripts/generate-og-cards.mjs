// Génère les cartes social statiques (Open Graph) à la charte du site.
// Usage : `node scripts/generate-og-cards.mjs`
// Les PNG produits sont des fichiers statiques (commités) dans public/.
// Édite le tableau CARDS ci-dessous puis relance pour les régénérer.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { html } from "satori-html";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const fontsDir = path.join(root, "src/assets/fonts");
const publicDir = path.join(root, "public");

const font = (file) => fs.readFileSync(path.join(fontsDir, file));

const fonts = [
	{ data: font("newsreader-regular.ttf"), name: "Newsreader", style: "normal", weight: 400 },
	{ data: font("newsreader-semibold.ttf"), name: "Newsreader", style: "normal", weight: 600 },
	{ data: font("newsreader-italic.ttf"), name: "Newsreader", style: "italic", weight: 400 },
	{ data: font("jetbrainsmono-regular.ttf"), name: "JetBrains Mono", style: "normal", weight: 400 },
];

const HOST = "studioalbert.github.io";

// eyebrow = libellé mono cuivre · title = gros titre serif · subtitle = sous-titre serif
const CARDS = [
	{
		out: "social-card.png", // fallback générique (404, pages sans carte dédiée)
		eyebrow: "Portfolio",
		title: "Sebastien Albert",
		subtitle: "Programmeur Gameplay & IA · Systèmes temps réel",
	},
	{
		out: "og/accueil.png",
		eyebrow: "Accueil",
		title: "Sebastien Albert",
		subtitle:
			"Je conçois le gameplay, l'IA et les systèmes interactifs temps réel des jeux, et je forme les programmeurs de demain.",
	},
	{
		out: "og/projets.png",
		eyebrow: "Projets",
		title: "Projets",
		subtitle: "Jeux Unity, expérimentations, prototypes.",
	},
	{
		out: "og/cv.png",
		eyebrow: "CV",
		title: "Sebastien Albert",
		subtitle: "Programmeur Gameplay & IA · Enseignant — SAE Institute Genève",
	},
];

const titleSize = (t) => (t.length > 28 ? 64 : t.length > 18 ? 76 : 88);

const markup = (c) =>
	html`<div tw="flex flex-col w-full h-full px-20 py-16" style="background-color: #1a1715; font-family: Newsreader;">
		<p tw="text-2xl mb-8 tracking-widest uppercase" style="font-family: JetBrains Mono; color: #c89761;">
			${c.eyebrow}
		</p>
		<h1 tw="leading-tight mb-8" style="font-size: ${titleSize(c.title)}px; color: #fbf6ec; font-weight: 600;">
			${c.title}
		</h1>
		<p tw="text-3xl leading-snug" style="color: #a89c8a; max-width: 900px;">
			${c.subtitle}
		</p>
		<div tw="flex flex-1"></div>
		<div tw="flex justify-between items-end w-full">
			<p tw="text-xl tracking-wide" style="font-family: JetBrains Mono; color: #6b5e4f;">
				Sebastien Albert
			</p>
			<p tw="text-lg tracking-wide" style="font-family: JetBrains Mono; color: #6b5e4f;">
				${HOST}
			</p>
		</div>
	</div>`;

for (const card of CARDS) {
	const svg = await satori(markup(card), { width: 1200, height: 630, fonts });
	const png = new Resvg(svg).render().asPng();
	const outPath = path.join(publicDir, card.out);
	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, png);
	console.log(`✓ ${card.out}`);
}
