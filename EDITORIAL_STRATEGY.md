# RYTHERO — SEO editorial strategy

Updated: 2026-09-15

## Editorial identity
Rythero Creator School is the learning layer of the product. It should feel like practical music engineering, not a generic AI-news blog.

Principles:
- People-first, problem-led content.
- Original frameworks tied to Rythero tools and real musical decisions.
- English-first, with complete Spanish and Brazilian Portuguese counterparts for published core lessons.
- No mass-produced filler, trend-chasing for its own sake, or keyword stuffing.
- Clear primary sources when discussing product capabilities, especially Suno/Udio.
- Short paragraphs, strong H2/H3 hierarchy, examples and actionable takeaways.
- Internal links should move readers naturally between learning and tools.

## Launch topic cluster
1. LIVE — `AI music prompts`: how to build a producer-style creative brief without stacking random adjectives.
2. NEXT — Why AI songs sound generic: repetition, flat arrangement, conflicting prompts and weak identity.
3. NEXT — Song structure for AI music: hook, verse, chorus, breakdown, bridge, beat switch and final lift.
4. NEXT — Style DNA without artist imitation: groove, texture, harmony, voice, era and production language.
5. NEXT — BPM, key and energy for AI music: when precision helps and when it overconstrains the model.
6. NEXT — Suno v6 practical guide: v6 vs v6-wild vs v6-mini, control versus exploration, editing and multimodal inputs.

## SEO targets for the first pillar
Primary intent: educational / how-to.
Primary phrase: `AI music prompts`.
Secondary phrases: `how to write AI music prompts`, `music AI prompts`, `Suno prompts`, `Udio prompts`, `AI music prompt examples`, `AI music prompt generator`.

The article should not attempt to rank by repeating every secondary phrase. Use them only where they match the reader's question.

## Content architecture
- School landing pages: `/learn`, `/es/learn`, `/pt-br/learn`.
- Pillar article: `/learn/ai-music-prompts` plus ES/PT-BR counterparts.
- Future lessons should remain under `/learn/` rather than creating a separate generic `/blog/` identity.
- Each published lesson should have a localized canonical, hreflang through Base, descriptive title/meta, Article JSON-LD, visible publication/update date, internal links to related tools and primary sources where relevant.

## Article image system
- One editorial image per lesson where it adds recognition/value.
- Minimal, dark premium music-tech visual language; no text baked into the image.
- Avoid generic robots, brains, headphones, floating music notes and stock-looking AI imagery.
- Prefer abstract signal, arrangement, waveform, studio-control or sonic-architecture concepts.
- Target source around 1200×675 or 1200×630, compressed for web; display smaller in the article so it never dominates the page.
- Use a real `<img>`/`<picture>` element, descriptive filename and contextual alt text. Do not rely on CSS background images for the editorial image.
- Localized image can usually be shared across EN/ES/PT-BR because there is no embedded text.

## Internal linking pattern
Each article should normally link to:
- the Creator School landing page,
- the most relevant Rythero tool,
- one adjacent lesson once available.

Tool pages should gain contextual links back to the most useful lessons after at least 2–3 lessons are live.

## Quality bar
Before publication verify:
- Search intent is clear and not cannibalizing another Rythero URL.
- Claims about current tools/models are checked against primary sources.
- The article teaches enough for a beginner to act without another search.
- It contains Rythero's own analysis/framework rather than summarizing competitors.
- Title/H1 are aligned but not mechanically identical if a better SERP title exists.
- Meta description is specific and useful.
- One primary CTA at most; no aggressive sales blocks.
- Mobile reading is comfortable.
- Sitemap updated.
- After deployment, inspect/index the relevant URLs in Search Console.
