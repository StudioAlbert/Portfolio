---
title: A* — Recherche de chemin
description: "Widget interactif de pathfinding A* : pose des murs, lance le pas-à-pas et observe l'heuristique f = g + h, puis compare avec Dijkstra."
publishDate: 2026-06-04
stack: ["JavaScript", "Canvas", "Algorithmes"]
tags: ["ia", "pathfinding", "pédagogie", "widget"]
demoUrl: "https://studioalbert.github.io/widgets/_widgets/astar_widgets.html"
demoHeight: 820
repoUrl: "https://github.com/StudioAlbert/widgets"
featured: true
draft: false
---

Démo pédagogique que j'utilise en cours pour expliquer la recherche de chemin. L'A* part de Dijkstra et ajoute une **priorité** vers l'arrivée grâce à une heuristique « à vol d'oiseau » : on explore toujours la case de plus faible coût `f = g + h`.

## À tester

- **Pose des obstacles** (murs), déplace le départ et l'arrivée.
- **Pas-à-pas** ou **lecture** pour visualiser l'ordre d'exploration.
- Compare le comportement avec / sans heuristique pour saisir l'apport de l'A*.

La démo jouable est embarquée plus bas (champ `demoUrl`). Code source : voir le lien repo.
