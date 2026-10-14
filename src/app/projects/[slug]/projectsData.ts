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
    | "orderbook";
  features: string[];
}

export const projectsData: Record<string, ProjectData> = {
  hivemind: {
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
