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
    "name": "languages",
    "summary": "application and systems programming",
    "skills": [
      {
        "name": "Python",
        "context": "Pulse Imaging, HiveMind, and SeeCare"
      },
      {
        "name": "TypeScript / JavaScript",
        "context": "Electron applications, React interfaces, and API tooling"
      },
      {
        "name": "C / C++",
        "context": "libgit2 contributions and systems projects"
      },
      {
        "name": "Java",
        "context": "JavaParser and PMD contributions"
      },
      {
        "name": "SQL",
        "context": "Data migration, reporting, and relational storage"
      }
    ]
  },
  {
    "name": "applications",
    "summary": "interfaces, APIs, and automation",
    "skills": [
      {
        "name": "React / Next.js",
        "context": "Web applications and product interfaces"
      },
      {
        "name": "Electron",
        "context": "Shipped and Pulse Imaging desktop applications"
      },
      {
        "name": "FastAPI",
        "context": "Python services for imaging and simulation"
      },
      {
        "name": "Browser automation",
        "context": "Application workflows across ATS platforms"
      },
      {
        "name": "WebSockets / webhooks",
        "context": "Live updates and external integrations"
      }
    ]
  },
  {
    "name": "ai_and_data",
    "summary": "models, agents, and product state",
    "skills": [
      {
        "name": "LLM orchestration",
        "context": "HiveMind, BrainWave, and Invoke"
      },
      {
        "name": "LangChain / LangGraph",
        "context": "Agent research and workflow orchestration"
      },
      {
        "name": "PyTorch / NumPy",
        "context": "ML training and numerical computation"
      },
      {
        "name": "PostgreSQL / MongoDB",
        "context": "Relational and document storage"
      },
      {
        "name": "Redis",
        "context": "Queues, caching, and application state"
      }
    ]
  },
  {
    "name": "engineering",
    "summary": "delivery, correctness, and reliability",
    "skills": [
      {
        "name": "Docker / Linux",
        "context": "Local services and deployment workflows"
      },
      {
        "name": "AWS / Azure",
        "context": "Cloud integrations and hosted services"
      },
      {
        "name": "Regression testing / CI",
        "context": "Scoring correctness, packaged releases, and open-source bug fixes"
      },
      {
        "name": "Performance profiling",
        "context": "CT statistics reduced from 2,994 ms to 199 ms"
      },
      {
        "name": "API integrations / n8n",
        "context": "Customer workflows and automation at Aionix"
      }
    ]
  }
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
