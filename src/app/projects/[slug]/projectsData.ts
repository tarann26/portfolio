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
    | "invoke"
    | "seecare"
    | "crypto-tracker"
    | "brainwave"
    | "flytetorch"
    | "dedupcore"
    | "orderbook";
  features: string[];
}

export const projectsData: Record<string, ProjectData> = {
  invoke: {
    name: "Invoke",
    tagline: "Universal API-to-tool bridge for Claude",
    description:
      "An MCP (Model Context Protocol) server that lets Claude access any REST API. When Claude needs data it doesn't have, it automatically researches the API, registers it, and makes the call.",
    challenge:
      "Integrating LLMs with external APIs typically requires pre-configuring every API endpoint. This is tedious, doesn't scale, and limits what an AI assistant can do.",
    solution:
      "Built a dynamic API discovery system where Claude can research API documentation, construct configurations, and register new APIs on the fly. The system supports multi-key management, request caching, and workflow chaining.",
    impact:
      "Enables Claude to access virtually any REST API without pre-configuration, dramatically expanding what AI assistants can accomplish.",
    tech: ["TypeScript", "Node.js", "MCP SDK", "Zod"],
    github: "https://github.com/tarann26/invoke",
    visualType: "invoke",
    features: [
      "Dynamic API discovery and registration",
      "Multi-key support (dev/prod/project)",
      "Request caching with configurable TTL",
      "Workflow engine for chaining API calls",
      "Health monitoring dashboard",
      "Full request logging and auditing",
    ],
  },
  seecare: {
    name: "SeeCare",
    tagline: "Privacy-first memory aid for dementia patients",
    description:
      "A mobile application using facial recognition and conversation transcription to support dementia patients, reducing anxiety and caregiver burden through on-device processing and encrypted storage.",
    challenge:
      "Dementia patients often struggle to recognize familiar faces and remember recent conversations, causing anxiety for both patients and caregivers.",
    solution:
      "Built a privacy-first mobile app that uses facial recognition to identify people and transcribes conversations for later review. All processing happens on-device to protect sensitive data.",
    impact:
      "Won Best Senior Project Award (Winter 2025). Demonstrated that AI can provide meaningful support for vulnerable populations while respecting privacy.",
    tech: ["FastAPI", "MongoDB", "AWS S3", "AWS Rekognition", "AssemblyAI", "Expo", "DeepFace"],
    visualType: "seecare",
    features: [
      "Real-time face detection with DeepFace embeddings",
      "DBSCAN clustering for unknown face grouping",
      "Wake-word activated conversation capture",
      "Speaker diarization via AssemblyAI",
      "GPT-3.5 conversation summarization",
      "Encrypted on-device storage",
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
};
