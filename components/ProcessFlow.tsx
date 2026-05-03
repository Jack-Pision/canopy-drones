"use client";

import { useInView } from "@/hooks/useInView";

interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: "Scan Field" },
  { number: 2, label: "Analyze Data" },
  { number: 3, label: "Generate Flight Plan" },
  { number: 4, label: "Execute" },
  { number: 5, label: "Review Report" },
];

function ProcessStep({
  step,
  isActive,
  isPast,
}: {
  step: Step;
  isActive: boolean;
  isPast: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] font-bold transition-all duration-500 ${
          isActive
            ? "bg-canopy-green text-canopy-bg"
            : isPast
            ? "bg-canopy-border text-canopy-muted"
            : "bg-canopy-border/50 text-canopy-muted/50"
        }`}
      >
        {step.number}
      </div>
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap ${
          isActive
            ? "text-canopy-green"
            : isPast
            ? "text-canopy-muted"
            : "text-canopy-muted/50"
        }`}
      >
        {step.label}
      </span>
    </div>
  );
}

export function ProcessFlow() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <div className="min-w-[600px] flex items-center justify-center gap-4 py-8">
        {steps.map((step, index) => {
          const isActive = isInView;
          const isPast = isInView && index < 2; // Simulate past steps

          return (
            <div key={step.number} className="flex items-center gap-4">
              <ProcessStep step={step} isActive={isActive} isPast={isPast} />
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-px border-t border-dashed transition-all duration-500 ${
                    isPast ? "border-canopy-muted" : "border-canopy-border/50"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
