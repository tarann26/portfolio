"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { projectsData } from "./projectsData";

export function ProjectPageClient({ slug }: { slug: string }) {
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
          ].map((section) => (
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
