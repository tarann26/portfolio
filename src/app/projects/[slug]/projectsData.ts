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
  visualType: "invoke" | "seecare" | "crypto-tracker" | "brainwave";
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
};
