# RYTHERO — Project handoff

Last updated: 2026-09-15

## Product direction
- Domain: https://rythero.com
- Brand: RYTHERO
- Positioning: international music-creation product/platform, not a generic AI blog and not an artist project.
- Core line: **Create music. Build your sound.**
- Product promise now shown on the homepage: start with a rough idea and leave with a song-ready plan.
- Public product languages: English root, Spanish `/es/`, Brazilian Portuguese `/pt-br/`.
- Internal work with the owner remains in Spanish.
- Product principle: keep the site visually light; depth should come from useful tools rather than a crowded homepage.
- Beginner-first UX: assume some visitors have never made music before and explain decisions while they work.
- Editorial layer is the **AI Music Creator School** / localized equivalent, positioned as practical music engineering rather than a generic AI-news blog.
- Competitive editorial/product thesis: **clarity + simplicity + completeness**. Rythero does not need to claim it is the most advanced platform; it should aim to make music-creation decisions easier to understand and sufficiently complete for a beginner to act immediately.
- Avoid unverifiable superiority claims such as “the easiest site on the internet”. Prefer grounded language such as “built to make this simpler”, “simple, complete and practical”, and “enough to get you moving without learning the whole vocabulary first”.
- Editorial governance: day-to-day topic selection, SEO intent, structure, internal linking and publication order should be handled proactively and consistently; the owner expects mainly to request small changes rather than redefine the editorial line article by article.
- Public learning promise: a visitor should be able to **start from zero and leave knowing how to build a song**, without having to learn production jargon first.

## Technical stack
- GitHub: `rythero/rythero-web`
- Astro static site
- Cloudflare Workers deploy from GitHub `main`
- Build: `npm run build`
- Deploy: `npx wrangler deploy`
- Root production domain: `https://rythero.com`
- www redirects 301 to root
- Cloudflare Web Analytics enabled
- GA4 measurement ID: `G-7K1ENQ4HTZ`, loaded only after consent
- Search Console domain property verified
- Sitemap: `https://rythero.com/sitemap.xml`
- Astro config uses `site: https://rythero.com` and `trailingSlash: never`.

## Multilingual architecture
- English: `/`
- Spanish: `/es/`
- Portuguese (Brazil): `/pt-br/`
- `html lang`, canonicals, `hreflang` (`en`, `es`, `pt-BR`, `x-default`) and Open Graph locale are language-aware.
- Shared Base layout localizes navigation, footer and cookie consent.
- Core school lessons are published completely in EN/ES/PT-BR, not as partial summaries.
- Do not add more languages until analytics/search demand justifies it.

## Current public routes
English:
- `/`
- `/tools/song-studio`
- `/tools/prompt-builder`
- `/learn`
- `/learn/ai-music-prompts`
- `/learn/ai-song-structure`
- `/privacy`
- `/cookies`

Spanish:
- `/es/`
- `/es/tools/song-studio`
- `/es/tools/prompt-builder`
- `/es/learn`
- `/es/learn/ai-music-prompts`
- `/es/learn/ai-song-structure`
- `/es/privacy`
- `/es/cookies`

Portuguese:
- `/pt-br/`
- `/pt-br/tools/song-studio`
- `/pt-br/tools/prompt-builder`
- `/pt-br/learn`
- `/pt-br/learn/ai-music-prompts`
- `/pt-br/learn/ai-song-structure`
- `/pt-br/privacy`
- `/pt-br/cookies`

Also: `/404.html`, `/sitemap.xml`, `/robots.txt`.

## Rythero Studio v1 — implemented 2026-09-15
Shared component: `src/components/SongStudio.astro`
Shared browser logic: `public/song-studio.js`
Routes exist in EN/ES/PT-BR.

Rythero Studio intentionally groups seven tools into one workspace so the site gains functionality without filling the navigation with many pages.

### 1. Song Blueprint
- Inputs: song idea, style/genre, mood, energy, lead vocal, target length, lyrics language.
- Produces a structured production brief: direction, BPM range, tonal/key direction, sound palette, vocal direction, arrangement, production and avoid list.
- Produces a final generator-ready English prompt.
- Style-aware profiles currently cover major useful styles including Afro house, Amapiano, Afrobeats, K-pop, alt-R&B, R&B, trap, hip-hop/rap, house, techno, DnB, reggaeton, Brazilian funk, flamenco fusion, Arabic/raï direction, rock, lo-fi, synthwave and pop.
- Latest Blueprint is stored locally in the browser and can be sent to Export.

### 2. Prompt Doctor
- User pastes an existing music prompt.
- Checks for very vague prompts, excessive length, named-artist imitation phrasing, some contradictory instructions, too many genre directions and multiple BPM values.
- De-duplicates repeated clauses and returns a cleaner prompt.
- This is a lightweight rule-based repair tool, not an external AI call.

### 3. Style DNA
- Defines reusable sound identity through groove, texture, era/finish, harmony, voice character, space and energy.
- Generates an original reusable English Style DNA description without relying on artist imitation.
- Stores up to five saved DNA profiles locally in the browser.

### 4. Arrangement Map
- User chooses duration and structure profile.
- Generates section timing with start/end times and a visual timeline.
- Current structures: Hook-first, Pop build, Rap/verse-led, Club/drop-led and Slow burn.

### 5. Lyrics Blueprint
- Inputs: theme, concrete detail/image, point of view, emotional arc, rhyme density, lyrics language and structure.
- Produces a section-by-section writing plan rather than generic filler lyrics.
- Emphasizes story progression, a clear hook and concrete imagery.

### 6. Export helper
- Targets: Generic, Suno, Udio.
- Adapts/presents the same creative brief in a cleaner target-oriented format.
- This is a format helper only; Rythero is not affiliated with or connected to Suno/Udio and no unofficial API is used.
- The architecture should remain provider-agnostic so official integrations can be added later if suitable APIs become available.

### 7. Audio Analyzer — browser-local
- User uploads an audio file; nothing is sent to Rythero.
- Uses Web Audio API locally.
- Shows duration, estimated BPM, average level, approximate dynamics, peak, sample rate and waveform.
- BPM is explicitly treated as an estimate; half-time/double-time material may read differently.
- Do not present this analyzer as mastering-grade measurement.

## Prompt Builder v1.7
- Existing standalone quick tool remains live in all three languages.
- Smart searchable multi-selects: Genre, Mood, Vocal, Instrumentation, Production, Exclude.
- `More ideas ↻` rotates curated blocks of up to eight suggestions.
- Mobile beginner UX helper changes placeholder after selections (e.g. `Add another style · 1/4`) and closes the touchscreen keyboard after choosing an option.
- Final output remains English for generator compatibility.
- Shared component: `src/components/PromptBuilder.astro`
- Shared logic: `public/prompt-builder-localized.js`
- Mobile UX helper: `public/prompt-builder-ux.js`

## AI Music Creator School / SEO editorial layer — implemented 2026-09-15
- Strategy document: `EDITORIAL_STRATEGY.md`.
- Shared school landing component: `src/components/CreatorSchool.astro`.
- Lesson 01 shared component: `src/components/AIMusicPromptsArticle.astro`.
- Lesson 02 shared component: `src/components/AISongStructureArticle.astro`.
- School landing pages exist in EN/ES/PT-BR.
- School landing promise is now explicit: **start from zero, learn to build a song**.
- All published lessons are visibly grouped under a localized “Published lessons / Lecciones publicadas / Aulas publicadas” section; future lessons are clearly separated.
- Lesson 01 exists in EN/ES/PT-BR at `/learn/ai-music-prompts` and localized equivalents. It teaches a producer-style prompt framework around genre, mood/energy, tempo, voice, instrumentation, structure and production.
- Lesson 02 exists in EN/ES/PT-BR at `/learn/ai-song-structure` and localized equivalents. It explains intro, verse, pre-chorus, chorus, hook, bridge/breakdown/drop, outro, 4/8/16-bar thinking, transitions, simple genre-specific maps and common flat-arrangement mistakes.
- Lesson 02 uses a compact in-page arrangement-map visual instead of a decorative oversized image because the visual directly teaches the topic.
- Lesson 02 links directly to Rythero Studio Arrangement Map and back to Lesson 01.
- Creator School landing surfaces Lesson 02 as a new live lesson rather than leaving it in the future list.
- Article JSON-LD is implemented with publication/update date, Rythero as organizational author/publisher and language-aware canonical URL.
- Sitemap contains school landing pages and both live lessons in all three languages.
- Do not mass-publish filler. Build topical authority with a small cluster of strong lessons that solve real creator problems.
- A separate Rythero article about “why AI songs sound generic” is intentionally not a current priority because a similar editorial angle already exists elsewhere in the owner’s ecosystem.
- Current next cluster: Style DNA without artist imitation; BPM/key/energy; practical Suno v6 guide.
- Editorial visuals should be minimal, dark premium music-tech, no text baked into raster imagery, no generic robot/brain/headphone clichés, and displayed modestly rather than as oversized hero art.
- Permanent editorial standard: explain specialist concepts in plain language first and introduce jargon second. Simplify the explanation, not the idea.
- Every strong lesson should ideally combine a simple explanation + concrete musical example + relevant Rythero action/tool. This is a core product/content differentiator.

## Homepage changes for Studio / School launch
- Primary CTA opens Rythero Studio in the matching language.
- Secondary hero CTA now opens the localized Creator School (`Learn from zero` / `Aprende desde cero` / `Aprenda do zero`) so learning is visible immediately on desktop and mobile.
- Prompt Builder remains easy to find in the Tools section rather than competing with School in the hero.
- Tools section shows Rythero Studio, Prompt Builder and Audio Analyzer.
- Homepage School section now states the concrete promise: start from zero and leave knowing how to build a song.
- Homepage School copy explicitly says published lessons are gathered in one place and available in all three languages.
- Guide cards explain idea → song-ready, identity without imitation, and prompt repair.

## Open Graph / social sharing
- Asset: `/public/rythero-og.jpg`, 1200×630 JPEG.
- Base layout contains `og:image`, secure URL, image type/size/alt metadata and `twitter:card=summary_large_image`.
- `max-image-preview:large` enabled.
- Shared WebSite JSON-LD includes site image.
- After deployment verify `https://rythero.com/rythero-og.jpg`.
- Then request a fresh homepage crawl in Google Search Console and use Facebook Sharing Debugger → Scrape Again for `https://rythero.com/`.

## Consent / privacy
- Google Analytics remains off until consent.
- Reject and Accept have equal prominence and rejecting does not limit site access.
- Advertising storage/user-data/personalization remain denied.
- Before forms, accounts, newsletter, commerce or ads: expand controller identity/contact details and re-review compliance.

## Brand / UI
- Dark premium music-tech/cyber visual system with neon-green accent.
- Current mark: geometric neon-green app-style symbol.
- Footer has discreet `// JOHN DOE` signature and animated green scan line.
- Owner previously requested the scan animation be faster/more active; this remains a cosmetic follow-up if not already changed.

## Monetization / integration principles
- Do not make Rythero dependent on Stripe.
- Do not use borrowed/nominee payment accounts.
- Prefer a replaceable payment layer; evaluate Merchant of Record options and PayPal Business when needed.
- Do not build generator integration around scraping, browser automation or unofficial wrappers. Use export helpers now; add official APIs later if available and commercially suitable.

## Distribution direction
- Launch asset: one simple vertical Canva concept adapted into EN/ES/PT-BR, showing problem → Rythero → tool result → URL.
- Reuse clean master files for YouTube Shorts, Instagram Reels, TikTok and Facebook Reels.
- YouTube should be a single Rythero channel, not one channel per language.
- Do not push traffic heavily until the new Studio and Creator School deployments have been verified on desktop and mobile.

## Immediate verification checklist
1. Wait for Cloudflare to deploy the latest main commit.
2. Test `/tools/song-studio`, `/es/tools/song-studio`, `/pt-br/tools/song-studio` on desktop and mobile.
3. Test all seven Studio tabs and confirm tab deep-links such as `#audio` and `#arrangement` open correctly.
4. Create a Song Blueprint, send it to Export, refresh and confirm local persistence works.
5. Save and reload a Style DNA profile.
6. Test Prompt Doctor with a deliberately contradictory prompt.
7. Test Arrangement Map at all four durations.
8. Test Lyrics Blueprint with non-empty theme/detail.
9. Test Audio Analyzer with one MP3 and one WAV if available; compare estimated BPM with a known track and treat it as approximate.
10. Re-test standalone Prompt Builder `More ideas ↻` and beginner mobile placeholders.
11. Verify `/learn`, `/es/learn`, `/pt-br/learn` and both lesson families (`ai-music-prompts`, `ai-song-structure`) on desktop/mobile.
12. Verify the home School CTAs open the correct language school.
13. Verify `https://rythero.com/rythero-og.jpg`.
14. In Google Search Console inspect `https://rythero.com/` and request indexing.
15. After lessons are live, inspect the English lesson URLs and request indexing; optionally submit ES/PT counterparts after verification.
16. In Facebook Sharing Debugger run `https://rythero.com/` and use Scrape Again.
17. Only after these checks start the first three-language distribution videos.

## Next development priorities after verification
- Improve Studio results from real user testing rather than adding more tools immediately.
- Add contextual compatibility warnings between selected styles/tempo/voice.
- Consider key/scale assistance only if it can be made clear and non-misleading.
- Write Lesson 03: Style DNA without artist imitation, prioritizing unique analysis and primary/educational sources.
- Add contextual links from tools back to relevant lessons once 2–3 lessons are live.
- Add real account/history/favorites only when usage justifies server-side state.
- If an official music-generation API becomes available and terms permit it, add it through a replaceable provider adapter rather than coupling Rythero to one generator.
