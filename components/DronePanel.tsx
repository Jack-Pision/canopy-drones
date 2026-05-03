"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDroneStore } from "@/store/droneStore";
import { X, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export function DronePanel() {
  const { activeDrone, isPanelOpen, closePanel } = useDroneStore();

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPanelOpen) {
        closePanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPanelOpen, closePanel]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPanelOpen]);

  return (
    <AnimatePresence>
      {isPanelOpen && activeDrone && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePanel}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[80vw] lg:w-[60vw] bg-canopy-card z-50 overflow-y-auto"
            style={{ boxShadow: "-40px 0 80px rgba(0,0,0,0.6)" }}
          >
            {/* Close Button */}
            <button
              onClick={closePanel}
              className="absolute top-6 right-6 z-10 p-2 text-canopy-muted hover:text-canopy-text transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 lg:p-12">
              {/* Drone Image */}
              <div className="aspect-video bg-canopy-product rounded mb-8 overflow-hidden relative">
                <Image
                  src={activeDrone.image}
                  alt={activeDrone.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 60vw"
                />
              </div>

              {/* Drone Name */}
              <h2 className="font-sans text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-canopy-text tracking-tight mb-2">
                {activeDrone.name}
              </h2>

              {/* Role Tag */}
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-green mb-8">
                {activeDrone.role}
              </p>

              {/* Description */}
              <p className="font-sans text-[15px] font-light text-canopy-muted max-w-[52ch] mb-10 leading-relaxed">
                {activeDrone.description}
              </p>

              {/* Specs Table */}
              <div className="mb-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-muted mb-4">
                  Specifications
                </h3>
                <div className="border-t border-canopy-border">
                  {activeDrone.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-canopy-border"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-canopy-muted">
                        {spec.label}
                      </span>
                      <span className="font-sans text-[15px] font-medium text-canopy-text">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-muted mb-4">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeDrone.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border border-canopy-border rounded text-[10px] font-mono uppercase tracking-[0.15em] text-canopy-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="group flex items-center gap-3 px-6 py-3 bg-canopy-green text-canopy-bg font-sans text-[13px] font-medium rounded hover:bg-canopy-lime transition-colors duration-200">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
