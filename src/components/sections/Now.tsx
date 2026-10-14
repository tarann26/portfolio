"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";
import { mergedPRCount, mergedProjectCount, openPRCount } from "@/data/open-source";

interface NowItem {
  text: string;
  highlight?: boolean;
}

const nowItems: NowItem[] = [
  {
    "text": "Engineering at Pulse Imaging: scoring accuracy, performance, and desktop reliability",
    "highlight": true
  },
  {
    "text": "Co-founding Heron: event-based refund promotions, campaign pricing, and lead automation",
    "highlight": true
  },
  {
    "text": `${mergedPRCount} merged open-source PRs across ${mergedProjectCount} projects; ${openPRCount} additional PRs open`
  },
  {
    "text": "Outside work: guitar and poker"
  }
];

export function Now() {
  return (
    <section id="now" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="NOW" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="cat ~/.now">
            <div className="space-y-2">
              <p className="text-text-secondary text-sm mb-4">
                <span className="text-accent-cyan">last updated:</span> oct 14, 2026
                <span className="ml-2 inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </p>

              {nowItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-text-secondary">
                    {i === nowItems.length - 1 ? "└──" : "├──"}
                  </span>
                  <span
                    className={
                      item.highlight ? "text-accent-cyan" : "text-text-secondary"
                    }
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
