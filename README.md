# 龍德路街區 — Neighborhood in 3D

An independent Three.js reconstruction of the Longde Road / Funong Road neighborhood in Kaohsiung, based on the supplied map views, Google Maps satellite imagery, January 2026 Street View, and local exterior references.

Live site: https://chlee-sage.github.io/longde-road-neighborhood/

Custom domain: https://artcenter.sagevelo.com/

Direct views: [Taiching storefront](https://artcenter.sagevelo.com/?view=storefront), [intersection](https://artcenter.sagevelo.com/?view=junction), [school corner](https://artcenter.sagevelo.com/?view=school). The `view` parameter accepts `aerial`, `map`, `street`, `junction`, `school`, and `storefront`; other values fall back to the aerial view.

The intersection detail pass uses the five supplied street-view images: all-way diagonal markings, zebra crossings, waiting boxes, rounded red curb lines, tiled pavements, pedestrian signals, street signs, drainage grates, stone bollards, control cabinets, bicycle racks and six bicycles, 22 scooters, a small service van and cones, shopfront signs and round windows, and the school's hedge and louvered utility wall. Positions, counts and dimensions are illustrative interpretations of the photographs, not a current traffic survey. Temporary vehicles/signage are not claims about present-day conditions. No reference photographs, personal faces or license plates are bundled. The storefront's visible business-sign lettering is reconstructed as part of the supplied reference scene.

### Taiching storefront close-up

`src/taiching-corner.js` replaces the earlier generic west-side building and flat sign overlays. Six additional supplied close-ups inform the thick stone circular aperture, recessed arcade, narrow-course beige cladding, green glazing and balcony rails, gold arched door trim, pale brass-framed wall lanterns, glazed canopy panels, tiered planting, short metal-capped bollards, and a simplified folded bronze-colored sculpture. The Taiching brand/recruiting signs and visible business-sign number are redrawn from the reference; unreadable adjacent artwork remains simplified. Generic trees in the close-up corridor are suppressed to prevent duplicate rows. This website-only pass does not regenerate the earlier GLB or Blender files.

Repeated bicycle/scooter components are merged by material; existing static render and shadow caching remain in use. New foliage participates in the tree visibility toggle. Browser checks cover the two new views and the five-button layout at 320 px width.

### Reference-focused refinement

The supplied five photographs are the reference epoch for shop and delivery-vehicle details. Blue Taiching signage and orange Genius English signage replace generic signs. An orange delivery truck carries reconstructed text reading `KERRY / TJ LOGISTICS / 嘉里大榮物流` on both cargo-box sides. The brand artwork is a local typographic approximation, not an official logo asset; transient vehicles and shop tenancy are not verified current conditions.

Road-name overlays are now navigation labels shown only in the aerial/plan views, not painted street text. Unverified `停`/`待轉` characters were removed while retaining the waiting-box outlines; `慢` is yellow, approach stop bars cover incoming lanes, and diagonal crossing boundaries form wider paired corridors. Vehicle signal heads face their approaches, have lens hoods, and use an illustrative north/south-green, east/west-red snapshot. Pedestrian displays include a red standing figure and one reference-style amber `30` over a green figure. These are static visual references, not a working traffic phase simulation.

`src/reference-details.js` records four individually positioned foreground school-side trunks. Automatic tree generation is excluded from that same bounded corridor, preventing doubled rows. The four anchors are a reconstruction scope, not a certified count of every tree in the photograph or the street. Obscured/background trees remain approximate; a complete dated panorama or field inventory is still needed to establish an exact whole-street count.

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
