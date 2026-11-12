"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A tiny live demo of the idea behind SemiUI's design presets:
 * the same components, re-skinned by switching one preset.
 */
const presets = {
  Soft: { radius: "rounded-lg", pill: "rounded-lg", weight: "font-medium" },
  Sharp: { radius: "rounded-none", pill: "rounded-none", weight: "font-semibold" },
  Round: { radius: "rounded-full", pill: "rounded-full", weight: "font-medium" },
} as const;

type PresetName = keyof typeof presets;

export function PresetPreview({ className }: { className?: string }) {
  const [name, setName] = useState<PresetName>("Soft");
  const [on, setOn] = useState(true);
  const p = presets[name];

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-popover/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-md dark:shadow-black/70",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">Preset</p>
        <div role="radiogroup" aria-label="Component preset" className="flex rounded-md bg-muted p-0.5">
          {(Object.keys(presets) as PresetName[]).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={name === key}
              onClick={() => setName(key)}
              className={cn(
                "rounded-[5px] px-2 py-1 text-[0.6875rem] font-medium transition-colors",
                name === key ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-hidden>
        <span className={cn("bg-brand px-3 py-1.5 text-xs text-white transition-all duration-300", p.radius, p.weight)}>Save</span>
        <span className={cn("border border-border px-3 py-1.5 text-xs transition-all duration-300", p.radius, p.weight)}>Cancel</span>
        <span className={cn("px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300", p.radius, p.weight)}>Skip</span>
      </div>

      <div className="mt-3 flex items-center gap-2" aria-hidden>
        <span className={cn("flex-1 border border-border bg-background px-3 py-1.5 text-xs text-faint transition-all duration-300", p.radius)}>
          you@company.com
        </span>
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setOn((v) => !v)}
          className={cn(
            "relative h-5 w-9 shrink-0 transition-all duration-300",
            p.pill,
            on ? "bg-brand" : "bg-muted-foreground/30",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 size-4 bg-white transition-all duration-300",
              p.pill === "rounded-none" ? "rounded-none" : "rounded-full",
              on ? "left-[1.125rem]" : "left-0.5",
            )}
          />
        </button>
      </div>
      <p className="mt-3 text-[0.6875rem] text-faint">Switch presets to re-skin the components.</p>
    </div>
  );
}
