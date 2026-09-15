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
### Prompt Builder v1.5
Fields: Genre, Mood, Energy, BPM, Vocal, Instrumentation, Structure, Production, Exclude.
Output: structured copyable music-generation prompt.
No sign-up and no API cost.

### Smart selectors — implemented 2026-09-15
- Native searchable combobox/autocomplete built with lightweight HTML/CSS/JS; no paid plugin.
- Genre, Mood, Vocal, Instrumentation, Production and Exclude now use searchable multi-select controls.
- Typing one or more letters filters matching suggestions immediately.
- Each control shows up to 8 visible relevant suggestions with a compact internal scroll area; mobile height is deliberately limited.
- Popular suggestions appear on focus when the search is empty.
- Selected items become removable chips/tokens.
- Free-text custom values are still allowed.
- Enter selects the first match or adds a custom value; Backspace removes the last chip when the field is empty.
- Limits keep prompts disciplined: Genre 4, Mood 3, Vocal 4, Instrumentation 5, Production 4, Exclude 5.
- Energy and Structure remain conventional dropdowns; BPM remains a numeric text field.
- Genre catalogue is curated rather than encyclopedic, mixing Core, Current and Crossover styles.
- K-pop is prominent, including K-pop dance-pop, K-pop R&B, K-pop trap and K-pop rock hybrid.
- Other current/global examples include Afro house, Hyperpop, Alt-R&B, Amapiano, Melodic hip-hop, Afrobeats, Drum & bass, UK garage, Jersey club, Dark pop and Cinematic pop.
- Prompt output has been rewritten into a more natural production brief rather than simple field concatenation.

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
1. Audit the live site on desktop and mobile after the Prompt Builder v1.5 deployment: touch behavior, keyboard behavior, chip wrapping, dropdown height, focus states, reset/generate flow and output readability.
2. Review and curate the genre catalogue using current global music and AI-music usage, keeping useful/high-demand styles and removing noise. Do not turn it into an encyclopedia.
3. Improve Prompt Builder intelligence beyond curated UI:
   - contextual compatibility hints (e.g. combinations that naturally work together);
   - optional smart defaults without forcing a style;
   - stronger prompt phrasing based on the selected musical decisions;
   - later consider platform/export targets such as Suno, Udio and generic.
4. Decide the next tool after Prompt Builder. Leading candidates: Song Blueprint and Style DNA.
5. Add a strong Open Graph/social share image and verify Facebook/X/LinkedIn card rendering.
6. Audit SEO metadata, schema, sitemap coverage and internal linking as more pages are added.
7. Decide final GitHub/brand logo variants: app icon, favicon, horizontal wordmark, social avatar.
8. Create initial Learn/Guides content only after tools/product utility are solid.
9. Plan launch from almaerrantemusic.com as a Spanish-language acquisition channel while keeping Rythero English-first.
10. Revisit controller/legal identity before any forms, accounts, newsletter, commerce or advertising go live.
11. Keep this handoff updated before moving to a new ChatGPT thread so the project can continue without reconstructing decisions.

## Current research note — genres
Fresh 2026 research suggests AI-music creation is not dominated by one genre. Aggregate creator data shows Pop leading, followed closely by Electronic, Hip-Hop, R&B, Lo-Fi and Rock. Suno v6 has improved genre understanding, with hyperpop specifically cited as a style it handles well. Afro house remains a strong global growth genre in 2026. Rythero should therefore show globally legible, current examples rather than examples biased toward the owner's personal music style.
