"use client";

import { motion } from "framer-motion";

interface ShippedVisualProps {
  isHovered?: boolean;
}

// Shipped: JD on the left → agent node → application submitted on the right
export function ShippedVisual({ isHovered = false }: ShippedVisualProps) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Left: Job posting document */}
      <motion.rect
        x={6}
        y={22}
        width={22}
        height={30}
        rx={1.5}
        fill="#141414"
        stroke="#06b6d4"
        strokeWidth="1"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 6 }}
        transition={{ duration: 0.4 }}
      />
      {/* Doc lines */}
      {[27, 31, 35, 39, 43, 47].map((y, i) => (
        <motion.line
          key={`line-${i}`}
          x1={9}
          y1={y}
          x2={i % 2 === 0 ? 25 : 22}
          y2={y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        />
      ))}
      <text
        x={17}
        y={58}
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="3.5"
        fontFamily="monospace"
      >
        job_post
      </text>

      {/* Arrow: doc → agent */}
      <motion.line
        x1={30}
        y1={37}
        x2={42}
        y2={50}
        stroke="#f59e0b"
        strokeWidth="1"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      <motion.polygon
        points="40,48 43,51 40,52"
        fill="#f59e0b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      />

      {/* Center: agent node */}
      <motion.circle
        cx={50}
        cy={50}
        r={8}
        fill="#06b6d4"
        stroke="#06b6d4"
        strokeWidth="1"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
      <text
        x={50}
        y={52}
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize="4"
        fontFamily="monospace"
        fontWeight="bold"
      >
        agent
      </text>

      {/* Outward pulse from agent */}
      <motion.circle
        cx={50}
        cy={50}
        r={8}
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: isHovered ? 3 : 2, opacity: 0 }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      />

      {/* Arrow: agent → submitted */}
      <motion.line
        x1={58}
        y1={50}
        x2={70}
        y2={37}
        stroke="#f59e0b"
        strokeWidth="1"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      />
      <motion.polygon
        points="68,38 72,36 70,40"
        fill="#f59e0b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      />

      {/* Right: submitted checkmark in circle */}
      <motion.circle
        cx={80}
        cy={35}
        r={11}
        fill="#141414"
        stroke="#22c55e"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />
      <motion.path
        d="M 75 35 L 79 39 L 85 31"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.7, duration: 0.4 }}
      />
      <text
        x={80}
        y={54}
        textAnchor="middle"
        fill="#22c55e"
        fontSize="3.5"
        fontFamily="monospace"
      >
        submitted
      </text>

      {/* ATS badges below */}
      {["workday", "greenhouse", "lever"].map((ats, i) => (
        <motion.g key={ats}>
          <rect
            x={10 + i * 28}
            y={75}
            width={24}
            height={8}
            rx={1}
            fill="#141414"
            stroke="#262626"
            strokeWidth="0.5"
          />
          <motion.text
            x={22 + i * 28}
            y={80.5}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="3.5"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ delay: 1.8 + i * 0.1 }}
          >
            {ats}
          </motion.text>
        </motion.g>
      ))}
    </svg>
  );
}
