"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TerminalWindow({
  title,
  children,
  className = "",
  delay = 0,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`terminal-window ${className}`}
    >
      <div className="terminal-header flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>
        <span className="text-text-secondary">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </motion.div>
  );
}
