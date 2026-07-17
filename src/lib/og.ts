/**
 * Open Graph card configuration for PalletClearance.
 *
 * Single source of truth shared by:
 *  - the build-time generator (`src/pages/og/[...route].ts`), which emits one
 *    1200x630 PNG per card into `dist/og/<slug>.png`, and
 *  - `BaseLayout.astro`, which resolves the current page to a card slug and
 *    builds the absolute `og:image` URL from the env-driven `siteUrl`
 *    (Hard Rule #1 — no hardcoded host in the meta tags).
 *
 * Same template as the Euro-Intermed hub, swapped to the PalletClearance
 * AMBER/TERRACOTTA accent: the brand name (title) + a short tagline (description)
 * on a pale ground, signed with an amber left stripe. Type is self-hosted DM Sans
 * (vendored TTF — no network at build).
 */
import type { Locale } from '../i18n/ui'

type RGB = [number, number, number]

/** Brand shown as the card title. */
const BRAND = 'PalletClearance'

/** Vertical accent — amber/terracotta #c46a2a. */
const ACCENT: RGB = [196, 106, 42]
const GROUND_TOP: RGB = [250, 249, 245] // #faf9f5 pale paper
const GROUND_BOTTOM: RGB = [244, 235, 225] // faint amber wash
const INK: RGB = [74, 46, 24] // deep brown title ink
const MUTED: RGB = [107, 90, 76] // muted tagline

/** Font vendored into the repo (loaded from disk at build — no network). */
const FONT_PATH = './src/assets/fonts/DMSans.ttf'

/** Shared template constants consumed by the OG endpoint's getImageOptions. */
export const ogTemplate = { ACCENT, GROUND_TOP, GROUND_BOTTOM, INK, MUTED, FONT_PATH }

export interface OgCard {
  /** Big line — the brand. */
  title: string
  /** Supporting tagline. */
  description: string
}

/**
 * Cards keyed by slug. The slug becomes the emitted filename (`<slug>.png`).
 * `default` is the RO brand card and the ultimate fallback; `*-en` mirror it in
 * English. Keep this in lockstep with `ogSlug()` below.
 */
export const ogCards: Record<string, OgCard> = {
  default: {
    title: BRAND,
    description: 'Vinde sau cumpără stocuri și paleți — rapid, verificat, pe WhatsApp',
  },
  'home-en': {
    title: BRAND,
    description: 'Buy or sell clearance pallets & overstock — fast, verified, on WhatsApp',
  },
  contact: {
    title: BRAND,
    description: 'Contact — trimite lotul sau cererea pe WhatsApp',
  },
  'contact-en': {
    title: BRAND,
    description: 'Contact — send your lot or request on WhatsApp',
  },
  'cum-functioneaza': {
    title: BRAND,
    description: 'Cum funcționează — de la anunț la cumpărător în câțiva pași',
  },
  'cum-functioneaza-en': {
    title: BRAND,
    description: 'How it works — from listing to buyer in a few steps',
  },
  despre: {
    title: BRAND,
    description: 'Despre noi — povestea Euro Intermed Solutions, din 2015 până azi',
  },
  'despre-en': {
    title: BRAND,
    description: 'About us — the Euro Intermed Solutions story, from 2015 to today',
  },
}

/**
 * Resolve a page path + locale to a card slug. Locale-prefixed paths (`/en/...`)
 * are normalised first. Unknown routes (e.g. legal pages) fall back to the brand
 * card. Used by BaseLayout to pick the `og:image`; the endpoint emits exactly the
 * slugs referenced here.
 */
export function ogSlug(path: string, locale: Locale): string {
  const p = path.replace(/^\/en(?=\/|$)/, '').replace(/\/$/, '') || '/'
  const en = locale === 'en'
  const key =
    p === '/contact'
      ? 'contact'
      : p === '/cum-functioneaza'
        ? 'cum-functioneaza'
        : p === '/despre'
          ? 'despre'
          : null
  if (key) return en ? `${key}-en` : key
  // Home + any other page (legal, 404, ...) → brand card.
  return en ? 'home-en' : 'default'
}
