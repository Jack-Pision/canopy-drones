"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FieldGrid } from "@/components/FieldGrid";
import { ProcessFlow } from "@/components/ProcessFlow";
import { StatCounter } from "@/components/StatCounter";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    name: "AI Targeting",
    description:
      "Machine learning models identify crop stress, disease, and pest pressure with sub-meter accuracy, enabling precise intervention.",
  },
  {
    number: "02",
    name: "Real-Time Data Sync",
    description:
      "Continuous cloud connectivity ensures field data is instantly available across all devices, from tablet to desktop.",
  },
  {
    number: "03",
    name: "Adaptive Flight Path",
    description:
      "Dynamic route optimization responds to wind, battery, and terrain in real-time for maximum efficiency and safety.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Full-bleed Hero with Aerial Field Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aerial-field.png"
            alt="Aerial view of crop rows"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-canopy-bg/70" />
          {/* Subtle green tint */}
          <div className="absolute inset-0 bg-canopy-green/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full pt-24 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px]"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-green mb-6 block">
              Technology
            </span>
            <h1 className="font-sans text-[48px] sm:text-[64px] lg:text-[88px] xl:text-[104px] font-bold text-canopy-text tracking-[-0.03em] leading-[0.94]">
              The Intelligence
              <span className="text-canopy-green block">Behind Every Flight.</span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-8 bg-canopy-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-canopy-green animate-bounce-down" />
          </div>
        </motion.div>
      </section>

      {/* Technology Pillars */}
      <section className="bg-canopy-light py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 0.15}>
                <div className="border-t-2 border-canopy-border pt-6">
                  <span className="font-mono text-[48px] lg:text-[64px] font-normal text-canopy-green/30 leading-none">
                    {pillar.number}
                  </span>
                  <h3 className="font-sans text-[22px] lg:text-[28px] font-medium text-canopy-bg mt-4 mb-4">
                    {pillar.name}
                  </h3>
                  <p className="font-sans text-[15px] font-light text-canopy-muted max-w-[36ch] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="bg-canopy-bg py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-sans text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-canopy-text tracking-[-0.02em] mb-12 text-center">
              Flight Workflow
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ProcessFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* Data Visualization Mock */}
      <section className="bg-canopy-light py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-muted mb-4 block">
                  Field Analytics
                </span>
                <h2 className="font-sans text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-canopy-bg tracking-[-0.02em] mb-6">
                  See what the drone sees.
                </h2>
                <p className="font-sans text-[15px] font-light text-canopy-muted max-w-[52ch] leading-relaxed">
                  Multispectral imaging reveals hidden patterns in your fields. 
                  NDVI analysis highlights vegetation health with pixel-level precision, 
                  enabling targeted interventions that maximize yield and minimize waste.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <FieldGrid />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Accuracy Stats */}
      <section className="bg-canopy-bg py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-20">
            <StatCounter
              value={0.3}
              prefix=""
              suffix="m"
              decimals={1}
              label="Targeting Precision"
            />
            <StatCounter
              value={98.6}
              suffix="%"
              decimals={1}
              label="Mission Completion Rate"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-canopy-bg py-20 lg:py-32 border-t border-canopy-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-sans text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-canopy-text tracking-[-0.02em] mb-10">
              See the fleet.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-canopy-green text-canopy-green font-sans text-[13px] font-medium rounded hover:bg-canopy-green hover:text-canopy-bg transition-all duration-200"
            >
              <span>Explore Drones</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
