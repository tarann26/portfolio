"use client";

import { motion } from "framer-motion";

type ProjectType =
  | "invoke"
  | "seecare"
  | "crypto-tracker"
  | "brainwave"
  | "flytetorch"
  | "dedupcore"
  | "orderbook";

interface ProjectVisualProps {
  type: ProjectType;
  isHovered?: boolean;
}

// Invoke: Central hub sending requests to scattered API endpoints, responses coming back
function InvokeVisual({ isHovered }: { isHovered: boolean }) {
  const outerNodes = [
    // Scattered organic positions
    { x: 18, y: 22 },
    { x: 42, y: 12 },
    { x: 72, y: 8 },
    { x: 88, y: 28 },
    { x: 92, y: 52 },
    { x: 85, y: 78 },
    { x: 62, y: 88 },
    { x: 35, y: 92 },
    { x: 12, y: 75 },
    { x: 8, y: 48 },
    // Inner ring - closer nodes
    { x: 28, y: 38 },
    { x: 68, y: 32 },
    { x: 75, y: 62 },
    { x: 38, y: 72 },
    { x: 22, y: 58 },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Connection lines from center to outer nodes */}
      {outerNodes.map((node, i) => (
        <motion.line
          key={i}
          x1={50}
          y1={50}
          x2={node.x}
          y2={node.y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: isHovered ? 0.5 : 0.25 }}
        />
      ))}

      {/* Outer API nodes */}
      {outerNodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="#141414"
          stroke="#06b6d4"
          strokeWidth="1"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 0.2,
            delay: 0.6 + i * 0.04,
            repeat: Infinity,
            repeatDelay: 2.2,
          }}
        />
      ))}

      {/* Center hub node */}
      <motion.circle
        cx={50}
        cy={50}
        r="6"
        fill="#06b6d4"
        stroke="#06b6d4"
        strokeWidth="1.5"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
      />

      {/* Outward ping from center */}
      <motion.circle
        cx={50}
        cy={50}
        r={6}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 8, opacity: 0 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 1.9,
          ease: "easeOut",
        }}
      />

      {/* Response pings from outer nodes back to center */}
      {outerNodes.map((node, i) => (
        <motion.circle
          key={`response-${i}`}
          r="2"
          fill="#22c55e"
          initial={{ cx: node.x, cy: node.y, opacity: 0 }}
          animate={{
            cx: [node.x, 50],
            cy: [node.y, 50],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.4,
            delay: 0.7 + i * 0.04,
            repeat: Infinity,
            repeatDelay: 2.1,
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  );
}

// SeeCare: Face recognition with memory recall visualization
function SeeCareVisual({ isHovered }: { isHovered: boolean }) {
  const scanLines = [22, 32, 42, 52, 62];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Face outline */}
      <motion.ellipse
        cx="50"
        cy="45"
        rx="20"
        ry="25"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1.5"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 1 : 0.5 }}
      />

      {/* Recognition scan lines */}
      {scanLines.map((y, i) => (
        <motion.line
          key={i}
          x1="28"
          y1={y}
          x2="72"
          y2={y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: isHovered ? [0, 0.8, 0] : 0.2,
            pathLength: 1,
          }}
          transition={{
            opacity: { duration: 1.5, delay: i * 0.15, repeat: isHovered ? Infinity : 0 },
            pathLength: { duration: 0.5, delay: i * 0.1 },
          }}
        />
      ))}

      {/* Eyes */}
      <motion.circle cx="42" cy="42" r="3" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <motion.circle cx="58" cy="42" r="3" fill="none" stroke="#06b6d4" strokeWidth="1" />
      <motion.circle
        cx="42"
        cy="42"
        r="1.5"
        fill="#06b6d4"
        animate={{ opacity: isHovered ? 1 : 0.6 }}
      />
      <motion.circle
        cx="58"
        cy="42"
        r="1.5"
        fill="#06b6d4"
        animate={{ opacity: isHovered ? 1 : 0.6 }}
      />

      {/* Recognition corners (camera focus style) */}
      <motion.path
        d="M 26 18 L 26 26 M 26 18 L 34 18"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: isHovered ? 1 : 0.4 }}
      />
      <motion.path
        d="M 74 18 L 74 26 M 74 18 L 66 18"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: isHovered ? 1 : 0.4 }}
      />
      <motion.path
        d="M 26 72 L 26 64 M 26 72 L 34 72"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: isHovered ? 1 : 0.4 }}
      />
      <motion.path
        d="M 74 72 L 74 64 M 74 72 L 66 72"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: isHovered ? 1 : 0.4 }}
      />

      {/* Memory connection - name tag appearing */}
      <motion.g
        initial={{ opacity: 0, y: 3 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 3,
        }}
        transition={{ duration: 0.3 }}
      >
        <rect x="30" y="76" width="40" height="12" rx="2" fill="#141414" stroke="#22c55e" strokeWidth="1" />
        <text x="50" y="85" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">
          RECOGNIZED
        </text>
      </motion.g>

      {/* Pulse effect on recognition */}
      {isHovered && (
        <motion.ellipse
          cx="50"
          cy="45"
          rx="20"
          ry="25"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </svg>
  );
}

// Crypto-Tracker: Flowing candlesticks
function CryptoTrackerVisual({ isHovered }: { isHovered: boolean }) {
  const candles = [
    { x: 15, high: 20, low: 60, open: 30, close: 50, up: false },
    { x: 30, high: 25, low: 55, open: 45, close: 35, up: true },
    { x: 45, high: 15, low: 50, open: 20, close: 40, up: false },
    { x: 60, high: 30, low: 65, open: 55, close: 40, up: true },
    { x: 75, high: 20, low: 55, open: 25, close: 45, up: false },
    { x: 90, high: 35, low: 70, open: 60, close: 45, up: true },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Grid lines */}
      {[25, 50, 75].map((y) => (
        <line
          key={y}
          x1="5"
          y1={y}
          x2="95"
          y2={y}
          stroke="#262626"
          strokeWidth="0.5"
        />
      ))}
      {/* Candlesticks */}
      {candles.map((candle, i) => (
        <motion.g key={i}>
          {/* Wick */}
          <motion.line
            x1={candle.x}
            y1={candle.high}
            x2={candle.x}
            y2={candle.low}
            stroke={candle.up ? "#22c55e" : "#ef4444"}
            strokeWidth="1"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.1 }}
          />
          {/* Body */}
          <motion.rect
            x={candle.x - 4}
            y={Math.min(candle.open, candle.close)}
            width="8"
            height={Math.abs(candle.close - candle.open)}
            fill={candle.up ? "#22c55e" : "#ef4444"}
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              y: isHovered ? Math.min(candle.open, candle.close) - 5 : Math.min(candle.open, candle.close),
            }}
            transition={{
              scaleY: { delay: i * 0.1 },
              y: { duration: 1, repeat: isHovered ? Infinity : 0, repeatType: "reverse" },
            }}
          />
        </motion.g>
      ))}
      {/* Trend line */}
      <motion.path
        d="M 15 45 L 30 40 L 45 35 L 60 50 L 75 40 L 90 55"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0.7 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
}

// BrainWave: Collaborative learning hub (swapped from Invoke)
function BrainWaveVisual({ isHovered }: { isHovered: boolean }) {
  const learners = [
    { x: 50, y: 50 },
    { x: 25, y: 30 },
    { x: 75, y: 30 },
    { x: 20, y: 70 },
    { x: 80, y: 70 },
    { x: 50, y: 85 },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [3, 5], [4, 5],
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Connections between learners */}
      {connections.map(([from, to], i) => (
        <motion.line
          key={i}
          x1={learners[from].x}
          y1={learners[from].y}
          x2={learners[to].x}
          y2={learners[to].y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{
            pathLength: 1,
            opacity: isHovered ? 0.8 : 0.3,
          }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}
      {/* Learner nodes */}
      {learners.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={i === 0 ? 6 : 4}
          fill={i === 0 ? "#06b6d4" : "#141414"}
          stroke="#06b6d4"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 1,
          }}
        />
      ))}
      {/* Broadcast pulse from center (shared knowledge) */}
      <motion.circle
        cx={50}
        cy={50}
        r={10}
        fill="none"
        stroke="#06b6d4"
        strokeWidth="0.5"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: isHovered ? [1, 3, 3] : 1,
          opacity: isHovered ? [0.5, 0, 0] : 0.2,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
        }}
      />
    </svg>
  );
}

function FlyteTorchVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="18" fill="none" stroke="#6366f1" strokeWidth="2" opacity={isHovered ? 1 : 0.7} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 34 * Math.cos(rad);
        const y = 50 + 34 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1="50" y1="50" x2={x} y2={y} stroke="#6366f1" strokeWidth="1" opacity="0.4" />
            <circle cx={x} cy={y} r="5" fill="#6366f1" opacity={isHovered ? 0.9 : 0.5} />
          </g>
        );
      })}
      <text x="50" y="54" textAnchor="middle" fontSize="8" fill="#a5b4fc">torch</text>
    </svg>
  );
}

function DedupCoreVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={10 + i * 22}
          y={30}
          width="16"
          height="40"
          rx="2"
          fill="#10b981"
          opacity={isHovered ? 0.8 - i * 0.1 : 0.4}
        />
      ))}
      <line x1="10" y1="80" x2="90" y2="80" stroke="#10b981" strokeWidth="1" opacity="0.5" />
      <text x="50" y="95" textAnchor="middle" fontSize="7" fill="#6ee7b7">dedup</text>
    </svg>
  );
}

function OrderBookVisual({ isHovered }: { isHovered: boolean }) {
  const bids = [48, 38, 28, 18];
  const asks = [48, 38, 28, 18];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {bids.map((w, i) => (
        <rect key={`bid-${i}`} x={50 - w} y={12 + i * 14} width={w} height="10" rx="1" fill="#22c55e" opacity={isHovered ? 0.7 : 0.4} />
      ))}
      {asks.map((w, i) => (
        <rect key={`ask-${i}`} x={50} y={12 + i * 14} width={w} height="10" rx="1" fill="#ef4444" opacity={isHovered ? 0.7 : 0.4} />
      ))}
      <line x1="50" y1="8" x2="50" y2="76" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
      <text x="50" y="90" textAnchor="middle" fontSize="7" fill="#86efac">order book</text>
    </svg>
  );
}

export function ProjectVisual({ type, isHovered = false }: ProjectVisualProps) {
  const visuals: Record<ProjectType, React.ReactNode> = {
    invoke: <InvokeVisual isHovered={isHovered} />,
    seecare: <SeeCareVisual isHovered={isHovered} />,
    "crypto-tracker": <CryptoTrackerVisual isHovered={isHovered} />,
    brainwave: <BrainWaveVisual isHovered={isHovered} />,
    flytetorch: <FlyteTorchVisual isHovered={isHovered} />,
    dedupcore: <DedupCoreVisual isHovered={isHovered} />,
    orderbook: <OrderBookVisual isHovered={isHovered} />,
  };

  return (
    <div className="w-full aspect-square p-4">
      {visuals[type]}
    </div>
  );
}
