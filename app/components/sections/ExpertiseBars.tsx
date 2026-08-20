"use client";

import { useEffect, useRef, useState } from "react";
import { expertise } from "@/lib/content";

export default function ExpertiseBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRun(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {expertise.map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink">{item.label}</span>
            <span className="font-display text-sm font-semibold text-gold">
              {item.pct}%
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-bright transition-[width] duration-1000 ease-out"
              style={{ width: run ? `${item.pct}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
