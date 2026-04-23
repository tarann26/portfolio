# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the portfolio home page to feature Shipped as the anchor current-work section and align the project lineup with the resume (FlyteTorch, DedupCore, SeeCare, OrderBook, Invoke).

**Architecture:** Keep the existing Next.js 16 app-router + Tailwind v4 + Framer Motion stack. Data stays in `projectsData.ts` (single source of truth). Add three new custom project visuals and one Shipped-specific visual. Shipped lives in its own section component — it is a product, not a project, and does not flow through the project data dispatcher.

**Tech Stack:** Next.js 16, React 19, Tailwind v4, Framer Motion 12, Lucide React, TypeScript 5.

**Verification convention (this codebase has no test runner):** After each code-changing task, run `npm run build` and `npm run lint`. TypeScript errors or lint failures fail the task. Visual verification happens in Phase 6 via the dev server.

**Spec:** `docs/superpowers/specs/2026-04-23-portfolio-redesign-design.md`

---

## Phase 1 — Data layer

### Task 1: Extend `projectsData.ts` with FlyteTorch, DedupCore, OrderBook

**Files:**
- Modify: `src/app/projects/[slug]/projectsData.ts`

- [ ] **Step 1: Widen the `visualType` union**

Open `src/app/projects/[slug]/projectsData.ts`. Change line 11 from:

```ts
  visualType: "invoke" | "seecare" | "crypto-tracker" | "brainwave";
```

to:

```ts
  visualType:
    | "invoke"
    | "seecare"
    | "crypto-tracker"
    | "brainwave"
    | "flytetorch"
    | "dedupcore"
    | "orderbook";
```

- [ ] **Step 2: Append the three new entries to the `projectsData` record**

**Do NOT delete or modify the existing `invoke`, `seecare`, `crypto-tracker`, or `brainwave` entries** — those routes must keep resolving. Append only.

Immediately before the closing `};` on line 106, insert:

```ts
  flytetorch: {
    name: "FlyteTorch",
    tagline: "Distributed ML training orchestration for PyTorch on Kubernetes",
    description:
      "FlyteTorch wraps the complexity of torch.distributed, NCCL, rank assignment, and fault recovery into a declarative TrainingSpec — letting ML engineers focus on model iteration instead of infrastructure plumbing.",
    challenge:
      "Distributed PyTorch jobs at scale involve a surprising amount of undifferentiated infrastructure work: DDP boilerplate, rank assignment, NCCL configuration, fault recovery, and profiling. One misconfigured env var can silently corrupt gradients, and 'training is slow' could mean I/O-, communication-, or compute-bound without instrumentation.",
    solution:
      "Built a declarative training orchestrator on Kubernetes + Flyte that automates rank assignment and OOM/NCCL fault recovery with configurable retry. Instrumented training loops via PyTorch hooks to profile data-load, forward/backward, and gradient-sync latencies, classifying workloads as compute-/IO-/comm-bound and exporting Prometheus metrics to Grafana. A/B benchmark comparison uses Welch's t-test; a Redis-backed dataset cache and content-addressable SHA-256 versioning eliminate redundant preprocessing across workers.",
    impact:
      "162 unit tests covering the full training lifecycle. Turns 'is my training slow, and why?' from a guessing game into a dashboard.",
    tech: [
      "Python",
      "PyTorch (DDP/NCCL)",
      "Kubernetes",
      "Flyte",
      "Prometheus",
      "Redis",
    ],
    github: "https://github.com/tarann26/flytetorch",
    visualType: "flytetorch",
    features: [
      "Declarative TrainingSpec on Kubernetes + Flyte",
      "Automatic rank assignment and OOM/NCCL fault recovery",
      "PyTorch-hook profiler classifying compute-/IO-/comm-bound workloads",
      "Prometheus + Grafana observability",
      "A/B benchmark comparison with Welch's t-test",
      "Redis-backed dataset cache with SHA-256 content-addressable versioning",
    ],
  },
  dedupcore: {
    name: "DedupCore",
    tagline: "High-performance block deduplication engine in C++17",
    description:
      "A block deduplication engine using Rabin-fingerprint content-defined chunking and SHA-256 content addressing, with a lock-free sharded chunk index and delta-encoded WAN replication.",
    challenge:
      "Fixed-size block deduplication hits ~12% dedup ratio on real workloads and wastes replication bandwidth. Concurrent ingestion at high throughput requires lock-free data structures, which are notoriously easy to get wrong under ASan/TSan.",
    solution:
      "Built a C++17 engine using Rabin-fingerprint content-defined chunking and SHA-256 content addressing. The chunk index is lock-free and sharded with atomic refcounting. WAN replication uses bsdiff-style LCS for delta-encoded transfers; GC is priority-aware with reference counting and sub-ms per-chunk reclamation.",
    impact:
      "~500 MB/s chunking throughput, 65% dedup ratio (vs. 12% fixed-size), ~1.2 GB/s parallel ingestion across 16 threads, 40–70% replication-bandwidth reduction. Hardened with AddressSanitizer and ThreadSanitizer in CI.",
    tech: [
      "C++17",
      "OpenSSL (SHA-256)",
      "CMake",
      "Google Benchmark",
      "ASan/TSan",
    ],
    visualType: "dedupcore",
    features: [
      "Rabin-fingerprint content-defined chunking",
      "SHA-256 content addressing",
      "Lock-free sharded concurrent chunk index",
      "Delta-encoded WAN replication (bsdiff-style LCS)",
      "Priority-aware reference-counted GC",
      "ASan/TSan hardened in CI",
    ],
  },
  orderbook: {
    name: "OrderBook",
    tagline: "Real-time limit order book and matching engine",
    description:
      "A real-time limit order book and matching engine implementing price-time priority — the same core algorithm that powers electronic exchange matching and real-time auction ranking.",
    challenge:
      "Matching engines need O(log n) price-level inserts and O(1) best-price access while eliminating floating-point drift across millions of orders. FIFO time-priority within a price level must be rigorously correct — subtle bugs here are the kind that cause real financial incidents.",
    solution:
      "Backed the book with B-tree-based SortedDict for O(log n) inserts and O(1) best-price access. Decimal arithmetic throughout prevents floating-point drift. Supports limit and market orders, partial fills, and cancels. Built a Textual TUI and an asyncio-driven market simulator with configurable order flow.",
    impact:
      "180-test suite covering matching semantics, FIFO time-priority, and market-order sweep. Correct by construction, observable by design.",
    tech: [
      "Python 3.11",
      "Textual",
      "sortedcontainers",
      "asyncio",
      "pytest",
    ],
    github: "https://github.com/tarann26/orderbook",
    visualType: "orderbook",
    features: [
      "Price-time priority matching",
      "Limit + market orders, partial fills, cancels",
      "B-tree backed SortedDict (O(log n) inserts, O(1) best price)",
      "Decimal arithmetic — no floating-point drift",
      "Textual TUI for live book visualization",
      "Asyncio market simulator with configurable order flow",
    ],
  },
```

- [ ] **Step 3: Verify**

Run:
```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors. The three new routes `/projects/flytetorch`, `/projects/dedupcore`, `/projects/orderbook` will appear in the build output under the `[slug]` dynamic route.

- [ ] **Step 4: Commit**

```bash
git add src/app/projects/[slug]/projectsData.ts
git commit -m "Add FlyteTorch, DedupCore, OrderBook project entries"
```

---

## Phase 2 — Project visuals

### Task 2: Add FlyteTorchVisual to `ProjectVisual.tsx`

**Files:**
- Modify: `src/components/visuals/ProjectVisual.tsx`

- [ ] **Step 1: Widen the local `ProjectType` alias**

Open `src/components/visuals/ProjectVisual.tsx`. Change line 6 from:

```ts
type ProjectType = "invoke" | "seecare" | "crypto-tracker" | "brainwave";
```

to:

```ts
type ProjectType =
  | "invoke"
  | "seecare"
  | "crypto-tracker"
  | "brainwave"
  | "flytetorch"
  | "dedupcore"
  | "orderbook";
```

- [ ] **Step 2: Add `FlyteTorchVisual` component**

Insert this component immediately before the `export function ProjectVisual` declaration (currently around line 413):

```tsx
// FlyteTorch: Central orchestrator with ring of worker nodes, animated gradient sync
function FlyteTorchVisual({ isHovered }: { isHovered: boolean }) {
  // 6 worker nodes evenly spaced on a circle of radius 30 around (50, 50)
  const workers = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + 30 * Math.cos(angle),
      y: 50 + 30 * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Ring-connection lines between adjacent workers (gradient sync) */}
      {workers.map((w, i) => {
        const next = workers[(i + 1) % workers.length];
        return (
          <motion.line
            key={`ring-${i}`}
            x1={w.x}
            y1={w.y}
            x2={next.x}
            y2={next.y}
            stroke="#06b6d4"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
          />
        );
      })}

      {/* Spoke lines from orchestrator to each worker */}
      {workers.map((w, i) => (
        <motion.line
          key={`spoke-${i}`}
          x1={50}
          y1={50}
          x2={w.x}
          y2={w.y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.6 : 0.35 }}
        />
      ))}

      {/* All-reduce pulse: packet travels around the ring */}
      {workers.map((w, i) => {
        const next = workers[(i + 1) % workers.length];
        return (
          <motion.circle
            key={`packet-${i}`}
            r="1.5"
            fill="#f59e0b"
            initial={{ cx: w.x, cy: w.y, opacity: 0 }}
            animate={{
              cx: [w.x, next.x],
              cy: [w.y, next.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Worker nodes */}
      {workers.map((w, i) => (
        <motion.circle
          key={`worker-${i}`}
          cx={w.x}
          cy={w.y}
          r="4"
          fill="#141414"
          stroke="#06b6d4"
          strokeWidth="1.2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 0.3,
            delay: i * 0.08,
            repeat: Infinity,
            repeatDelay: 2.4,
          }}
        />
      ))}

      {/* Central orchestrator */}
      <motion.rect
        x={42}
        y={42}
        width={16}
        height={16}
        rx={2}
        fill="#06b6d4"
        stroke="#06b6d4"
        strokeWidth="1"
        animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
      <text
        x={50}
        y={53}
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize="5"
        fontFamily="monospace"
        fontWeight="bold"
      >
        K8s
      </text>
    </svg>
  );
}
```

- [ ] **Step 3: Register `flytetorch` in the visuals dispatcher**

In the `visuals` object at the bottom of the file (currently around line 414), add the `flytetorch` entry:

```ts
  const visuals: Record<ProjectType, React.ReactNode> = {
    invoke: <InvokeVisual isHovered={isHovered} />,
    seecare: <SeeCareVisual isHovered={isHovered} />,
    "crypto-tracker": <CryptoTrackerVisual isHovered={isHovered} />,
    brainwave: <BrainWaveVisual isHovered={isHovered} />,
    flytetorch: <FlyteTorchVisual isHovered={isHovered} />,
    dedupcore: <InvokeVisual isHovered={isHovered} />, // placeholder, replaced in Task 3
    orderbook: <InvokeVisual isHovered={isHovered} />, // placeholder, replaced in Task 4
  };
```

(Placeholders prevent a type error while Tasks 3 and 4 are still pending. They get overwritten.)

- [ ] **Step 4: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/visuals/ProjectVisual.tsx
git commit -m "Add FlyteTorch project visual"
```

---

### Task 3: Add DedupCoreVisual to `ProjectVisual.tsx`

**Files:**
- Modify: `src/components/visuals/ProjectVisual.tsx`

- [ ] **Step 1: Add `DedupCoreVisual` component**

Insert this component immediately after `FlyteTorchVisual`:

```tsx
// DedupCore: Stream of raw blocks on the left collapsing into deduplicated set on the right
function DedupCoreVisual({ isHovered }: { isHovered: boolean }) {
  // 6 raw blocks on the left, some duplicated (same color = same content)
  const rawBlocks = [
    { y: 15, color: "#06b6d4" },
    { y: 27, color: "#f59e0b" },
    { y: 39, color: "#06b6d4" }, // dup of first
    { y: 51, color: "#22c55e" },
    { y: 63, color: "#f59e0b" }, // dup of second
    { y: 75, color: "#06b6d4" }, // dup of first
  ];

  // 3 unique blocks on the right (one per distinct color)
  const dedupBlocks = [
    { y: 27, color: "#06b6d4" },
    { y: 45, color: "#f59e0b" },
    { y: 63, color: "#22c55e" },
  ];

  // Mapping from raw index to target dedup block index
  const mapping = [0, 1, 0, 2, 1, 0];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Raw blocks column (left) */}
      {rawBlocks.map((b, i) => (
        <motion.rect
          key={`raw-${i}`}
          x={10}
          y={b.y}
          width={14}
          height={10}
          rx={1}
          fill={b.color}
          opacity={0.85}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 10, opacity: 0.85 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        />
      ))}

      {/* Flow arrows from raw to dedup */}
      {rawBlocks.map((b, i) => {
        const target = dedupBlocks[mapping[i]];
        return (
          <motion.line
            key={`flow-${i}`}
            x1={24}
            y1={b.y + 5}
            x2={70}
            y2={target.y + 5}
            stroke={b.color}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: isHovered ? 0.6 : 0.35,
              pathLength: 1,
            }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
          />
        );
      })}

      {/* Dedup blocks column (right) */}
      {dedupBlocks.map((b, i) => (
        <motion.g key={`dedup-${i}`}>
          <motion.rect
            x={70}
            y={b.y}
            width={14}
            height={10}
            rx={1}
            fill={b.color}
            opacity={0.95}
            stroke="#fafafa"
            strokeWidth="0.3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 70, opacity: 0.95 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          />
          {/* Hash label above each dedup block */}
          <motion.text
            x={77}
            y={b.y - 2}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="3"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0.5 }}
            transition={{ delay: 0.9 }}
          >
            sha256
          </motion.text>
        </motion.g>
      ))}

      {/* Column labels */}
      <text
        x={17}
        y={92}
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        raw
      </text>
      <text
        x={77}
        y={92}
        textAnchor="middle"
        fill="#22c55e"
        fontSize="4"
        fontFamily="monospace"
      >
        dedup
      </text>

      {/* Compression ratio indicator */}
      <motion.text
        x={50}
        y={10}
        textAnchor="middle"
        fill="#06b6d4"
        fontSize="5"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
      >
        6 → 3
      </motion.text>
    </svg>
  );
}
```

- [ ] **Step 2: Replace the `dedupcore` placeholder in the dispatcher**

In the `visuals` object, change:

```ts
    dedupcore: <InvokeVisual isHovered={isHovered} />, // placeholder, replaced in Task 3
```

to:

```ts
    dedupcore: <DedupCoreVisual isHovered={isHovered} />,
```

- [ ] **Step 3: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/visuals/ProjectVisual.tsx
git commit -m "Add DedupCore project visual"
```

---

### Task 4: Add OrderBookVisual to `ProjectVisual.tsx`

**Files:**
- Modify: `src/components/visuals/ProjectVisual.tsx`

- [ ] **Step 1: Add `OrderBookVisual` component**

Insert this component immediately after `DedupCoreVisual`:

```tsx
// OrderBook: Bid/ask ladder with a match event in the middle
function OrderBookVisual({ isHovered }: { isHovered: boolean }) {
  // Asks (sell orders), descending price top→bottom
  const asks = [
    { price: 105, size: 20 },
    { price: 104, size: 35 },
    { price: 103, size: 50 },
    { price: 102, size: 25 },
  ];
  // Bids (buy orders), descending price top→bottom
  const bids = [
    { price: 101, size: 30 },
    { price: 100, size: 45 },
    { price: 99, size: 40 },
    { price: 98, size: 20 },
  ];

  const askRed = "#ef4444";
  const bidGreen = "#22c55e";

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Header labels */}
      <text
        x={8}
        y={10}
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        price
      </text>
      <text
        x={90}
        y={10}
        textAnchor="end"
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        size
      </text>

      {/* Asks (top half) */}
      {asks.map((a, i) => {
        const y = 14 + i * 8;
        const barWidth = a.size * 0.6;
        return (
          <motion.g key={`ask-${i}`}>
            <motion.rect
              x={50 - barWidth}
              y={y}
              width={barWidth}
              height={6}
              fill={askRed}
              opacity={0.25}
              initial={{ width: 0 }}
              animate={{ width: barWidth }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            />
            <text
              x={8}
              y={y + 4.5}
              fill={askRed}
              fontSize="4"
              fontFamily="monospace"
            >
              {a.price.toFixed(2)}
            </text>
            <text
              x={90}
              y={y + 4.5}
              textAnchor="end"
              fill={askRed}
              fontSize="4"
              fontFamily="monospace"
              opacity={0.85}
            >
              {a.size}
            </text>
          </motion.g>
        );
      })}

      {/* Spread / match event row (center) */}
      <motion.rect
        x={6}
        y={47}
        width={88}
        height={6}
        fill="#06b6d4"
        opacity={0.15}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? [0.15, 0.5, 0.15] : 0.15 }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      <text
        x={50}
        y={52}
        textAnchor="middle"
        fill="#06b6d4"
        fontSize="4"
        fontFamily="monospace"
      >
        -- spread --
      </text>

      {/* Bids (bottom half) */}
      {bids.map((b, i) => {
        const y = 56 + i * 8;
        const barWidth = b.size * 0.6;
        return (
          <motion.g key={`bid-${i}`}>
            <motion.rect
              x={50}
              y={y}
              width={barWidth}
              height={6}
              fill={bidGreen}
              opacity={0.25}
              initial={{ width: 0 }}
              animate={{ width: barWidth }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            />
            <text
              x={8}
              y={y + 4.5}
              fill={bidGreen}
              fontSize="4"
              fontFamily="monospace"
            >
              {b.price.toFixed(2)}
            </text>
            <text
              x={90}
              y={y + 4.5}
              textAnchor="end"
              fill={bidGreen}
              fontSize="4"
              fontFamily="monospace"
              opacity={0.85}
            >
              {b.size}
            </text>
          </motion.g>
        );
      })}

      {/* Incoming market order pulse (hover only) */}
      {isHovered && (
        <motion.circle
          cx={50}
          cy={50}
          r={2}
          fill="#f59e0b"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 6], opacity: [1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </svg>
  );
}
```

- [ ] **Step 2: Replace the `orderbook` placeholder in the dispatcher**

In the `visuals` object, change:

```ts
    orderbook: <InvokeVisual isHovered={isHovered} />, // placeholder, replaced in Task 4
```

to:

```ts
    orderbook: <OrderBookVisual isHovered={isHovered} />,
```

- [ ] **Step 3: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/visuals/ProjectVisual.tsx
git commit -m "Add OrderBook project visual"
```

---

### Task 5: Create `ShippedVisual.tsx`

**Files:**
- Create: `src/components/visuals/ShippedVisual.tsx`

- [ ] **Step 1: Write the new file**

Create `src/components/visuals/ShippedVisual.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";

interface ShippedVisualProps {
  isHovered?: boolean;
}

// Shipped: JD on the left → agent node → application submitted on the right
export function ShippedVisual({ isHovered = false }: ShippedVisualProps) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Left: Job posting document */}
      <motion.rect
        x={6}
        y={22}
        width={22}
        height={30}
        rx={1.5}
        fill="#141414"
        stroke="#06b6d4"
        strokeWidth="1"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 6 }}
        transition={{ duration: 0.4 }}
      />
      {/* Doc lines */}
      {[27, 31, 35, 39, 43, 47].map((y, i) => (
        <motion.line
          key={`line-${i}`}
          x1={9}
          y1={y}
          x2={i % 2 === 0 ? 25 : 22}
          y2={y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        />
      ))}
      <text
        x={17}
        y={58}
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="3.5"
        fontFamily="monospace"
      >
        job_post
      </text>

      {/* Arrow: doc → agent */}
      <motion.line
        x1={30}
        y1={37}
        x2={42}
        y2={50}
        stroke="#f59e0b"
        strokeWidth="1"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      <motion.polygon
        points="40,48 43,51 40,52"
        fill="#f59e0b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      />

      {/* Center: agent node */}
      <motion.circle
        cx={50}
        cy={50}
        r={8}
        fill="#06b6d4"
        stroke="#06b6d4"
        strokeWidth="1"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
      <text
        x={50}
        y={52}
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize="4"
        fontFamily="monospace"
        fontWeight="bold"
      >
        agent
      </text>

      {/* Outward pulse from agent */}
      <motion.circle
        cx={50}
        cy={50}
        r={8}
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: isHovered ? 3 : 2, opacity: 0 }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      />

      {/* Arrow: agent → submitted */}
      <motion.line
        x1={58}
        y1={50}
        x2={70}
        y2={37}
        stroke="#f59e0b"
        strokeWidth="1"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />
      <motion.polygon
        points="68,38 72,36 70,40"
        fill="#f59e0b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      />

      {/* Right: submitted checkmark in circle */}
      <motion.circle
        cx={80}
        cy={35}
        r={11}
        fill="#141414"
        stroke="#22c55e"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />
      <motion.path
        d="M 75 35 L 79 39 L 85 31"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.7, duration: 0.4 }}
      />
      <text
        x={80}
        y={54}
        textAnchor="middle"
        fill="#22c55e"
        fontSize="3.5"
        fontFamily="monospace"
      >
        submitted
      </text>

      {/* ATS badges below */}
      {["workday", "greenhouse", "lever"].map((ats, i) => (
        <motion.g key={ats}>
          <rect
            x={10 + i * 28}
            y={75}
            width={24}
            height={8}
            rx={1}
            fill="#141414"
            stroke="#262626"
            strokeWidth="0.5"
          />
          <motion.text
            x={22 + i * 28}
            y={80.5}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="3.5"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ delay: 1.8 + i * 0.1 }}
          >
            {ats}
          </motion.text>
        </motion.g>
      ))}
    </svg>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors (file is not yet imported anywhere, but Next.js still type-checks it).

- [ ] **Step 3: Commit**

```bash
git add src/components/visuals/ShippedVisual.tsx
git commit -m "Add Shipped product visual"
```

---

## Phase 3 — Shipped section

### Task 6: Create the `Shipped.tsx` section component

**Files:**
- Create: `src/components/sections/Shipped.tsx`

- [ ] **Step 1: Write the new file**

Create `src/components/sections/Shipped.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { ShippedVisual } from "../visuals/ShippedVisual";

const bullets = [
  "one-click apply across every major ATS",
  "auto-generates a tailored project per JD",
  "tracks every application end-to-end",
  "chrome extension for on-the-fly applies",
];

export function Shipped() {
  return (
    <section id="shipped" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="CURRENTLY BUILDING" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="terminal-window"
        >
          <div className="terminal-header flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="text-text-secondary">$ cat ~/.shipped</span>
          </div>

          <div className="terminal-body">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Copy column */}
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-mono text-3xl font-semibold text-text-primary">
                    shipped_
                  </h3>
                  <span className="font-mono text-xs text-accent-amber">
                    // live · 2026
                  </span>
                </div>

                <div className="h-px bg-border w-full mb-4" />

                <p className="font-mono text-lg text-accent-cyan mb-4">
                  Apply to jobs while you sleep.
                </p>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  A desktop app that reads a job posting, generates a tailored
                  portfolio project for it, and then applies on your behalf
                  &mdash; across workday, greenhouse, lever, and the rest of
                  the ATS zoo.
                </p>

                <ul className="space-y-2 mb-8">
                  {bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-2 text-sm text-text-secondary font-mono"
                    >
                      <span className="text-accent-cyan">
                        {i === bullets.length - 1 ? "└──" : "├──"}
                      </span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="https://shipped.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:text-accent-amber transition-colors"
                >
                  <span>[try shipped →]</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Visual column */}
              <div className="w-full aspect-square max-w-md mx-auto">
                <ShippedVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors. Component is not yet rendered — wiring happens in Task 7.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Shipped.tsx
git commit -m "Add Shipped section component"
```

---

### Task 7: Wire Shipped into the home page

**Files:**
- Modify: `src/components/sections/index.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Export `Shipped` from the sections index**

Open `src/components/sections/index.ts`. Current contents:

```ts
export { Hero } from "./Hero";
export { Projects } from "./Projects";
export { Now } from "./Now";
export { Skills } from "./Skills";
export { Uses } from "./Uses";
export { Contact } from "./Contact";
```

Add `Shipped` export after `Hero`:

```ts
export { Hero } from "./Hero";
export { Shipped } from "./Shipped";
export { Projects } from "./Projects";
export { Now } from "./Now";
export { Skills } from "./Skills";
export { Uses } from "./Uses";
export { Contact } from "./Contact";
```

- [ ] **Step 2: Render `<Shipped />` on the home page**

Open `src/app/page.tsx`. Replace its contents with:

```tsx
import {
  Hero,
  Shipped,
  Projects,
  Now,
  Skills,
  Uses,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Shipped />
      <Projects />
      <Now />
      <Skills />
      <Uses />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center font-mono text-sm text-text-secondary">
          <p>© 2026 taranveer anand</p>
        </div>
      </footer>
    </main>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors. Home page now includes the Shipped section between Hero and Projects.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/index.ts src/app/page.tsx
git commit -m "Wire Shipped section into home page"
```

---

## Phase 4 — Projects section rework

### Task 8: Update `Projects.tsx` with the new 5-project lineup

**Files:**
- Modify: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Widen the local `Project` interface `visualType` union**

In `Projects.tsx`, change the `visualType` line (currently line 18) in the `Project` interface from:

```ts
  visualType: "invoke" | "seecare" | "crypto-tracker" | "brainwave";
```

to:

```ts
  visualType:
    | "invoke"
    | "seecare"
    | "crypto-tracker"
    | "brainwave"
    | "flytetorch"
    | "dedupcore"
    | "orderbook";
```

- [ ] **Step 2: Replace the `projects` array**

Replace the existing `projects` array (currently lines 23–67) with the new 5-project lineup:

```ts
const projects: Project[] = [
  {
    id: "flytetorch",
    name: "FlyteTorch",
    tagline: "Distributed ML training orchestration for PyTorch on Kubernetes",
    description:
      "Wraps torch.distributed, NCCL, and Kubernetes scheduling behind a declarative TrainingSpec with automatic fault recovery and built-in profiling.",
    tech: ["Python", "PyTorch", "Kubernetes", "Flyte", "Prometheus"],
    github: "https://github.com/tarann26/flytetorch",
    visualType: "flytetorch",
    tier: 1,
  },
  {
    id: "seecare",
    name: "SeeCare",
    tagline: "Privacy-first memory aid for dementia patients",
    description:
      "Mobile app using facial recognition and conversation transcription to reduce anxiety and caregiver burden.",
    tech: ["FastAPI", "MongoDB", "AWS", "AssemblyAI", "Expo"],
    visualType: "seecare",
    tier: 1,
    award: "Best Senior Project W25",
  },
  {
    id: "dedupcore",
    name: "DedupCore",
    tagline: "High-performance block deduplication engine in C++17",
    description:
      "Rabin-fingerprint content-defined chunking, SHA-256 content addressing, lock-free sharded index. ~500 MB/s chunking, 65% dedup ratio.",
    tech: ["C++17", "OpenSSL", "CMake", "ASan/TSan"],
    visualType: "dedupcore",
    tier: 2,
  },
  {
    id: "orderbook",
    name: "OrderBook",
    tagline: "Real-time limit order book and matching engine",
    description:
      "Price-time priority matching, B-tree backed price levels, Decimal arithmetic throughout. 180-test suite.",
    tech: ["Python 3.11", "Textual", "sortedcontainers", "asyncio"],
    github: "https://github.com/tarann26/orderbook",
    visualType: "orderbook",
    tier: 2,
  },
  {
    id: "invoke",
    name: "Invoke",
    tagline: "Universal API-to-tool bridge for Claude",
    description:
      "MCP server that lets Claude dynamically discover, research, and register APIs. Ask for data, Claude handles the rest.",
    tech: ["TypeScript", "Node.js", "MCP SDK"],
    github: "https://github.com/tarann26/invoke",
    visualType: "invoke",
    tier: 2,
  },
];
```

- [ ] **Step 3: Update the tier-2 grid to 3 columns on `md+`**

In the JSX at the bottom of the file, find the second grid (currently around line 177):

```tsx
        {/* Tier 2 - Medium cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {tier2.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
```

Change `md:grid-cols-2` to `md:grid-cols-3`:

```tsx
        {/* Tier 2 - Medium cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tier2.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
```

- [ ] **Step 4: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors. The projects grid now shows 5 cards (FlyteTorch + SeeCare in tier 1; DedupCore + OrderBook + Invoke in tier 2).

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "Rework projects lineup: FlyteTorch, SeeCare, DedupCore, OrderBook, Invoke"
```

---

## Phase 5 — Copy & metadata updates

### Task 9: Update `layout.tsx` metadata

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Rewrite `description`, `openGraph.description`, `twitter.description`, and `keywords`**

In `src/app/layout.tsx`, replace the entire `metadata` object (currently lines 17–51) with:

```tsx
export const metadata: Metadata = {
  title: "Taranveer Anand | Developer & Founder",
  description:
    "CS senior at Case Western Reserve. Building Shipped — an AI job application platform. Previously: SeeCare (Best Senior Project W25), FlyteTorch, DedupCore, OrderBook.",
  keywords: [
    "Taranveer Anand",
    "software developer",
    "AI",
    "FinTech",
    "distributed systems",
    "C++",
    "Shipped",
    "Case Western Reserve",
    "portfolio",
  ],
  authors: [{ name: "Taranveer Anand" }],
  creator: "Taranveer Anand",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taranveeranand.com",
    siteName: "Taranveer Anand",
    title: "Taranveer Anand | Developer & Founder",
    description:
      "CS senior at Case Western Reserve. Building Shipped — an AI job application platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taranveer Anand | Developer & Founder",
    description:
      "CS senior at Case Western Reserve. Building Shipped — an AI job application platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

- [ ] **Step 2: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Update metadata to lead with Shipped and resume-aligned projects"
```

---

### Task 10: Update `Now.tsx` headline item

**Files:**
- Modify: `src/components/sections/Now.tsx`

- [ ] **Step 1: Replace the `nowItems` array and update the timestamp**

In `Now.tsx`, replace the `nowItems` array (currently lines 12–17) with:

```ts
const nowItems: NowItem[] = [
  { text: "shipping shipped (shipped.one)", highlight: true },
  { text: "researching semantic similarity @ noetic" },
  { text: "grinding NLH-300 sessions" },
  { text: "learning guitar (badly)" },
];
```

Then update the "last updated" label (currently line 34) from `jan 2026` to `apr 2026`:

```tsx
                <span className="text-accent-cyan">last updated:</span> apr 2026
```

- [ ] **Step 2: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Now.tsx
git commit -m "Update Now: Shipped replaces Invoke as current-build headline"
```

---

### Task 11: Update `Skills.tsx` project-context references

**Files:**
- Modify: `src/components/sections/Skills.tsx`

- [ ] **Step 1: Refresh context strings that reference the old project lineup**

In `Skills.tsx`, make the following changes to the `skillCategories` array:

Line 16 — `python`:
```ts
      { name: "python", context: "FlyteTorch, SeeCare, ML work" },
```

Line 17 — `typescript`:
```ts
      { name: "typescript", context: "Shipped, Invoke, portfolio" },
```

Line 19 — `c/c++`:
```ts
      { name: "c/c++", context: "DedupCore, systems programming" },
```

Line 38 — `pytorch`:
```ts
      { name: "pytorch", context: "FlyteTorch, SeeCare face embeddings" },
```

Line 39 — `scikit-learn`: leave unchanged (still references Crypto-Tracker which still exists as a `/projects/crypto-tracker` page). Same for `opencv`.

Line 47 — `supabase`:
```ts
      { name: "supabase", context: "Shipped, BrainWave" },
```

Line 50 — `redis`:
```ts
      { name: "redis", context: "FlyteTorch dataset cache, caching" },
```

- [ ] **Step 2: Verify**

```bash
npm run build && npm run lint
```
Expected: build succeeds, no lint errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Skills.tsx
git commit -m "Refresh skill context references to new project lineup"
```

---

## Phase 6 — Verification

### Task 12: Full build + dev-server smoke test

**Files:** none (verification only)

- [ ] **Step 1: Fresh production build**

```bash
npm run build
```
Expected: build completes without errors. Look in output for the routes: `/`, `/projects/invoke`, `/projects/seecare`, `/projects/crypto-tracker`, `/projects/brainwave`, `/projects/flytetorch`, `/projects/dedupcore`, `/projects/orderbook`.

- [ ] **Step 2: Lint clean**

```bash
npm run lint
```
Expected: no errors or warnings.

- [ ] **Step 3: Dev server smoke test**

```bash
npm run dev
```
Open `http://localhost:3000` in a browser and verify:
- [ ] Home page scroll order is: Hero → Currently Building (Shipped) → Projects → Now → Skills → Uses → Contact.
- [ ] Shipped section renders with the `shipped_` heading, `// live · 2026` badge, copy, bulleted list, animated visual, and `[try shipped →]` link. The link has `target="_blank"` and goes to `https://shipped.one`.
- [ ] Projects section shows 5 cards in the order: FlyteTorch, SeeCare (tier 1, 2-col grid) → DedupCore, OrderBook, Invoke (tier 2, 3-col grid). SeeCare has the amber `Best Senior Project W25` badge.
- [ ] FlyteTorch, DedupCore, and OrderBook cards each render a distinct custom SVG visual (not a fallback, not identical).
- [ ] Hovering each project card routes transition correctly; clicking navigates to `/projects/<slug>` and the detail page loads.
- [ ] `/projects/crypto-tracker` and `/projects/brainwave` still render (their routes were preserved even though their cards are no longer on the home grid).
- [ ] The Now section leads with `shipping shipped (shipped.one)` highlighted in cyan, and reads `last updated: apr 2026`.
- [ ] Mobile viewport (~375px) — Shipped section stacks copy above visual, project grids stack to single column.

- [ ] **Step 4: Final commit (if any outstanding changes)**

If step 3 surfaced no issues:

```bash
git status
```
Expected: `nothing to commit, working tree clean`.

If visual tweaks are needed, make them as follow-up commits — note them here and revisit.

---

## Out of scope (reminder)

- No changes to Hero, About, Uses, Contact layouts.
- No changes to `/projects/[slug]` detail page template (new entries use the existing template unchanged).
- No removal of Crypto-Tracker / BrainWave entries from `projectsData.ts` — their routes stay live.
- No Shipped internal-architecture details (Electron, Playwright, Supabase, Stripe) in public copy.
