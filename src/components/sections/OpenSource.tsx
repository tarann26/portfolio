"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, GitMerge, GitPullRequest } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import {
  type ContributionStatus,
  type OSSProject,
  ossProjects,
  ossVerifiedAt,
  mergedPRCount,
  mergedProjectCount,
  openPRCount,
  upstreamPRSearchUrl,
} from "@/data/open-source";

function ProjectBlock({
  project,
  index,
}: {
  project: OSSProject;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />
      <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-background border border-accent-cyan shadow-[0_0_16px_rgba(6,182,212,0.35)]" />

      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-lg font-semibold text-text-primary hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5"
        >
          {project.name}
          <ExternalLink size={14} />
        </a>
        <span className="font-mono text-xs text-text-secondary border border-border rounded px-2 py-1">
          {project.lang}
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
        {project.blurb}
      </p>

      <ul className="space-y-3">
        {project.contributions.map((c) => (
          <li key={c.pr}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 text-sm"
            >
              {c.status === "merged" ? (
                <GitMerge size={15} className="mt-0.5 shrink-0 text-[#22c55e]" />
              ) : (
                <GitPullRequest size={15} className="mt-0.5 shrink-0 text-accent-amber" />
              )}
              <span>
                <span className="text-text-primary group-hover:text-accent-cyan transition-colors">
                  {c.title}
                </span>
                <span className="ml-2 font-mono text-xs text-text-secondary">
                  #{c.pr}
                </span>
                <span className="block font-mono text-xs text-text-secondary mt-0.5">
                  {c.status === "merged" ? `merged by ${c.mergedBy}` : "open pull request"}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function OpenSource() {
  const [status, setStatus] = useState<ContributionStatus>("merged");
  const visibleProjects = ossProjects
    .map((project) => ({
      ...project,
      contributions: project.contributions.filter((c) => c.status === status),
    }))
    .filter((project) => project.contributions.length > 0);

  return (
    <section id="open-source" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="OPEN SOURCE" />

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
            <span className="text-text-secondary">
              &gt; open-source contributions
            </span>
          </div>

          <div className="terminal-body">
            <div className="grid grid-cols-3 sm:flex gap-x-4 sm:gap-x-10 gap-y-4 mb-4">
              <div>
                <p className="font-mono text-4xl font-semibold text-text-primary">
                  {mergedPRCount}
                </p>
                <p className="font-mono text-xs sm:text-sm text-accent-cyan">merged PRs</p>
              </div>
              <div>
                <p className="font-mono text-4xl font-semibold text-text-primary">
                  {mergedProjectCount}
                </p>
                <p className="font-mono text-xs sm:text-sm text-accent-cyan">projects with merged fixes</p>
              </div>
              <div>
                <p className="font-mono text-4xl font-semibold text-text-primary">
                  {openPRCount}
                </p>
                <p className="font-mono text-xs sm:text-sm text-accent-amber">open PRs</p>
              </div>
            </div>

            <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-2xl">
              Maintainer-reviewed fixes covering Git
              internals, text processing, dependency management, browser
              storage, and developer tools. Contributions include targeted
              regression tests.
            </p>

            <div className="flex flex-wrap gap-2 mb-6" aria-label="Filter contributions by pull request status">
              {(["merged", "open"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={status === value}
                  onClick={() => setStatus(value)}
                  className={`rounded border px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan ${
                    status === value
                      ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                      : "border-border text-text-secondary hover:border-accent-cyan hover:text-accent-cyan"
                  }`}
                >
                  {value === "merged" ? `Merged PRs (${mergedPRCount})` : `Open PRs (${openPRCount})`}
                </button>
              ))}
            </div>

            {status === "open" && (
              <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-2xl">
                Proposed fixes for type safety, source formatting, syntax
                highlighting, thread interruption, and data handling. These PRs
                are open and have not been merged upstream.
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-x-10" aria-live="polite">
              {visibleProjects.map((project, index) => (
                <ProjectBlock
                  key={`${status}-${project.repo}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <a
                href={upstreamPRSearchUrl(status)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <span>[view {status} upstream PRs on GitHub →]</span>
              </a>
              <span className="font-mono text-xs text-text-secondary">
                Verified <time dateTime={ossVerifiedAt}>October 9, 2026</time>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
