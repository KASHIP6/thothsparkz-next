import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <div>
              <span className="eyebrow text-gold">What We Do</span>
              <h2 className="mt-6 text-[clamp(1.6rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide">
                Connected<br />for greater<br />impact.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Brand. Digital. Growth. Transformation.
                Together, they create possibilities
                that last.
              </p>
              <Link
                href="/capabilities"
                className="mt-8 inline-block font-label text-[11px] font-bold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-bright"
              >
                Explore Capabilities&ensp;→
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-0 border-l border-line sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.num} delay={i * 80}>
                <div className="border-l border-line px-6 py-4 first:border-l-0 lg:first:border-l">
                  <span className="text-[13px] tracking-wide text-ink/70">
                    {cap.num}
                  </span>
                  <h3
                    className={`mt-2 text-sm font-semibold uppercase tracking-[0.08em] ${
                      cap.highlight ? "text-gold-bright" : "text-ink"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <ul className="mt-6 space-y-2">
                    {cap.services.map((s) => (
                      <li key={s} className="text-[13px] text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
