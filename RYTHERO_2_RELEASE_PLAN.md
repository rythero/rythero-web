# Rythero 2.0 — single-release plan

Branch: `rythero-2-big-update-2026-09-17`

## Safety rule

Nothing from this branch is merged to `main` until the complete release is ready, built and reviewed. Editorial/content work must not modify `worker/index.js`, `wrangler.jsonc`, DNS, SSL or the production AI endpoint.

## Product goal

The home page must explain Rythero in seconds and serve two people:

1. Someone making a first AI-assisted song.
2. Someone already generating music who needs to solve recurring problems and develop a more coherent sound.

Principle: less is more. The home page is a route selector, not a catalogue.

## Creator School expansion

Keep the existing five lessons and build a stronger learning path around practical problems rather than SEO filler.

Planned core lessons/guides:

- First AI song: from idea to a usable creation brief.
- Why all my AI songs sound the same.
- Groove, pocket, half-time, double-time and arrangement evolution.
- Better AI vocals: delivery, register, pronunciation, texture and layering.
- Energy and contrast: how to stop a song feeling flat.
- Prompt repair: why generators ignore or confuse instructions.
- Reference audio without imitation: extracting transferable traits.
- Lyrics that move: hook, point of view, images, section jobs and natural rhyme.
- From promising generation to finished song: iteration workflow.
- AI music rights and commercial-use checklist: verify current terms before publishing.
- Suno practical guide kept current.
- Udio practical guide / current limitations.
- Donna: mobile-first beginner workflow and limitations.
- ElevenMusic: current capabilities, ownership/download terms and reference workflow.
- Comparison guide: choose a generator by workflow, not by a fake universal ranking.

Every platform article must distinguish official product claims from user-review evidence. Trustpilot/App Store/Google Play signals are context, not proof that a service is good/bad or that a review is authentic.

## SEO / indexing

- Publish the completed batch in one production release.
- Give every new page a unique search intent and substantial original value.
- Maintain internal links between lessons and tools.
- Add canonical URLs and hreflang through the existing Base layout.
- Update the sitemap with all final canonical URLs.
- Do not request indexing one article at a time during development.
- After release, submit/refresh the sitemap in Search Console and selectively request indexing only for the most important pages if useful.

## AdSense — deferred on purpose

Publisher/account values supplied by the owner are intentionally NOT added in this development phase.

Reason: adding AdSense code is unrelated to the content release and creates no benefit before the site is stable and legally ready.

When Rythero 2.0 is stable:

1. The owner may add `rythero.com` under AdSense > Sites if not already added.
2. Verify the site using the least intrusive supported method at that time (meta tag or ads.txt if appropriate).
3. Do not request review until the site is reliably reachable, legal/controller information is complete and the consent setup is suitable for ads in the EEA/UK/Switzerland.
4. Keep the main creation tools ad-light or ad-free; use editorial/Creator School pages as the primary place for any future display advertising.

## Legal / commercial readiness

Before active monetization or sale materials describe the project as commercially ready:

- Complete controller/legal identity and contact information.
- Re-check privacy wording if hosting/provider changes.
- Review current Gemini/API processing wording.
- Review tax/pension implications with a qualified adviser before recurring commercial income or an asset sale.

## Release gate

Before merge to `main`:

- Build passes.
- No broken internal links.
- EN / ES / PT-BR routes exist for published lessons or are intentionally language-limited and labelled.
- Mobile home and school are checked.
- Logo/assets load from the production root.
- Prompt Builder works.
- Rythero Studio works.
- Signature Lab local mode works.
- No accidental change to production Worker/API/infrastructure.
- Sitemap and robots are correct.
- 404 is noindex.
- Final diff reviewed as one release.
