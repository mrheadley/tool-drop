# Ember and Tide — look-and-feel review (proposed v1.1)

Reviewed 25 November 2026 against `DESIGN.md`, `tokens.css`, `manifest.json`, `ember-and-tide-philosophy.md` and `demo.html`.

The concept is sound: two subject identities on one structural skeleton is a good fit for a collection that spans English B, IT and Digital Media. The problem is not the idea — it is that the system has never been used by a real page, and several of its documented colour pairings are unreadable. These recommendations keep the "two moods, one grammar" structure and make it usable in production.

## Priority 1 — fix contrast before anything else

Computed WCAG ratios from the current tokens:

| Pair | Ratio | Where it appears | Change |
|---|---:|---|---|
| White on `--amber-glow` `#ff9900` | 2.14:1 | `.btn--ember`, demo CTA | Use `--ink-black` text on amber (about 6.4:1). Keep amber as a saturated fill; stop using white on it. |
| White on `--ember-cta-bg-hover` `#cc7a00` | 3.31:1 | `.btn--ember:hover` | Darken/lighten hover with ink text, e.g. `#e08a00` + `--ink-black`. |
| Amber as small text on `--surface-light-alt` | 1.99:1 | Demo kicker labels, Sora specimen | Add `--ember-ink: #7a4a00` for amber-role text, links, outlines and tags. |
| `--dodger-blue` on `--alabaster-grey` | 2.27:1 | Emphasis/active states | Reserve `#0099ff` for fills and dark backgrounds. Use `--tide-cta` `#0a72b8` for text and links (about 5.2:1 on white). Add `--tide-ink` as an alias. |
| `--secondary-gold` `#f2b90d` on white | 1.79:1 | Chart series 2 | Darken to `#a97400` for marks on light surfaces, or add a dark outline and a text label. |
| `--secondary-coral` `#f0644c` on white | 3.17:1 | Chart series 3 | Darken to `#c2412b` for small marks. |

The dark bands already work well: `#0099ff` on `#0d1b2a` is 5.80:1 and amber on `#241a0f` is 7.98:1. Keep that pattern — it is the strongest thing in the current system.

**Rule to add to `DESIGN.md`:** the lead colours are fills and large-area signals. Text, links, borders and small data marks use the ink variants. This preserves the "bright posters" feeling without asking white text to sit on a bright yellow-orange.

## Priority 2 — make `tokens.css` the actual source of truth

`demo.html` copies the tokens inline, and it has already drifted:

- `--fs-display` is `3.25rem` in the demo but `3.5rem` in `tokens.css`.
- `--neutral-950` is missing from the demo.
- Heading-band padding differs (`var(--space-8)` vs `var(--space-8) var(--space-6)`).
- `.card` uses white plus a border in the demo, but `--surface-light` in the token file — so the documented light default is never shown.
- Components use raw `--dodger-blue` / `--amber-glow` despite the "reference roles, not raw colours" rule.

Link `tokens.css` from the demo and from real pages. Delete the inline token copy. Add `demo.html` and `ember-and-tide-philosophy.md` to the `files` list in `manifest.json` and `DESIGN.md` §7. Replace the three "**Derivation note:** … swap them freely" blocks with decisions and short rationale — a design document should not read like an unfinished handoff.

## Priority 3 — specify the states the system is missing

There are no focus, active, disabled, selected, error, success, warning, link, input, tag or alert specs. Only button hover is defined, and there is no `prefers-reduced-motion` handling. Add:

- `--focus-ring: var(--tide-cta)` and a single `:focus-visible` rule for both identities.
- Motion tokens: `--duration-quick: 150ms`, `--ease-standard: cubic-bezier(.2, .7, .2, 1)`, plus a reduced-motion override.
- Border-width tokens (`--border-hairline: 1px`, `--border-accent: 4px`) to replace hardcoded `1px`, `1.5px` and `4px`.
- State colours for success, warning and error. `digital-media/review/revision-hub.html` already has working local versions — promote those rather than inventing new ones.
- Specs for links, inputs, tags, alerts and navigation. Tags and score bars already appear in the demo without being specified.

## Priority 4 — make the typography do what the philosophy promises

- Use a fluid display step, e.g. `clamp(2.2rem, 5.5vw, var(--fs-display))`, and add an 18/20px intermediate step between body and `--fs-h3`.
- Demonstrate Sora at `--fw-bold` (the spec says "bold, geometric", but the demo specimen sets no weight).
- Show Newsreader in regular and italic, and apply `--lh-body-serif: 1.7` to a real serif quote specimen — currently only `--lh-heading: 1.15` is used.
- Tokenise the stray `0.65rem`, `0.7rem`, `0.75rem` and `1.05rem` sizes.
- Remove un-tokenised ad hoc letter-spacing values or add tracking tokens.

## Priority 5 — deliver the signature illustration, not generic icons

The three demo SVGs use perfect circles, uniform 2.5px strokes and identical viewBoxes — they read as clean UI icons, not the promised hand-drawn ink line illustrations. Add irregular, slightly open strokes with varied weights, and document scale, placement, stroke-width and how many motifs per page. Add an on-dark ink value so the signature can appear inside the identity bands. For photography, add aspect-ratio, caption and alt-text conventions; none exist today.

## Priority 6 — tighten layout rhythm

The demo gives every section a `6rem` bottom margin with no mobile reduction, producing a very long narrow page. Add responsive spacing overrides and a container-width token. Replace the two-token gradient hero with a single identity band — or state explicitly that dark is for bands and emphasis, as `DESIGN.md` already says, then follow that rule in the demo. Use `--surface-light-alt` for page backgrounds and white for cards so the "alabaster default" is actually visible.

## Priority 7 — adoption

No teaching page uses the system yet; the repo currently has eight different body fonts. The three folder landing pages added in this pass (`digital-citizenship/index.html`, `digital-media/index.html`, `greek-myths/index.html` for English B) are the first consumers: they link `tokens.css` and a shared component layer at `assets/shelf.css`. They keep one skeleton and switch identity with `data-identity="ember"` / `"tide"`.

The root `index.html` remains a separate palette and now links only 7 of the 20 tools. It should be migrated to this system next, with the newer `digital-media/review/` and `greek-myths/` tools added.
