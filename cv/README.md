# CV — source HTML

Source du CV PDF de Sébastien Albert. Édité à la main, exporté en PDF via Chrome.

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

### Manuel (fallback)

1. Ouvrir `cv.html` dans Chrome.
2. `Ctrl+P` → Destination : **Enregistrer au format PDF**, Format A4, Marges Aucune,
   cocher **Graphiques d'arrière-plan**.
3. Enregistrer sous `cv/CV_Sebastien_Albert.pdf` puis copier dans `public/`.

## Mettre à jour le contenu

- Toutes les données (expérience, formation, compétences) sont dans `cv.html`.
- Mise en page et couleurs : `cv.css` (variable `--accent` pour la couleur d'accent).
- Le contenu doit rester cohérent avec `src/content/page/resume.md` (version web du CV). En cas
  de divergence, `resume.md` fait autorité pour les faits (dates, employeurs, clients).

## Pour les futures sessions Claude

Pour régénérer / mettre à jour le PDF :

> Mets à jour `cv/cv.html` avec [changements]. Le PDF se régénère manuellement via Chrome
> print-to-PDF (voir `cv/README.md`).

La section « Photo[à insérer] » est volontairement vide — remplacer le bloc `.photo` dans
`cv.html` par `<img src="photo.jpg" class="photo">` quand une photo sera disponible.
