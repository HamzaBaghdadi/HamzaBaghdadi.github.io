"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/** A card whose border catches a soft light under the pointer. */
export function Spotlight({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "article" | "li";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  return (
    <Tag
      // @ts-expect-error -- the ref type is shared across the allowed tags
      ref={ref}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={cn("spotlight rounded-2xl border border-border bg-card", className)}
    >
      {children}
    </Tag>
  );
}
