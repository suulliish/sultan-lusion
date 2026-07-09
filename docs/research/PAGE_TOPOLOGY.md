# Lusion.co — Phase 1 Recon (real, live-inspected 2026-07-09)

## CRITICAL CORRECTION vs earlier bundle-grep research
Earlier session research (grepping Lusion's minified JS bundle) found matcap+thickness+
translucency shader code and concluded the hero was a translucent glass blob — that shader
code exists in the bundle but the **current live homepage hero is NOT that**. Live recon shows:
a cluster of solid-color geometric CROSS/PLUS 3D primitives (glossy blue #1E1EE0-ish, white,
black) tumbling/orbiting on a NEAR-BLACK canvas panel, itself sitting on a LIGHT lavender-grey
page background (`rgb(240,241,250)` ≈ #F0F1FA). The translucent-blob shader code likely belongs
to a different page/project in their portfolio, not the current homepage. **sultan-glass (dark,
icy-cyan, translucent glass) was built on the wrong reference** — it's a legitimate, good-
looking site in its own right, but it is NOT an accurate Lusion homepage clone. Correcting this
now via real recon rather than continuing to build on the wrong assumption.

## Real extracted design tokens (computed styles, live page)
- Page background: `rgb(255,255,255)` outer / hero panel is a light lavender `rgb(240,241,250)`
- Body text color: dark navy-black `rgb(0,0,0)`–ish, with `rgb(43,46,58)` (#2B2E3A) as the
  primary "dark" UI color (used on the filled "Let's talk" pill button)
- Font: **Aeonik** (licensed/proprietary — cannot self-host; substitute a close free geometric
  sans for our clone: Cabinet Grotesk, General Sans, or Switzer are the usual free Aeonik-
  alikes used by clone communities)
- H1: 36px, weight 400 (NOT bold — light/regular weight even at hero scale, notably restrained)
- Buttons: pill-shaped, `border-radius: 87.5px` (i.e. `border-radius: 9999px` / fully round),
  generous horizontal padding (~15-23px), two variants: filled dark-navy (`Let's talk` primary
  CTA) and filled light-grey `rgb(228,230,239)` (Menu toggle)
- Nav links (Home/About us/Projects/Contact): flat/transparent bg, `padding: 16px 26px`, black
  text, no border-radius — a horizontal menu revealed via the "Menu" pill toggle (not always-
  visible top nav — this is a slide-out/overlay menu pattern)
- Corner "+" plus-marks at all 4 viewport corners + "SCROLL TO EXPLORE" bottom-center label —
  a distinctive framing device around the hero canvas panel
- 3 `<canvas>` elements present (multiple WebGL layers/passes, confirms heavy custom pipeline
  from the earlier bundle research)
- **Confirmed scroll-hijack**: `document.documentElement.scrollHeight` = 900px = exactly one
  viewport height at load. This means Lusion does NOT use native document scroll for its main
  experience — it's a virtual-scroll/WebGL-driven single-viewport app (matches earlier bundle
  research: no gsap/lenis/ScrollTrigger found, fully custom scroll-physics piped to shaders).
  **This confirms the clone-website skill's DOM/CSS extraction approach has real limits here**
  — there is very little "page" to extract in the traditional sense; most of the experience
  lives inside the WebGL canvas + custom JS scroll handling, not in scrollable DOM sections.

## What's genuinely clonable via DOM/CSS extraction (skill's strength)
- The pill-button design system (colors, radii, padding) — clonable, valuable, reusable.
- The corner-plus-marks + "SCROLL TO EXPLORE" framing device — clonable, distinctive, cheap.
- The light lavender-on-white chrome with a near-black canvas "window" for the 3D — clonable
  layout pattern (canvas as a contained panel, not full-bleed background).
- The restrained/light-weight (400, not 700-900) large H1 typography — a real, valuable,
  cloneable typographic choice (most "premium 3D site" clones default to heavy/black type;
  Lusion's actual choice is lighter-weight, more confident-quiet than expected).

## What's NOT meaningfully clonable via DOM/CSS extraction
- The actual 3D geometry/materials/lighting inside the 3 canvases — lives in a 1.2MB minified
  WebGL bundle, not in extractable DOM/CSS. Must be HAND-BUILT from technique research, not
  extracted. (Prior cycle's Part-A research on bloom/vignette/halo/matcap params is still the
  right reference for HOW to build custom Three.js visuals in this general quality tier — just
  note the CURRENT homepage hero specifically is glossy solid-color cross primitives, not a
  translucent blob; a future cycle should decide which visual to actually build: recreate the
  crosses, or take creative license and build something else Lusion-caliber but original.)
- The custom scroll-physics engine (no gsap/lenis found) — would need to be hand-built to match,
  or (more practically) our existing Lenis+GSAP stack used instead since it already achieves a
  comparable "smooth" feel via a proven, debuggable, well-documented path.

## Recommendation for next cycle
Do NOT attempt a literal pixel-clone of Lusion's WebGL canvases (technically infeasible via
extraction, per above). DO port the genuinely clonable DOM/CSS chrome (pill buttons, corner-
plus framing, light lavender panel-canvas layout, restrained-weight large type) into the
sultan-lusion Next.js scaffold as the FOUNDATION, then hand-build an ORIGINAL Three.js hero
INSIDE that canvas-panel treatment — using our own gold-accent brand (not blue/white/black,
which is Lusion's brand not Sultan's) so the result reads as "Lusion-caliber craft, Sultan's
brand" rather than a literal copy. This is both more honest (no trademark/copy risk on Lusion's
exact blue-cross brand asset) and more valuable (produces something that's actually usable as
Sultan's site, not a Lusion tribute).
