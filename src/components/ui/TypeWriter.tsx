"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TypeWriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
  showCursor = true,
}: TypeWriterProps) {
  const [started, setStarted] = useState(false);
  const count = useMotionValue(0);
  const displayText = useTransform(count, (latest) =>
    text.slice(0, Math.round(latest))
  );
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const controls = animate(count, text.length, {
      type: "tween",
      duration: (text.length * speed) / 1000,
      ease: "linear",
      onUpdate: (latest) => {
        setCurrentText(text.slice(0, Math.round(latest)));
      },
      onComplete: () => {
        onComplete?.();
      },
    });

    return () => controls.stop();
  }, [started, text, speed, count, onComplete]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <span className="cursor-blink text-accent-cyan">_</span>
      )}
    </span>
  );
}

interface TypeWriterLinesProps {
  lines: { text: string; className?: string }[];
  delay?: number;
  speed?: number;
  lineDelay?: number;
  onComplete?: () => void;
}

export function TypeWriterLines({
  lines,
  delay = 0,
  speed = 50,
  lineDelay = 200,
  onComplete,
}: TypeWriterLinesProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const handleLineComplete = () => {
    setCompletedLines((prev) => [...prev, lines[currentLine].text]);
    if (currentLine < lines.length - 1) {
      setTimeout(() => setCurrentLine((prev) => prev + 1), lineDelay);
    } else {
      onComplete?.();
    }
  };

  if (!started) return null;

  return (
    <div className="space-y-1">
      {completedLines.map((line, i) => (
        <div key={i} className={lines[i]?.className || ""}>
          {line}
        </div>
      ))}
      {currentLine < lines.length && lines[currentLine] && (
        <TypeWriter
          text={lines[currentLine].text}
          speed={speed}
          className={lines[currentLine].className || ""}
          onComplete={handleLineComplete}
          showCursor={currentLine === lines.length - 1}
        />
      )}
    </div>
  );
}
