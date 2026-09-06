# 龍德路街區 — Neighborhood in 3D

An independent Three.js reconstruction of the Longde Road / Funong Road neighborhood in Kaohsiung, based on the supplied map views, Google Maps satellite imagery, January 2026 Street View, and local exterior references.

Live site: https://chlee-sage.github.io/longde-road-neighborhood/

Custom domain: https://artcenter.sagevelo.com/

Direct views: [intersection](https://artcenter.sagevelo.com/?view=junction), [school corner](https://artcenter.sagevelo.com/?view=school). The `view` parameter accepts `aerial`, `map`, `street`, `junction`, and `school`; other values fall back to the aerial view.

The intersection detail pass uses the five supplied street-view images: all-way diagonal markings, zebra crossings, waiting boxes, rounded red curb lines, tiled pavements, pedestrian signals, street signs, drainage grates, stone bollards, control cabinets, bicycle racks and six bicycles, 22 scooters, a small service van and cones, shopfront signs and round windows, and the school's hedge and louvered utility wall. Positions, counts and dimensions are illustrative interpretations of the photographs, not a current traffic survey. Temporary vehicles/signage are not claims about present-day conditions. No reference images, personal faces, phone numbers or license plates are bundled.

Repeated bicycle/scooter components are merged by material; existing static render and shadow caching remain in use. New foliage participates in the tree visibility toggle. Browser checks cover the two new views and the five-button layout at 320 px width.

GitHub Pages is served from the generated `gh-pages` branch. The build uses relative asset paths so it works at both the repository Pages path and the custom domain root. After source changes, run `npm run build`, copy the new `dist/` contents to that branch, and push it.

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
