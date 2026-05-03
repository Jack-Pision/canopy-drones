"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.5,
  label,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out easing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formattedValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-[40px] sm:text-[52px] lg:text-[64px] font-normal text-canopy-green leading-none tracking-tight">
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopy-muted mt-3">
        {label}
      </div>
    </div>
  );
}
