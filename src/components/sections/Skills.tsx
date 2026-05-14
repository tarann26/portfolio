"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";

interface SkillCategory {
  name: string;
  summary: string;
  skills: { name: string; context?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "soft_skills",
    summary: "how I work",
    skills: [
      { name: "product sense", context: "Turning vague ideas into usable shipped products" },
      { name: "technical communication", context: "Explaining tradeoffs, APIs, and systems clearly" },
      { name: "problem decomposition", context: "Breaking ambiguous builds into testable pieces" },
      { name: "rapid prototyping", context: "Shipped, Aonix, HiveMind, portfolio experiments" },
      { name: "ownership", context: "Founder-led projects from idea to users" },
      { name: "cross-functional collaboration", context: "Clients, teammates, users, and stakeholders" },
    ],
  },
  {
    name: "languages",
    summary: "what I write",
    skills: [
      { name: "python", context: "HiveMind, Flyte, SeeCare" },
      { name: "typescript", context: "Shipped, HiveMind, Invoke" },
      { name: "javascript", context: "Frontend and Node.js projects" },
      { name: "java", context: "AI agents, academic projects" },
      { name: "c/c++", context: "Cairn, systems programming" },
      { name: "rust", context: "Learning, systems projects" },
      { name: "sql", context: "PostgreSQL, SQLite, analytics queries" },
      { name: "bash", context: "CLI workflows, Linux automation" },
    ],
  },
  {
    name: "ai_search_systems",
    summary: "agentic and retrieval systems",
    skills: [
      { name: "llm orchestration", context: "HiveMind, BrainWave, Invoke" },
      { name: "claude code", context: "Agentic development workflow" },
      { name: "codex", context: "CLI-assisted implementation and code review" },
      { name: "prompt engineering", context: "Structured prompts, tool use, and eval loops" },
      { name: "rag", context: "Retrieval-backed assistants and document reasoning" },
      { name: "embeddings", context: "Semantic search and entity matching" },
      { name: "semantic search", context: "Search over docs, profiles, and project data" },
      { name: "hybrid search", context: "Keyword plus vector retrieval patterns" },
      { name: "multi-agent systems", context: "HiveMind simulation and agent markets" },
      { name: "langchain/langgraph", context: "Agent loops and stateful workflows" },
      { name: "openrouter", context: "LLM routing across model providers" },
      { name: "pytorch", context: "Flyte distributed training work" },
      { name: "scikit-learn", context: "ML coursework and data modeling" },
      { name: "opencv", context: "Computer vision pipelines" },
    ],
  },
  {
    name: "api_platform_engineering",
    summary: "connecting systems",
    skills: [
      { name: "rest api architecture", context: "Product backends and project APIs" },
      { name: "third-party api integration", context: "ATS, CRM, AI, email, and data services" },
      { name: "api discovery", context: "Reading docs and wiring unfamiliar systems quickly" },
      { name: "webhooks", context: "Aonix workflows and event-driven integrations" },
      { name: "oauth", context: "Auth flows and external account connections" },
      { name: "websockets", context: "HiveMind and live product updates" },
      { name: "background jobs", context: "Long-running applies, agents, and automation tasks" },
      { name: "redis queues", context: "Queued work and realtime state" },
      { name: "browser automation", context: "Shipped live form filling across ATS systems" },
      { name: "cli tooling", context: "Developer tools, Invoke, and automation scripts" },
    ],
  },
  {
    name: "application_data",
    summary: "product surfaces and state",
    skills: [
      { name: "react", context: "Frontend applications and dashboards" },
      { name: "next.js", context: "Portfolio and HiveMind" },
      { name: "electron", context: "Shipped desktop app" },
      { name: "express", context: "Node API services" },
      { name: "fastify", context: "Typed Node backends" },
      { name: "fastapi", context: "HiveMind and SeeCare backends" },
      { name: "flask", context: "BrainWave original backend" },
      { name: "prisma", context: "Typed database access" },
      { name: "sqlalchemy", context: "HiveMind market and agent storage" },
      { name: "postgresql", context: "Relational product data" },
      { name: "pgvector", context: "Vector search in Postgres" },
      { name: "supabase", context: "Auth, storage, and Postgres apps" },
      { name: "mongodb", context: "SeeCare data model" },
      { name: "redis", context: "Queues, cache, and realtime state" },
      { name: "chromadb", context: "Vector database experiments" },
    ],
  },
  {
    name: "infra_tooling",
    summary: "shipping and operating",
    skills: [
      { name: "docker", context: "Local and deployable services" },
      { name: "aws", context: "S3, Rekognition, and hosted services" },
      { name: "nginx", context: "Reverse proxy and deployment work" },
      { name: "github actions", context: "CI/CD and checks" },
      { name: "linux", context: "Servers and systems coursework" },
      { name: "n8n", context: "Aonix workflow automation" },
      { name: "vercel", context: "Frontend deployments" },
      { name: "tailwind", context: "Fast, consistent UI implementation" },
      { name: "framer motion", context: "Interactive portfolio animations" },
    ],
  },
];

function SkillItem({
  skill,
  isLast,
}: {
  skill: { name: string; context?: string };
  isLast: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 cursor-default">
        <span className="text-text-secondary">{isLast ? "└──" : "├──"}</span>
        <span
          className={`transition-colors ${
            isHovered ? "text-accent-cyan" : "text-text-primary"
          }`}
        >
          {skill.name}
        </span>
      </div>

      {/* Tooltip */}
      {skill.context && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
          className="pointer-events-none absolute left-8 top-full mt-1 z-10 w-max max-w-[min(18rem,calc(100vw-4rem))] px-3 py-2 bg-surface border border-border rounded text-xs text-text-secondary whitespace-normal shadow-lg"
        >
          <span className="text-accent-cyan">→</span> {skill.context}
        </motion.div>
      )}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="SKILLS" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="terminal-window"
        >
          <div className="terminal-header">&gt; ls skills/</div>
          <div className="terminal-body">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h3 className="text-accent-cyan font-mono mb-2">
                    {category.name}/
                  </h3>
                  <p className="text-xs text-text-secondary mb-3">
                    {category.summary}
                  </p>
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillItem
                        key={skill.name}
                        skill={skill}
                        isLast={skillIndex === category.skills.length - 1}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
