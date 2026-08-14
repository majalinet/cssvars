# Utility Classes Reference

Companion to [Styling with Variables](./styling-with-variables.md). That doc covers the token system; this one catalogues the 700+ single-purpose classes built on top of it, living in `@layer utilities` and `@layer utilities-advanced`.

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
| `.m-auto` / `.m-h-auto` / `.m-v-auto` | margin auto (centering, all/inline/block) | — |
| `.m-t-auto` / `.m-b-auto` / `.m-l-auto` / `.m-r-auto` | margin auto, single side | — |
| `.-m-1`–`.-m-4` | **negative** margin, all sides, dense scale | `-1 * --space-dense-1`–`4` |
| `.-m-t-1`–`4` / `.-m-b-1`–`4` (and `-l`/`-r` equivalents) | negative directional margin | `-1 * --space-1`–`4` (dense scale for `-l`/`-r`) |
| `.-m-v-1`–`4` / `.-m-h-1`–`4` | negative margin-block / margin-inline | `-1 * --space-1`–`4` |
| `.m-d-1` / `.m-d-2` / `.p-d-1` / `.p-d-2` | fixed 1rem/2rem margin/padding, all sides, **desktop-only** (`min-width: 992px`) | — |

> The leading-dash negative-margin classes (`.-m-1`, `.-m-t-2`, …) are for deliberate bleed/overlap effects — pulling an element past its container edge. Don't confuse them with the `.m-*--1-2` fixed-fraction classes, which use a trailing double-dash and are always positive.

**Child & flow utilities** (see also [Flow tokens](./styling-with-variables.md#19-flow-tokens--spacing-between-elements-not-around-them)):

| Classes | Sets | Source |
|---|---|---|
| `.flow` | `margin-top` on every child after the first | `--page-flow` |
| `.flow-1`–`.flow-4` | same, at a fixed step regardless of `--page-flow` | `--space-1`–`4` |
| `.page-flow` | explicit utility form of `.flow` (same rule, named after its token) | `--page-flow` |
| `.main-flow` | flow rhythm sized for `main`-level rhythm | `--main-flow` |
| `.child-padding` | `padding` on every direct child | `--child-padding` |
| `.child-padding-1-2`–`.child-padding-4` | same, at a fixed step (includes a half-step `-1-2`) | `--space-1-2`, `--space-1`–`4` |
| `.child-margin` / `.child-margin-2`–`4` | `margin` on every direct child, at a fixed step | `--space-1`–`4` |

**Gap utilities:**

| Classes | Sets | Source |
|---|---|---|
| `.gap` / `.gap-1`–`.gap-4` | flex/grid `gap`, both axes | `--default-gap` / `--space-1`–`4` |
| `.gap-v-1`–`.gap-v-4` | `row-gap` only | `--space-1`–`4` |
| `.gap-h-1`–`.gap-h-4` | `column-gap` only | `--space-1`–`4` |
| `.row.gap` / `.row.gap-1`–`.row.gap-4` | grid-gutter compatibility fix: zeroes native `column-gap` on `.row` and drives `--col-h-padding` instead, so `.col-*` widths never overflow their track | — |

**Flex composition shorthands** (skip hand-composing `.d-flex .justify-content-* .align-items-*` for these common shapes):

| Classes | Sets |
|---|---|
| `.centered-row` / `.centered-col` | flex row/column, centered on both axes, `--default-gap` |
| `.between-row` / `.between-col` | flex row/column, `justify-content: space-between`, `--default-gap` (`.between-row` also centers cross-axis; `.between-col` doesn't) |
| `.stack` | flex column, `align-items: stretch`, `--default-gap` |
| `.center-overlay` | `position: absolute; inset: 0`, flex-centered — for centering content over a positioned parent |
| `.grid-center` | `display: grid; place-items: center` |

---

## 2. Sizing

**Naming convention:** every width/height family follows the same three-way pattern — a bare class sets the property directly, a `-min` suffix sets the `min-*` equivalent, and a `-max` suffix sets the `max-*` equivalent. There is no `mw-`/`mh-` prefix anywhere in the framework; `max-width`/`max-height` are always the `-max` suffix on the matching `w-`/`h-` class, for symmetry with `-min`.

| Classes | Sets | Notes |
|---|---|---|
| `.w-25` / `.w-33` / `.w-50` / `.w-66` / `.w-75` / `.w-100` (+ `-min` / `-max`) | `width` / `min-width` / `max-width`, as a percentage | e.g. `.w-50-max` = `max-width: 50%` |
| `.w-25-vw` … `.w-100-vw` (+ `-min` / `-max`) | `width` / `min-width` / `max-width`, in `vw` | `.w-90-vw-max` also exists (no bare or `-min` counterpart) |
| `.w-1rem` … `.w-10rem` (+ `-min` / `-max`) | `width` / `min-width` / `max-width`, fixed rem (1, 2, 3, 4, 5, 6, 8, 10rem steps) | — |
| `.w--1rem` … `.w--4rem` | `width: calc(100% - Nrem)` | the double-dash means **"100% minus"**, not negative |
| `.h-25` … `.h-100` (+ `-min` / `-max`) | `height` / `min-height` / `max-height`, as a percentage | same steps as `.w-*` |
| `.h-25-vh` … `.h-100-vh` (+ `-min` / `-max`) | `height` / `min-height` / `max-height`, in `vh` | `.h-90-vh-max` also exists; the `-max` variants pair the `vh` value with a `dvh` fallback (`max-height: 90vh; max-height: 90dvh;`) for mobile browser chrome |
| `.h-1rem` … `.h-10rem` (+ `-min` / `-max`) | `height` / `min-height` / `max-height`, fixed rem | same steps as `.w-*rem` |
| `.h--1rem` … `.h--4rem` | `height: calc(100% - Nrem)` | same "100% minus" convention |

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
| `.top-25`/`50`/`75` / `.right-25`/`50`/`75` / `.left-50` / `.bottom-50` | offsets, percentage |
| `.top-25-vh`/`50-vh`/`75-vh` / `.right-25-vw`/`50-vw`/`75-vw` | offsets, viewport units |
| `.top-auto` / `.right-auto` / `.bottom-auto` / `.left-auto` | resets an offset to `auto` | for overriding a component's hardcoded offset — e.g. `.dropdown-menu` hardcodes `left: 0`, so a right-anchored dropdown needs `.right-0 .left-auto` together (setting `.right-0` alone doesn't work: the browser discards `right` on an absolute element when `left` is also set) |
| `.translate-x--50` / `.translate-y--50` / `.translate-xy--50` | `transform: translateX(-50%)` / `translateY(-50%)` / `translate(-50%, -50%)` | pairs with `.left-50`/`.top-50` for true centering (e.g. `.position-absolute.top-50.left-50.translate-xy--50`) |
| `.z--1` / `.z-0` / `.z-1`–`.z-3` / `.z-10` / `.z-100` | ad-hoc `z-index` steps — for anything **not** already covered by `--z-floating`/`--z-overlay`/`--z-modal` |
| `.z-floating` / `.z-overlay` / `.z-modal` | utility form of the structural z-index tokens, for applying them directly in markup (see [Structural tokens](./styling-with-variables.md#18-structural-tokens)) | `--z-floating` (100) / `--z-overlay` (999) / `--z-modal` (1000) |

---

## 5. Borders & radius

| Classes | Sets | Notes |
|---|---|---|
| `.border` / `.border-0`/`2`/`4`/`8` | all-side border, width steps | uses `--grey` by default |
| `.border-style` | reads the `--default-border` token wholesale (color, width, and style in one declaration) | use this instead of composing `.border` + `.border-color-*` when you just want "the framework's default border" |
| `.border-default` | same as `.border-style`, alternate name living with the other `default-*` reset utilities | `--default-border` |
| `.border-t`/`-b`/`-l`/`-r`/`-h`/`-v` (+ `-0`/`2`/`4`/`8` width steps) | directional borders | `-h` = left+right, `-v` = top+bottom |
| `.border-solid` / `.border-dashed` / `.border-dotted` / `.border-double` / `.border-none` | `border-style` |
| `.border-color-1`/`2` / `.border-danger`/`info`/`success`/`warning`/`dark`/`grey`/`light-grey`/`luxury`/`black`/`white` | border color, all sides | token-driven |
| `.border-a-color-1` … `.border-a-white` | same palette, tinted via `color-mix()` at 10% (the "-a" = alpha) | — |
| `.border-panel` / `.border-input` | border color+width read straight from the panel/input tokens | `--panel-border` / `--input-border` — see [section 6a](#6a-surface-panel-control--input-utilities) |
| `.border-gradient` / `.border-gradient-info`/`success`/`danger`/`warning`/`luxury`/`black`/`white` | gradient border (`--color-1` → named color) | uses `border-image`, so it overrides `border-style` |
| `.rounded` / `.rounded-0` / `.rounded-1-4` / `.rounded-1-8` | `border-radius`, from none to a fixed rem step | independent of `--default-border-radius` — use this when you need a radius that *doesn't* follow the panel/control radius |
| `.rounded-style` | reads `--default-border-radius` directly | the token-following counterpart to `.rounded` — reach for this one when you *do* want the shared radius |
| `.rounded-t`/`-b`/`-l`/`-r` (+ `-1-4`/`-1-8`) | radius on two corners only | for tab-style or attached-edge shapes |
| `.rounded-panel` / `.rounded-control` / `.rounded-input` | `border-radius` read from the panel/control/input tokens | see [section 6a](#6a-surface-panel-control--input-utilities) |
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
| `.outline-color-1`/`2` / `.outline-color-dark`/`grey`/`info`/`success`/`danger`/`white`/`black` | full `outline` shorthand | distinct from the automatic focus-visible ring in `@layer overrides` — use these for a deliberate, always-on outline, not a focus state |
| `.outline-dark` / `.outline-grey` / `.outline-info` / `.outline-success` / `.outline-danger` / `.outline-white` / `.outline-black` | shorter aliases for the `.outline-color-*` classes directly above | identical rule, same selector group |
| `.outline-light-grey` / `.outline-warning` / `.outline-luxury` | outline for the three palette colors without a `.outline-color-*` long form | — |
| `.invalid` | `outline` in `--input-invalid-border` (falls back to red) | form-validation state, pairs with `.border-input` on inputs |

**Convention to hold onto:** `.bg-*` is a flat fill; `.bga-*` is a tint (10% `color-mix()`) with color already paired to it. Reach for `.bga-*` for badges, callouts, and soft highlights — reach for `.bg-*` for solid blocks and section backgrounds. `.bg-lite-grey` is a typo-tolerant alias for `.bg-light-grey` (both selectors share the same rule) — prefer `.bg-light-grey` in new markup.

---

## 6a. Surface, panel, control & input utilities

A newer family that exposes the component-level surface/panel/control/input tokens (see [Styling with Variables](./styling-with-variables.md)) as standalone utility classes, so you can apply "panel styling" or "control styling" to an arbitrary element without reaching for the `.card`/`.button` components themselves.

| Classes | Sets | Source |
|---|---|---|
| `.bg-surface-raised` (+ `-hover`) | background for elements that sit above the page (cards, dropdowns) | `--surface-raised` |
| `.bg-surface-dim` (+ `-hover`) | background for recessed/muted areas | `--surface-dim` |
| `.bg-surface-overlay` | background for modal/overlay scrims | `--surface-overlay` |
| `.bg-surface-inverse` | inverted background **+** matching inverse text color | `--surface-inverse` / `--surface-inverse-color` |
| `.bg-surface-hover` / `.bg-surface-active` / `.bg-surface-selected` / `.bg-surface-disabled` | static (non-hover-triggered) state-surface backgrounds — apply directly when JS or `:checked`/`aria-*` toggles the state, rather than relying on `:hover` | `--surface-hover`/`-active`/`-selected`/`-disabled` |
| `.bg-panel` / `.border-panel` / `.rounded-panel` / `.shadow-panel` / `.p-panel` | background, border, radius, shadow, and padding read from the panel tokens in one class each | `--panel-*` |
| `.bg-control` (+ `-hover`) / `.color-control` / `.rounded-control` / `.shadow-control` / `.p-control` | same pattern for the control (button-like) tokens | `--control-*` |
| `.bg-input` / `.color-input` / `.border-input` / `.rounded-input` / `.shadow-input` | same pattern for the input (form-field) tokens | `--input-*` |
| `.p-default` / `.m-default` / `.border-default` / `.shadow-default` | the framework-wide default padding/margin/border/shadow, each as a single-purpose utility | `--default-padding`/`-margin`/`-border` / `--box-shadow` |

**When to reach for these vs. the component classes:** use `.card` or `button`/`.button` when you want the whole component (markup semantics included). Use this family when you want *just one property* of that component's look — e.g. `.rounded-panel .shadow-panel` on a custom `<div>` that isn't semantically a card.

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
| `.overline` | `text-decoration: overline` (joins `.underline` / `.old-info`) |
| `.content-in-middle` | `position: relative; top: 50%` + `translateY(-50%)` — quick vertical-centering trick for text inside a fixed-height parent | — |
| `.heading-color` / `.heading-font` / `.heading-font-weight` / `.heading-line-height` / `.heading-letter-spacing` | apply the heading typography tokens to any element, not just `h1`–`h6` | `--heading-color`/`-font`/`-font-weight`/`-line-height`/`-letter-spacing` |
| `.mono-font` | `font-family: var(--font-mono)` | for code snippets, `.kbd`-style elements, or tabular figures outside of a `<code>` tag |

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

## 10. Transitions

Two independent axes, meant to be combined on the same element: a **property** class picks what animates and supplies a default duration/easing, and an optional **duration** or **easing** class overrides just that piece. Declare the duration/easing override *after* the property class in your class list order in the stylesheet cascade won't care, but it keeps intent readable.

| Classes | Sets | Notes |
|---|---|---|
| `.transition-none` | `transition-property: none` | explicitly opts out — useful for undoing `.transition` inherited from a component |
| `.transition` | `transition-property: all`, duration `--duration-base` (0.25s), easing `--easing` (ease) | broadest option; prefer a specific `.transition-*` below when you know what's animating, since `all` is more expensive to compute |
| `.transition-opacity` | `transition-property: opacity`, duration `--duration-base`, easing `--easing` | — |
| `.transition-transform` | `transition-property: transform`, duration `--duration-base`, easing `--easing` | — |
| `.transition-colors` | `transition-property: color, background-color, border-color`, duration `--duration-base`, easing `--easing-in-out` | the hover/state-change workhorse — pairs with `.bg-*`, `.color-*`, `.border-color-*` |
| `.transition-shadow` | `transition-property: box-shadow`, duration `--duration-base`, easing `--easing-in-out` | pairs with `.shadow-*-hover` variants |
| `.transition-fast` | overrides duration to `--duration-fast` (0.15s) | duration-only — combine with a property class above, e.g. `.transition-colors.transition-fast` |
| `.transition-slow` | overrides duration to `--duration-slow` (0.4s) | duration-only, same combination rule |
| `.ease-in-out` | overrides timing function to `--easing-in-out` (ease-in-out) | easing-only override, for use with `.transition`/`.transition-opacity`/`.transition-transform`, which default to the linear-ish `--easing` rather than `--easing-in-out` |

**Convention to hold onto:** the five `.transition*` property classes are self-sufficient — each already sets a duration and easing, so `.transition-colors` alone is a complete, working transition. `.transition-fast`, `.transition-slow`, and `.ease-in-out` do nothing on their own; they only make sense stacked on top of a property class to adjust its timing.

---

## 11. Rule of thumb for this page

If you're stacking more than two or three utility classes on the same element to achieve one repeatable look (a badge, a callout, a card variant), that's the signal to stop and either:

1. check whether a component or theme preset already covers it, or
2. propose a new one-line modifier class in `utilities-advanced` that sets the underlying tokens (the `.glass` pattern from [Composition over duplication](./styling-with-variables.md#4-composition-over-duplication)) rather than continuing to hand-compose utilities in markup.
