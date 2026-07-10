# PalletClearance.eu V1

Standalone English-first EN/RO website for PalletClearance.eu.

## Structure

- `index.html` - static landing page, language toggle, route summary, AI widget mount.
- `css/styles.css` - scoped `pc-` visual system.
- `js/main.js` - language switcher, route selection, WhatsApp updates, FAQ, mobile CTA.
- `js/legal.js` - privacy/terms helpers.
- `vercel.json` - static deploy config (this folder is its own Vercel project).
- `robots.txt` - crawl defaults.

The AI chat widget (`#ai-widget-container`) is the single intake channel. The old
PHP `form-handler.php` email form has been removed (Vercel does not run PHP);
WhatsApp / email / Calendly links remain as passive fallbacks.

## Contact Defaults

V1 uses the shared Euro Intermed contact details:

- Email: `eurointermeds@gmail.com`
- Phone / WhatsApp: `+40745799995`
- WhatsApp URL: `https://wa.me/40745799995`
- Calendly: `https://calendly.com/eurointermeds`

## Route Mapping

- `sell-overstock` -> `seller-flow`, target `palletclearance-seller`
- `buy-clearance` -> `buyer-flow`, target `palletclearance-buyer`
- `romania-market-entry` -> `market-entry-flow`, target `euro-intermed-market-entry`
- `other-b2b` -> `other-b2b-flow`, target `euro-intermed-triage`

## Guardrails

This website is a qualified B2B clearance desk. It intentionally avoids public stock browsing, public commercial terms, buyer/seller accounts, payments, automatic matching, file transfer, and AI backend behavior.

## Deploy & Widget

Deploy this folder as its own Vercel project. `build.mjs` runs as the build
command and templates the widget embed into `dist/` (which Vercel serves). The AI
widget is embedded before `</body>` (seller flow as the default — PalletClearance's
primary intake is sellers with overstock/clearance), inside
`<!-- WIDGET:START -->` / `<!-- WIDGET:END -->` markers with a `__WIDGET_BASE_URL__`
placeholder:

```html
<script src="__WIDGET_BASE_URL__/widget.js" defer></script>
<script>
  window.AngrosistChat.init({ vertical: "palletclearance", intent: "sell",
    lang: "en", privacyUrl: "/privacy.html" });
</script>
```

**The widget origin and visibility are NOT hardcoded — set these per Vercel project:**

| Env var | Default | Purpose |
|---|---|---|
| `WIDGET_BASE_URL` | `https://dash.euro-intermed.com` | Origin serving `widget.js`. Set `https://staging-dash.euro-intermed.com` on the staging project. |
| `WIDGET_ENABLED` | `true` | `false` removes the widget entirely from the page. |
| `GA_MEASUREMENT_ID` | *(empty)* | GA4 Measurement ID, e.g. `G-XXXXXXX`; set per Vercel project. Leave empty to disable analytics (no GA snippet, no cookie banner). Injected into the `<!-- GA:START -->` / `<!-- GA:END -->` block at build time — never hardcoded. |

Analytics uses Google Consent Mode v2 (analytics storage denied by default) with a
lightweight cookie banner that grants consent on Accept and persists it in
`localStorage`. A best-effort `chat_opened` GA event fires when the chat widget
launcher is opened (KPI §A.2).

`widget.js` is served by the deployed frontend project. The backend API URL is
**baked into `widget.js` at build time** from the frontend's `VITE_API_URL` — the
site does not pass `apiUrl`. To repoint the backend, change `VITE_API_URL` in the
frontend deploy and rebuild `widget.js`; all embeds follow.

## Production Blockers

- Final dedicated PalletClearance email/phone if different from Euro Intermed.
- Final privacy and terms URLs.
