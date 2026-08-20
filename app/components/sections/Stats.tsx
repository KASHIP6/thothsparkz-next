"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/app/components/ui/Container";
import { stats } from "@/lib/content";

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const display = useCountUp(value, run);
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="eyebrow mt-2 text-muted">{label}</div>
    </div>
  );
}

export default function Stats() {
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-line bg-surface">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-8 py-14 sm:gap-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} run={run} />
          ))}
        </div>
      </Container>
    </section>
  );
}
