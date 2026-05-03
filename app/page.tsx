"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HudLabels } from "@/components/HudLabels";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCounter } from "@/components/StatCounter";
import { DroneCard } from "@/components/DroneCard";
import { DronePanel } from "@/components/DronePanel";
import { drones } from "@/data/drones";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  const previewDrones = drones.slice(0, 3);

  return (
    <>
      {/* Full-bleed Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-hero.png"
            alt="CANOPY Agricultural Drone over field"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-canopy-bg/90 via-canopy-bg/70 to-canopy-bg/50" />
          <div className="absolute inset-0 bg-canopy-bg/30" />
        </div>

        <HudLabels />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-24 lg:pt-0">
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-canopy-green mb-6 block font-bold">
                Precision Agriculture Drones
              </span>
              <h1 className="font-sans text-[56px] sm:text-[80px] lg:text-[104px] xl:text-[120px] font-bold leading-[0.92] tracking-[-0.04em] mb-10">
                <span className="text-canopy-text block">PRECISION</span>
                <span className="text-canopy-green block">FROM ABOVE.</span>
              </h1>
            </motion.div>

            {/* Stat Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-8 font-mono text-[16px] sm:text-[18px]"
            >
              <span className="text-canopy-green font-bold text-[20px] sm:text-[24px]">89%</span>
              <span className="text-canopy-text font-medium">Spray Accuracy</span>
              <span className="text-canopy-border">|</span>
              <span className="text-canopy-green font-bold text-[20px] sm:text-[24px]">380k</span>
              <span className="text-canopy-text font-medium">Ha Monitored</span>
              <span className="text-canopy-border">|</span>
              <span className="text-canopy-green font-bold text-[20px] sm:text-[24px]">130+</span>
              <span className="text-canopy-text font-medium">Farms Served</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
            >
              <Link
                href="/fleet"
                className="group flex items-center gap-2 px-8 py-4 bg-canopy-green text-canopy-bg font-sans text-[16px] font-medium rounded hover:bg-canopy-lime transition-all duration-200"
                style={{ boxShadow: "0 0 40px rgba(156,255,87,0.25)" }}
              >
                <span>Explore Fleet</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/technology"
                className="px-8 py-4 border border-canopy-text/30 text-canopy-text font-sans text-[16px] font-medium rounded hover:bg-canopy-text/10 transition-all duration-200"
              >
                Our Technology
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-10 bg-canopy-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-canopy-green animate-bounce-down" />
          </div>
        </motion.div>
      </section>

      {/* Light Section - Capabilities */}
      <section className="bg-canopy-light py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-sans text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-canopy-bg tracking-[-0.02em] leading-tight">
                What CANOPY does.
              </h2>
            </ScrollReveal>

            <div>
              {/* Capability Tags */}
              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["FIELD MAPPING", "PRECISION SPRAYING", "CROP ANALYTICS"].map((tag, i) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border border-canopy-muted/30 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-canopy-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="font-sans text-[15px] font-light text-canopy-muted max-w-[52ch] leading-relaxed">
                  Our autonomous drone systems combine advanced multispectral imaging with 
                  precision application technology. From seed to harvest, we provide 
                  complete aerial coverage that reduces chemical usage by up to 40% while 
                  improving yield prediction accuracy to 97%.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-canopy-bg py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            <StatCounter value={89} suffix="%" label="Spray Accuracy" />
            <StatCounter value={40} suffix="%" label="Chemical Reduction" />
            <StatCounter value={97} suffix="%" label="Yield Prediction" />
            <StatCounter value={380} suffix="k" label="Hectares Monitored" />
          </div>
        </div>
      </section>

      {/* Drone Preview Strip */}
      <section className="bg-canopy-light py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-sans text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-canopy-bg tracking-[-0.02em] mb-12">
              Fleet Preview
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewDrones.map((drone, index) => (
              <ScrollReveal key={drone.id} delay={index * 0.1}>
                <DroneCard drone={drone} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed CTA Section */}
      <section className="bg-canopy-bg py-20 lg:py-32 relative overflow-hidden">
        {/* Green glow behind button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 bg-canopy-green/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="font-sans text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-canopy-text tracking-[-0.02em] mb-10">
                Ready to map your first field?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/fleet"
                  className="group flex items-center gap-2 px-8 py-4 border border-canopy-green text-canopy-green font-sans text-[13px] font-medium rounded hover:bg-canopy-green hover:text-canopy-bg transition-all duration-200"
                >
                  <span>Explore Drones</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/fleet"
                  className="px-8 py-4 bg-canopy-green text-canopy-bg font-sans text-[13px] font-medium rounded hover:bg-canopy-lime transition-colors duration-200"
                  style={{ boxShadow: "0 0 40px rgba(156,255,87,0.2)" }}
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <DronePanel />
    </>
  );
}
