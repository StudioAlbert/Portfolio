---
title: A* — Pathfinding
description: "Interactive A* pathfinding widget: place walls, run the search step by step and watch the f = g + h heuristic at work, then compare it with Dijkstra."
publishDate: 2026-06-04
stack: ["JavaScript", "Canvas", "Algorithms"]
tags: ["ai", "pathfinding", "teaching", "widget"]
demoUrl: "https://studioalbert.github.io/widgets/_widgets/astar_widgets.html"
demoHeight: 820
repoUrl: "https://github.com/StudioAlbert/widgets"
featured: true
draft: false
---

A teaching demo I use in class to explain pathfinding. A* starts from Dijkstra and adds a **priority** towards the goal through an "as the crow flies" heuristic: it always explores the cell with the lowest cost `f = g + h`.

## Things to try

- **Place obstacles** (walls), move the start and the goal.
- Use **step by step** or **play** to watch the order of exploration.
- Compare the behaviour with and without the heuristic to grasp what A* brings.

The playable demo is embedded on this page (`demoUrl` field). Source code: see the repo link.
