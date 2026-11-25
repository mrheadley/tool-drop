# Ember and Tide

*A personal design system for teaching materials — English B, Information Technology, and CAPE Digital Media.*

Version 1.0 · Token-based edition

---

## 1. What this system is

Ember and Tide is one shared framework holding two subject identities.

- **Ember** — Information Technology and CAPE Digital Media. Bold, technical, energetic.
- **Tide** — English B. Calm, literary, sophisticated.

Both identities sit on the same skeleton: the same fonts, the same spacing scale, the same corner radii, the same component shapes. A worksheet from Ember and a worksheet from Tide should read as siblings from the same household, not as two unrelated documents that happen to share a folder. The difference between them is which lead colour is speaking and which display typeface is on the page — everything structural underneath stays constant.

This edition of the system moves that philosophy onto a fixed set of design tokens, so every colour, weight, and space in the system traces back to a named variable rather than a one-off hex value chosen in the moment.

---

## 2. Colour

### 2.1 The two lead colours

Two saturated, confident colours anchor the whole system:

| Role | Token | Swatch |
|---|---|---|
| Tide lead (English B) | `--dodger-blue` | bright, saturated blue |
| Ember lead (IT & Digital Media) | `--amber-glow` | bright, saturated orange |

Neither is a pastel or a tint. Both are meant to read as confident and a little bit loud — this is a system for teenagers, not a corporate annual report.

### 2.2 The blue family

Blue is the one colour that got expanded past a single tone. In review, a single flat blue wasn't enough to carry Tide across headings, body accents, and buttons at once, so blue grew into a small family sharing one hue:

| Role | Token | Notes |
|---|---|---|
| Tide primary | `--tide-primary` | A calmer, deeper blue for body-adjacent accents, links, and the "quiet" register of Tide. Derived from the dodger-blue hue at lower lightness — sits tonally between `--dodger-blue` and `--ink-black`. |
| Tide bright accent | `--dodger-blue` | The original token. Used for emphasis, highlights, active states. |
| Tide CTA | `--tide-cta` | A deeper, higher-contrast blue reserved for buttons and calls to action, so interactive elements don't compete visually with plain emphasis. |

**Deliberate cross-over:** `--dodger-blue` is allowed to appear inside Ember materials too — a link, a small accent, a chart series — so that blue has presence system-wide rather than being locked away as "the English B colour." Amber never reciprocally appears as a structural colour inside Tide; the crossover runs one direction, blue into Ember, which is what keeps blue feeling like the connective tissue of the whole system rather than a second competing lead.

> **Derivation note:** Your source document only supplied one blue token (`--dodger-blue`). `--tide-primary` and `--tide-cta` are new tokens I've derived by holding blue's hue (204°) constant and adjusting lightness/saturation — see `tokens.css` for exact values. Swap them freely if you have specific values in mind.

### 2.3 Secondary accents

A secondary accent set exists for tables, charts, and playful highlights — used sparingly in area, but at full, confident saturation, never tinted down to a pastel:

| Role | Token | Source |
|---|---|---|
| Teal / cyan accent | `--stormy-teal` | Provided directly in your token set. |
| Gold accent | `--secondary-gold` | Derived — a warmer, more yellow relative of `--amber-glow`, used to distinguish a second data series from the Ember lead colour itself. |
| Coral accent | `--secondary-coral` | Derived — a warm pink-orange, the third point in the chart/table trio. |

> **Derivation note:** Your document names three secondary accents (gold, teal-leaning cyan, coral) but only supplied the teal value. Gold and coral are new tokens I've built to complete the trio — flag these first if you already have brand-specific values for them.

### 2.4 Neutrals

| Role | Token | Notes |
|---|---|---|
| Light neutral | `--alabaster-grey` | Default background for body content. |
| Dark neutral / ink | `--ink-black` | Default text colour, and the base for dark background variants. Its hue (211°) sits close to blue, which is why it reads naturally as a "Tide-leaning" dark rather than a flat, colour-neutral black. |
| Supporting scale | `--neutral-50` … `--neutral-900` | A practical grey ramp interpolated between alabaster-grey and ink-black, for borders, disabled states, and secondary text that a two-stop palette can't cover on its own. |

### 2.5 Backgrounds

- **Light default:** `--alabaster-grey` (or white) for body content, reading surfaces, and anywhere text-heavy material lives.
- **Dark, subject-tinted:** reserved for headings and emphasis moments, not full-page use. Each identity gets its own dark variant:
  - Tide dark → `--ink-black` (already blue-leaning, needs no further tinting).
  - Ember dark → `--ember-dark`, a warm near-black derived by tinting ink-black slightly toward amber's hue, so Ember's dark moments don't borrow Tide's blue undertone.

---

## 3. Typography

One quiet sans-serif carries all body text and most headings, everywhere, in every subject — this is the thread that makes Ember and Tide documents recognisably related at a glance, even before colour enters the picture.

| Role | Typeface | Used for |
|---|---|---|
| Body / UI (shared) | **Work Sans** | Body copy, captions, UI labels, most headings, across all three courses. |
| Tide display | **Newsreader** | Chapter openers, pull quotes, and highlighted literary moments in English B materials. A literary serif with warmth, not a stiff formal one. |
| Ember display | **Sora** | Chapter openers and highlighted moments in IT and Digital Media materials. A bold, geometric sans with a technical edge. |

Each display face is reserved for openers, pull quotes, and highlight moments — never for running body text. That restraint is what keeps the "one shared skeleton" feeling intact: the display font is a costume the material puts on for a moment, not a wholesale change of voice.

> **Derivation note:** Your source document described these three roles by character ("one quiet sans-serif," "a literary serif," "a bold geometric sans") without naming specific typefaces. Work Sans, Newsreader, and Sora are suggested picks matching those descriptions — swap for equivalents if you have preferred faces already.

---

## 4. Shape and layout

- **Corners:** rounded throughout — no sharp edges anywhere in the system, from buttons to callout boxes to image frames.
- **Spacing:** generous, airy by default. Even data-dense elements — rubrics, quiz-score breakdowns, tables — get real white space rather than being crammed to fit, and are still allowed colour and a bit of personality rather than defaulting to flat grey tabular styling.
- **Density:** nothing in this system should feel like a spreadsheet dropped onto a page. If a layout starts to feel cramped, the fix is more space, not smaller type.

---

## 5. Illustration and imagery

Two distinct visual layers, kept deliberately separate:

1. **Illustration** — hand-drawn, monochrome line illustrations in a single neutral ink colour. This is the signature that appears across every subject regardless of which lead colour is present on the page. It never picks up the lead colour of the subject it's illustrating.
2. **Photography** — when used, stays full-colour and untreated. No duotone, no colour-matching to the subject's lead colour, no filters. Photography and illustration should never be blended into a single treated style — they're allowed to look like two different media because they are.

---

## 6. How the two identities differ (summary)

| Axis | Tide (English B) | Ember (IT & Digital Media) |
|---|---|---|
| Lead colour | Blue family | Amber/orange |
| Display font | Newsreader (literary serif) | Sora (geometric sans) |
| Dark background | Ink-black (naturally blue-leaning) | Ember-dark (warmed toward amber) |
| Mood | Calm, literary, sophisticated | Bold, technical, energetic |
| Shared with the other identity | — | Dodger-blue accent may cross over into Ember materials |

Everything not listed above — spacing, corner radius, illustration style, body typeface, the light/dark background logic — is identical between the two. That shared skeleton is the actual point of the system: two moods, one grammar.

---

## 7. Deliverables in this package

This system is packaged to be compatible with OpenDesign's design-system format:

- `manifest.json` — package metadata and file index.
- `DESIGN.md` — this document: the narrative philosophy, for explaining the look and feel to a human.
- `tokens.css` — the structured, developer-facing token file: concrete CSS custom properties for colour, type, spacing, radius, and component-level values.

The narrative and the tokens are meant to be read together — `DESIGN.md` explains *why* a value exists and what role it plays; `tokens.css` is the value itself.
