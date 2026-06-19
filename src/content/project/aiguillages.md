---
title: Aiguillages — Train Dispatch
description: "Démonstrateur pédagogique Unity (SAE Genève) : jeu de gestion ferroviaire — cliquez les drapeaux bleus pour guider le train et enchaîner les passages en station avant la fin du chrono."
publishDate: 2026-06-19
stack: ["Unity", "C#", "WebGL", "Splines"]
tags: ["unity", "webgl", "simulation", "pédagogie", "ferroviaire", "prototype"]
demoUrl: "https://itch.io/embed-upload/17956835?color=333333"
demoHeight: 600
demoFallbackUrl: "https://the-real-studio-albert.itch.io/aiguillages"
featured: false
draft: false
---

> **Énoncé d'examen — démonstrateur pédagogique (prototype).** Support d'examen du module Unity **4FSC0PF002** à la **SAE Institute Genève** : une base de travail que les étudiants complètent (gestion des signaux, chronomètre, score, HUD). L'objectif est l'apprentissage et l'évaluation, pas la rejouabilité.

## Le jeu

**Aiguillages** est un petit jeu de gestion ferroviaire. Un train parcourt le réseau en continu : à vous de tracer sa route en temps réel pour qu'il enchaîne le plus de passages en station possible avant la fin du chronomètre.

## Comment jouer

Toute l'interaction se fait en **cliquant sur les drapeaux bleus** présents dans la scène :

- **Drapeau d'un aiguillage** — bascule sa sortie active (indiquée dans la scène).
- **Drapeau d'un signal** — arrête ou relâche le train ; il ralentit progressivement et s'arrête au niveau du drapeau.
- **Passage en station** — marque des points.
- **Chronomètre** — tenez jusqu'à la fin.

Interface (HUD) : Démarrer · Pause · Vitesse ×2, avec chronomètre et score affichés en temps réel.

## Sous le capot

Le déplacement des trains repose sur le système **Splines** d'Unity : un `SplineContainer` définit chaque tronçon de voie, et `SplineAnimate` déplace le train le long du chemin. Les tronçons s'enchaînent dynamiquement au passage des aiguillages.

Jouable directement dans le navigateur (WebGL), sans installation. Projet réalisé avec Unity — SAE Institute Genève, section Programmation de jeux.
