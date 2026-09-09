# 龍德路街區 — Neighborhood in 3D

An independent Three.js reconstruction of the Longde Road / Funong Road neighborhood in Kaohsiung, based on the supplied map views, Google Maps satellite imagery, January 2026 Street View, and local exterior references.

Live site: https://chlee-sage.github.io/longde-road-neighborhood/

Custom domain: https://artcenter.sagevelo.com/

Direct views: [Taiching storefront](https://artcenter.sagevelo.com/?view=storefront), [intersection](https://artcenter.sagevelo.com/?view=junction), [school corner](https://artcenter.sagevelo.com/?view=school). The `view` parameter accepts `aerial`, `map`, `street`, `junction`, `school`, and `storefront`; other values fall back to the aerial view.

The intersection detail pass uses the five supplied street-view images: all-way diagonal markings, zebra crossings, waiting boxes, rounded red curb lines, tiled pavements, pedestrian signals, street signs, drainage grates, stone bollards, control cabinets, bicycle racks and six bicycles, 22 scooters, a small service van and cones, shopfront signs and round windows, and the school's hedge and louvered utility wall. Positions, counts and dimensions are illustrative interpretations of the photographs, not a current traffic survey. Temporary vehicles/signage are not claims about present-day conditions. No reference photographs, personal faces or license plates are bundled. The storefront's visible business-sign lettering is reconstructed as part of the supplied reference scene.

### Taiching storefront close-up

`src/taiching-corner.js` replaces the earlier generic west-side building and flat sign overlays. Six additional supplied close-ups inform the thick stone circular aperture, recessed arcade, narrow-course beige cladding, green glazing and balcony rails, gold arched door trim, pale brass-framed wall lanterns, glazed canopy panels, tiered planting, short metal-capped bollards, and a simplified folded bronze-colored sculpture. The Taiching brand/recruiting signs and visible business-sign number are redrawn from the reference; unreadable adjacent artwork remains simplified. Generic trees in the close-up corridor are suppressed to prevent duplicate rows. This website-only pass does not regenerate the earlier GLB or Blender files.

The subsequent five front-on references refine this view further: the blue three-panel Taiching board now reads `5869685`, matching that supplied image instead of the earlier recruiting-board variant. Baishi's white education boards and yellow vertical banner are distinct from Bahan's green foreign-language signs. The teaching-poster figures are simple original illustrations, not extracted portraits. Gold sheet-metal arches, glazed transoms, grouped door pulls, a static LED-style panel, canopy downlights, freestanding leaflet boards, a terracotta pot, the `385` plaque, circular paving inlays and utility grates add close-range detail. Four frontage tree anchors sit inside open-centered hedge beds. Sign variants describe the supplied reference epoch, not independently verified current tenancy or contact information.

Repeated bicycle/scooter components are merged by material; existing static render and shadow caching remain in use. New foliage participates in the tree visibility toggle. The storefront camera gives a more frontal view of the first shops.

### Reference-focused refinement

The street-furniture pass replaces block scooters with beveled step-through bodies, exposed floorboards, separate tires/rims, forks, mirrors, exhausts, rear lamps and blank plates. Three distinct silhouettes now share the parking rows: a narrow commuter with a bar-mounted headlamp, a rounded retro scooter with a round headlamp/chrome mirrors/bulbous rear shell, and an angular sport scooter with paired low headlights/a stepped seat/split tail lights. Six style/color combinations follow a fixed mixed arrangement rather than a repeating color-only cycle. These are interpretations of visible forms, not confirmed manufacturer/model identifications or a vehicle-by-vehicle inventory. The commuter proportions use the [SYM DUKE 125 specification](https://tw.sym-global.com/2022duke125) (1,795 mm length and 1,252 mm wheelbase) as a dimensional reference. Parked scooters face the curb; the frontage row leaves the first entrance clear. The existing illustrative inventory remains 22 scooters, not a verified present-day parking count.

Close-range signal heads have three separate round housings with approximately 290 mm lenses and cylindrical hoods instead of a wide rectangular block. Tapered poles, bolted bases, access covers, wrapped hazard bands, road-sign backing plates and two separate swept-neck streetlights follow the visible reference forms. Approximate signal-head and streetlight elevations are 5.8 m and 6.9 m respectively; these are reconstruction choices, not field measurements. Curb paint is a flat ribbon, parking-bay boundaries are aligned with the row, and the navigation marker is hidden in ground-level views so it cannot be mistaken for a road marking. Terracotta pots and stone urns have modeled rims, inner walls and recessed soil. Obscured pavement markings and unmeasured pole positions remain estimates.

Parking poses use fixed per-vehicle offsets and angles rather than a uniform row or runtime randomness. Helmets are independent of vehicle color/style: six frontage helmets and two school-side helmets use mirror, handlebar and seat placements, including adjacent black and blue mirror helmets in the foreground. Open shells, inner liners, rims and hanging straps replace the earlier seat-mounted solid blobs. Hidden seat straps are excluded from geometry baking. These placements interpret the supplied photographs; obscured vehicles and helmet positions remain approximate.

The junction surface pass adds locally generated asphalt grain/bump, subtle crosswalk-paint wear, a patterned iron access cover, pavement grilles, curb joints and signal-box fixings/cables. Lowered corner ramps occupy cutouts in the raised paving and face the crossing approaches; overlapping storefront tiles, two bollards and the corner hedge are adjusted to leave their path clear. Road-sign backing plates are separated from the text planes to avoid occlusion. Surface aging, ramp dimensions and utility-cover locations are illustrative, not a surveyed inventory or accessibility certification.

The red-marked reference close-up locates the access cover on a diagonal white boundary, with a worn paint stripe continuing across its lid. The same supplied image informs the `平日`, `07:00-08:00`, `12:30-13:00`, `15:40-16:10` pavement stencils and two simplified motorcycle waiting-area symbols. These reproduce the photographed scene, not verified current traffic restrictions. Paint now uses partially transparent scuffing and small missing flakes; the storefront curb has individual stone units, and its sculpture uses paired twisted metal surfaces on a layered granite plinth. The junction camera targets this corner for direct comparison. Google's large road-name overlay and the user's red annotations are not physical model features.

The latest arrow-marked facade reference supersedes the earlier `5869685` sign variant with the photographed recruiting board and `555-1333` lettering. The circular opening now has a splayed stone reveal rather than a flat applied ring; radial joints follow its depth. Lanterns include side glazing, brass grids, stepped caps and tapered brackets. The door arches have raised scroll/leaf details, and two small wall cameras include brackets, hoods and lenses. The storefront preset frames these details more closely. Ornament, camera dimensions and stone joints remain simplified interpretations, not extracted image textures or measured fabrication geometry.

The circled side elevation now has a recessed enclosure and a closed transition below the upper brick volume, preventing unrelated background buildings from showing through. Granite surfaces and joints continue around the return; former solid-black placeholders are green-gray glazing with window frames, a recessed circular stone reveal, a soffit and a metal/glass balustrade. These side-face finishes are a coherent interpretation of the available photographs, not a measured facade specification.

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
