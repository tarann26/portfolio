"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { ShippedVisual } from "../visuals/ShippedVisual";

const bullets = [
  "one-click apply across every major ATS",
  "auto-generates a tailored project per JD",
  "tracks every application end-to-end",
  "chrome extension for on-the-fly applies",
];

export function Shipped() {
  return (
    <section id="shipped" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="CURRENTLY BUILDING" />

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
            <span className="text-text-secondary">$ cat ~/.shipped</span>
          </div>

          <div className="terminal-body">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Copy column */}
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-mono text-3xl font-semibold text-text-primary">
                    shipped_
                  </h3>
                  <span className="font-mono text-xs text-accent-amber">
                    // live · 2026
                  </span>
                </div>

                <div className="h-px bg-border w-full mb-4" />

                <p className="font-mono text-lg text-accent-cyan mb-4">
                  Apply to jobs while you sleep.
                </p>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  A desktop app that reads a job posting, generates a tailored
                  portfolio project for it, and then applies on your behalf
                  &mdash; across workday, greenhouse, lever, and the rest of
                  the ATS zoo.
                </p>

                <ul className="space-y-2 mb-8">
                  {bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-2 text-sm text-text-secondary font-mono"
                    >
                      <span className="text-accent-cyan">
                        {i === bullets.length - 1 ? "└──" : "├──"}
                      </span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="https://shipped.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:text-accent-amber transition-colors"
                >
                  <span>[try shipped →]</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Visual column */}
              <div className="w-full aspect-square max-w-md mx-auto">
                <ShippedVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
