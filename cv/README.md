# CV — source HTML

Source des CV PDF de Sébastien Albert. Édités à la main, exportés en PDF via Chrome/Edge.

## Variantes

Trois versions, même gabarit (`cv.css`, `photo.jpg`) :

- **`cv.html`** → `public/CV_Sebastien_Albert.pdf` — version **enseignement** (par défaut, cadrage
  Gameplay & IA · Enseignant & Coordinateur académique).
- **`cv-industrie.html`** → `public/CV_Sebastien_Albert_Industrie.pdf` — version **industrie**,
  orientée logiciel / tech : mène avec le développement hands-on (Studio Albert, parcours dev
  LogSystem/PRESI/Gebo, projets techniques) et condense l'enseignement.
- **`cv-en.html`** → `public/CV_Sebastien_Albert_EN.pdf` — version **anglaise** (anglais
  britannique) de la variante enseignement, téléchargée depuis la page CV anglaise du site
  (`/en/resume/`).

## Générer le PDF

### Automatique (recommandé)

Depuis la racine du repo, une seule commande via Edge headless (Chrome marche aussi) :

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="$PWD\public\CV_Sebastien_Albert.pdf" `
  "file:///$($PWD -replace '\\','/')/cv/cv.html"
```

Le PDF est généré directement dans `public/` pour être téléchargeable depuis le bouton
« Télécharger en PDF » sur la page CV du site (`/CV_Sebastien_Albert.pdf`).

Pour la **variante industrie**, même commande en remplaçant les deux noms de fichier :

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="$PWD\public\CV_Sebastien_Albert_Industrie.pdf" `
  "file:///$($PWD -replace '\\','/')/cv/cv-industrie.html"
```

Et pour la **variante anglaise** :

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="$PWD\public\CV_Sebastien_Albert_EN.pdf" `
  "file:///$($PWD -replace '\\','/')/cv/cv-en.html"
```

### Manuel (fallback)

1. Ouvrir `cv.html` dans Chrome.
2. `Ctrl+P` → Destination : **Enregistrer au format PDF**, Format A4, Marges Aucune,
   cocher **Graphiques d'arrière-plan**.
3. Enregistrer sous `cv/CV_Sebastien_Albert.pdf` puis copier dans `public/`.

## Mettre à jour le contenu

- Toutes les données (expérience, formation, compétences) sont dans `cv.html` (et
  `cv-industrie.html` / `cv-en.html` pour les autres variantes) — penser à reporter les
  changements de faits dans les trois si besoin.
- Mise en page et couleurs : `cv.css` (variable `--accent` pour la couleur d'accent), partagé
  par les trois variantes.
- Le contenu doit rester cohérent avec `src/content/page/resume.md` (version web du CV) et,
  pour la variante anglaise, avec `src/content/page/en/resume.md`. En cas de divergence,
  `resume.md` fait autorité pour les faits (dates, employeurs, clients).

## Pour les futures sessions Claude

Pour régénérer / mettre à jour le PDF :

> Mets à jour `cv/cv.html` avec [changements]. Le PDF se régénère manuellement via Chrome
> print-to-PDF (voir `cv/README.md`).

La section « Photo[à insérer] » est volontairement vide — remplacer le bloc `.photo` dans
`cv.html` par `<img src="photo.jpg" class="photo">` quand une photo sera disponible.
