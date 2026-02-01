"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";

interface UsesItem {
  label: string;
  value: string;
}

const setup: UsesItem[] = [
  { label: "editor", value: "vscode" },
  { label: "terminal", value: "native / integrated" },
  { label: "os", value: "macos" },
];

interface StackItem {
  category: string;
  tools: string;
}

const stack: StackItem[] = [
  { category: "frontend", tools: "next.js, tailwind, framer" },
  { category: "backend", tools: "fastapi, supabase" },
  { category: "ai/ml", tools: "pytorch, langchain" },
  { category: "infra", tools: "vercel, aws, docker" },
];

export function Uses() {
  return (
    <section id="uses" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
                {setup.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 py-1"
                  >
                    <span className="text-text-secondary w-24">{item.label}</span>
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
                    <span className="text-accent-cyan">{item.category}</span>
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
