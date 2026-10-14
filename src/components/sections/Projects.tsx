"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectVisual } from "../visuals/ProjectVisual";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
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
  tier: 1 | 2;
  award?: string;
}

const projects: Project[] = [
  {
    id: "hivemind",
    name: "HiveMind",
    tagline: "AI forecasting with autonomous agents and prediction markets",
    description: "Concurrent, role-specialized agents research news and trade against an LMSR market maker. A live WebSocket dashboard streams their reasoning, trades, and consensus forecasts.",
    tech: ["Next.js", "FastAPI", "LangChain/LangGraph", "OpenRouter", "WebSockets"],
    github: "https://github.com/Not-Ethan/hivemind/tree/master",
    visualType: "hivemind",
    tier: 1,
  },
  {
    id: "flyte",
    name: "FlyteTorch",
    tagline: "PyTorch training orchestration and performance profiling",
    description: "Declarative training specifications, Kubernetes job manifests, distributed process-group setup, phase-level profiling, dataset caching, and statistical benchmark comparisons.",
    tech: ["Python", "PyTorch", "Kubernetes", "Flyte", "Prometheus"],
    github: "https://github.com/tarann26/flytetorch",
    visualType: "flyte",
    tier: 1,
  },
  {
    id: "seecare",
    name: "SeeCare",
    tagline: "Recognition and conversation recall for dementia support",
    description: "A mobile memory aid combining facial recognition, speaker diarization, and searchable summaries, with wake-word detection, client-side processing, and privacy controls.",
    tech: ["Expo", "FastAPI", "MongoDB", "AWS", "AssemblyAI"],
    visualType: "seecare",
    tier: 1,
    award: "Best Senior Project W25",
  },
  {
    id: "cairn",
    name: "Cairn",
    tagline: "Content-addressed storage and deduplication in C++17",
    description: "Rabin-fingerprint chunking, SHA-256 content addressing, a sharded concurrent index, reference-counted garbage collection, and delta replication.",
    tech: ["C++17", "OpenSSL", "CMake", "ASan/TSan"],
    visualType: "cairn",
    tier: 2,
  },
  {
    id: "orderbook",
    name: "OrderBook",
    tagline: "Real-time limit order book and matching engine",
    description: "Price-time priority matching with limit and market orders, partial fills, cancellations, and Decimal arithmetic. Includes a live Textual interface and asynchronous market simulator.",
    tech: ["Python 3.11", "Textual", "sortedcontainers", "asyncio"],
    github: "https://github.com/tarann26/orderbook",
    visualType: "orderbook",
    tier: 2,
  },
  {
    id: "invoke",
    name: "Invoke",
    tagline: "Dynamic API tools with scoped authorization for AI agents",
    description: "A TypeScript MCP server with dynamic API registration, conditional workflows, caching, and an optional authorization layer enforcing scoped grants and approval requirements.",
    tech: ["TypeScript", "Node.js", "MCP SDK"],
    github: "https://github.com/tarann26/invoke",
    visualType: "invoke",
    tier: 2,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`group relative border border-border rounded-lg bg-surface overflow-hidden transition-all duration-300 cursor-pointer ${
        isHovered ? "border-accent-cyan glow-cyan-subtle -translate-y-1" : ""
      }`}
    >
      {/* Visual */}
      <div className="bg-background p-4">
        <ProjectVisual type={project.visualType} isHovered={isHovered} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-mono text-xl font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
            {project.name}
          </h3>
          {project.award && (
            <span className="text-xs font-mono px-2 py-1 bg-accent-amber/20 text-accent-amber rounded">
              {project.award}
            </span>
          )}
        </div>

        <p className="font-mono text-sm text-accent-cyan mb-3">
          {project.tagline}
        </p>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-1 bg-background border border-border rounded text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-text-secondary hover:text-accent-cyan transition-colors text-sm"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-text-secondary hover:text-accent-cyan transition-colors text-sm"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="PROJECTS" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/tarann26?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <span>[view all projects on github →]</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
