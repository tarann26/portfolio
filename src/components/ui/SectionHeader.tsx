"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="font-mono text-2xl font-semibold text-text-primary mb-2">
        {title}
      </h2>
      <div className="h-px bg-border w-full" />
    </motion.div>
  );
}
