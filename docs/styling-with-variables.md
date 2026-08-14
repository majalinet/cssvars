# Styling with Variables

CSS Vars Framework has no config file, no build step, and no JS-driven theme switcher. The entire visual identity of a site — color, spacing, radius, shadow, motion — lives in one place: the custom properties declared in `:root` inside `@layer theme`. Every component, every utility class, every control reads from those tokens instead of hardcoding values. Change a token once, and every place that consumes it updates.

This is the single idea to hold onto: **you don't style elements, you set variables, and the framework styles itself.**

---

## 1. The token model

Tokens are organized into a small number of families. Each family has a job, and — critically — most families don't hold raw values themselves. They hold *references* to a smaller set of base tokens. This indirection is what makes the framework re-themeable from one edit.

### 1.1 Base tokens (the only ones you should normally hand-edit)

```css
--color-1     /* primary brand color */
--color-2     /* secondary brand color */
--dark
--grey
--light-grey
--white
--black
--danger
--info
--success
--warning
--luxury
--body-bg
--body-color
--font-family
--font-mono
```

Everything else in the framework is built on top of these nine or so values. Rebrand a site by changing `--color-1` and `--color-2` in `:root` — you will almost never need to touch anything downstream.

### 1.2 Surface tokens — derived, not raw

```css
--surface-raised     /* var(--body-bg) */
--surface-dim        /* var(--light-grey) */
--surface-overlay    /* color-mix(in srgb, var(--black) 60%, transparent) */
--surface-inverse    /* var(--black) */
--surface-hover       /* color-mix(in srgb, var(--color-1) 8%, transparent) */
--surface-active      /* color-mix(in srgb, var(--color-1) 16%, transparent) */
--surface-selected    /* color-mix(in srgb, var(--color-1) 12%, transparent) */
--surface-disabled    /* color-mix(in srgb, var(--grey) 30%, transparent) */
```

These describe *states*, not colors. `--surface-hover` isn't "light grey" — it's "8% of the brand color mixed into transparent," so hover states automatically stay on-brand no matter what `--color-1` is set to.

**Where they're used:** `--surface-hover`/`--surface-active` feed `--control-hover-bg`/`--control-active-bg` (§1.4), which is how every button, pill, and dropdown item gets consistent hover/active feedback without a single hardcoded state color anywhere in the framework. `--surface-overlay` is what darkens the page behind a modal or light-box.

### 1.3 Panel tokens — what components actually consume

```css
--panel-bg        /* var(--surface-raised) */
--panel-border    /* var(--default-border) */
--panel-radius    /* var(--default-border-radius) */
--panel-shadow    /* var(--box-shadow) */
--panel-padding   /* var(--space-dense-2) */
```

**Where they're used:** `.card`, `.panel`, `.modal__inner`, `.dropdown-menu`, `.accordion-content`, `.tabs .tab`, and every other "boxy" component read from `--panel-*`, not from their own hardcoded rules. This is why a `.glass` modifier works by overriding four variables instead of rewriting five components — see §4. `--panel-radius` and `--panel-shadow` in turn trace back to `--default-border-radius` and `--box-shadow`, so a single edit to those two structural tokens reshapes every panel-based component at once.

Don't confuse `--panel-*` with `--page-box-*` (§1.9) — they look similar but style different things. `--panel-*` is for actual components (cards, dropdowns, modals). `--page-box-*` is for the generic `body > *` / `section` / `article` / `aside` default. The two are intentionally independent: editing one never touches the other.

### 1.4 Control & input tokens

```css
--control-bg / --control-color / --control-radius / --control-padding
--control-hover-bg / --control-hover-color / --control-hover-border
--control-active-bg / --control-active-color
--control-focus-ring
--control-disabled-opacity

--input-bg / --input-color / --input-border / --input-radius
--input-focus-border / --input-focus-shadow
--input-invalid-border / --input-invalid-color
--input-disabled-bg / --input-disabled-opacity
```

**Where they're used:** `--control-*` drives `.button`, native `button`, and `.pill`; `--control-focus-ring` combines with `--control-shadow` on the focus state so focused controls get a visible ring without losing their resting shadow. `--input-*` drives `input`, `select`, and `textarea`; `--input-focus-shadow` and `--input-invalid-*` fire on `:focus` and `:invalid`/`.is-invalid` respectively.

Buttons, pills, and form fields are two separate token families on purpose — a button and a text input don't share visual language in most designs, even though both are "interactive."

### 1.5 Typography tokens

```css
--font-family / --font-mono / --font-weight / --line-height
--heading-font / --heading-font-weight / --heading-color
--heading-line-height / --heading-letter-spacing / --heading-margin
--h1-size … --h6-size
--display-1-size … --display-6-size   /* fluid, via clamp() */
--link-color / --link-hover-color / --link-decoration / --link-hover-decoration
```

Heading sizes are fixed rem values; display sizes are fluid (`clamp()`-based) for hero copy that needs to scale with viewport width rather than jump at breakpoints.

**Where they're used:** every `h1`–`h6` and their `.h1`–`.h6` class equivalents read `--heading-*` for weight, color, line-height, letter-spacing, and margin, and their own `--h*-size` for font size. `.display-1`–`.display-6` read the `--display-*-size` clamps directly. `--link-*` applies to every `a` element and its `:hover` state — change `--link-color` once and every text link in every block, card, and footer updates together.

**`--font-mono`** is the framework's second font stack, sitting alongside `--font-family` rather than under it — a UI (`ui-sans-serif`…) and a code (`ui-monospace`…) stack are different concerns, so they're two base tokens, not one derived from the other. It's consumed by every element that displays code, technical output, or fixed-width values: `code`/`.code` (inline code), `pre`/`.code-block` (code blocks), `kbd`/`.kbd` (keyboard shortcuts), and `samp`/`.samp` (sample output) all read `var(--font-mono)` directly, plus the `.font-mono` utility (§8 in the [Utility Classes Reference](./utility-classes-reference.md#8-typography-utilities)) for opting any other element in — API keys, order numbers, tabular numeric data. Change `--font-mono` once in `:root` and every one of these updates together, the same single-source-of-truth pattern as `--default-border-radius`.

### 1.6 Icon & image tokens

```css
--icon-default-size / --icon-default-fill / --icon-default-bg
--image-radius / --image-shadow / --image-border-style
```

**Where they're used:** `--icon-default-*` sizes and colors any inline SVG icon that doesn't set its own dimensions — this is what lets the same icon markup drop into a hero, a card, or a footer and pick up a consistent size and brand-colored fill. `--image-*` applies globally to every `img` element (radius, shadow, border), so a site-wide "give every image rounded corners and a soft shadow" edit is two token changes, not a find-and-replace across every `<img>` tag.

### 1.7 Spacing tokens

Two independent scales, both fluid via `clamp()`:

```css
--space-1 … --space-4          /* general vertical rhythm, gaps, flow, child-padding */
--space-dense-1 … --space-dense-4  /* tighter scale — panel padding and the m1–m4/p1–p4 utilities */
```

Plus fixed fractional steps (`--space-1-2`, and the `-1-16`/`-1-8`/`-1-4`/`-1-2`/`-3-4` utility suffixes) for cases that shouldn't scale with viewport — icon gaps, border widths, fine adjustments.

**Where they're used:** `--space-1`–`--space-4` back `--content-flow`, `--child-padding`, and the `.p-t-*`/`.p-b-*`/`.child-padding-*` utilities. `--space-dense-1`–`--space-dense-4` back `--panel-padding` and the `.m1`–`.m4`/`.p1`–`.p4`/`.m-h-*`/`.p-h-*`/`.m-r-*`/`.p-l-*` utility families — this is why panel padding feels tighter than the rhythm between page sections even though both scales are "spacing tokens."

### 1.8 Structural tokens

```css
--default-padding / --default-margin / --default-gap
--default-border / --default-border-radius
--box-shadow
--z-floating (100) / --z-overlay (999) / --z-modal (1000)
--duration-fast / --duration-base / --duration-slow / --easing / --easing-in-out
```

`--default-border-radius` is the single source of truth for "how rounded is this framework" — panels, controls, and inputs all derive their own radius from it (control and input radii are `calc(var(--default-border-radius) * 0.75)`, slightly tighter than panels).

**Where the rest are used:**
- `--default-gap` — the `gap` on flex/grid layout components (e.g. the sidebar/menu row layouts).
- `--z-floating` — sidebars, the dropdown menu, notification panel, and the sticky/toggle button; `--z-overlay` — the light-box overlay and the modal backdrop; `--z-modal` — the modal itself, always above its own overlay. Keeping these as tokens (rather than ad-hoc numbers per component) is what guarantees a floating sidebar never accidentally out-stacks a modal.
- `--duration-fast` + `--easing`/`--easing-in-out` — box-shadow/transform transitions on hover (cards, icons) and border/shadow transitions on input focus.
- `--duration-base` — sidebar slide transforms, overlay fade-ins, skip-link reveal.
- `--duration-slow` — the notification-panel entrance animation.
- All three durations collapse to `0s` under `@layer overrides` when `prefers-reduced-motion: reduce` is set — this is the one place a token is reassigned conditionally rather than by theme.

### 1.9 Page-box tokens — the global section/article/aside default

```css
--page-box-padding   /* var(--default-padding) */
--page-box-border    /* none */
--page-box-radius    /* 0 */
--page-box-shadow    /* none */
```

**Where they're used:** consumed by exactly one rule —

```css
:where(body > *, section, article, aside) {
  padding: var(--page-box-padding);
  border: var(--page-box-border);
  border-radius: var(--page-box-radius);
  box-shadow: var(--page-box-shadow);
}
```

— which reaches every direct child of `<body>` plus any `section`, `article`, or `aside` anywhere in the document, at any depth. At rest, all four tokens are neutral (`none`/`0`), so sections render completely unstyled until a style preset opts in.

This family is deliberately independent from both `--panel-*` (§1.3) and the base `--default-*` tokens (§1.8) — that wasn't always true. Earlier, this rule read `--default-border` / `--default-border-radius` / `--box-shadow` directly, the same tokens `--panel-*` derives from, so a single edit to "how rounded is this framework" silently reshaped cards *and* raw sections together, with no way to separate the two. `--page-box-*` breaks that coupling: editing `--default-border-radius` now only affects `.card`/`.panel`/controls/inputs, never generic sections, and vice versa.

Style presets that want the "pervasive boxed" look — `.brutal-style`, `.retro-style`, `.neon-style`, `.playful-bubblegum-style`, `.glass-style`, and others where every section reads as its own bordered/shadowed block — opt in explicitly, usually by aliasing to values the preset already defines for `--default-*`:

```css
.brutal-style {
  --default-border: 0.125rem solid var(--dark);
  --default-border-radius: 0;
  --box-shadow: 0.5rem 0.5rem 0 var(--dark);

  --page-box-border: var(--default-border);
  --page-box-radius: var(--default-border-radius);
  --page-box-shadow: var(--box-shadow);
}
```

Presets that don't set `--page-box-*` (clean/enterprise/minimal-leaning styles like `.enterprise-style`, `.system-ui-style`, `.swiss-style`) leave sections unstyled and rely entirely on `.card`/`.panel` for boxed content — which is the more common pattern for that kind of visual language.

`--page-box-padding` is the one token in this family with a live fallback (`var(--default-padding)`) rather than a literal `0` — a preset that sets `--default-padding` for its overall rhythm gets matching section padding automatically, without a separate declaration, unless it deliberately wants the two to diverge.

**Margin was intentionally left out of this rule.** Spacing *between* `body`/`section`/`article`/`aside` elements is owned entirely by the flow tokens below (§1.10) — mixing a flat `margin` into the same rule that flow tokens also target caused the two systems to fight over the same property, and broke the "first child never gets an unwanted top margin" guarantee that flow tokens are built around.

### 1.10 Flow tokens — spacing *between* elements, not around them

```css
--content-flow: var(--space-1);
--page-flow:  0;
--main-flow: clamp(6rem, 3.33vw, 12rem);
--child-padding: var(--space-1);
```

Flow tokens are the framework's answer to "how much space goes between siblings" — deliberately separate from `--default-margin`/`--default-gap`, which govern space *around* a single element. They're consumed via the adjacent-sibling combinator (`* + *`), so they only ever add space between elements that already have a preceding sibling — the first child in a container never gets an unwanted top margin.

| Token | Applies to | Selector |
|---|---|---|
| `--page-flow` | Spacing between direct children of `<body>` — the outermost, page-level sections (header, hero, footer) | `body > * + *` and the `.flow > * + *` utility class |
| `--main-flow` | Spacing between direct children of `<main>` specifically — separated from `body` because `<main>`'s own sections (content blocks, article groups) often need a much larger, fluid gap than `body`'s top-level chrome | `main > * + *` |
| `--content-flow` | Prose rhythm — spacing between elements *inside* a content container | `article > * + *, aside > * + *, details > * + *, blockquote > * + *` |
| `--child-padding` | Uniform padding applied to every direct child of a container, via the `.child-padding` utility class | `.child-padding > *` |

**Practical distinction — three levels of rhythm, not two:**
- `--page-flow` (defaults to `0`) governs the outermost skeleton of the page — the space between `<body>`'s direct children, typically `<header>`, `<main>`, `<footer>` themselves.
- `--main-flow` (fluid, `clamp(6rem, 3.33vw, 12rem)`) governs the space between the sections *inside* `<main>` — since `<main>` is where most of a page's actual content sections live, this token defaults to a large, viewport-aware gap rather than `0`, so stacked sections read as distinct without any per-section margin.
- `--content-flow` (`var(--space-1)`, small) governs the tightest rhythm — paragraphs, list items, and blockquotes *within* one of those sections.

Because `--page-flow` and `--main-flow` are separate tokens now, you can keep `<body>`'s direct children flush (e.g. a full-bleed header with no gap above it) while still getting generous, automatic spacing between the sections inside `<main>` — previously both were the same token, so you couldn't set one without affecting the other.

`--child-padding` is different in kind from the three flow tokens above: it's not a "space between" token, it's a "same padding on every child" token, meant for grids of equal-looking items (icon lists, stat blocks) where you don't want to write padding on each child individually — apply `.child-padding` to the parent and set `--child-padding` once.

---

## 2. How to actually change something

### Rebrand a whole site
```css
:root {
  --color-1: #0b5fff;
  --color-2: #ff6b35;
}
```
Buttons, links, focus rings, hover surfaces, colored-list bullets, gradients — all update, because they're all built from `--color-1`/`--color-2` through the surface and control layers.

### Change the "roundness" of everything
```css
:root {
  --default-border-radius: 1rem;
}
```
Cards, modals, dropdowns, buttons, and inputs all move together.

### Retheme a single component without touching the CSS file
Scope the override to a container in your HTML:
```html
<div style="--panel-bg: var(--dark); --panel-shadow: none;">
  <div class="card">...</div>
</div>
```
This is the intended extension mechanism — override the variable on an ancestor, don't write new selectors.

### Dark mode
Handled by attribute, not a duplicate stylesheet:
```html
<html data-theme="dark">
```
`[data-theme="dark"]` reassigns the base color tokens only (`--color-1`, `--body-bg`, `--light-grey`, etc.) — every downstream token (surfaces, panels, controls) picks up the change automatically because of the indirection described in §1.

---

## 3. The alpha convention

Any time a color needs transparency, the framework uses:

```css
color-mix(in srgb, var(--color-1) 10%, transparent)
```

never a `-rgb` companion variable and `rgba()`. This is a strict, framework-wide rule (`.bga-*`, `.shadow-color-*`, `.bg-gradient-*`, and every `--surface-*` token follow it). If you're adding a new alpha-based rule, match this pattern — mixed conventions break the "change one token, everything updates" guarantee.

---

## 4. Composition over duplication

This is the architectural rule that makes the token system worth it: **a modifier class works by overriding tokens on a scope, not by duplicating a component's ruleset.**

Example — glass effect:
```css
@layer utilities-advanced {
  .glass {
    --panel-bg: color-mix(in srgb, var(--white) 20%, transparent);
    backdrop-filter: blur(12px);
  }
}
```
`.card.glass`, `.modal__inner.glass`, `.dropdown-menu.glass` all get the effect for free, because they all already read `--panel-bg` — `.glass` never needed to know these components exist.

The same pattern applies anywhere you're tempted to write a new selector: ask first whether the value you want to change is already a token consumed by the component, and override the token instead of the component.

---

## 5. Cascade layers — why order isn't cosmetic

```css
@layer theme, base, layout, components, components-advanced, style, utilities, utilities-advanced, overrides;
```

Layers are declared in the order they win — later layers always beat earlier ones, *regardless of selector specificity*. This is deliberate:

- `theme` — token declarations only, nothing renders here.
- `base` / `layout` — resets, typography defaults, grid.
- `components` / `components-advanced` — cards, modals, dropdowns, etc.
- `style` — theme presets (`.brutal-style`, `.glass-style`, `.neon-style`…) — cosmetic skins.
- `utilities` / `utilities-advanced` — single-purpose overrides (`.p-t-2`, `.glass`, `.shadow-color-2`).
- `overrides` — accessibility guarantees (focus-visible rings, `prefers-reduced-motion`, forced-colors mode) that must always win.

Because utility layers sit after component layers, a utility class will always beat a component's own rule — even a low-specificity one like `.p-t-2` — without needing `!important`. This is why new rules should always go in the layer matching their *purpose*, not wherever seems convenient: putting a utility in `components` would let a future component rule silently override it.

---

## 6. Utility classes — the token system's escape hatch

Tokens and components cover the *default* look of a site. Utility classes are how you deviate from that default on a single element, in markup, without writing new CSS. Every utility class in `@layer utilities` and `@layer utilities-advanced` does exactly one thing — set one property (or one small tightly-related group, like a shadow's `border` + `box-shadow`) — and, because those two layers sit near the end of the cascade order (§5), a utility class always wins over a component's own rule, no matter how specific that rule's selector is.

That's the whole contract: **components carry structure and token-driven defaults; utilities carry one-off overrides.** If you find yourself reaching for the same utility combination repeatedly on the same kind of element, that's a signal to promote it into a component or a theme preset instead of continuing to hand-stack classes.

The framework ships roughly 500 utility classes across spacing, sizing, layout, color, borders, shadows, typography, and visibility. They're catalogued in full, by category, in **[Utility Classes Reference](./utility-classes-reference.md)** — this section only covers the two things worth knowing before you open that page:

- **Utilities read tokens wherever a token exists.** `.p-t-2` doesn't hardcode `2rem` — it sets `padding-top: var(--space-2, ...)`. `.bga-color-1` doesn't hardcode a tint — it reads `--color-1` through `color-mix()`. This means the "no custom classes" rule (compose HTML with framework classes plus `:root` variable overrides, never inline styles or new CSS) holds even at the utility level: change a token, and every utility built on it updates too.
- **Two families are the ones you'll reach for daily**: the spacing utilities (`.p-*`/`.m-*`, built on `--space-dense-*` and `--space-1`–`--space-4`) and the color/background utilities (`.bg-*`/`.bga-*`/`.border-*`, built on the base color tokens). Everything else — shadows, gradients, sizing, flex/grid helpers, visibility toggles — exists for the cases the component layer doesn't already cover.



| Family | Purpose | Consumed by |
|---|---|---|
| Base (`--color-1`, `--body-bg`…) | Brand identity | Everything, indirectly |
| Surface (`--surface-*`) | State colors (hover/active/disabled) | Controls, interactive elements |
| Panel (`--panel-*`) | "Boxy" component chrome | `.card`, `.panel`, `.modal__inner`, `.dropdown-menu` |
| Control (`--control-*`) | Buttons, pills | `.button`, `button`, `.pill` |
| Input (`--input-*`) | Form fields | `input`, `select`, `textarea` |
| Typography (`--h*-size`, `--heading-*`, `--link-*`, `--font-mono`) | Text scale and voice | Headings, `.display-*`, links, `code`/`.code`, `pre`/`.code-block`, `kbd`/`.kbd`, `samp`/`.samp` |
| Icon & image (`--icon-default-*`, `--image-*`) | Inline SVG icons, `<img>` styling | Icon markup, every `img` |
| Spacing (`--space-*`, `--space-dense-*`) | Rhythm and gaps | Utilities, flow, panel padding |
| Structural (`--default-*`, `--z-*`, `--duration-*`) | Shared framework constants | Resets, layering, motion |
| Page-box (`--page-box-*`) | Opt-in default box styling for raw sections | `body > *`, `section`, `article`, `aside` |
| Flow (`--page-flow`, `--main-flow`, `--content-flow`, `--child-padding`) | Space *between* siblings, not around elements | `body` children, `main` children, prose children, `.child-padding` |

---

## 8. Rule of thumb

Before writing any CSS: **is there already a token for this?** If yes, override it at the narrowest scope that needs it (`:root` for the whole site, an inline `style` attribute for one section, a class in `utilities-advanced` for a reusable modifier). Only write a new selector when the value genuinely isn't token-driven yet — and if that happens often for the same property, that's a signal the framework needs a new token, not a new one-off rule.
