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
- Phone / WhatsApp: `+40765934455`
- WhatsApp URL: `https://wa.me/40765934455`
- Calendly: `https://calendly.com/eurointermeds`

## Route Mapping

- `sell-overstock` -> `seller-flow`, target `palletclearance-seller`
- `buy-clearance` -> `buyer-flow`, target `palletclearance-buyer`
- `romania-market-entry` -> `market-entry-flow`, target `euro-intermed-market-entry`
- `other-b2b` -> `other-b2b-flow`, target `euro-intermed-triage`

## Guardrails

This website is a qualified B2B clearance desk. It intentionally avoids public stock browsing, public commercial terms, buyer/seller accounts, payments, automatic matching, file transfer, and AI backend behavior.

## Deploy & Widget

Static site — deploy this folder directly as its own Vercel project (no build
step). The AI widget is embedded before `</body>` with the seller flow as the
default (PalletClearance's primary intake is sellers with overstock/clearance):

```html
<script src="https://dash.staging.euro-intermed.com/widget.js" defer></script>
<script>
  window.AngrosistChat.init({ containerId: "ai-widget-container",
    vertical: "palletclearance", intent: "sell", lang: "en",
    privacyUrl: "/privacy.html" });
</script>
```

`widget.js` is served by the deployed frontend project. The backend API URL is
**baked into `widget.js` at build time** from the frontend's `VITE_API_URL` — the
site does not pass `apiUrl`. To repoint the backend, change `VITE_API_URL` in the
frontend deploy and rebuild `widget.js`; all embeds follow. No URL is hardcoded
in the sites.

## Production Blockers

- Final dedicated PalletClearance email/phone if different from Euro Intermed.
- Final privacy and terms URLs.
