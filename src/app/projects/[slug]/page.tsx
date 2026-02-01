"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

interface ProjectData {
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

const projectsData: Record<string, ProjectData> = {
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

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-mono mb-4">Project not found</h1>
          <Link href="/#projects" className="text-accent-cyan hover:underline">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} />
            back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-mono font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-accent-cyan font-mono">{project.tagline}</p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 border border-border rounded-lg bg-surface p-8"
        >
          <div className="max-w-md mx-auto">
            <ProjectVisual type={project.visualType} isHovered={true} />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Challenge / Solution / Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { title: "The Challenge", content: project.challenge },
            { title: "The Solution", content: project.solution },
            { title: "The Impact", content: project.impact },
          ].map((section, i) => (
            <div key={section.title} className="terminal-window">
              <div className="terminal-header text-accent-cyan">
                {section.title}
              </div>
              <div className="terminal-body text-sm text-text-secondary">
                {section.content}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl font-mono font-semibold mb-4">Key Features</h2>
          <div className="terminal-window">
            <div className="terminal-header">&gt; ls features/</div>
            <div className="terminal-body">
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-text-secondary">
                      {i === project.features.length - 1 ? "└──" : "├──"}
                    </span>
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl font-mono font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface border border-border rounded font-mono text-sm text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-colors font-mono text-sm"
            >
              <Github size={16} />
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan text-background rounded hover:bg-accent-cyan/90 transition-colors font-mono text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </main>
  );
}
