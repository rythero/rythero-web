# RYTHERO — Project handoff

Last updated: 2026-09-15

## Product direction
- Domain: https://rythero.com
- Brand: RYTHERO
- Language: English-first. Internal work with the owner can remain in Spanish.
- Positioning: international music-creation platform/product, not a generic AI blog and not an artist project.
- Core line: "Create music. Build your sound."
- Visual direction: premium app/software, dark, clean, cyber/music-tech, neon green accents, no generic AI clichés.
- Strategy: users should come for useful information but return for tools.

## Current technical stack
- GitHub: https://github.com/rythero/rythero-web
- Cloudflare Workers deployment from GitHub main branch
- Astro static build
- Build command: npm run build
- Deploy command: npx wrangler deploy
- Root production domain: https://rythero.com
- www redirects 301 to root domain
- Cloudflare Web Analytics enabled
- Google Search Console verified for rythero.com
- Sitemap submitted: https://rythero.com/sitemap.xml
- Initial URLs submitted for indexing: / and /tools/prompt-builder
- Google Analytics 4 measurement ID: G-7K1ENQ4HTZ

## Consent / privacy setup
- Google Analytics uses basic-consent behavior: GA is not loaded before consent.
- Banner is intentionally small and non-blocking.
- Reject and Accept have equal visual prominence.
- Reject does not limit site access.
- Permanent footer action: Cookie choices.
- Advertising storage, ad-user-data and ad-personalization remain disabled.
- Privacy page: /privacy
- Cookie page: /cookies
- Before collecting broader personal data (forms, accounts, newsletter, sales, ads), expand legal notices with full controller identity/contact details and review compliance again.

## Current site structure
- /
- /tools/prompt-builder
- /privacy
- /cookies
- /404.html
- /sitemap.xml
- /robots.txt

## Existing product/tool
### Prompt Builder v1
Fields: Genre, Mood, Energy, BPM, Vocal, Instrumentation, Structure, Production, Exclude.
Output: structured copyable music-generation prompt.
No sign-up and no API cost.

Genre placeholder has been updated for a more international/global direction:
"afro house, hyperpop, alt-R&B, melodic hip-hop"

## Social / brand accounts already secured
- Domain: rythero.com
- GitHub: @rythero
- Reddit: rythero
- Bandcamp: rythero.bandcamp.com
- YouTube @rythero is occupied; choose a secondary handle later.
- LinkedIn postponed.
- Spotify not needed now because Rythero is a platform, not an artist.

## Brand/UI details
- Current mark: geometric neon-green app-style symbol.
- Footer includes a cyber-styled // JOHN DOE signature.
- Footer has a long subtle green animated scan line.
- Keep Rythero visually distinct from almaerrantemusic.com.

## Tasks for next work session
1. Audit the live site on desktop and mobile after all current deployments.
2. Improve Prompt Builder from a basic form into a more useful product:
   - change Genre into a searchable combobox/autocomplete similar to the AU search experience: typing even one letter filters and shows matching genres/styles immediately;
   - keep free text, but also allow selecting one or more suggested genres as chips/tokens;
   - group suggestions into Core, Current / trending and Regional / crossover;
   - include K-pop prominently among current global options, with useful substyles such as K-pop dance-pop, K-pop R&B, K-pop trap and K-pop rock hybrid;
   - add curated genre suggestions/chips based on current global AI-music usage and music trends;
   - avoid making it feel Suno-only;
   - consider current broad families: pop, electronic, hip-hop, R&B, lo-fi, rock plus trend-forward examples such as afro house, hyperpop and amapiano;
   - add better contextual examples for mood, vocals, instrumentation and production;
   - improve generated prompt quality so it does more than concatenate fields;
   - consider platform/export targets later (Suno, Udio, generic).
3. Decide the next tool after Prompt Builder. Leading candidates: Song Blueprint and Style DNA.
4. Add a strong Open Graph/social share image and verify Facebook/X/LinkedIn card rendering.
5. Audit SEO metadata, schema, sitemap coverage and internal linking as more pages are added.
6. Decide final GitHub/brand logo variants: app icon, favicon, horizontal wordmark, social avatar.
7. Create initial Learn/Guides content only after tools/product utility are solid.
8. Plan launch from almaerrantemusic.com as a Spanish-language acquisition channel while keeping Rythero English-first.
9. Revisit controller/legal identity before any forms, accounts, newsletter, commerce or advertising go live.
10. Create/update this handoff before moving to a new ChatGPT thread so the project can continue without reconstructing decisions.

## Current research note — genres
Fresh 2026 research suggests AI-music creation is not dominated by one genre. Aggregate creator data shows Pop leading, followed closely by Electronic, Hip-Hop, R&B, Lo-Fi and Rock. Suno v6 has improved genre understanding, with hyperpop specifically cited as a style it handles well. Afro house remains a strong global growth genre in 2026. Rythero should therefore show globally legible, current examples rather than examples biased toward the owner's personal music style.
