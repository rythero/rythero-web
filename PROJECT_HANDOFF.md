# RYTHERO — Project handoff

Last updated: 2026-09-16

## Product direction
- Domain: https://rythero.com
- Brand: **RYTHERO**
- Positioning: international music-creation product/platform, not a generic AI blog and not an artist project.
- Core line: **Create music. Build your sound.**
- Public languages: English root, Spanish `/es/`, Brazilian Portuguese `/pt-br/`.
- Product thesis: **clarity + simplicity + completeness**. Explain specialist ideas in plain language first, jargon second.
- Keep the homepage visually light; tools create the depth.
- Editorial layer: **AI Music Creator School**.
- Day-to-day topic choice, SEO intent, internal linking and publication order are delegated to the assistant unless the owner asks for a specific change.

## Technical stack
- GitHub: `rythero/rythero-web`
- Astro static site + Cloudflare Workers.
- Build: `npm run build`
- Deploy: `npx wrangler deploy`
- Production Worker URL: `https://rythero-web.alzheimeruniversal.workers.dev`
- Root domain: `https://rythero.com`
- GA4: `G-7K1ENQ4HTZ`, consent-gated.
- Cloudflare Web Analytics enabled.
- Search Console domain property verified.
- Sitemap: `https://rythero.com/sitemap.xml`
- `astro.config.mjs`: `site: https://rythero.com`, `trailingSlash: never`.

### Worker API architecture added 2026-09-16
`wrangler.jsonc` now includes:
- `main: ./worker/index.js`
- static assets binding `ASSETS`
- `run_worker_first: ["/api/*"]`
- existing `not_found_handling: 404-page`

`worker/index.js` adds `/api/music-analyze` while all normal pages/assets continue through the Astro static build.
API credentials must be Cloudflare Worker secrets, never browser JS or GitHub.

## Cloudflare custom-domain incident — recovered
- Worker deployment itself was confirmed healthy on `workers.dev`.
- `rythero.com` failed at the Custom Domain layer.
- Removing and re-adding `rythero.com` under `Workers & Pages → rythero-web → Domains` restored access.
- Do not replace the Worker-managed DNS binding with random A/CNAME records or disable SSL.

## Navigation
Desktop primary navigation:
- Studio
- School / Escuela / Escola
- Prompt Builder

Homepage surfaces Signature Lab separately.

## Main routes
English: `/`, `/tools/song-studio`, `/tools/prompt-builder`, `/tools/signature-lab`, `/learn`, lesson routes, `/privacy`, `/cookies`.
Spanish: equivalent routes under `/es/`.
Portuguese: equivalent routes under `/pt-br/`.

## Rythero Studio
Files:
- `src/components/SongStudio.astro` — localized wrapper.
- `src/components/SongStudioSafe.astro` — build-safe UI.
- `public/song-studio.js` — functionality.
- `public/studio-ui-localized.js` — localized labels/options and Audio Analyzer explanation.

Seven tools:
1. Plan de canción / Song Blueprint.
2. Doctor de prompts / Prompt Doctor.
3. ADN de estilo / Style DNA.
4. Mapa de arreglo / Arrangement Map.
5. Plan de letra / Lyrics Blueprint.
6. Export helper.
7. Analizador de audio / Audio Analyzer.

Public interface labels must be localized in ES/PT-BR. Generator-ready prompts may remain English for portability.
Studio EN/ES/PT routes must import `SongStudio.astro`, not `SongStudioSafe.astro` directly.

### Audio Analyzer
- Browser-local Web Audio analysis.
- Duration, estimated BPM, average level, dynamics, peak and waveform.
- Does not judge quality or claim mastering-grade accuracy.

# Signature Lab v2 — hybrid local + AI music analysis
Files:
- `src/components/SignatureLab.astro`
- `public/signature-lab.js`
- `worker/index.js`
- EN/ES/PT-BR routes.

## Why v1 was replaced
A real-user test showed the original local-only prototype could return descriptions that did not match a known track. Its engine only measured BPM, RMS, dynamics, energy movement, zero-crossing/transient proxies and then generated generic language from those numbers. That is insufficient for genre, instrumentation, vocal character or production-style understanding.

Do not present the old local DSP result as semantic music analysis.

## v2 architecture
Signature Lab now separates two layers visibly:

### A. Technical analysis — local
- Full uploaded file stays in the browser.
- Measures duration, approximate BPM, average level, dynamic range, peak and energy movement.
- Output is explicitly labeled **Technical estimate / Estimación técnica**.
- It does not claim to identify genre, instruments, vocals or mood.

### B. AI music analysis — server-assisted
- Explicit user action only: `Analyze music with AI / Analizar música con IA`.
- Browser decodes the original locally.
- Instead of uploading the whole track, browser creates a derived mono 16 kHz WAV made from short early/middle/late excerpts (about 21 seconds total for normal-length tracks).
- Only that derived analysis excerpt plus local technical metrics is sent to `/api/music-analyze`.
- Worker forwards the excerpt to the configured AI provider.
- Full original audio is not sent by this implementation and Rythero does not intentionally store the analysis excerpt after the request.

### Current AI provider implementation
Primary provider: **Google Gemini 3.8 Flash** using the Gemini API with structured JSON output and `store: false`.
Cloudflare secret required:
- `GEMINI_API_KEY`

The key must come from a billing-enabled Gemini API project before public production use. Do not use a free-tier key for unpublished user music if its data-use terms allow content to improve provider products.

The Worker requests structured analysis for:
- likely genre/style families + confidence
- mood + confidence
- tempo feel
- meter
- probable key/mode, with uncertainty allowed
- vocal presence, delivery and character
- probable instruments
- groove
- bass behavior
- harmony character
- production/mix traits
- broad structure
- distinctive transferable traits
- uncertainties
- suggested English generator prompt
- exclude list

System rules explicitly prohibit:
- artist/song identification
- lyric transcription
- cloned voices
- recovered “original prompt” claims
- melody/hook reproduction
- direct artist imitation

## User correction layer
Single-track AI results show **What Rythero heard / Qué ha oído Rythero** as removable traits with confidence percentages.
The user can delete a wrong style/instrument/vocal/production tag and rebuild the prompt only from the accepted traits.
This is deliberate: uncertain model classifications should be visible and correctable rather than hidden.

## Signature Lab modes
1. **Song → Prompt**: local technical measurement + AI semantic music analysis + editable detections + reviewed prompt.
2. **Build my sound**: 2–3 derived reference excerpts are analyzed together to find shared transferable traits, separate differences, create an original core Signature and save it in localStorage (`rythero-signature-v2`).
3. **Did I get close?**: a derived excerpt from a new result is compared against the saved Signature; returns matches, differences, next changes and a revised prompt.

This is creative-direction analysis, not a copyright-similarity detector.

## Future specialist cross-check
Cyanite Auto-Tagging 2.0 is a strong candidate for a second music-specific analysis layer because it provides dedicated BPM/tempo, instrument, vocal-style and segment-level tagging through a REST API. Integration requires Cyanite API access and webhook credentials, so do not build it into the production path until credentials/commercial terms are available.

OpenAI GPT-Audio can accept audio through the API and may be evaluated as a semantic second opinion, but it is currently positioned primarily as a general audio/voice model rather than a dedicated music-tagging taxonomy. Do not assume private ChatGPT product tools can be embedded; only public APIs/models should be integrated.

## Signature Lab privacy wording
Privacy pages in EN/ES/PT-BR now distinguish:
- local technical analysis: audio stays on device;
- advanced AI analysis: a short derived excerpt is sent to the provider via Rythero backend only after explicit user action.

Do not claim “zero retention”, “copyright safe”, “100% original” or perfect identification.

## Current activation blocker
The advanced AI code is deployed from GitHub but cannot perform semantic analysis until `GEMINI_API_KEY` is added as a Cloudflare Worker secret.
Without that secret, the site remains functional and the local technical mode works; the UI should show that the AI engine is not yet activated.

After adding the secret:
1. Confirm Cloudflare deployment is green.
2. Open `/es/tools/signature-lab`.
3. Confirm status shows AI engine ready / `gemini-3.8-flash`.
4. Test a track whose genre/instruments/vocal style are already known.
5. Compare the AI semantic result with the known facts before promoting the feature.
6. Test one short TikTok-style clip and one full WAV/MP3.
7. Test Build my sound with 2 and 3 references.
8. Test Did I get close? against the saved profile.
9. Add rate limiting / abuse protection before significant public traffic so API costs cannot be abused.

## Homepage
Tools section currently features:
1. **Signature Lab — AI + local**.
2. Rythero Studio.
3. Prompt Builder.

Homepage copy must never say all Signature Lab audio remains local; only the technical mode does. Advanced AI sends a derived excerpt after explicit action.

## Prompt Builder
- Live EN/ES/PT-BR.
- Searchable multi-selects for genre, mood, vocal, instrumentation, production and exclude.
- `More ideas ↻` rotates suggestions.
- Final prompt remains English for generator compatibility.

## AI Music Creator School
- `/learn`, `/es/learn`, `/pt-br/learn`.
- Published lessons: AI Music Prompts and AI Song Structure in all three languages.
- No filler SEO publishing.
- Standard: simple explanation + concrete musical example + relevant Rythero action/tool.
- Next cluster: Style DNA without artist imitation; BPM/key/energy; practical current Suno guide after fresh source verification.

## Consent / legal
- GA4 remains off until explicit analytics consent.
- Reject/Accept equal prominence.
- Advertising storage/user-data/personalization denied.
- Signature Lab AI analysis is a separate explicit user action rather than being tied to analytics consent.
- Full controller identity/contact information is still required before active commercial/public-service launch involving user accounts, newsletter, payments or comparable data collection.

## Development principle
Do not add many small tools just to inflate the tool count. Prioritize painful creator problems with a one-sentence value proposition. Real-user accuracy beats impressive-sounding output. If an analysis cannot support a claim, show uncertainty rather than inventing specificity.
