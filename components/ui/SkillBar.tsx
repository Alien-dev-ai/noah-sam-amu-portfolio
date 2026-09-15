"use client";

import { useEffect, useRef, useState } from "react";
import type { RatedSkill } from "@/data/skills";

/**
 * A labeled progress bar that animates from 0 to its percentage the first
 * time it scrolls into view, using the same IntersectionObserver approach
 * as Reveal (no animation library). Respects prefers-reduced-motion via
 * the transition being instant under that media query (see globals.css).
 */
export default function SkillBar({ name, percent }: RatedSkill) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-ink-dim">{name}</span>
        <span className="font-mono text-xs text-accent">{percent}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line-soft">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
          style={{ width: filled ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}
