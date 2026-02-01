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
  visualType: "invoke" | "seecare" | "crypto-tracker" | "brainwave";
  tier: 1 | 2;
  award?: string;
}

const projects: Project[] = [
  {
    id: "invoke",
    name: "Invoke",
    tagline: "Universal API-to-tool bridge for Claude",
    description:
      "MCP server that lets Claude dynamically discover, research, and register APIs. Ask for data, Claude handles the rest.",
    tech: ["TypeScript", "Node.js", "MCP SDK"],
    github: "https://github.com/tarann26/invoke",
    visualType: "invoke",
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
    id: "crypto-tracker",
    name: "Crypto-Tracker",
    tagline: "Blockchain analytics with leader detection",
    description:
      "Full-stack crypto platform with real-time dashboards, Solana wallet monitoring, and trading pattern analysis.",
    tech: ["React", "Supabase", "Solana Web3.js", "Python"],
    github: "https://github.com/tarann26/Crypto-Tracker",
    visualType: "crypto-tracker",
    tier: 2,
  },
  {
    id: "brainwave",
    name: "BrainWave",
    tagline: "Real-time peer-to-peer learning platform",
    description:
      "Collaborative study platform with WebRTC conferencing, shared whiteboard, quizzes, and AI assistant.",
    tech: ["React", "Supabase", "WebRTC", "OpenRouter"],
    visualType: "brainwave",
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

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
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
  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="PROJECTS" />

        {/* Tier 1 - Large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {tier1.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tier 2 - Medium cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {tier2.map((project) => (
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
