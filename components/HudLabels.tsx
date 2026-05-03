"use client";

import { motion } from "framer-motion";

export function HudLabels() {
  return (
    <>
      {/* Top Left - Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-24 sm:top-28 left-6 lg:left-12 font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.12em] text-canopy-text/70 hidden sm:block"
      >
        <span className="text-canopy-green font-bold">LAT</span> 24.8°N /{" "}
        <span className="text-canopy-green font-bold">LON</span> 67.2°E
      </motion.div>

      {/* Bottom Right - Altitude & Speed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-20 sm:bottom-24 right-6 lg:right-12 font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.12em] text-canopy-text/70 hidden sm:block"
      >
        <span className="text-canopy-green font-bold">ALT</span> 120M ·{" "}
        <span className="text-canopy-green font-bold">SPEED</span> 18KM/H
      </motion.div>
    </>
  );
}
