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
### Prompt Builder v1.6
Fields: Genre, Mood, Energy, BPM, Vocal, Instrumentation, Structure, Production, Exclude.
No sign-up and no API cost.

### Smart selectors
- Native searchable combobox/autocomplete built with lightweight HTML/CSS/JS; no paid plugin.
- Genre, Mood, Vocal, Instrumentation, Production and Exclude use searchable multi-select controls.
- Typing one or more letters filters suggestions immediately.
- Each dropdown stays compact and shows no more than 8 suggestions at once.
- New `More ideas →` control rotates through additional curated suggestions without making the dropdown taller.
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
- Mood, Vocal, Instrumentation, Production and Exclude now contain enough discoverable options for beginners who do not know the vocabulary yet.
- Vocal labels were clarified: `Male vocal`, `Female vocal`, etc., with category badges such as `Voice type`, `Delivery`, `Character`, `Register`, `Layers` and `FX`; avoid duplicate-looking labels such as `Male lead / Lead`.

### Smart OUTPUT
- Output is no longer simple field concatenation.
- If the user fills only a few fields, Rythero now completes the brief with useful neutral musical guidance instead of producing a weak one-line prompt.
- Genre-aware guidance exists for major styles such as K-pop, Afro house, Amapiano, Afrobeats, Hyperpop, Alt-R&B, R&B, melodic hip-hop, hip-hop, trap, DnB, UK garage, Jersey club, dark pop, cinematic pop, pop, house, reggaeton, Brazilian funk, flamenco fusion, Arabic pop, raï pop, J-pop, rock, lo-fi and synthwave.
- When multiple genres are selected, the output explicitly asks for a coherent blend rather than unrelated style switching.
- Missing BPM, vocals, instrumentation or production are handled with sensible platform-neutral guidance rather than arbitrary hard-coded choices.
- Output emphasizes hook clarity, sectional contrast, purposeful transitions, genre authenticity, expressive vocals, focused arrangement and avoidance of flat looped results.
- Prompt strategy was cross-checked against current official Suno and Udio guidance: detailed style/vocal/instrument/structure instructions are useful, while Udio also recommends ordered prompt building blocks. Rythero should remain platform-neutral and aim to improve on generic generators by making musical decisions clearer.

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

## Monetization direction
- Do not make Rythero dependent on Stripe.
- Avoid informal arrangements where a friend merely lends an account, identity or payment processor.
- When monetization is needed, first evaluate Merchant of Record options and PayPal Business; only involve a partner if there is a genuine formal business role and ownership/responsibility is documented.
- Keep payment infrastructure replaceable rather than building the product around one provider.

## Tasks for next work session
1. Test the new Prompt Builder v1.6 live after deployment, especially `More ideas`, mobile chip wrapping, vocal suggestions and richer OUTPUT.
2. Continue curating genre/style coverage based on real usage and current global music trends; keep useful/high-demand styles and remove noise.
3. Improve Prompt Builder intelligence further:
   - contextual compatibility hints between selected styles and production choices;
   - optional smart defaults without forcing a style;
   - possible key/scale and tempo-range assistance where useful;
   - later consider export targets such as Suno, Udio and Generic.
4. Decide the next tool after Prompt Builder. Leading candidates: Song Blueprint and Style DNA.
5. Add a strong Open Graph/social share image and verify Facebook/X/LinkedIn card rendering.
6. Audit SEO metadata, schema, sitemap coverage and internal linking as more pages are added.
7. Decide final GitHub/brand logo variants: app icon, favicon, horizontal wordmark, social avatar.
8. Create initial Learn/Guides content only after tools/product utility are solid.
9. Plan launch from almaerrantemusic.com as a Spanish-language acquisition channel while keeping Rythero English-first.
10. Revisit controller/legal identity before any forms, accounts, newsletter, commerce or advertising go live.
11. Keep this handoff updated before moving to a new ChatGPT thread so the project can continue without reconstructing decisions.
