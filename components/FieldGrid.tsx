"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function FieldGrid() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  // Generate a 12x8 grid with varying health levels
  const rows = 8;
  const cols = 12;
  const cells = [];

  // Create some patterns in the field
  const getHealthColor = (row: number, col: number) => {
    // Create a gradient pattern from bottom-left to top-right
    const score = (row + col) / (rows + cols);
    
    // Add some randomness but keep it consistent
    const noise = Math.sin(row * 0.5) * Math.cos(col * 0.5) * 0.2;
    const finalScore = Math.max(0, Math.min(1, score + noise));

    if (finalScore > 0.8) return "#9CFF57"; // Acid green - excellent
    if (finalScore > 0.6) return "#7ACC44"; // Bright green - good
    if (finalScore > 0.4) return "#5A9A3E"; // Medium green - fair
    if (finalScore > 0.2) return "#3A5A3E"; // Muted - poor
    return "#2A3A2E"; // Dark - critical
  };

  const getPulseDelay = (row: number, col: number) => {
    return (row * cols + col) * 0.05;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isHighHealth = (row + col) / (rows + cols) > 0.7;
      cells.push(
        <motion.rect
          key={`${row}-${col}`}
          x={col * 30}
          y={row * 30}
          width="28"
          height="28"
          fill={getHealthColor(row, col)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.4,
            delay: (row * cols + col) * 0.01,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={isHighHealth ? "animate-pulse-glow" : ""}
          style={{
            animationDelay: `${getPulseDelay(row, col)}s`,
          }}
        />
      );
    }
  }

  return (
    <div ref={ref} className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${cols * 30} ${rows * 30}`}
        className="w-full h-auto max-w-[400px] mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid background */}
        <rect
          x="0"
          y="0"
          width={cols * 30}
          height={rows * 30}
          fill="#0C1410"
          rx="4"
        />

        {/* Grid cells */}
        <g>{cells}</g>

        {/* Legend */}
        <g transform={`translate(20, ${rows * 30 + 15})`}>
          <text
            x="0"
            y="0"
            fill="#3A5A3E"
            fontSize="10"
            fontFamily="var(--font-space-mono)"
            letterSpacing="0.1em"
          >
            CROP HEALTH DENSITY
          </text>

          {/* Legend items */}
          <g transform="translate(0, 15)">
            <rect x="0" y="0" width="12" height="12" fill="#2A3A2E" rx="1" />
            <text x="18" y="10" fill="#3A5A3E" fontSize="9" fontFamily="var(--font-space-mono)">
              Critical
            </text>

            <rect x="70" y="0" width="12" height="12" fill="#5A9A3E" rx="1" />
            <text x="88" y="10" fill="#3A5A3E" fontSize="9" fontFamily="var(--font-space-mono)">
              Fair
            </text>

            <rect x="130" y="0" width="12" height="12" fill="#9CFF57" rx="1" />
            <text x="148" y="10" fill="#3A5A3E" fontSize="9" fontFamily="var(--font-space-mono)">
              Excellent
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
