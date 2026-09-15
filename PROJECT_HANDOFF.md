# RYTHERO — Project handoff

Last updated: 2026-09-16

## Product direction
- Domain: https://rythero.com
- Brand: **RYTHERO**
- Positioning: international music-creation product/platform, not a generic AI blog and not an artist project.
- Core line: **Create music. Build your sound.**
- Public languages: English root, Spanish `/es/`, Brazilian Portuguese `/pt-br/`.
- Internal work with the owner remains in Spanish.
- Product thesis: **clarity + simplicity + completeness**. Explain specialist ideas in plain language first, jargon second.
- The site should feel light and product-like. People may arrive for information, but useful tools should be the reason they return.
- Editorial layer: **AI Music Creator School** / localized equivalent.
- Day-to-day editorial topic choice, SEO intent, internal linking and publication order are delegated to the assistant unless the owner asks for a specific change.

## Technical stack
- GitHub: `rythero/rythero-web`
- Astro static site
- Cloudflare Workers deploy from GitHub `main`
- Build: `npm run build`
- Deploy: `npx wrangler deploy`
- Production Worker URL: `https://rythero-web.alzheimeruniversal.workers.dev`
- Root production domain: `https://rythero.com`
- GA4 measurement ID: `G-7K1ENQ4HTZ`, loaded only after consent.
- Cloudflare Web Analytics enabled.
- Search Console domain property verified.
- Sitemap: `https://rythero.com/sitemap.xml`
- `astro.config.mjs` uses `site: https://rythero.com` and `trailingSlash: never`.

## Cloudflare incident — resolved/recovered 2026-09-15
- A previous Astro build failed around the original `SongStudio.astro` component.
- `SongStudioSafe.astro` was introduced as the build-safe implementation; `SongStudio.astro` is now the wrapper that renders it and loads localized Studio UI helpers.
- Green Cloudflare builds subsequently generated the Studio, School and Prompt Builder routes.
- Worker URL was confirmed reachable on mobile data while `rythero.com` was not, isolating the problem to the Custom Domain binding rather than code/deployment.
- SSL certificates were active, DNSSEC was off and the root DNS record was a Cloudflare Worker record pointing to `rythero-web`.
- The stale Custom Domain binding was removed and `rythero.com` was added again under `Workers & Pages → rythero-web → Domains`.
- `Visit` then opened the site successfully.
- Do not randomly replace the Worker DNS record with A/CNAME records or disable SSL.

## Navigation
Desktop primary navigation is intentionally compact:
- Studio
- School / Escuela / Escola
- Prompt Builder

Homepage surfaces the broader tool set, including Signature Lab.

## Current main routes
English:
- `/`
- `/tools/song-studio`
- `/tools/prompt-builder`
- `/tools/signature-lab`
- `/learn`
- `/learn/ai-music-prompts`
- `/learn/ai-song-structure`
- `/privacy`
- `/cookies`

Spanish:
- `/es/`
- `/es/tools/song-studio`
- `/es/tools/prompt-builder`
- `/es/tools/signature-lab`
- `/es/learn`
- `/es/learn/ai-music-prompts`
- `/es/learn/ai-song-structure`
- `/es/privacy`
- `/es/cookies`

Portuguese:
- `/pt-br/`
- `/pt-br/tools/song-studio`
- `/pt-br/tools/prompt-builder`
- `/pt-br/tools/signature-lab`
- `/pt-br/learn`
- `/pt-br/learn/ai-music-prompts`
- `/pt-br/learn/ai-song-structure`
- `/pt-br/privacy`
- `/pt-br/cookies`

Also: `/404.html`, `/sitemap.xml`, `/robots.txt`.

## Rythero Studio
Shared wrapper: `src/components/SongStudio.astro`
Build-safe UI: `src/components/SongStudioSafe.astro`
Browser logic: `public/song-studio.js`
Localized UI helper: `public/studio-ui-localized.js`

Seven tools remain grouped inside one workspace:
1. Song Blueprint / localized Plan de canción.
2. Prompt Doctor / Doctor de prompts.
3. Style DNA / ADN de estilo.
4. Arrangement Map / Mapa de arreglo.
5. Lyrics Blueprint / Plan de letra.
6. Export helper.
7. Audio Analyzer / Analizador de audio.

Important UX rule:
- Public interface labels should be localized in ES/PT-BR.
- Generator-ready prompts can remain in English for portability.
- Studio routes were changed on 2026-09-16 to import the localized `SongStudio.astro` wrapper rather than bypassing it with `SongStudioSafe.astro` directly. This fixes the issue where the Spanish route still showed `Song Blueprint / Prompt Doctor / Style DNA / Lyrics Blueprint / Audio Analyzer` in English.

### Audio Analyzer
- Browser-local Web Audio analysis.
- Shows duration, estimated BPM, average level, dynamics and waveform.
- Added a plain-language explanation of what it is useful for.
- It does not judge musical quality, recover chords or replace mastering tools.
- BPM/dynamics are estimates.

## Signature Lab — implemented 2026-09-16
Files:
- `src/components/SignatureLab.astro`
- `public/signature-lab.js`
- routes in EN/ES/PT-BR.

Signature Lab is intended to be a differentiating Rythero tool. It is not marketed as recovering an “original prompt”. It turns general measurable audio traits into an original creative direction.

### Mode 1 — Song → Prompt
- User uploads one audio file.
- Audio is decoded locally in the browser.
- Measures general traits including estimated BPM, energy, dynamics, rhythmic activity, movement over time and a coarse transient/texture characteristic.
- Estimates the first meaningful energy lift rather than claiming to identify a chorus/hook with certainty.
- Produces an English generator-ready prompt.
- Optional short creator note can add information the browser cannot reliably infer, e.g. vocal character or a particular instrument.

### Mode 2 — Build my sound
- User uploads 2–3 references.
- Rythero looks for shared measurable traits and builds a reusable Signature profile.
- User chooses which traits to preserve: groove/tempo, energy, dynamics, section movement and texture/rhythmic edge.
- A creative-distance control ranges from preserving the common core to using the references only as a broad compass.
- The profile and prompt are saved only in local browser storage, not on the server.
- This mode can also be used with the creator’s own catalog to reveal recurring characteristics of their existing sound.

### Mode 3 — Did I get close?
- User uploads a new generated result.
- Rythero compares its general measurable traits with the locally saved Signature profile.
- It reports whether the musical direction is broadly near/mixed/far from the chosen target traits and suggests concrete next-prompt changes.
- It creates a revised English prompt.
- This is a creative-direction check, not a copyright-similarity detector.

### Safety / legal design
- Audio files are processed locally in the browser by the current implementation and are not uploaded by Signature Lab.
- The tool does not return stems, lyrics, melodies, cloned voices, artist identities or an alleged original generation prompt.
- Output explicitly asks for a distinct melody, harmony, lyrics and vocal identity and tells users to avoid direct artist imitation, cloned voices, copied hooks, recognizable melodic phrases or recreated recordings.
- A discreet expandable notice tells users to use audio they are entitled to analyze and explains that the result is creative guidance, not a copyright/originality determination.
- Privacy pages in EN/ES/PT-BR now document local audio processing and local Signature profile storage.
- Do not make legal guarantees such as “copyright safe” or “100% original”.

## Homepage — current tool emphasis
The Tools section now features:
1. **Signature Lab** — marked new/local.
2. Rythero Studio.
3. Prompt Builder.

Audio Analyzer remains inside Studio rather than consuming another homepage card.

## Prompt Builder
- Standalone tool remains live in EN/ES/PT-BR.
- Smart searchable multi-selects for genre, mood, vocal, instrumentation, production and exclude.
- `More ideas ↻` rotates curated suggestions.
- Mobile helper updates placeholders and closes the touchscreen keyboard after a choice.
- Final prompt remains English for generator compatibility.

## AI Music Creator School
Routes:
- `/learn`, `/es/learn`, `/pt-br/learn`

Published lessons:
1. AI Music Prompts / prompts para música con IA.
2. AI Song Structure / estructura de una canción con IA.

Editorial rules:
- No filler SEO publishing.
- Simple explanation + concrete musical example + relevant Rythero action/tool.
- Minimal premium visuals; no generic robot/brain/headphone clichés.
- Current next cluster: Style DNA without artist imitation; BPM/key/energy; practical current Suno guide after fresh source verification.

## Sitemap / SEO
- Signature Lab routes have been added to `public/sitemap.xml` in all three languages.
- Homepage links to Signature Lab in all three languages.
- Canonicals and hreflang remain language-aware through `Base.astro`.
- Search Console sitemap was already submitted as full URL `https://rythero.com/sitemap.xml`.

## Consent / privacy
- Google Analytics remains off until explicit consent.
- Reject/Accept have equal prominence and rejecting does not limit access.
- Advertising storage/user-data/personalization remain denied.
- Local audio analysis does not require consent because files stay on-device in the current implementation; if a future server-side/AI analysis service is added, privacy/consent must be reviewed again before shipping.
- Full controller identity/contact information is still required before active commercial/public-service launch involving forms, accounts, newsletters, payments or similar data collection.

## Verification checklist after current deployment
1. Confirm Cloudflare build/deploy is green.
2. Open `/es/tools/song-studio` and confirm the seven Studio tabs are localized.
3. Re-test all seven Studio functions; safe-wrapper changes should not be assumed fully verified until used in production.
4. Open `/es/tools/signature-lab`.
5. Test Song → Prompt with an MP3 and, if available, WAV/M4A.
6. Test Build my sound with 2 files and then 3 files.
7. Confirm a Signature profile survives refresh locally.
8. Test Did I get close? with another track and confirm it produces adjustments + revised prompt.
9. Confirm the same Signature Lab route loads in EN and PT-BR.
10. Confirm homepage cards link to the correct language route.
11. Recheck `https://rythero.com/sitemap.xml`.
12. After verification, request indexing for `/tools/signature-lab` and optionally ES/PT-BR counterparts.
13. Do not push significant social traffic until these checks pass.

## Distribution direction
- One Rythero YouTube channel, not separate channels by language.
- First promotional assets should be simple EN/ES/PT-BR variations showing problem → Rythero → result → URL.
- Signature Lab is now a strong candidate for the first demo video because the user story is simple: upload reference → understand the sound → create your own direction → compare the result.

## Development principle from here
Do not add many small tools simply to increase tool count. Prefer workflows that solve a painful creator problem and can be explained in one sentence. Improve real-user results from Signature Lab, Studio and Prompt Builder before adding another large feature.
