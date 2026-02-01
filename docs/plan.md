# Portfolio Website Design Document

**Author:** Taranveer Anand
**Date:** January 2026
**Status:** Ready for Implementation

---

## Overview

A personal portfolio website that establishes Taranveer Anand as a developer and founder with expertise in AI tooling, FinTech, and human-centered products. The design balances technical credibility with personality.

### Goals

| Priority | Goal |
|----------|------|
| Primary | Personal brand building — establish thought leadership |
| Secondary | Job hunting — impress recruiters for May 2026 graduation |
| Secondary | Freelance/consulting — attract clients for AI automation work |

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Font Stack:** JetBrains Mono (headings/code), Inter (body)

---

## Visual Language

### The Core Metaphor: "The Terminal That Builds"

A sophisticated dark interface that feels like a developer's natural habitat — but one that comes alive. Minimal and monospace-forward with carefully chosen accent colors.

### Color Palette

```
Background:     #0a0a0a (near-black)
Surface:        #141414 (card backgrounds)
Border:         #262626 (subtle borders)
Text Primary:   #fafafa (white)
Text Secondary: #a1a1aa (muted)
Accent Primary: #06b6d4 (cyan — interactive elements)
Accent Secondary: #f59e0b (amber — highlights, CTAs)
```

### Typography

| Use | Font | Weight |
|-----|------|--------|
| Headings | JetBrains Mono | 600 |
| Body | Inter | 400 |
| Code/Terminal | JetBrains Mono | 400 |
| Labels | Inter | 500 |

### Visual Signatures

- Subtle noise texture overlay (~2% opacity)
- Terminal window borders (thin, rounded corners)
- Cursor blink animations on interactive elements
- Code-block styling for technical descriptions
- Subtle gradient glows behind hero elements (cyan → purple)

### Motion Philosophy

- Nothing moves unless it has purpose
- Scroll-triggered reveals (fade up + slight translateY)
- Hover states that feel responsive but not distracting
- Loading states use typing/terminal animations
- Staggered animations for lists (50ms delay between items)

---

## Site Structure

```
/                   → Hero + Projects + About + Now + Skills + Uses + Contact
/projects/invoke    → Invoke deep-dive
/projects/seecare   → SeeCare deep-dive
/projects/crypto-tracker → Crypto-Tracker deep-dive
/projects/brainwave → BrainWave deep-dive
```

---

## Section Designs

### 1. Hero Section

Full-viewport terminal-inspired introduction.

```
┌─ taranveer@portfolio ~ ─────────────────────────────┐
│                                                      │
│  > Taranveer Anand_                                 │
│                                                      │
│    turning caffeine into mass produced              │
│    side projects since 2003                         │
│                                                      │
│  > cs @ case western reserve                        │
│  > founder @ aionix.dev                             │
│  > currently: invoke, noetic                        │
│                                                      │
│  [view work]  [about]  [contact]                    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Behavior:**
- Text types in on load (~60ms per character)
- Underscore cursor blinks at end of name
- Navigation links fade in after typing completes
- Subtle scroll indicator at bottom (pulsing chevron)

---

### 2. Projects Section

Tiered showcase with abstract generative visuals.

**Layout:**
```
PROJECTS
─────────────────────────────────────────

[Invoke]        [SeeCare]         ← Tier 1: Large cards (50% width each)

[Crypto-Tracker]  [BrainWave]     ← Tier 2: Medium cards

[Other Projects →]                ← Link to expanded list
```

**Abstract Visuals Per Project:**

| Project | Visual Concept |
|---------|----------------|
| Invoke | Interconnected nodes pulsing outward — dynamic API mesh |
| SeeCare | Soft waveform with minimalist face silhouette — audio + recognition |
| Crypto-Tracker | Flowing candlestick patterns morphing into trend lines |
| BrainWave | Orbital dots connecting in real-time — P2P network topology |

**Card Interactions:**
- Hover: lift (translateY -4px), cyan border glow, visual animates
- Click: navigate to deep-dive page

**Deep-Dive Page Structure:**
1. Hero with animated architecture diagram
2. Project overview (challenge / solution / impact)
3. Tech stack pills with icons
4. Key features as terminal-style bullet points
5. GitHub link + live demo (if applicable)

---

### 3. About Section

Terminal-styled personal introduction with illustrated avatar.

```
ABOUT
─────────────────────────────────────────

┌─ cat about.txt ─────────────────────────┐
│                                          │
│  CS senior at Case Western Reserve       │
│  with a FinTech minor and a habit of     │
│  mass producing side projects.           │
│                                          │
│  I build things at the intersection      │
│  of AI tooling, blockchain, and          │
│  products that actually help people.     │
│                                          │
│  Ex-pro gamer turned developer.          │
│  Now I calculate expected value at       │
│  poker tables instead of ranked queues.  │
│                                          │
│  Currently: shipping code, grinding      │
│  guitar, and mass producing repos.       │
│                                          │
└──────────────────────────────────────────┘

                        [illustrated avatar]
```

**Avatar Style:**
- Minimal line-art or geometric style
- Dark background compatible
- Subtle cyan accent matching site palette
- Optional: headphones or coffee cup detail

---

### 4. Now Section

Living "what I'm currently up to" section.

```
NOW
─────────────────────────────────────────

> cat ~/.now

last updated: jan 2026

├── building invoke (mcp server for claude)
├── researching semantic similarity @ noetic
├── grinding nl200 sessions
├── learning guitar (badly)
└── job hunting for may 2026
```

**Behavior:**
- Manually updated content
- Subtle pulse animation on "last updated" indicator
- Placement: After About, before Skills

---

### 5. Skills Section

`ls` tree format with interactive hover states.

```
SKILLS
─────────────────────────────────────────

> ls skills/

languages/
├── python
├── typescript
├── java
├── c/c++
├── rust

frameworks/
├── react
├── next.js
├── fastapi
├── flask
├── tailwind

ai_ml/
├── pytorch
├── langchain
├── opencv
├── scikit-learn

infra/
├── aws
├── supabase
├── docker
├── postgresql
├── redis

blockchain/
├── solana/web3
├── ethers.js
```

**Interactions:**
- Hover: subtle glow + tooltip with context (e.g., "pytorch — used in SeeCare for face embeddings")
- Optional: click skill to filter projects that use it

---

### 6. Uses Section

Developer setup in `neofetch` style.

```
USES
─────────────────────────────────────────

> neofetch --setup

editor       → vscode
terminal     → native / integrated
font         → jetbrains mono
os           → macos
machine      → macbook pro

stack i reach for
├── frontend → next.js, tailwind, framer
├── backend  → fastapi, supabase
├── ai/ml    → pytorch, langchain
└── infra    → vercel, aws, docker
```

**Placement:** After Skills, before Contact

---

### 7. Contact Section

Clean links-only contact with resume download.

```
CONTACT
─────────────────────────────────────────

> echo $CONTACT_INFO

┌──────────────────────────────────────────┐
│                                          │
│  Want to work together, hire me, or      │
│  argue about mass abandoned repos?       │
│                                          │
│  > email    tsa43@case.edu              │
│  > github   github.com/tarann26         │
│  > linkedin linkedin.com/in/taranveer-anand │
│                                          │
│  [download resume.pdf]                   │
│                                          │
└──────────────────────────────────────────┘

// based in cleveland, oh
// open to opportunities starting may 2026
```

**Interactions:**
- Links highlight cyan on hover
- Click copies to clipboard with toast: "copied to clipboard_"
- Resume download button with subtle hover animation

---

## Project Deep-Dive Pages

### Invoke Deep-Dive

**Hero:** Animated node graph showing API discovery flow

**Architecture Diagram (animated):**
```
User Request → Claude → Invoke MCP Server
                              ↓
                    [API Discovery Engine]
                              ↓
              ┌───────────────┼───────────────┐
              ↓               ↓               ↓
         Research API    Register API    Execute Call
              ↓               ↓               ↓
         Documentation   Config YAML      Response
```

**Key Points:**
- Universal API-to-tool bridge for Claude
- Dynamic API discovery and registration
- Multi-key support, caching, workflows
- MCP (Model Context Protocol) integration

**Tech Stack:** TypeScript, Node.js, MCP SDK

---

### SeeCare Deep-Dive

**Hero:** Animated waveform + face detection visualization

**Architecture Diagram (animated):**
```
Audio Input → Wake Word Detection → AssemblyAI
                                        ↓
                              Speech-to-Text + Diarization
                                        ↓
Camera → Face Detection → DeepFace Embeddings → DBSCAN Clustering
                                        ↓
                              GPT-3.5 Summarization
                                        ↓
                              Memory Aid Display
```

**Key Points:**
- Privacy-first mobile memory aid for dementia patients
- Real-time face detection with unknown face grouping
- Conversation capture with speaker diarization
- Won Best Senior Project Award (Winter 2025)

**Tech Stack:** FastAPI, MongoDB, AWS S3/Rekognition, AssemblyAI, Expo

---

### Crypto-Tracker Deep-Dive

**Hero:** Animated candlestick → trend line morph

**Architecture Diagram (animated):**
```
Solana RPC → WebSocket Subscription → Real-time Updates
                                           ↓
                                    Transaction Analysis
                                           ↓
                    ┌──────────────────────┼──────────────────────┐
                    ↓                      ↓                      ↓
            Wallet Correlation    Leader Detection    Follower Clustering
                    ↓                      ↓                      ↓
                    └──────────────────────┼──────────────────────┘
                                           ↓
                                    Trading Signals UI
```

**Key Points:**
- Full-stack crypto/stock analytics platform
- Leader-follower detection algorithms
- Glassmorphic UI framework (shadcn-ui, Radix, Tailwind)
- Real-time Solana wallet monitoring

**Tech Stack:** React, TypeScript, Supabase, Solana Web3.js, FastAPI, Python ML

---

### BrainWave Deep-Dive

**Hero:** Animated P2P network connection visualization

**Architecture Diagram (animated):**
```
User A ←──── WebRTC P2P ────→ User B
   ↓                            ↓
Supabase Real-time Sync ←→ Supabase
   ↓                            ↓
   └────── Shared State ────────┘
              ↓
    ┌────────┼────────┐
    ↓        ↓        ↓
  Chat   Whiteboard  Quizzes
    ↓        ↓        ↓
    └────────┼────────┘
              ↓
      AI Assistant (DeepSeek)
```

**Key Points:**
- Real-time peer-to-peer learning platform
- WebRTC for voice/video conferencing
- Shared whiteboard and interactive quizzes
- AI assistant analyzing chat and files

**Tech Stack:** React, Supabase, WebRTC, OpenRouter API, Flask

---

## Implementation Notes

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Single column, stacked cards, simplified terminal UI |
| Tablet (640-1024px) | Two-column project grid, condensed terminal windows |
| Desktop (>1024px) | Full layout as designed |

### Performance Targets

- Lighthouse score: 95+ on all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Bundle size: <200kb initial JS

### Accessibility

- Respect `prefers-reduced-motion` for all animations
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Keyboard navigable throughout
- Sufficient color contrast (WCAG AA minimum)

### SEO

- Meta tags for each page
- OpenGraph images for social sharing
- Structured data (JSON-LD) for person schema
- Sitemap generation

---

## Assets Needed

| Asset | Description | Status |
|-------|-------------|--------|
| Illustrated avatar | Minimal line-art style, dark bg compatible | Needed |
| Resume PDF | Latest version for download | Available |
| Project architecture SVGs | Animated diagrams for each project | To be created |
| Abstract project visuals | Generative/geometric per project | To be created |
| Favicon | Terminal-inspired or initials "TA" | Needed |
| OG image | Social sharing preview | Needed |

---

## Future Enhancements

- Blog section for technical writing
- Achievements/Awards dedicated section
- Project filtering by tech stack
- Dark/light theme toggle (low priority — dark is the brand)
- Analytics dashboard (Vercel Analytics or Plausible)

---

## Summary

This portfolio positions Taranveer Anand as a technically skilled developer with personality — someone who builds cutting-edge AI tools AND products that help real people, while not taking themselves too seriously. The terminal aesthetic signals technical depth, while the experimental interactions and personal touches (poker, gaming, "since 2003") make it memorable.

**Hero Projects:**
1. **Invoke** — AI tooling, bleeding-edge MCP work
2. **SeeCare** — Social impact, award-winning, technical depth
3. **Crypto-Tracker** — FinTech expertise, algorithmic trading
4. **BrainWave** — Full-stack mastery, real-time systems

**Key Differentiators:**
- Terminal aesthetic done tastefully (not gimmicky)
- Abstract generative visuals instead of screenshots
- Interactive architecture diagrams in deep-dives
- Personality throughout (tagline, about section, now page)
