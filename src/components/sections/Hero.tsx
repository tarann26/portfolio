"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "../ui/TerminalWindow";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { mergedPRCount } from "@/data/open-source";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Terminal content */}
          <div className="md:col-span-2">
            <TerminalWindow title="cat about.txt">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold font-mono text-text-primary"
                >
                  Taranveer Anand
                  <span className="cursor-blink text-accent-cyan">_</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-accent-cyan font-mono"
                >
                  Software engineer &amp; founder
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3 text-text-secondary"
                >
                  <p>
                    I build desktop applications, AI tools, and the systems
                    behind them. My work spans medical imaging, browser
                    automation, and financial technology.
                  </p>

                  <p>
                    Currently engineering at <span className="text-accent-cyan">Pulse Imaging</span>{" "}
                    and building <span className="text-accent-cyan">Heron</span>,
                    a platform for event-based refund promotions.
                  </p>

                  <p className="text-sm">
                    B.S. Computer Science, FinTech minor · Case Western Reserve University
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm"
                >
                  <div>
                    <p className="font-mono text-xl text-accent-cyan">93%</p>
                    <p className="text-text-secondary text-xs">less time computing CT statistics</p>
                  </div>
                  <div>
                    <p className="font-mono text-xl text-accent-cyan">{mergedPRCount}</p>
                    <p className="text-text-secondary text-xs">merged open-source contributions</p>
                  </div>
                  <div>
                    <p className="font-mono text-xl text-accent-cyan">50</p>
                    <p className="text-text-secondary text-xs">concurrent users on Shipped</p>
                  </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="pt-6 flex flex-wrap gap-4"
                >
                  <a
                    href="#experience"
                    className="px-4 py-2 border border-border rounded hover:border-accent-cyan hover:text-accent-cyan transition-colors font-mono text-sm"
                  >
                    [view experience]
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 border border-border rounded hover:border-accent-cyan hover:text-accent-cyan transition-colors font-mono text-sm"
                  >
                    [contact]
                  </a>
                </motion.div>
              </div>
            </TerminalWindow>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-72 md:h-full"
          >
            <div className="relative w-full h-full rounded-lg border border-border bg-surface overflow-hidden">
              <Image
                src="/face.png"
                alt="Taranveer Anand"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center text-text-secondary hover:text-accent-cyan transition-colors"
      >
        <span className="font-mono text-sm mb-2">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
