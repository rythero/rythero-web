# RYTHERO — Project handoff

Last updated: 2026-09-16

## Product direction
- Domain: https://rythero.com
- Brand: **RYTHERO**
- Positioning: independent international music-creation product/platform, not a generic AI blog and not an artist project.
- Core line: **Create music. Build your sound.**
- Public languages: English root, Spanish `/es/`, Brazilian Portuguese `/pt-br/`.
- Product thesis: clarity + simplicity + completeness. Keep the homepage light; tools create the depth.

## Technical stack
- GitHub: `rythero/rythero-web`
- Astro static site + Cloudflare Workers.
- Build: `npm run build`; deploy: `npx wrangler deploy`.
- Canonical origin: `https://rythero.com`.
- GA4 `G-7K1ENQ4HTZ` is consent-gated. Cloudflare Web Analytics enabled. Search Console domain property verified.
- `astro.config.mjs`: site `https://rythero.com`, trailingSlash `never`.
- Worker API `/api/music-analyze`; credentials must remain Worker secrets.

## 2026-09-16 night audit
Implemented safe/reversible improvements:
- Strengthened Rythero entity signals without competitor-name mentions or keyword stuffing. Global JSON-LD now uses a stable `@graph` with `Organization` (`#organization`) and `WebSite` (`#website`), canonical Rythero URL, logo, concise product description, publisher relationship and supported languages.
- Added `/about`, a short factual English brand/entity page explaining that Rythero is an independent web platform for AI-assisted music creation, song planning, prompt building, audio analysis and learning. The existing English homepage already linked to `/about`; that link previously targeted a missing route.
- Added `/about` to `sitemap.xml`.
- Language selector keeps EN / ES / PT and now has a tiny second row containing only the two alternative-language flags: EN → Spain/Brazil; ES → US/Brazil; PT-BR → US/Spain. Links have `lang`, `hreflang`, `aria-label` and `title`; active text language uses `aria-current`. Fixed dimensions prevent layout shift.
- Retained canonical/hreflang pattern: EN, ES, pt-BR plus x-default EN.
- Logo has explicit dimensions in navigation to reduce layout shift.
- No paid service, API, advertising or subscription was enabled.

Audit findings / remaining manual checks:
- `www.rythero.com` Cloudflare configuration is still a manual infrastructure item. Root domain is Worker-managed. Do not invent A/CNAME targets. Configure `www` deliberately and permanently redirect it to `https://rythero.com` to maintain one canonical host.
- Live-site fetch/search verification was unavailable during this run, so confirm Cloudflare deployment after the GitHub commits and inspect EN/ES/PT-BR on mobile and desktop.
- Search Console should be asked to recrawl `/` and `/about` after deployment; entity disambiguation is a gradual search-engine process, not an instant guarantee.
- The new `/about` is English only. Do not publish thin translated duplicates merely for symmetry; add ES/PT-BR versions when useful localized copy is ready, then include them in hreflang/sitemap.
- Existing sitemap has manually maintained lastmod values; consider generated sitemap later to prevent drift.
- Privacy/controller identity remains incomplete for a future commercial launch involving accounts, newsletter, payments or comparable personal-data collection.

## Signature Lab v2
Hybrid local + AI architecture remains the intended implementation. Local technical analysis measures duration, approximate BPM, level, dynamics, peak and energy movement without semantic claims. Advanced AI is explicit-action only and sends a derived mono 16 kHz excerpt rather than the full original. User-correctable detections are retained. System rules prohibit artist/song identification, lyric transcription, cloned voices, recovered-original-prompt claims, melody/hook reproduction and direct artist imitation.

Current activation blocker: advanced AI requires `GEMINI_API_KEY` as a Cloudflare Worker secret. Do not expose it in GitHub/browser code. Before meaningful public traffic, test known tracks and add abuse/rate protection so API costs cannot be exploited. No paid API was activated in this audit.

## Main product routes
English: `/`, `/tools/song-studio`, `/tools/prompt-builder`, `/tools/signature-lab`, `/learn`, lessons, `/about`, `/privacy`, `/cookies`.
Spanish and Portuguese: equivalent existing product/learning/privacy routes under `/es/` and `/pt-br/` (no localized About yet).

## Development principle
Do not add tools/pages just to inflate counts. Prioritize painful creator problems with clear value. Real-user accuracy beats impressive-sounding output. Show uncertainty when analysis cannot support a claim. Avoid low-value SEO pages, keyword stuffing, competitor-name stuffing and unsupported claims such as “zero retention”, “copyright safe”, “100% original” or perfect identification.
