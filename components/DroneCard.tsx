"use client";

import Image from "next/image";
import { Drone } from "@/data/drones";
import { useDroneStore } from "@/store/droneStore";
import { ArrowRight } from "lucide-react";

interface DroneCardProps {
  drone: Drone;
  index?: number;
}

export function DroneCard({ drone, index = 0 }: DroneCardProps) {
  const openPanel = useDroneStore((state) => state.openPanel);

  return (
    <div
      onClick={() => openPanel(drone)}
      className="group bg-canopy-light rounded cursor-pointer transition-all duration-300 ease-canopy border border-transparent hover:border-canopy-green overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="aspect-square bg-canopy-product flex items-center justify-center overflow-hidden relative">
        <Image
          src={drone.image}
          alt={drone.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        {/* Drone Name */}
        <h3 className="font-sans text-[18px] sm:text-[22px] font-medium text-canopy-bg tracking-tight mb-1">
          {drone.name}
        </h3>

        {/* Role Tag */}
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-canopy-muted mb-4">
          {drone.role}
        </p>

        {/* Key Specs Row */}
        <div className="flex items-center gap-3 mb-4 text-[11px] font-mono">
          <span className="px-2 py-1 bg-canopy-green text-canopy-bg font-medium rounded-sm">
            {drone.coverage} {drone.coverageUnit}
          </span>
          <span className="text-canopy-muted">·</span>
          <span className="text-canopy-muted">{drone.battery}</span>
          {drone.sprayWidth && (
            <>
              <span className="text-canopy-muted">·</span>
              <span className="text-canopy-muted">{drone.sprayWidth}</span>
            </>
          )}
        </div>

        {/* View Specs Link */}
        <div className="flex items-center gap-2 text-canopy-green font-mono text-[11px] uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Specs</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
