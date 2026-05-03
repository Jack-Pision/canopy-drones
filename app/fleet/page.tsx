"use client";

import { motion, AnimatePresence } from "framer-motion";
import { DroneCard } from "@/components/DroneCard";
import { DronePanel } from "@/components/DronePanel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { drones, DroneCategory } from "@/data/drones";
import { useDroneStore } from "@/store/droneStore";

const categories: { value: DroneCategory; label: string }[] = [
  { value: "ALL", label: "ALL" },
  { value: "SPRAYING", label: "SPRAYING" },
  { value: "MAPPING", label: "MAPPING" },
  { value: "MONITORING", label: "MONITORING" },
];

export default function FleetPage() {
  const { activeCategory, setActiveCategory } = useDroneStore();

  const filteredDrones =
    activeCategory === "ALL"
      ? drones
      : drones.filter((drone) => drone.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="bg-canopy-bg pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-green mb-4 block">
              Fleet Overview
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-sans text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-canopy-text tracking-[-0.02em] mb-4">
              Our Drones.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans text-[15px] font-light text-canopy-muted max-w-[52ch]">
              Purpose-built for every field condition.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-3 mt-10">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-5 py-2 rounded text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-200 ${
                    activeCategory === category.value
                      ? "bg-canopy-green text-canopy-bg"
                      : "border border-canopy-border text-canopy-muted hover:text-canopy-text hover:border-canopy-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Drone Cards Grid */}
      <section className="bg-canopy-light py-16 lg:py-24 min-h-[60vh]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredDrones.map((drone, index) => (
                <motion.div
                  key={drone.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <DroneCard drone={drone} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDrones.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono text-[13px] text-canopy-muted">
                No drones found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <DronePanel />
    </>
  );
}
