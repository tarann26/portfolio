"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";

interface SkillCategory {
  name: string;
  skills: { name: string; context?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "languages",
    skills: [
      { name: "python", context: "FlyteTorch, SeeCare, ML work" },
      { name: "typescript", context: "Shipped, Invoke, portfolio" },
      { name: "java", context: "AI agents, academic projects" },
      { name: "c/c++", context: "DedupCore, systems programming" },
      { name: "rust", context: "Learning, systems projects" },
    ],
  },
  {
    name: "frameworks",
    skills: [
      { name: "react", context: "All frontend projects" },
      { name: "next.js", context: "This portfolio, web apps" },
      { name: "fastapi", context: "SeeCare backend, APIs" },
      { name: "flask", context: "BrainWave original backend" },
      { name: "tailwind", context: "All styling" },
    ],
  },
  {
    name: "ai_ml",
    skills: [
      { name: "prompt engineering", context: "ALL OF THEM" },
      { name: "pytorch", context: "FlyteTorch, SeeCare face embeddings" },
      { name: "opencv", context: "Computer vision" },
      { name: "scikit-learn", context: "Crypto-Tracker ML models" },
    ],
  },
  {
    name: "infra",
    skills: [
      { name: "aws", context: "SeeCare (S3, Rekognition)" },
      { name: "supabase", context: "Shipped, BrainWave" },
      { name: "docker", context: "Containerization" },
      { name: "postgresql", context: "All database work" },
      { name: "redis", context: "FlyteTorch dataset cache, caching" },
    ],
  },
  {
    name: "blockchain",
    skills: [
      { name: "solana/web3", context: "Crypto-Tracker" },
      { name: "ethers.js", context: "EVM interactions" },
    ],
  },
  {
    name: "no_code",
    skills: [
      { name: "n8n", context: "Aionix automation workflows" },
    ],
  },
  {
    name: "apis",
    skills: [
      { name: "rest api design", context: "ALL OF THEM" },
      { name: "api integration", context: "ALL OF THEM" },
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
          className="absolute left-8 top-full mt-1 z-10 px-3 py-2 bg-surface border border-border rounded text-xs text-text-secondary whitespace-nowrap"
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
      <div className="max-w-4xl mx-auto">
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
