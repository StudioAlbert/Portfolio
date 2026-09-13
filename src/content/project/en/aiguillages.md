---
title: Aiguillages — Train Dispatch
description: "Unity teaching demo (SAE Geneva): a railway management game — click the blue flags to route the train and chain as many station stops as possible before the timer runs out."
publishDate: 2026-06-19
stack:
  - Unity
  - C#
  - WebGL
  - Splines
tags:
  - unity
  - webgl
  - simulation
  - teaching
  - railway
  - prototype
demoUrl: "https://itch.io/embed/4683248?bg_color=333333&fg_color=eeeeee&link_color=fa5c5c&border_color=444444"
demoHeight: 167
featured: true
draft: false
ogImage: "/og/BannerAiguillages-Epic.png"
---

> **Exam brief — teaching demo (prototype).** Exam material for the Unity module **4FSC0PF002** at **SAE Institute Geneva**: a starting project that students complete (signal handling, timer, score, HUD). The goal is learning and assessment, not replayability.

## The game

**Aiguillages** ("railway switches") is a small railway management game. A train runs across the network continuously: it is up to you to plot its route in real time so it chains as many station stops as possible before the timer runs out.

## How to play

Everything happens by **clicking the blue flags** placed around the scene:

- **Switch flag** — toggles its active exit (shown in the scene).
- **Signal flag** — stops or releases the train; it slows down gradually and halts at the flag.
- **Station stop** — scores points.
- **Timer** — hold out until the end.

Interface (HUD): Start · Pause · Speed ×2, with the timer and score shown in real time.

## Under the hood

Train movement is built on Unity's **Splines** package: a `SplineContainer` defines each track section, and `SplineAnimate` moves the train along the path. Sections are chained dynamically as the train runs through the switches.

Playable straight in the browser (WebGL), no installation required. Made with Unity — SAE Institute Geneva, Games Programming department.
