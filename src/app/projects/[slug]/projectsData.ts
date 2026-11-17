import { timeline } from "@/data/timeline";

export interface ProjectData {
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  live?: string;
  visualType:
    | "hivemind"
    | "invoke"
    | "seecare"
    | "crypto-tracker"
    | "brainwave"
    | "flyte"
    | "cairn"
    | "orderbook"
    | "heron"
    | "attune"
    | "poker";
  date?: string;
  features: string[];
}

export const projectsData: Record<string, ProjectData> = {
  attune: {
    "name": "Attune",
    "tagline": "AI-assisted software implementation for enterprise vendors",
    "description": "Building an AI-assisted implementation platform for enterprise software vendors and their customers. The working application connects vendor onboarding, source-backed discovery, shared implementation briefs, reviewed agent changes, and independently checked releases. The complete deployment and maintenance lifecycle remains in development.",
    "challenge": "Enterprise software implementations require product knowledge, customer context, clear ownership, and technical work across multiple systems. Each change needs a traceable scope and a reliable path through review, verification, and recovery.",
    "solution": "Built a React and TypeScript workspace backed by Django/Ninja business APIs, FastAPI execution services, PostgreSQL, and durable Temporal workers. Connected source-backed briefs and reviewed change packages to private Git staging, independent Docker checks, release records, and recovery workflows.",
    "impact": "Established a working local implementation flow with persistent review and execution records. Onboarding, discovery, change staging, and recovery have local verification evidence; the full product lifecycle is still in development.",
    "tech": [
        "React",
        "TypeScript",
        "Django/Ninja",
        "FastAPI",
        "PostgreSQL",
        "Temporal",
        "Docker"
    ],
    "live": "https://getattune.si",
    "visualType": "attune",
    "features": [
        "Vendor onboarding with source-backed product understanding",
        "Shared customer discovery and implementation briefs",
        "Reviewed agent changes with private Git staging",
        "Durable execution with Temporal workers",
        "Independent Docker verification and release records",
        "Recovery workflows and customer acceptance records"
    ],
    "date": timeline.attune
  },
  heron: {
    "name": "Heron",
    "tagline": "Pricing and hedging for money-back promotions",
    "description": "Co-founded a platform that lets merchants offer customer refunds when a specified public event occurs. Heron prices the refund exposure against live prediction-market odds, models campaign economics, and hedges the potential payout.",
    "challenge": "A merchant needs to understand the cost of an event-triggered refund before launching a promotion. Quotes must account for customer participation, refund caps, merchant costs, and the cost of hedging the event.",
    "solution": "Built a campaign-pricing calculator that turns attendance, refund caps, merchant costs, and hedge costs into quotes, margin projections, and equivalent discount rates. Added a Python/Node.js lead pipeline with website enrichment, deduplication, outreach, and reply tracking.",
    "impact": "The lead pipeline covered 1,650+ prospects across 22 states. Outreach achieved approximately a 15% reply rate and a 2.2% close rate.",
    "tech": [
        "Python",
        "Node.js",
        "Prediction markets",
        "Campaign pricing",
        "Lead automation"
    ],
    "live": "https://useheron.io",
    "visualType": "heron",
    "features": [
        "Event-triggered money-back campaign design",
        "Campaign pricing using prediction-market odds",
        "Refund caps, hedge costs, and margin projections",
        "Equivalent discount-rate calculations",
        "Prospect enrichment and deduplication",
        "Email outreach and reply tracking"
    ],
    "date": timeline.heron
  },
  poker: {
    "name": "Poker Bot",
    "tagline": "Real-time strategy, game-state tracking, and analysis",
    "description": "Co-built a multi-platform poker system with strategy computation, game-state tracking, a SQLite event hub, a React dashboard, and a Swift iOS app. The strategy recorded 43 bb/100 over 47,000+ hands; these figures describe that recorded sample. The monorepo spans 300,000+ lines and 500+ test files.",
    "challenge": "Strategy decisions depend on an accurate reconstruction of the hand and fast postflop computation. Straddles, seat changes, and short all-ins can corrupt state, while misleading timing logs can obscure the real performance bottleneck.",
    "solution": "Connected adapters for four platforms to a shared SQLite event hub, React dashboard, and iOS app. Removed an unused 1,326-combination classification from postflop computation, verified byte-identical output on 547 recorded spots, and corrected timing attribution between model and code execution.",
    "impact": "Reduced median postflop compute about 8x, from 401 ms to 48 ms. Audited 1,777 recorded hands: pot and to-call matched on all 580 checks, and preflop classification matched on all 407 checks. Fixed eight tracker defects.",
    "tech": [
        "TypeScript",
        "Python",
        "React",
        "Swift",
        "SQLite"
    ],
    "visualType": "poker",
    "features": [
        "Adapters for four poker platforms",
        "SQLite event hub and hand-history tracking",
        "React dashboard and Swift iOS application",
        "Postflop computation reduced from 401 ms to 48 ms",
        "Byte-identical strategy output across 547 recorded spots",
        "State audit covering 1,777 recorded hands"
    ],
    "date": timeline.poker
  },
  hivemind: {
    date: "Jan 2026",
    name: "HiveMind",
    tagline: "AI forecasting with autonomous agents and prediction markets",
    description: "Built a full-stack AI forecasting simulator where role-specialized agents research real-world events, form probability estimates, and trade in prediction markets. An LMSR market maker converts positions into prices, while a live dashboard exposes research, reasoning, trades, and consensus forecasts.",
    challenge: "Agents need separate research histories and consistent market mechanics to compare competing forecasts. Users also need to inspect the evidence and positions behind a changing consensus.",
    solution: "Implemented an LMSR pricing and trade-cost engine, concurrent agent loops with histories isolated by agent and market, and LangChain/LangGraph tool use for Tavily web and news research. FastAPI and SQLAlchemy persist market activity, while WebSockets stream reasoning and status updates to a Next.js dashboard.",
    impact: "Makes multi-agent forecasting observable: users can inspect research, compare positions, track market prices and agent PnL, and follow consensus as trading progresses.",
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "SQLAlchemy/SQLite",
      "LangChain/LangGraph",
      "OpenRouter",
      "WebSockets",
    ],
    github: "https://github.com/Not-Ethan/hivemind/tree/master",
    visualType: "hivemind",
    features: [
      "LMSR pricing and trade-cost calculations with configurable liquidity",
      "Concurrent, role-specialized LLM agents",
      "Research and conversation history isolated by agent and market",
      "Tavily web and news research with knowledge-cutoff filtering",
      "Live reasoning, trade, and status streams over WebSockets",
      "Market price history, agent positions, PnL, and consensus forecasts"
    ],
  },
  invoke: {
    name: "Invoke",
    tagline: "Dynamic API tools with scoped authorization for AI agents",
    description: "Built a TypeScript MCP server that exposes dynamically registered REST APIs as tools for AI agents. It combines credential management, request caching, conditional workflows, and an optional authorization layer for controlled API access.",
    challenge: "Static API integrations require custom tool definitions for each service. Dynamic access also needs controls over which principals can call an API, which operations they can perform, and which requests require approval.",
    solution: "Implemented dynamic API registration with Zod validation, credential aliases, TTL-based GET caching, conditional workflow chaining, and audit logs. In guarded mode, a shared enforcement point checks grants scoped to principals, APIs, endpoints, methods, and parameters before cache or network access, including expiry, revocation, and approval requirements.",
    impact: "Lets agents compose reusable API workflows while applying explicit access rules and keeping a record of tool calls and approval decisions.",
    tech: ["TypeScript", "Node.js", "MCP SDK", "Zod"],
    github: "https://github.com/tarann26/invoke",
    visualType: "invoke",
    features: [
      "Dynamic REST API registration through MCP tools",
      "Credential aliases and multi-key management",
      "TTL-based request caching",
      "Conditional workflows chaining multiple API calls",
      "Optional scoped grants with expiry and revocation",
      "Approval queue and audit logging"
    ],
  },
  seecare: {
    date: "Sep 2025 - Dec 2025",
    name: "SeeCare",
    tagline: "Recognition and conversation recall for dementia support",
    description: "Developed a mobile memory aid for dementia support that connects person identification with searchable conversation context. Facial recognition, speaker diarization, and conversation summaries help users revisit who they met and what they discussed; wake-word detection, client-side processing, and privacy controls support conversation capture.",
    challenge: "Remembering familiar people and recent conversations can be difficult for people with dementia. A useful memory aid needs to connect faces with conversation context while giving users control over capture and processing.",
    solution: "Integrated an Expo mobile experience with facial recognition, AssemblyAI transcription and speaker diarization, and a FastAPI/MongoDB backend for person and conversation context. Implemented wake-word detection, client-side processing, and privacy features around conversation capture.",
    impact: "Received Case Western Reserve University’s Best Senior Project Award, Winter 2025, for combining person identification with searchable conversation context.",
    tech: [
      "Expo",
      "FastAPI",
      "MongoDB",
      "AWS S3",
      "AWS Rekognition",
      "AssemblyAI",
      "DeepFace"
    ],
    visualType: "seecare",
    features: [
      "Wake-word detection for conversation capture",
      "Client-side processing and privacy controls",
      "Person identification using facial recognition",
      "Speaker-diarized conversation transcripts",
      "Searchable conversation summaries and person context"
    ],
  },
  "crypto-tracker": {
    name: "Crypto-Tracker",
    tagline: "Blockchain analytics with leader detection",
    description:
      "A full-stack cryptocurrency and stock market dashboard with advanced Solana blockchain analysis capabilities. Track portfolios, monitor wallets in real-time, and detect trading patterns using leader-follower analysis algorithms.",
    challenge:
      "Identifying profitable trading patterns in crypto markets requires analyzing transaction flows across multiple wallets to find 'smart money' leaders.",
    solution:
      "Built a leader detection system using weighted scoring algorithms that analyze transaction volume, timing correlation, and pattern consistency to identify market movers.",
    impact:
      "Created a comprehensive analytics platform that combines traditional portfolio tracking with cutting-edge blockchain analysis.",
    tech: ["React", "TypeScript", "Supabase", "Solana Web3.js", "FastAPI", "Python", "scikit-learn"],
    github: "https://github.com/tarann26/Crypto-Tracker",
    visualType: "crypto-tracker",
    features: [
      "Real-time Solana wallet monitoring",
      "Leader-follower detection algorithms",
      "Transaction pattern analysis",
      "Glassmorphic UI with theme persistence",
      "Portfolio tracking with gain/loss calculations",
      "AI-driven trading signals",
    ],
  },
  brainwave: {
    name: "BrainWave",
    tagline: "Real-time peer-to-peer learning platform",
    description:
      "A collaborative study platform with integrated chat, file sharing, voice/video conferencing, shared calendar scheduling, virtual whiteboard, and interactive quizzes for collaborative study sessions.",
    challenge:
      "Remote studying lacks the spontaneity and collaboration of in-person study groups. Existing tools are fragmented across multiple apps.",
    solution:
      "Built an all-in-one platform using WebRTC for real-time communication and Supabase for synchronized state. Added an AI assistant to help generate study materials.",
    impact:
      "Created a unified platform that replicates the experience of studying together in person, with AI enhancements.",
    tech: ["React", "Supabase", "WebRTC", "OpenRouter API", "Flask", "PostgreSQL"],
    visualType: "brainwave",
    features: [
      "WebRTC voice/video conferencing",
      "Real-time collaborative whiteboard",
      "Interactive quiz generation",
      "AI assistant powered by DeepSeek",
      "OAuth 2.0 authentication",
      "Shared file storage and management",
    ],
  },
  flyte: {
    name: "FlyteTorch",
    tagline: "PyTorch training orchestration and performance profiling",
    description: "Built a Python toolkit for declarative PyTorch training configuration, Kubernetes job orchestration, and training-performance analysis. The implementation includes distributed process-group setup, phase-level profiling, Redis dataset caching, and content-addressed dataset versions.",
    challenge: "Training configuration, worker lifecycle, dataset preparation, and performance instrumentation often live in separate scripts, making experiments difficult to reproduce and compare.",
    solution: "Implemented TrainingSpec configuration, Kubernetes job manifests and lifecycle helpers, and PyTorch distributed process-group setup. Profiling hooks record training phases; dataset caching uses Redis and SHA-256 versioning, and experiment comparisons apply Welch’s t-test.",
    impact: "Brings job configuration, profiling, dataset reuse, and benchmark comparison into a common workflow for inspecting training behavior.",
    tech: [
      "Python",
      "PyTorch (DDP/NCCL)",
      "Kubernetes",
      "Flyte",
      "Prometheus",
      "Redis",
    ],
    github: "https://github.com/tarann26/flytetorch",
    visualType: "flyte",
    features: [
      "Declarative TrainingSpec configuration",
      "Kubernetes job manifests and lifecycle helpers",
      "Distributed PyTorch process-group setup",
      "Training-phase profiling and Prometheus metrics",
      "Benchmark comparison using Welch’s t-test",
      "Redis dataset caching with SHA-256 versioning"
    ],
  },
  cairn: {
    name: "Cairn",
    tagline: "Content-addressed storage and deduplication in C++17",
    description: "Built a C++17 deduplication engine using Rabin-fingerprint content-defined chunking and SHA-256 content addressing. A sharded concurrent index tracks stored chunks, with atomic reference counts, garbage collection, and delta replication.",
    challenge: "Fixed-size boundaries can miss shared content after insertions or edits. Concurrent storage also needs coordinated index access and a reliable way to reclaim chunks after references are removed.",
    solution: "Implemented Rabin-fingerprint chunking and SHA-256 chunk identifiers. The index uses sharded reader/writer locks and atomic reference counts; storage operations support deduplication, reference-counted reclamation, and replication of changed content.",
    impact: "Explores content-addressed storage across chunking, indexing, reclamation, and replication, with benchmark harnesses for inspecting each stage.",
    tech: [
      "C++17",
      "OpenSSL (SHA-256)",
      "CMake",
      "Google Benchmark",
      "ASan/TSan",
    ],
    visualType: "cairn",
    features: [
      "Rabin-fingerprint content-defined chunking",
      "SHA-256 content addressing",
      "Sharded concurrent chunk index with reader/writer locks",
      "Atomic reference counting and garbage collection",
      "Delta replication of changed content",
      "Benchmark harnesses for ingestion, deduplication, and replication"
    ],
  },
  orderbook: {
    name: "OrderBook",
    tagline: "Real-time limit order book and matching engine",
    description: "Built a Python limit-order-book simulator implementing price-time priority matching. The engine supports limit and market orders, partial fills, cancellations, and trade history, with Decimal arithmetic for prices and quantities.",
    challenge: "Matching needs to preserve FIFO priority at each price, handle partial fills and market-order sweeps, and keep prices and quantities consistent without floating-point drift.",
    solution: "Organized bid and ask price levels with SortedDict and FIFO queues, using Decimal arithmetic throughout matching. Added a Textual terminal interface and an asyncio-driven market simulator to inspect order flow, fills, and book state.",
    impact: "Makes matching behavior visible through a live terminal interface, with tests covering order handling and priority rules.",
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
      "Price-time priority and FIFO matching within price levels",
      "Limit and market orders, partial fills, and cancellations",
      "SortedDict-backed bid and ask price levels",
      "Decimal-based prices and quantities",
      "Live Textual terminal interface",
      "Asynchronous market simulator with configurable order flow"
    ],
  },
};
