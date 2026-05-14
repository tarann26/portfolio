"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  scope: string;
  link?: string;
  points: string[];
  tags: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Shipped.one",
    role: "Founder, Product Engineer",
    date: "Mar 2026 - Present",
    scope: "AI desktop job application platform",
    link: "https://shipped.one",
    points: [
      "Built a desktop product that discovers matched roles, tailors resumes, generates portfolio projects, and applies across ATS systems through live browser automation.",
      "Scaled to 50 concurrent users with application tracking, inbox signal detection, billing controls, and real-time application progress.",
    ],
    tags: ["electron", "typescript", "postgres", "redis", "browser agents"],
  },
  {
    company: "Aonix.dev",
    role: "Founder",
    date: "Jun 2025 - Aug 2025",
    scope: "AI automation systems for U.S. companies",
    points: [
      "Built n8n workflows, custom chatbots, voice AI agents, and CRM integrations to streamline engagement and lead generation.",
      "Connected webhooks, APIs, CRMs, email, Instagram, and LinkedIn into multi-step outreach and follow-up systems.",
    ],
    tags: ["n8n", "webhooks", "apis", "crm", "voice ai"],
  },
  {
    company: "Guru Amardass Private Limited",
    role: "Database Developer Intern",
    date: "Sep 2022 - Dec 2022",
    scope: "ERP data migration and reporting",
    points: [
      "Developed Python scripts for data migration and SQL query optimization, reducing processing time by 40%.",
      "Built data pipelines and dashboards that helped stakeholders debug ERP issues and interpret operational insights.",
    ],
    tags: ["python", "sql", "data pipelines", "dashboards"],
  },
];

function ExperienceVisual() {
  const inputs = [
    { x: 14, y: 24, label: "ideas", color: "#06b6d4", entryY: 42 },
    { x: 14, y: 50, label: "ops", color: "#a1a1aa", entryY: 50 },
    { x: 14, y: 76, label: "data", color: "#f59e0b", entryY: 58 },
  ];

  const outputs = [
    { x: 86, y: 24, label: "users", color: "#22c55e", exitY: 42 },
    { x: 86, y: 50, label: "systems", color: "#06b6d4", exitY: 50 },
    { x: 86, y: 76, label: "insights", color: "#f59e0b", exitY: 58 },
  ];

  const streams = [
    { input: inputs[0], output: outputs[0] },
    { input: inputs[1], output: outputs[1] },
    { input: inputs[2], output: outputs[2] },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="experience-flow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Completed input and output routes */}
      {streams.map(({ input, output }, i) => (
        <motion.g key={`${input.label}-${output.label}`}>
          <motion.path
            d={`M ${input.x + 5} ${input.y} C 24 ${input.y}, 25 ${input.entryY}, 31 ${input.entryY}`}
            fill="none"
            stroke={input.color}
            strokeWidth="0.75"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: [0.25, 0.7, 0.35] }}
            transition={{
              duration: 1.6,
              delay: i * 0.12,
              repeat: Infinity,
              repeatDelay: 2.2,
            }}
          />
          <motion.path
            d={`M 69 ${output.exitY} C 75 ${output.exitY}, 76 ${output.y}, ${output.x - 5} ${output.y}`}
            fill="none"
            stroke={output.color}
            strokeWidth="0.75"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: [0.25, 0.7, 0.35] }}
            transition={{
              duration: 1.6,
              delay: 0.35 + i * 0.12,
              repeat: Infinity,
              repeatDelay: 2.2,
            }}
          />
          <motion.circle
            r="1.45"
            fill={input.color}
            initial={{ cx: input.x + 5, cy: input.y, opacity: 0 }}
            animate={{
              cx: [input.x + 5, 31, 50, 69, output.x - 5],
              cy: [input.y, input.entryY, 50, output.exitY, output.y],
              opacity: [0, 1, 0.4, 1, 0],
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.45,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      ))}

      {/* Inbound and outbound endpoints */}
      {[...inputs, ...outputs].map((node, i) => (
        <motion.g key={node.label}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="4.8"
            fill="#141414"
            stroke={node.color}
            strokeWidth="1.15"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              repeat: Infinity,
              repeatDelay: 2.4,
            }}
          />
          <text
            x={node.x}
            y={node.y + 10}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="3"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Central terminal */}
      <motion.rect
        x="31"
        y="34"
        width="38"
        height="31"
        rx="2"
        fill="#141414"
        stroke="#06b6d4"
        strokeWidth="1"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <rect x="31" y="34" width="38" height="7" rx="2" fill="#0a0a0a" />
      <circle cx="35.5" cy="37.5" r="1.1" fill="#ff5f56" />
      <circle cx="40.5" cy="37.5" r="1.1" fill="#ffbd2e" />
      <circle cx="45.5" cy="37.5" r="1.1" fill="#27ca40" />

      {/* Processing ports */}
      {[42, 50, 58].map((y, i) => (
        <g key={y}>
          <circle cx="31" cy={y} r="1" fill={inputs[i].color} />
          <circle cx="69" cy={y} r="1" fill={outputs[i].color} />
        </g>
      ))}

      <text
        x="50"
        y="49"
        textAnchor="middle"
        fill="#06b6d4"
        fontSize="4.5"
        fontFamily="monospace"
      >
        work.log
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="2.9"
        fontFamily="monospace"
      >
        build + connect
      </text>

      {/* Internal progress traces */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="39"
          y={60 + i * 2}
          width={7 + i * 4}
          height="0.8"
          rx="0.4"
          fill={i === 0 ? "#06b6d4" : i === 1 ? "#22c55e" : "#f59e0b"}
          initial={{ scaleX: 0.3, opacity: 0.35 }}
          animate={{ scaleX: [0.3, 1, 0.6], opacity: [0.35, 0.9, 0.45] }}
          transition={{
            duration: 1.4,
            delay: i * 0.18,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          style={{ transformOrigin: "39px center" }}
        />
      ))}
    </svg>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />
      <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-background border border-accent-cyan shadow-[0_0_16px_rgba(6,182,212,0.35)]" />

      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex items-center gap-2">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-lg font-semibold text-text-primary hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5"
              >
                {item.company}
                <ExternalLink size={14} />
              </a>
            ) : (
              <h3 className="font-mono text-lg font-semibold text-text-primary">
                {item.company}
              </h3>
            )}
          </div>
          <p className="font-mono text-sm text-accent-cyan">{item.role}</p>
        </div>
        <span className="font-mono text-xs text-text-secondary border border-border rounded px-2 py-1">
          {item.date}
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-4">{item.scope}</p>

      <ul className="space-y-2 mb-4">
        {item.points.map((point, i) => (
          <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent-cyan font-mono">
              {i === item.points.length - 1 ? "└──" : "├──"}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 bg-background border border-border rounded text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="WORK EXPERIENCE" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="terminal-window"
        >
          <div className="terminal-header flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="text-text-secondary">&gt; cat work.log</span>
          </div>

          <div className="terminal-body">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-center">
              <div>
                {experience.map((item, index) => (
                  <ExperienceCard key={item.company} item={item} index={index} />
                ))}
              </div>

              <div className="w-full aspect-square max-w-md mx-auto">
                <ExperienceVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
