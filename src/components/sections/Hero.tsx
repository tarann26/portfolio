"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "../ui/TerminalWindow";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
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
                  turning caffeine into side projects
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3 text-text-secondary"
                >
                  <p>
                    CS senior at{" "}
                    <span className="text-accent-cyan">Case Western Reserve</span>{" "}
                    with a habit of mass producing side projects.
                  </p>

                  <p>
                    Currently: grinding guitar, and calculating expected value at
                    poker tables.
                  </p>
                </motion.div>

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="pt-6 flex flex-wrap gap-4"
                >
                  <a
                    href="#projects"
                    className="px-4 py-2 border border-border rounded hover:border-accent-cyan hover:text-accent-cyan transition-colors font-mono text-sm"
                  >
                    [view work]
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
            className="h-full"
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
        href="#projects"
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
