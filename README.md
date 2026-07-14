# www.pallet-clearance

Marketing site for **PalletClearance.eu** — the **clearance & overstock** vertical
of the Euro Intermed ecosystem. It is a **buy/sell desk for surplus stock**
(overstock, returns, end-of-line, near-expiry, liquidation) with **two flows** —
a **SELLER** flow and a **BUYER** flow — and **no public catalog**: offers stay
confidential (client requirement). Built on the **shared Euro-Intermed design
system**, themed **amber/terracotta** via a single `data-vertical="palletclearance"`
attribute.

## Stack

- **[Astro](https://astro.build)** (static output) + **TypeScript**
- **@astrojs/mdx** — legal pages authored in MDX
- **@astrojs/sitemap** — `sitemap-index.xml`
- **@fontsource-variable/dm-sans** — self-hosted variable font (no Google Fonts CDN, GDPR)
- Deployed on **Vercel** (static; `main` = prod, `staging` = staging)

## Commands

```bash
npm install       # install deps (commit package-lock.json — Vercel uses it)
npm run dev       # local dev server
npm run build     # astro build → ./dist
npm run preview   # preview the production build
npm run check     # astro check (type + template diagnostics)
```

## Project structure

```
src/
  components/     # BaseLayout, Nav, Hero, HeroPanel, Section, Card, Button, FAQ,
                  # Footer, CookieBanner, LangToggle, ThemeToggle, Analytics,
                  # Widget, Home, HowItWorks, ContactPage
  layouts/        # LegalLayout (for the MDX legal pages)
  i18n/           # ui.ts (RO/EN dictionary), utils.ts (locale routing helpers)
  lib/            # config.ts — the ONLY place env is read (Hard Rule #1)
  scripts/        # site.ts (scroll-reveal + GA event delegation)
  styles/         # global.css — shared design tokens (light/dark) + animations
  pages/          # ro at root, en mirrored under /en/
public/           # favicon.svg, robots.txt (copied verbatim into dist/)
astro.config.mjs  # site URL from env, i18n (ro default, en under /en/), sitemap, mdx
vercel.json       # framework/build/output + security headers + legacy redirects
```

## i18n

RO is the default locale (root paths); EN is mirrored under `/en/`. Copy lives in a
single typed dictionary (`src/i18n/ui.ts`); every page ships both locales with
`hreflang` alternates. `LangToggle` links to the equivalent page in the other locale.

## Theme — shared design system, amber accent

The **neutral / type / spacing / shadow / animation** layer in `src/styles/global.css`
is the exact system shared with the Euro-Intermed hub and Angrosist. PalletClearance
selects the **amber/terracotta** accent by setting **one attribute** on `<html>`
(in `BaseLayout.astro`):

```html
<html data-vertical="palletclearance">
```

That flips every `--ei-accent*` / `--ei-gold*` token to the amber (`#c46a2a`, dark
`#e08a4a`) + clay (`#b5532f`) pairing — WCAG-AA verified in light **and** dark (the
shared tokens already pass). No token surgery, no bespoke component CSS, no leaked
green/teal hexes (the brand-mark gradient uses `--ei-accent-strong`/`--ei-gold-strong`).

## Two flows, no public catalog

PalletClearance presents **two value propositions**, each routed to the WhatsApp / AI
flow — it does **not** expose a products/offers catalog:

- **Seller flow** — list/sell surplus stock. Stock **photos are mandatory** and are
  handled inside the widget/agent flow, not on the marketing page.
- **Buyer flow** — register a buyer profile / source clearance lots. Opportunities are
  shared only with qualified buyers.

Offers stay **confidential** — no public listings, no visible prices, no browsing.

## Contact: WhatsApp-only (no forms)

There is **no HTML contact form and no form-POST endpoint** anywhere on the site
(design-system standard for all ecosystem sites). The two intake channels are the
**AI chat widget** and **WhatsApp** — `/contact` shows an intent chooser that
pre-fills a `wa.me` message per B2B route, with email + phone as secondary options.

## Configuration (env only — no hardcoded URLs/IDs)

All external URLs / IDs / flags are read from the environment at build time in
`src/lib/config.ts` (and `astro.config.mjs` for the site URL):

| Var | Purpose | Default |
|---|---|---|
| `WIDGET_ENABLED` | `"false"` strips the chat widget | `true` |
| `WIDGET_BASE_URL` | origin serving `widget.js` | `https://dash.euro-intermed.com` |
| `GA_MEASUREMENT_ID` | GA4 id; empty → no GA snippet + no cookie banner | *(unset)* |
| `SITE_URL` / `PUBLIC_SITE_URL` | canonical origin | `https://palletclearance.eu` |
| `PUBLIC_WHATSAPP_NUMBER` | wa.me number (digits) | `40745799995` |
| `PUBLIC_CONTACT_EMAIL` / `PUBLIC_CONTACT_PHONE` / `PUBLIC_CALENDLY_URL` | contact details | *(company defaults)* |
| `PUBLIC_URL_EURO_INTERMED` | hub deep-link | `https://euro-intermed.ro` |
| `PUBLIC_URL_ANGROSIST` | Angrosist deep-link | `https://angrosist.ro` |
| `PUBLIC_URL_SKALYOU` | SkalYou deep-link | `https://skalyou.com` |
| `PUBLIC_URL_READYMEAL` | Ready-Meal deep-link | `https://ready-meal.com` |
| `GOOGLE_SITE_VERIFICATION` | Search Console token; empty → no verification meta tag | *(unset)* |
| `PUBLIC_SOCIAL_LINKEDIN` / `PUBLIC_SOCIAL_FACEBOOK` / `PUBLIC_SOCIAL_INSTAGRAM` | official profile URLs added to Organization `sameAs`; empties skipped | *(unset)* |

GA4 uses **Consent Mode v2** — analytics storage stays `denied` until the visitor
accepts in the cookie banner (choice persisted in `localStorage['ei-analytics-consent']`).

### SEO / structured data

`src/lib/schema.ts` builds the JSON-LD nodes; `BaseLayout` emits **WebSite**
(+ publisher **Organization**) on every page, **FAQPage** on the home page (from
`c.faq.items`), and a **BreadcrumbList** on each non-home page
(`/cum-functioneaza`, `/contact`, legal). `robots.txt` is generated
(`src/pages/robots.txt.ts`) so its `Sitemap:` line is an absolute URL from
`SITE_URL`; the sitemap (`@astrojs/sitemap`, i18n-configured) emits `xhtml:link`
hreflang alternates.

**Owner: Search Console.** Add the property in
[Google Search Console](https://search.google.com/search-console), pick the
**HTML tag** method, copy the token into `GOOGLE_SITE_VERIFICATION` on the Vercel
project, redeploy, then verify and **submit `/sitemap-index.xml`** under Sitemaps.

## Accessibility & motion

WCAG AA: labels, visible focus, keyboard nav, AA+ contrast in light and dark. All
animation is CSS-first and wrapped in a `prefers-reduced-motion: reduce` off-switch.
