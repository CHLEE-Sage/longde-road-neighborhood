# 龍德路街區 — Neighborhood in 3D

An independent Three.js reconstruction of the Longde Road / Funong Road neighborhood in Kaohsiung, based on the supplied map views, Google Maps satellite imagery, January 2026 Street View, and local exterior references.

Live site: https://chlee-sage.github.io/longde-road-neighborhood/

GitHub Pages is served from the generated `gh-pages` branch. After source changes, run `npm run build`, copy the new `dist/` contents to that branch, and push it.

## Run locally

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. The page has aerial, top-down, and entrance close-up views; labels, trees, and building-height toggles; and orbit, zoom, and pan controls.

## Build

```powershell
npm run build
npm run preview
```

The scene is a manually reconstructed visual model. Building heights, unseen walls, facade spacing, and minor ornament are simplified. Windsor is modeled as two 30-floor towers based on published community information and street-level references; this is not a survey, BIM model, or photogrammetry capture. No map tiles, Street View images, or private user screenshots are included.
