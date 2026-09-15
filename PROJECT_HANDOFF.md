# RYTHERO — Project handoff

Last updated: 2026-09-15

## Product direction
- Domain: https://rythero.com
- Brand: RYTHERO
- Language strategy: English remains the primary/international version, with full Spanish and Brazilian Portuguese versions. Internal work with the owner remains in Spanish.
- Positioning: international music-creation platform/product, not a generic AI blog and not an artist project.
- Core line: "Create music. Build your sound."
- Visual direction: premium app/software, dark, clean, cyber/music-tech, neon green accents, no generic AI clichés.
- Strategy: users should come for useful information but return for tools.
- Product principle: keep the public site visually light; add depth through useful tools and concise learning content rather than a crowded homepage.

## Multilingual architecture — implemented 2026-09-15
- Languages intentionally limited to 3 for now: English, Spanish and Portuguese (Brazil).
- URL structure:
  - English: `/`
  - Spanish: `/es/`
  - Brazilian Portuguese: `/pt-br/`
- Compact EN · ES · PT language switcher is visible in the top navigation, including mobile.
- No flag icons.
- `html lang` changes correctly (`en`, `es`, `pt-BR`).
- Canonicals remain language-specific.
- Alternate `hreflang` links are generated for `en`, `es`, `pt-BR` and `x-default`.
- Open Graph locale is language-aware.
- Navigation, footer and consent banner are translated by the shared Base layout.
- Home, Prompt Builder, Privacy and Cookies exist in all three languages.
- Sitemap contains all current EN/ES/PT-BR URLs.
- Prompt Builder interface is translated in ES/PT-BR, while suggestion values and final OUTPUT remain in English for cross-generator compatibility.
- Spanish and Portuguese Prompt Builder pages explicitly explain that OUTPUT is generated in English for maximum generator compatibility.
- Dynamic selector UI such as `More ideas`, `Suggested`, `Matches`, category badges, copy feedback and custom-value actions is localized in ES/PT-BR.
- Do not add French, Italian, German, Japanese, Korean, Turkish, Chinese or other languages until analytics/search demand justifies a fourth language.

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
- Astro config uses `site: https://rythero.com` and `trailingSlash: never`.

## Consent / privacy setup
- Google Analytics uses basic-consent behavior: GA is not loaded before consent.
- Banner is intentionally small and non-blocking.
- Reject and Accept have equal visual prominence.
- Reject does not limit site access.
- Permanent footer action: Cookie choices / localized equivalent.
- Advertising storage, ad-user-data and ad-personalization remain disabled.
- Privacy and cookie pages exist in all three languages.
- Before collecting broader personal data (forms, accounts, newsletter, sales, ads), expand legal notices with full controller identity/contact details and review compliance again.

## Current site structure
- `/`, `/tools/prompt-builder`, `/privacy`, `/cookies`
- `/es/`, `/es/tools/prompt-builder`, `/es/privacy`, `/es/cookies`
- `/pt-br/`, `/pt-br/tools/prompt-builder`, `/pt-br/privacy`, `/pt-br/cookies`
- `/404.html`, `/sitemap.xml`, `/robots.txt`

## Existing product/tool
### Prompt Builder v1.7
Fields: Genre, Mood, Energy, BPM, Vocal, Instrumentation, Structure, Production, Exclude.
No sign-up and no API cost.

### Shared Prompt Builder architecture — implemented 2026-09-15
- The three language pages now render the same reusable Astro component: `src/components/PromptBuilder.astro`.
- EN, ES and PT-BR only provide localized copy/labels; markup and visual behavior are centralized.
- All three versions use the same shared browser logic from `public/prompt-builder-localized.js`.
- This removes the previous inconsistency where English had separate inline logic while ES/PT used the shared file.
- Future visual or functional changes should normally be made once in the shared component or shared JS rather than copied into three pages.
- Genre/category labels such as `Current`, `Actual` and `Atual` now have more visual separation from the style name and render as small secondary badges, avoiding the cramped appearance reported by the owner.

### Smart selectors
- Native searchable combobox/autocomplete built with lightweight HTML/CSS/JS; no paid plugin.
- Genre, Mood, Vocal, Instrumentation, Production and Exclude use searchable multi-select controls.
- Typing one or more letters filters suggestions immediately.
- Each dropdown stays compact and shows no more than 8 suggestions at once.
- `More ideas →` rotates through additional curated suggestions without making the dropdown taller.
- Selected items become removable chips/tokens.
- Free-text custom values remain allowed.
- Enter selects the first match or adds a custom value; Backspace removes the last chip when the field is empty.
- Limits: Genre 4, Mood 3, Vocal 4, Instrumentation 5, Production 4, Exclude 5.
- Energy and Structure remain conventional dropdowns; BPM remains numeric.
- Mobile was tested by the owner on 2026-09-15 and reported visually good after the multi-select rollout.

### Beginner-friendly catalogue
- Catalogues were expanded substantially while preserving compact dropdowns.
- Genre remains curated rather than encyclopedic, mixing Core, Current and Crossover styles.
- K-pop is prominent, including K-pop dance-pop, K-pop R&B, K-pop trap and K-pop rock hybrid.
- Other current/global examples include Afro house, Amapiano, 3-step, Hyperpop, Alt-R&B, Melodic hip-hop, Afrobeats, Drum & bass, UK garage, Jersey club, Dark pop, Cinematic pop and Brazilian funk.
- Mood, Vocal, Instrumentation, Production and Exclude contain enough discoverable options for beginners who do not know the vocabulary yet.
- Vocal labels were clarified: `Male vocal`, `Female vocal`, etc., with category badges such as `Voice type`, `Delivery`, `Character`, `Register`, `Layers` and `FX`; avoid duplicate-looking labels such as `Male lead / Lead`.

### Smart OUTPUT
- Output is no longer simple field concatenation.
- If the user fills only a few fields, Rythero completes the brief with useful neutral musical guidance instead of producing a weak one-line prompt.
- Genre-aware guidance exists for major styles such as K-pop, Afro house, Amapiano, Afrobeats, Hyperpop, Alt-R&B, R&B, melodic hip-hop, hip-hop, trap, DnB, UK garage, Jersey club, dark pop, cinematic pop, pop, house, reggaeton, Brazilian funk, flamenco fusion, Arabic pop, raï pop, J-pop, rock, lo-fi and synthwave.
- When multiple genres are selected, the output explicitly asks for a coherent blend rather than unrelated style switching.
- Missing BPM, vocals, instrumentation or production are handled with sensible platform-neutral guidance rather than arbitrary hard-coded choices.
- Output emphasizes hook clarity, sectional contrast, purposeful transitions, genre authenticity, expressive vocals, focused arrangement and avoidance of flat looped results.
- Prompt strategy was cross-checked against current official Suno and Udio guidance. Rythero remains platform-neutral.

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
- Owner wants the green scan to become more active/faster; adjust after the multilingual/tool deployment is confirmed stable.
- Keep Rythero visually distinct from almaerrantemusic.com.
- Relationship strategy: Rythero may carry a discreet John Doe creator signature, but should not depend visibly on Alma Errante. Alma Errante can later send users to Rythero without making Rythero an Alma Errante sub-brand.

## Monetization direction
- Do not make Rythero dependent on Stripe.
- Avoid informal arrangements where a friend merely lends an account, identity or payment processor.
- When monetization is needed, first evaluate Merchant of Record options and PayPal Business; only involve a partner if there is a genuine formal business role and ownership/responsibility is documented.
- Keep payment infrastructure replaceable rather than building the product around one provider.

## Distribution direction
- Do not distribute aggressively until EN/ES/PT-BR routes and Prompt Builder are verified stable live.
- Initial launch asset can be one very simple Canva video concept adapted into three language versions (English, Spanish, Portuguese), showing the problem → Rythero Prompt Builder → generated OUTPUT → URL.
- Keep the video short and product-led rather than explanatory or promotional-heavy.
- After stability, define channel-by-channel rollout (YouTube/Shorts, Instagram/Reels, TikTok, Reddit and selected creator communities) without spamming the same copy everywhere.
- Almaerrantemusic.com can be a Spanish-language acquisition source later; Rythero should still build independent discovery.

## General audit notes / next cleanup
- Current architecture is intentionally lightweight: Astro + static pages + Cloudflare; no need for a CMS or plugin stack yet.
- `robots.txt` is simple and correct for public crawling and points to the sitemap.
- Package footprint remains minimal: Astro plus Wrangler only.
- Before wider public launch, harden the shared selector DOM rendering so free-text custom values are inserted with safe text nodes rather than `innerHTML`.
- Improve combobox keyboard accessibility later with ArrowUp/ArrowDown active-option navigation; current Enter/Escape/Backspace basics work but are not the final accessibility state.
- Continue avoiding duplicated EN/ES/PT implementations; shared components/data should be the default as the site grows.

## Tasks for next work session
1. Verify the current multilingual deployment live after the shared Prompt Builder refactor: `/tools/prompt-builder`, `/es/tools/prompt-builder`, `/pt-br/tools/prompt-builder` on desktop and mobile.
2. Test `More ideas`, mobile chip wrapping, category-badge spacing, vocal suggestions, richer OUTPUT and the English-output compatibility note on ES/PT-BR.
3. Harden shared selector DOM rendering and improve full keyboard navigation before a larger public push.
4. Speed up the footer green scan animation from the current slow behavior to roughly 4.5–5 seconds, with a slightly clearer fluorescent pass but no distracting flashing.
5. Continue curating genre/style coverage based on real usage and current global music trends; keep useful/high-demand styles and remove noise.
6. Improve Prompt Builder intelligence further: contextual compatibility hints, optional smart defaults, possible key/scale and tempo-range assistance, and later export targets such as Suno, Udio and Generic.
7. Decide the next tool after Prompt Builder. Leading candidates: Song Blueprint and Style DNA.
8. Add one concise Learn/Guide item only when it solves a real user problem; do not bulk-fill the site with articles.
9. Add a strong Open Graph/social share image and verify Facebook/X/LinkedIn card rendering.
10. Audit SEO metadata, schema, sitemap coverage and internal linking, including multilingual hreflang behavior after deployment.
11. Decide final GitHub/brand logo variants: app icon, favicon, horizontal wordmark, social avatar.
12. Build a simple three-language Canva launch video and then define the first URL distribution plan by channel.
13. Revisit controller/legal identity before any forms, accounts, newsletter, commerce or advertising go live.
14. Keep this handoff updated before moving to a new ChatGPT thread so the project can continue without reconstructing decisions.