"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitMerge } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

interface Contribution {
  pr: number;
  title: string;
  mergedBy: string;
  url: string;
}

interface OSSProject {
  name: string;
  repo: string;
  repoUrl: string;
  lang: string;
  blurb: string;
  contributions: Contribution[];
}

const projects: OSSProject[] = [
  {
    name: "libgit2",
    repo: "libgit2/libgit2",
    repoUrl: "https://github.com/libgit2/libgit2",
    lang: "C",
    blurb:
      "The portable C library behind Git operations in GitHub, GitLab, and countless developer tools.",
    contributions: [
      {
        pr: 7332,
        title: "Detect file/directory conflicts at any index position",
        mergedBy: "Edward Thomson · lead maintainer",
        url: "https://github.com/libgit2/libgit2/pull/7332",
      },
      {
        pr: 7331,
        title: "Parse diffs that add an empty file",
        mergedBy: "Edward Thomson · lead maintainer",
        url: "https://github.com/libgit2/libgit2/pull/7331",
      },
    ],
  },
  {
    name: "NLTK",
    repo: "nltk/nltk",
    repoUrl: "https://github.com/nltk/nltk",
    lang: "Python",
    blurb:
      "One of the most widely used natural-language-processing libraries in Python.",
    contributions: [
      {
        pr: 3728,
        title: "Punkt splits sentences ending in Unicode quotes",
        mergedBy: "ekaf · maintainer",
        url: "https://github.com/nltk/nltk/pull/3728",
      },
      {
        pr: 3724,
        title: "TweetTokenizer preserves repeated non-Latin letters",
        mergedBy: "Steven Bird · lead maintainer",
        url: "https://github.com/nltk/nltk/pull/3724",
      },
      {
        pr: 3723,
        title: "Detokenizer fixes mid-string period spacing",
        mergedBy: "Steven Bird · lead maintainer",
        url: "https://github.com/nltk/nltk/pull/3723",
      },
      {
        pr: 3725,
        title: "Path-security crash fix (tempfile guard)",
        mergedBy: "ekaf · maintainer",
        url: "https://github.com/nltk/nltk/pull/3725",
      },
    ],
  },
  {
    name: "TanStack Table",
    repo: "TanStack/table",
    repoUrl: "https://github.com/TanStack/table",
    lang: "TypeScript",
    blurb:
      "Headless datagrid library used across React, Vue, Solid, Svelte, and Angular.",
    contributions: [
      {
        pr: 6523,
        title: "median aggregation skips non-numeric values",
        mergedBy: "Kevin Vandy · maintainer",
        url: "https://github.com/TanStack/table/pull/6523",
      },
    ],
  },
  {
    name: "pwntools",
    repo: "Gallopsled/pwntools",
    repoUrl: "https://github.com/Gallopsled/pwntools",
    lang: "Python",
    blurb: "The de-facto CTF and exploit-development framework in Python.",
    contributions: [
      {
        pr: 2762,
        title: "Fix amd64 SigreturnFrame offset in the SROP builder",
        mergedBy: "Arusekk · maintainer",
        url: "https://github.com/Gallopsled/pwntools/pull/2762",
      },
    ],
  },{
  "name": "Poetry",
  "repo": "python-poetry/poetry",
  "repoUrl": "https://github.com/python-poetry/poetry",
  "lang": "Python",
  "blurb": "Python dependency management and packaging.",
  "contributions": [
    {
      "pr": 11003,
      "title": "Select the environment-compatible version from duplicate lock entries",
      "mergedBy": "radoering",
      "url": "https://github.com/python-poetry/poetry/pull/11003"
    }
  ]
},
{
  "name": "JavaParser",
  "repo": "javaparser/javaparser",
  "repoUrl": "https://github.com/javaparser/javaparser",
  "lang": "Java",
  "blurb": "Java source parsing and code transformation.",
  "contributions": [
    {
      "pr": 5086,
      "title": "Generate primitive-type keywords independently of system locale",
      "mergedBy": "jlerbsc",
      "url": "https://github.com/javaparser/javaparser/pull/5086"
    }
  ]
},
{
  "name": "PMD",
  "repo": "pmd/pmd",
  "repoUrl": "https://github.com/pmd/pmd",
  "lang": "Java",
  "blurb": "Static analysis for Java, Apex, and other languages.",
  "contributions": [
    {
      "pr": 6955,
      "title": "Report the correct location for an Apex test rule violation",
      "mergedBy": "UncleOwen",
      "url": "https://github.com/pmd/pmd/pull/6955"
    }
  ]
},
{
  "name": "Dexie.js",
  "repo": "dexie/Dexie.js",
  "repoUrl": "https://github.com/dexie/Dexie.js",
  "lang": "TypeScript",
  "blurb": "An IndexedDB wrapper for browser applications.",
  "contributions": [
    {
      "pr": 2325,
      "title": "Handle an index named constructor without crashing",
      "mergedBy": "dfahlander",
      "url": "https://github.com/dexie/Dexie.js/pull/2325"
    }
  ]
},
{
  "name": "xterm.js",
  "repo": "xtermjs/xterm.js",
  "repoUrl": "https://github.com/xtermjs/xterm.js",
  "lang": "TypeScript",
  "blurb": "Terminal emulation for browser applications.",
  "contributions": [
    {
      "pr": 6081,
      "title": "Restore viewport scrolling after clearing scrollback",
      "mergedBy": "Tyriar",
      "url": "https://github.com/xtermjs/xterm.js/pull/6081"
    }
  ]
},

];

const totalMerged = projects.reduce(
  (sum, project) => sum + project.contributions.length,
  0,
);

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
              <GitMerge
                size={15}
                className="mt-0.5 shrink-0 text-[#22c55e]"
              />
              <span>
                <span className="text-text-primary group-hover:text-accent-cyan transition-colors">
                  {c.title}
                </span>
                <span className="ml-2 font-mono text-xs text-text-secondary">
                  #{c.pr}
                </span>
                <span className="block font-mono text-xs text-text-secondary mt-0.5">
                  merged by {c.mergedBy}
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
              &gt; gh pr list --author @me --state merged
            </span>
          </div>

          <div className="terminal-body">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-4xl font-semibold text-text-primary">
                {totalMerged}
              </span>
              <span className="font-mono text-lg text-accent-cyan">
                pull requests merged
              </span>
            </div>

            <p className="text-text-secondary text-sm mb-8 leading-relaxed max-w-2xl">
              Maintainer-reviewed fixes across nine projects, covering Git
              internals, text processing, dependency management, browser
              storage, and developer tools. Contributions include targeted
              regression tests.
            </p>

            <div className="grid md:grid-cols-2 gap-x-10">
              {projects.map((project, index) => (
                <ProjectBlock
                  key={project.repo}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-border">
              <a
                href="https://github.com/search?q=is%3Apr+author%3Atarann26+is%3Amerged&type=pullrequests"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <span>[view all merged pull requests on github →]</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
