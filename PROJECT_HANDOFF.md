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

## 2026-09-16 audit
Implemented safe/reversible improvements:
- Strengthened Rythero entity signals without competitor-name mentions or keyword stuffing. Global JSON-LD uses a stable `@graph` with `Organization` (`#organization`) and `WebSite` (`#website`), canonical Rythero URL, logo, concise product description, publisher relationship and supported languages.
- Added factual About/entity pages in all three public languages: `/about`, `/es/about`, `/pt-br/about`. They describe Rythero consistently as an independent music-creation web platform and avoid unsupported marketing claims.
- Added all three About routes to `sitemap.xml`, fixing the hreflang symmetry for the About route.
- Language selector keeps EN / ES / PT and has a tiny second row containing only the two alternative-language flags: EN → Spain/Brazil; ES → US/Brazil; PT-BR → US/Spain. Links have `lang`, `hreflang`, `aria-label` and `title`; active text language uses `aria-current`. Fixed dimensions prevent layout shift.
- Retained canonical/hreflang pattern: EN, ES, pt-BR plus x-default EN.
- Logo has explicit dimensions in navigation to reduce layout shift.
- No paid service, API, advertising or subscription was enabled.

## Safety / deployment note
The site suffered a Cloudflare/www routing incident during the previous night. Do not make speculative DNS, Worker route, custom-domain or redirect changes. The root site is currently reported working by the owner. Repository/content changes should remain small and reversible. Verify production after deployment before making another infrastructure change.

Remaining manual checks:
- Confirm `https://rythero.com`, `/es/`, `/pt-br/`, all three `/about` variants and the three Signature Lab routes after Cloudflare has deployed the latest main commit.
- Confirm `www.rythero.com` permanently redirects to `https://rythero.com` without changing the working root-domain Worker mapping. Do not invent A/CNAME targets.
- Inspect the language selector on desktop and mobile after deployment: no current-language flag, no wrapping/layout shift, and each alternative flag reaches the equivalent localized route.
- Search Console can recrawl `/`, `/about`, `/es/about` and `/pt-br/about` after deployment. Entity disambiguation is gradual and cannot be guaranteed by schema alone.
- Sitemap `lastmod` is still manually maintained; consider generation later, only after a safe build/deploy workflow is established.
- Privacy/controller identity remains incomplete for a future commercial launch involving accounts, newsletter, payments or comparable personal-data collection.

## Signature Lab v2
Hybrid local + AI architecture remains the intended implementation. Local technical analysis measures duration, approximate BPM, level, dynamics, peak and energy movement without semantic claims. Advanced AI is explicit-action only and sends a derived mono 16 kHz excerpt rather than the full original. User-correctable detections are retained. System rules prohibit artist/song identification, lyric transcription, cloned voices, recovered-original-prompt claims, melody/hook reproduction and direct artist imitation.

Current activation blocker: advanced AI requires `GEMINI_API_KEY` as a Cloudflare Worker secret. Do not expose it in GitHub/browser code. Before meaningful public traffic, test known tracks and add abuse/rate protection so API costs cannot be exploited. No paid API was activated in this audit.

## Main product routes
English: `/`, `/tools/song-studio`, `/tools/prompt-builder`, `/tools/signature-lab`, `/learn`, lessons, `/about`, `/privacy`, `/cookies`.
Spanish: equivalent routes under `/es/`, including `/es/about`.
Brazilian Portuguese: equivalent routes under `/pt-br/`, including `/pt-br/about`.

## Development principle
Do not add tools/pages just to inflate counts. Prioritize painful creator problems with clear value. Real-user accuracy beats impressive-sounding output. Show uncertainty when analysis cannot support a claim. Avoid low-value SEO pages, keyword stuffing, competitor-name stuffing and unsupported claims such as “zero retention”, “copyright safe”, “100% original” or perfect identification.
