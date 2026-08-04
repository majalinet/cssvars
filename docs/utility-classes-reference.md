# Utility Classes Reference

Companion to [Styling with Variables](./styling-with-variables.md). That doc covers the token system; this one catalogues the ~500 single-purpose classes built on top of it, living in `@layer utilities` and `@layer utilities-advanced`.

**How to read this page:** classes are grouped by naming pattern rather than listed one-by-one where a pattern repeats across a numeric scale (e.g. `.p-t-1`–`.p-t-4`). Where a class reads a token, the token is named — override the token instead of overriding the class.

---

## 1. Spacing (margin & padding)

Two independent numeric scales are used throughout, and the naming tells you which one applies:

- **`0`–`4` suffix on shorthand classes (`.m1`–`.m4`, `.p1`–`.p4`)** → dense scale, `--space-dense-1`–`--space-dense-4`
- **`0`–`4` suffix on directional classes (`.m-t-1`–`.m-t-4`, `.p-b-1`–`.p-b-4`, etc.)** → regular scale, `--space-1`–`--space-4`
- **Fixed fractional suffixes (`-1-16`, `-1-8`, `-1-4`, `-1-2`, `-3-4`)** → fixed rem values that don't scale with viewport (0.0625rem → 0.75rem), for fine adjustments rather than rhythm

| Classes | Sets | Source |
|---|---|---|
| `.m0`–`.m4` / `.p0`–`.p4` | margin / padding, all sides | `--space-dense-1`–`4` |
| `.m-t-0`–`4` / `.p-t-0`–`4` | margin-top / padding-top | `--space-1`–`4` |
| `.m-b-0`–`4` / `.p-b-0`–`4` | margin-bottom / padding-bottom | `--space-1`–`4` |
| `.m-l-0`–`4` / `.p-l-0`–`4` | margin-left / padding-left | dense scale |
| `.m-r-0`–`4` / `.p-r-0`–`4` | margin-right / padding-right | dense scale |
| `.m-h-0`–`4` / `.p-h-0`–`4` | margin-inline / padding-inline (both sides at once) | dense scale |
| `.m-v-0`–`4` / `.p-v-0`–`4` | margin-block / padding-block (top+bottom at once) | dense scale |
| `.m-1-16` … `.m-3-4` / `.p-1-16` … `.p-3-4` | margin / padding, all sides, fixed rem | fixed values |
| `.m-b--1-16` … `.m-b--3-4` (and `-l`/`-r`/`-t`/`-h`/`-v` equivalents) | directional margin/padding, fixed rem | fixed values |
| `.m-auto` / `.m-h-auto` / `.m-v-auto` | margin auto (centering) | — |

**Child & flow utilities** (see also [Flow tokens](./styling-with-variables.md#19-flow-tokens--spacing-between-elements-not-around-them)):

| Classes | Sets | Source |
|---|---|---|
| `.flow` | `margin-top` on every child after the first | `--page-flow` |
| `.flow-1`–`.flow-4` | same, at a fixed step regardless of `--page-flow` | `--space-1`–`4` |
| `.child-padding` | `padding` on every direct child | `--child-padding` |
| `.child-padding-1`–`.child-padding-4` | same, at a fixed step | `--space-1`–`4` |
| `.child-margin` / `.child-margin-2`–`4` | `margin` on every direct child, at a fixed step | `--space-1`–`4` |
| `.gap` / `.gap-2`–`.gap-4` | flex/grid `gap` | `--default-gap` / `--space-2`–`4` |

---

## 2. Sizing

| Classes | Sets | Notes |
|---|---|---|
| `.w-25` / `.w-33` / `.w-50` / `.w-66` / `.w-75` / `.w-100` | `width` as a percentage | — |
| `.w-25-vw` … `.w-100-vw` (+ `-min` variants) | `width` in viewport units, or `min-width` equivalents | for full-bleed or viewport-relative elements |
| `.w-1rem` … `.w-10rem` | fixed `width` | — |
| `.w--1rem` … `.w--4rem` | `width: calc(100% - Nrem)` | the double-dash means **"100% minus"**, not negative |
| `.h-*` / `.h--*` | height equivalents of all the above | same conventions |
| `.mw-1rem` … `.mw-10rem` | `max-width` | — |
| `.mh-1rem` … `.mh-10rem` | `max-height` | — |

---

## 3. Layout — Flexbox & Grid

| Classes | Sets |
|---|---|
| `.d-flex` / `.d-inline-flex` / `.d-grid` / `.d-inline-grid` / `.d-block` / `.d-inline` / `.d-inline-block` / `.d-none` / `.d-table` / `.d-table-cell` / `.d-table-row` | `display` |
| `.flex-row` / `.flex-row-reverse` / `.flex-column` / `.flex-column-reverse` | `flex-direction` |
| `.flex-wrap` / `.flex-nowrap` / `.flex-wrap-reverse` | `flex-wrap` |
| `.flex-fill` / `.flex-grow-0` / `.flex-grow-1` / `.flex-shrink-0` / `.flex-shrink-1` | flex sizing |
| `.justify-content-start`–`end`/`center`/`between`/`around` | `justify-content` |
| `.align-items-start`–`end`/`center`/`baseline`/`stretch` | `align-items` |
| `.align-content-start`–`end`/`center`/`between`/`around`/`stretch` | `align-content` |
| `.align-self-auto`–`end`/`center`/`baseline`/`stretch` | `align-self` |
| `.grid-cols-1`/`2`/`3`/`4`/`6`/`12` | grid-template-columns (equal-width tracks) |
| `.col-span-1`/`2`/`3`/`4`/`6`/`full` | `grid-column: span N` |
| `.cluster` | flex row, wrapped, centered — quick horizontal grouping | 

---

## 4. Position & offsets

| Classes | Sets |
|---|---|
| `.position-static` / `.position-relative` / `.position-absolute` / `.position-fixed` / `.position-sticky` | `position` |
| `.top-0`–`4` / `.bottom-0`–`4` / `.left-0`–`4` / `.right-0`–`4` | offsets, fixed rem steps |
| `.top-25`/`50`/`75` / `.right-25`/`50`/`75` | offsets, percentage |
| `.top-25-vh`/`50-vh`/`75-vh` / `.right-25-vw`/`50-vw`/`75-vw` | offsets, viewport units |
| `.z--1` / `.z-0` / `.z-1`–`.z-3` / `.z-10` / `.z-100` | ad-hoc `z-index` steps — for anything **not** already covered by `--z-floating`/`--z-overlay`/`--z-modal` (see [Structural tokens](./styling-with-variables.md#18-structural-tokens)) |

---

## 5. Borders & radius

| Classes | Sets | Notes |
|---|---|---|
| `.border` / `.border-0`/`2`/`4`/`8` | all-side border, width steps | uses `--grey` by default |
| `.border-t`/`-b`/`-l`/`-r`/`-h`/`-v` (+ `-0`/`2`/`4`/`8` width steps) | directional borders | `-h` = left+right, `-v` = top+bottom |
| `.border-solid` / `.border-dashed` / `.border-dotted` / `.border-double` / `.border-none` | `border-style` |
| `.border-color-1`/`2` / `.border-danger`/`info`/`success`/`warning`/`dark`/`grey`/`light-grey`/`luxury`/`black`/`white` | border color, all sides | token-driven |
| `.border-a-color-1` … `.border-a-white` | same palette, explicit "all sides" variant | — |
| `.border-gradient` / `.border-gradient-info`/`success`/`danger`/`warning`/`luxury`/`black`/`white` | gradient border (`--color-1` → named color) | uses `border-image`, so it overrides `border-style` |
| `.rounded` / `.rounded-0` / `.rounded-1-4` / `.rounded-1-8` | `border-radius`, from none to a fixed rem step | independent of `--default-border-radius` — use this when you need a radius that *doesn't* follow the panel/control radius |
| `.rounded-t`/`-b`/`-l`/`-r` (+ `-1-4`/`-1-8`) | radius on two corners only | for tab-style or attached-edge shapes |
| `.circle` / `.circle-t`/`-b`/`-l`/`-r` | `border-radius: 50%`, or half-pill on one side | — |

---

## 6. Color, background & gradients

| Classes | Sets | Notes |
|---|---|---|
| `.color-1` / `.color-2` / `.danger` / `.info` / `.success` / `.warning` / `.dark` / `.grey` / `.light-grey` / `.luxury` / `.black` / `.white` | text `color` | direct token read, no mixing |
| `.bg-color-1`/`2` / `.bg-danger`/`info`/`success`/`warning`/`dark`/`grey`/`light-grey`/`luxury`/`black`/`white`/`body-bg` | solid `background-color` | — |
| `.bga-color-1`/`2` / `.bga-danger`/`info`/`success`/`warning`/`dark`/`grey`/`luxury` | tinted background **+** matching text color, via `color-mix()` at 10% | the "soft badge" pattern — use this instead of a solid `.bg-*` when you want a subtle tint, not a solid fill |
| `.bg-gradient` / `.bg-gradient-info`/`success`/`danger`/`warning`/`luxury`/`black`/`white` | linear-gradient background, `--color-1` → named color | — |
| `.color-gradient` / `.color-gradient-hover` | gradient applied to text (via background-clip) | — |
| `.outline-color-1`/`2` / `.outline-color-danger`/`info`/`success`/`grey`/`dark`/`black`/`white` / `.outline-light-grey` / `.outline-warning` / `.outline-luxury` | `outline-color` | distinct from the automatic focus-visible ring in `@layer overrides` — use these for a deliberate, always-on outline, not a focus state |

**Convention to hold onto:** `.bg-*` is a flat fill; `.bga-*` is a tint (10% `color-mix()`) with color already paired to it. Reach for `.bga-*` for badges, callouts, and soft highlights — reach for `.bg-*` for solid blocks and section backgrounds.

---

## 7. Shadows

| Classes | Sets |
|---|---|
| `.shadow` / `.shadow-hover` (hover variant) | `--control-shadow`-style dual shadow |
| `.shadow-1`/`-1-hover` | fixed dual-layer shadow (no border) |
| `.shadow-2`/`-2-hover` | bordered + hard offset shadow |
| `.shadow-3`/`-3-hover` | bordered + soft diffuse shadow |
| `.shadow-4`/`-4-hover` / `.hover-shadow` | large, dramatic elevation shadow |
| `.shadow-color` … `.shadow-color-4`/`-hover` variants | same four levels, tinted with `--color-1` via `color-mix()` instead of black |
| `.shadow-none`/`-hover` | removes shadow |

All shadow utilities sit in `@layer utilities-advanced`, after components — this is what lets `.shadow-4` override a card's own `--panel-shadow`-driven shadow without `!important`.

---

## 8. Typography utilities

| Classes | Sets |
|---|---|
| `.bold` / `.font-weight-200`/`400`/`600` (aliases: `.font-thin`/`.font-regular`/`.font-semibold`) | `font-weight` |
| `.font-mono` | `font-family: var(--font-mono)` — opts any element into the monospace stack (also read directly by `code`/`.code`, `pre`/`.code-block`, `kbd`/`.kbd`, `samp`/`.samp`; see [Typography tokens](./styling-with-variables.md#15-typography-tokens)) |
| `.italic` / `.underline` / `.decoration-none` / `.old-info` (strikethrough) | `font-style` / `text-decoration` |
| `.text-uppercase` / `.text-lowercase` / `.text-capitalize` | `text-transform` |
| `.double` (200%) / `.large` (150%) / `.larger` (125%) / `.small` (75%) / `.smaller` (85%) / `.half` (50%) | relative `font-size` steps |
| `.letter-spacing-0`–`5` | `letter-spacing`, 0 to 0.6rem |
| `.line-height-1` / `.line-height-17` (1.7) / `.line-height-2` | `line-height` |
| `.height-1lines` / `.height-2lines` / `.height-3lines` | multi-line clamp/truncation to N lines |
| `.justified` / `.left` / `.right` / `.center` | `text-align` |
| `.hover-grey` / `.hover-white` / `.hover-underline` | hover-only color/decoration changes for text |
| `.unselectable` | `user-select: none` |
| `.word-wrap-break` | forces long unbreakable strings (URLs, etc.) to wrap |

---

## 9. Effects, overflow & visibility

| Classes | Sets |
|---|---|
| `.brightness-33`/`66`/`80`/`90`/`100`/`150` (+ `-hover` variants) | `filter: brightness()` |
| `.overflow-hidden` / `.overflow-visible` / `.overflow-x-*` / `.overflow-y-*` | `overflow` |
| `.clear-fix` / `.overflow-auto` | classic clearfix via `overflow: auto` |
| `.scrollbar-none` / `.scrollbar-thin` | `scrollbar-width` |
| `.float-left` / `.float-right` / `.float-none` / `.clear-both` / `.clear-left` / `.clear-right` | float layout (legacy pattern, prefer flex/grid utilities above) |
| `.desktop-only` / `.mobile-only` | responsive display toggle at the `992px` breakpoint |
| `.sr-only` | visually hidden, still announced to screen readers |
| `.skip-link` | keyboard-focus-revealed "skip to content" link, styled from `--control-*` tokens |
| `.opacity1`/`07`/`05`/`03` (+ `-hover` variants) | `opacity` steps |

---

## 10. Rule of thumb for this page

If you're stacking more than two or three utility classes on the same element to achieve one repeatable look (a badge, a callout, a card variant), that's the signal to stop and either:

1. check whether a component or theme preset already covers it, or
2. propose a new one-line modifier class in `utilities-advanced` that sets the underlying tokens (the `.glass` pattern from [Composition over duplication](./styling-with-variables.md#4-composition-over-duplication)) rather than continuing to hand-compose utilities in markup.
