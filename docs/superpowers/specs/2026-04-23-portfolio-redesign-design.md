# Portfolio Redesign — Spec

**Date:** 2026-04-23
**Scope:** Home page of `taranveeranand.com`. Add Shipped as the anchor current-work feature, swap the projects lineup to match the resume, correct stale metadata. Out of scope: site-wide redesign, `/projects/[slug]` detail pages beyond the new entries, visual identity changes.

---

## 1. Goals

1. Make **Shipped** the first thing a visitor sees after the hero — frame it as a live product, not a side project.
2. Align the home-page project lineup with the resume (FlyteTorch, DedupCore, SeeCare, OrderBook), plus keep **Invoke** as a fifth entry.
3. Drop Crypto-Tracker and BrainWave from the home page.
4. Give FlyteTorch, DedupCore, and OrderBook custom project visuals matching the existing SVG-in-terminal-frame aesthetic used by Invoke / SeeCare / etc.
5. Preserve the existing terminal/hacker voice and Framer Motion reveal patterns. No visual identity changes.

---

## 2. New home page structure

Current order: `Hero → Projects → Now → Skills → Uses → Contact`.

New order:
```
Hero
Shipped           ← new, anchors the page
Projects          ← reworked lineup
Now               ← copy updated (Shipped replaces Invoke as the headline "currently building")
Skills
Uses
Contact
```

Shipped lives in its own section between Hero and Projects. It is visually distinct from the Projects grid: one full-width terminal panel, one product, one CTA.

---

## 3. Shipped section

**Component:** new `src/components/sections/Shipped.tsx`. Rendered in `src/app/page.tsx` immediately after `<Hero />`.

**Treatment:** single full-width terminal-style panel (same window-chrome as other terminals), left column = copy, right column = custom product visual. On mobile, stacks.

**Copy (final):**
```
$ cat ~/.shipped

shipped_                                     // live · 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Apply to jobs while you sleep.

A desktop app that reads a job posting, generates a
tailored portfolio project for it, and then applies
on your behalf — across workday, greenhouse, lever,
and the rest of the ATS zoo.

• one-click apply across every major ATS
• auto-generates a tailored project per JD
• tracks every application end-to-end
• chrome extension for on-the-fly applies

[try shipped →]
```

**CTA:** single `[try shipped →]` link to `https://shipped.one`, opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`).

**Constraints — do NOT surface:**
- No internal architecture (Electron, Playwright, agent bundle, Supabase, Stripe, Sentry, PostHog, ATS adapters by name beyond the three public-facing ones above).
- No screenshots of the app's internal UI.
- No team / funding / metrics.
- No GitHub link.

**Visual (right column):** new `src/components/visuals/ShippedVisual.tsx`, kept separate from `ProjectVisual.tsx` because Shipped is a product, not a project — it does not go through the project visual dispatcher. Concept: a stylized job posting on the left, an arrow flowing through a small "agent" node, landing on an application-submitted checkmark on the right. Animated with Framer Motion (pulsing node, arrow fill). Match the cyan/amber palette. Low detail — evocative, not a product screenshot.

**Animation:** matches existing section entrance pattern (opacity + y + `whileInView`, viewport margin `-100px`). No custom animation choreography.

---

## 4. Projects section — new lineup

**File:** `src/components/sections/Projects.tsx`.

**Five entries, tiered:**

- **Tier 1 (featured, 2-column grid):**
  1. **FlyteTorch** — *"Distributed ML training orchestration for PyTorch on Kubernetes."*
  2. **SeeCare** — (unchanged; keep Best Senior Project W25 award badge)

- **Tier 2 (3-column grid on `md+`, stacks on mobile):**
  3. **DedupCore** — *"Block deduplication engine in C++17 with content-defined chunking."*
  4. **OrderBook** — *"Real-time limit order book and matching engine with price-time priority."*
  5. **Invoke** — existing copy retained.

**Removed from home page:** Crypto-Tracker, BrainWave. Their entries in `projectsData.ts` are retained so their `/projects/[slug]` routes still resolve; they just no longer render in the home grid.

**New entries in `projectsData.ts`:** FlyteTorch, DedupCore, OrderBook. Each needs:
- `name`, `tagline`, `description`, `challenge`, `solution`, `impact`, `tech`, `github`, `features`, `visualType`.
- `tech` arrays taken from resume bullets.
- Voice: match existing entries' register — first-person-adjacent but understated. Lean on the repo READMEs' voice (em-dashes, problem-led, test-count flex).
- `github` set for FlyteTorch and OrderBook (public repos). DedupCore `github` left undefined unless user confirms a public repo.

**`visualType` union type update:** `"invoke" | "seecare" | "crypto-tracker" | "brainwave"` → add `"flytetorch" | "dedupcore" | "orderbook"`. Shipped is not in this union — see §7.

---

## 5. Custom project visuals

Three new SVG visuals in `src/components/visuals/ProjectVisual.tsx`, matching the existing pattern (inline SVG + Framer Motion, terminal-frame wrapper, cyan/amber accents):

1. **FlyteTorch** — concept: concentric ring of worker nodes around a central orchestrator, with animated gradient-sync lines pulsing between them. Signals "distributed" at a glance.
2. **DedupCore** — concept: a stream of data blocks on the left collapsing into a smaller deduplicated set on the right, with a hash-like tag appearing above merged blocks. Signals "content-addressing + compression".
3. **OrderBook** — concept: a mini bid/ask ladder with animated price levels, a buy and sell matching at the middle, residual volume resting in the book. Signals "matching engine".

Plus the Shipped visual from §3.

All four use the existing terminal-dots header (red/yellow/green) and Inter/JetBrains Mono typography.

---

## 6. Copy & metadata updates (fact corrections)

**`src/app/layout.tsx` — `metadata`:**
- `description`: *"CS student at Case Western Reserve, building at the intersection of AI, FinTech, and human-centered design. Creator of Invoke, SeeCare, and more."* → rewrite to lead with Shipped and drop the Invoke-centric framing. Proposed: *"CS senior at Case Western Reserve. Building Shipped — an AI job application platform. Previously: SeeCare (Best Senior Project W25), FlyteTorch, DedupCore, OrderBook."*
- `openGraph.description` and `twitter.description`: mirror the above.
- `keywords`: add `"Shipped"`, `"distributed systems"`, `"C++"`. Leave existing keywords.

**`src/components/sections/Now.tsx`:**
- Headline "currently building" item changes from *"building invoke (mcp server for claude)"* to *"shipping shipped (shipped.one)"* or similar — keep the lowercase voice.
- Retain other items (*"researching semantic similarity @ noetic"*, poker, guitar) unless user flags them as stale. **Open question:** is the `noetic` research line still current? See §8.

**`src/components/sections/Hero.tsx`:**
- *"CS senior at Case Western Reserve"* — keep (accurate through May 2026).
- *"turning caffeine into side projects"* — keep.
- *"Currently: grinding guitar, and calculating expected value at poker tables."* — keep.

**`src/components/sections/About.tsx`:**
- *"CS senior at Case Western Reserve with a habit of mass-producing side projects."* — keep.
- *"Previously: Aionix.dev (founder), Guru Amardass (data engineering)"* — keep (matches resume).

**`src/components/sections/Skills.tsx`:**
- Context references for "python" currently say *"SeeCare, noetic, ML work"*. Update to a lineup that reflects the new project list, e.g., *"FlyteTorch, SeeCare, ML work"*. Same pass across any other project-referencing context strings (audit during implementation).

**`src/components/sections/Contact.tsx`:**
- *"// ● open to opportunities starting may 2026"* — keep for now; user to confirm whether this should become *"available now"* closer to graduation.

---

## 7. Component / data boundaries

- **`projectsData.ts`**: single source of truth for project entries. Home grid reads a subset (the 5 featured ones); detail pages read by slug. Keeps Crypto-Tracker and BrainWave entries intact so their routes don't 404.
- **`Projects.tsx`**: hardcodes which project IDs appear in tier 1 vs. tier 2. Simple array of IDs per tier is fine — no need for a "featured: boolean" flag unless we grow.
- **`Shipped.tsx`**: self-contained section component. Does NOT read from `projectsData.ts` — Shipped is a product, not a project, and has a different card shape / CTA contract. Keeping it out of `projectsData.ts` avoids polluting the project type with optional product-only fields.
- **`ProjectVisual.tsx`**: continues to switch on `visualType`. Shipped visual lives inside `Shipped.tsx` (or a sibling `ShippedVisual.tsx`) since Shipped doesn't flow through the project visual dispatcher.

---

## 8. Open questions (to resolve during implementation, flagged to user)

1. **Now section**: is *"researching semantic similarity @ noetic"* still accurate? If not, what replaces it?
2. **DedupCore repo**: public or private? Determines whether the project card shows a GitHub link.
3. **Shipped section visual**: confirm the "JD → agent → submitted" concept, or propose an alternative (e.g., cascading application cards, ATS logos).
4. **Contact availability line**: stays as *"open to opportunities starting may 2026"* or changes to something stronger given graduation is ~2 weeks away?

None of these block the rest of the work — implementation proceeds with the defaults above and revisits these when the section is being wired up.

---

## 9. Out of scope

- Redesigning Hero, Skills, Uses, Contact layouts.
- New fonts, new color tokens, new design system primitives.
- `/projects/[slug]` page template changes (new entries use the existing template).
- A real CMS. Project data stays in TypeScript.
- Vercel Analytics (already implemented in a separate change).
- Additional projects beyond the 5 listed.

---

## 10. Success criteria

- First scroll past Hero lands on Shipped with a clear CTA to `shipped.one`.
- Project grid shows exactly 5 cards: FlyteTorch, SeeCare, DedupCore, OrderBook, Invoke.
- All three new projects have custom SVG visuals consistent with existing ones.
- `/projects/flytetorch`, `/projects/dedupcore`, `/projects/orderbook` resolve and render.
- `/projects/crypto-tracker` and `/projects/brainwave` still resolve (not broken).
- Metadata (title, OG description, keywords) mentions Shipped.
- No internal Shipped architecture leaks into public copy.
- No visual regressions on mobile; all new sections match existing Framer Motion entrance patterns.
