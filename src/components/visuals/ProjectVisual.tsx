"use client";

import { motion } from "framer-motion";

type ProjectType =
  | "invoke"
  | "seecare"
  | "crypto-tracker"
  | "brainwave"
  | "flyte"
  | "cairn"
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

// Flyte: Central orchestrator with ring of worker nodes, animated gradient sync
function FlyteVisual({ isHovered }: { isHovered: boolean }) {
  // 6 worker nodes evenly spaced on a circle of radius 30 around (50, 50)
  const workers = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + 30 * Math.cos(angle),
      y: 50 + 30 * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Ring-connection lines between adjacent workers (gradient sync) */}
      {workers.map((w, i) => {
        const next = workers[(i + 1) % workers.length];
        return (
          <motion.line
            key={`ring-${i}`}
            x1={w.x}
            y1={w.y}
            x2={next.x}
            y2={next.y}
            stroke="#06b6d4"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
          />
        );
      })}

      {/* Spoke lines from orchestrator to each worker */}
      {workers.map((w, i) => (
        <motion.line
          key={`spoke-${i}`}
          x1={50}
          y1={50}
          x2={w.x}
          y2={w.y}
          stroke="#06b6d4"
          strokeWidth="0.5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.6 : 0.35 }}
        />
      ))}

      {/* All-reduce pulse: packet travels around the ring */}
      {workers.map((w, i) => {
        const next = workers[(i + 1) % workers.length];
        return (
          <motion.circle
            key={`packet-${i}`}
            r="1.5"
            fill="#f59e0b"
            initial={{ cx: w.x, cy: w.y, opacity: 0 }}
            animate={{
              cx: [w.x, next.x],
              cy: [w.y, next.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Worker nodes */}
      {workers.map((w, i) => (
        <motion.circle
          key={`worker-${i}`}
          cx={w.x}
          cy={w.y}
          r="4"
          fill="#141414"
          stroke="#06b6d4"
          strokeWidth="1.2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 0.3,
            delay: i * 0.08,
            repeat: Infinity,
            repeatDelay: 2.4,
          }}
        />
      ))}

      {/* Central orchestrator */}
      <motion.rect
        x={42}
        y={42}
        width={16}
        height={16}
        rx={2}
        fill="#06b6d4"
        stroke="#06b6d4"
        strokeWidth="1"
        animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
      <text
        x={50}
        y={53}
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize="5"
        fontFamily="monospace"
        fontWeight="bold"
      >
        K8s
      </text>
    </svg>
  );
}

// Cairn: Stream of raw blocks on the left collapsing into deduplicated set on the right
function CairnVisual({ isHovered }: { isHovered: boolean }) {
  // 6 raw blocks on the left, some duplicated (same color = same content)
  const rawBlocks = [
    { y: 15, color: "#06b6d4" },
    { y: 27, color: "#f59e0b" },
    { y: 39, color: "#06b6d4" }, // dup of first
    { y: 51, color: "#22c55e" },
    { y: 63, color: "#f59e0b" }, // dup of second
    { y: 75, color: "#06b6d4" }, // dup of first
  ];

  // 3 unique blocks on the right (one per distinct color)
  const dedupBlocks = [
    { y: 27, color: "#06b6d4" },
    { y: 45, color: "#f59e0b" },
    { y: 63, color: "#22c55e" },
  ];

  // Mapping from raw index to target dedup block index
  const mapping = [0, 1, 0, 2, 1, 0];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Raw blocks column (left) */}
      {rawBlocks.map((b, i) => (
        <motion.rect
          key={`raw-${i}`}
          x={10}
          y={b.y}
          width={14}
          height={10}
          rx={1}
          fill={b.color}
          opacity={0.85}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 10, opacity: 0.85 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        />
      ))}

      {/* Flow arrows from raw to dedup */}
      {rawBlocks.map((b, i) => {
        const target = dedupBlocks[mapping[i]];
        return (
          <motion.line
            key={`flow-${i}`}
            x1={24}
            y1={b.y + 5}
            x2={70}
            y2={target.y + 5}
            stroke={b.color}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: isHovered ? 0.6 : 0.35,
              pathLength: 1,
            }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
          />
        );
      })}

      {/* Dedup blocks column (right) */}
      {dedupBlocks.map((b, i) => (
        <motion.g key={`dedup-${i}`}>
          <motion.rect
            x={70}
            y={b.y}
            width={14}
            height={10}
            rx={1}
            fill={b.color}
            opacity={0.95}
            stroke="#fafafa"
            strokeWidth="0.3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 70, opacity: 0.95 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          />
          {/* Hash label above each dedup block */}
          <motion.text
            x={77}
            y={b.y - 2}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="3"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0.5 }}
            transition={{ delay: 0.9 }}
          >
            sha256
          </motion.text>
        </motion.g>
      ))}

      {/* Column labels */}
      <text
        x={17}
        y={92}
        textAnchor="middle"
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        raw
      </text>
      <text
        x={77}
        y={92}
        textAnchor="middle"
        fill="#22c55e"
        fontSize="4"
        fontFamily="monospace"
      >
        dedup
      </text>

      {/* Compression ratio indicator */}
      <motion.text
        x={50}
        y={10}
        textAnchor="middle"
        fill="#06b6d4"
        fontSize="5"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
      >
        6 → 3
      </motion.text>
    </svg>
  );
}

// OrderBook: Bid/ask ladder with a match event in the middle
function OrderBookVisual({ isHovered }: { isHovered: boolean }) {
  // Asks (sell orders), descending price top→bottom
  const asks = [
    { price: 105, size: 20 },
    { price: 104, size: 35 },
    { price: 103, size: 50 },
    { price: 102, size: 25 },
  ];
  // Bids (buy orders), descending price top→bottom
  const bids = [
    { price: 101, size: 30 },
    { price: 100, size: 45 },
    { price: 99, size: 40 },
    { price: 98, size: 20 },
  ];

  const askRed = "#ef4444";
  const bidGreen = "#22c55e";

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Header labels */}
      <text
        x={8}
        y={10}
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        price
      </text>
      <text
        x={90}
        y={10}
        textAnchor="end"
        fill="#a1a1aa"
        fontSize="4"
        fontFamily="monospace"
      >
        size
      </text>

      {/* Asks (top half) */}
      {asks.map((a, i) => {
        const y = 14 + i * 8;
        const barWidth = a.size * 0.6;
        return (
          <motion.g key={`ask-${i}`}>
            <motion.rect
              x={50 - barWidth}
              y={y}
              width={barWidth}
              height={6}
              fill={askRed}
              opacity={0.25}
              initial={{ width: 0 }}
              animate={{ width: barWidth }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            />
            <text
              x={8}
              y={y + 4.5}
              fill={askRed}
              fontSize="4"
              fontFamily="monospace"
            >
              {a.price.toFixed(2)}
            </text>
            <text
              x={90}
              y={y + 4.5}
              textAnchor="end"
              fill={askRed}
              fontSize="4"
              fontFamily="monospace"
              opacity={0.85}
            >
              {a.size}
            </text>
          </motion.g>
        );
      })}

      {/* Spread / match event row (center) */}
      <motion.rect
        x={6}
        y={47}
        width={88}
        height={6}
        fill="#06b6d4"
        opacity={0.15}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? [0.15, 0.5, 0.15] : 0.15 }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      <text
        x={50}
        y={52}
        textAnchor="middle"
        fill="#06b6d4"
        fontSize="4"
        fontFamily="monospace"
      >
        -- spread --
      </text>

      {/* Bids (bottom half) */}
      {bids.map((b, i) => {
        const y = 56 + i * 8;
        const barWidth = b.size * 0.6;
        return (
          <motion.g key={`bid-${i}`}>
            <motion.rect
              x={50}
              y={y}
              width={barWidth}
              height={6}
              fill={bidGreen}
              opacity={0.25}
              initial={{ width: 0 }}
              animate={{ width: barWidth }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            />
            <text
              x={8}
              y={y + 4.5}
              fill={bidGreen}
              fontSize="4"
              fontFamily="monospace"
            >
              {b.price.toFixed(2)}
            </text>
            <text
              x={90}
              y={y + 4.5}
              textAnchor="end"
              fill={bidGreen}
              fontSize="4"
              fontFamily="monospace"
              opacity={0.85}
            >
              {b.size}
            </text>
          </motion.g>
        );
      })}

      {/* Incoming market order pulse (hover only) */}
      {isHovered && (
        <motion.circle
          cx={50}
          cy={50}
          r={2}
          fill="#f59e0b"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 6], opacity: [1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </svg>
  );
}

export function ProjectVisual({ type, isHovered = false }: ProjectVisualProps) {
  const visuals: Record<ProjectType, React.ReactNode> = {
    invoke: <InvokeVisual isHovered={isHovered} />,
    seecare: <SeeCareVisual isHovered={isHovered} />,
    "crypto-tracker": <CryptoTrackerVisual isHovered={isHovered} />,
    brainwave: <BrainWaveVisual isHovered={isHovered} />,
    flyte: <FlyteVisual isHovered={isHovered} />,
    cairn: <CairnVisual isHovered={isHovered} />,
    orderbook: <OrderBookVisual isHovered={isHovered} />,
  };

  return (
    <div className="w-full aspect-square p-4">
      {visuals[type]}
    </div>
  );
}
