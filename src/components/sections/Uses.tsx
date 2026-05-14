"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";

interface UsesItem {
  label: string;
  value: string;
}

const setup: UsesItem[] = [
  { label: "editor", value: "VS Code, Claude Code, Codex CLI" },
  { label: "terminal", value: "zsh, bash scripts, integrated terminals" },
  { label: "os", value: "macOS locally, Linux on servers" },
  { label: "workflow", value: "read docs, build small repros, ship the useful part" },
  { label: "debugging", value: "logs, network traces, API payload inspection" },
];

interface StackItem {
  category: string;
  tools: string;
}

const stack: StackItem[] = [
  {
    category: "frontend",
    tools: "Next.js, React, Tailwind, Framer Motion, Electron",
  },
  {
    category: "backend_apis",
    tools: "FastAPI, Express, Fastify, REST, OAuth, webhooks",
  },
  {
    category: "agentic_ai",
    tools: "Claude Code, Codex, LangChain, LangGraph, OpenRouter, n8n",
  },
  {
    category: "data_search",
    tools: "PostgreSQL, Supabase, pgvector, MongoDB, Redis, ChromaDB",
  },
  {
    category: "automation",
    tools: "browser automation, form filling, background jobs, Redis queues",
  },
  {
    category: "infra",
    tools: "AWS, Docker, Nginx, GitHub Actions, Vercel, Linux",
  },
];

export function Uses() {
  return (
    <section id="uses" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="USES" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="> neofetch --setup">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Setup */}
              <div>
                <p className="text-text-secondary mb-3">working setup</p>
                {setup.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 py-1"
                  >
                    <span className="text-text-secondary w-24 shrink-0">{item.label}</span>
                    <span className="text-accent-cyan">→</span>
                    <span className="text-text-primary">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stack */}
              <div>
                <p className="text-text-secondary mb-3">stack i reach for</p>
                {stack.map((item, i) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                    className="flex items-start gap-2 py-1"
                  >
                    <span className="text-text-secondary">
                      {i === stack.length - 1 ? "└──" : "├──"}
                    </span>
                    <span className="text-accent-cyan min-w-28">{item.category}</span>
                    <span className="text-text-secondary">→</span>
                    <span className="text-text-primary">{item.tools}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
