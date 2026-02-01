"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="ABOUT" />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Terminal content */}
          <div className="md:col-span-2">
            <TerminalWindow title="cat about.txt">
              <div className="space-y-4 text-text-secondary">
                <p>
                  CS senior at{" "}
                  <span className="text-accent-cyan">Case Western Reserve</span>{" "}
                  with a habit of mass-producing side projects.
                </p>

                <p>
                  When I&apos;m not fixing loss functions or chasing convergence in an ML model, I&apos;m calculating the expected value of the next poker hand.
                </p>

                <p>
                  Most of my time disappears into code, poker tables, and a guitar I refuse to quit on.
                </p>

                <div className="pt-4 border-t border-border mt-6">
                  <p className="font-mono text-sm">
                    <span className="text-text-secondary">Previously:</span>{" "}
                    <span className="text-accent-cyan">Aionix.dev</span>{" "}
                    <span className="text-text-secondary">(founder)</span>,{" "}
                    <span className="text-accent-cyan">Guru Amardass</span>{" "}
                    <span className="text-text-secondary">
                      (data engineering)
                    </span>
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </div>

          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 rounded-lg border border-border bg-surface flex items-center justify-center">
              {/* Placeholder for illustrated avatar */}
              <div className="text-center p-4">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-accent-cyan/50 flex items-center justify-center mb-2">
                  <span className="font-mono text-3xl text-accent-cyan">TA</span>
                </div>
                <span className="text-xs text-text-secondary font-mono">
                  // avatar coming soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
