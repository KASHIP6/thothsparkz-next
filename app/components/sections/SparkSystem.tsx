import { Fragment } from "react";
import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";
import { sparkSteps } from "@/lib/content";

export default function SparkSystem() {
  const columns = sparkSteps
    .map((_, i) => (i < sparkSteps.length - 1 ? "auto 1fr" : "auto"))
    .join(" ");

  return (
    <section className="bg-base py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <div>
              <span className="eyebrow text-gold">The Spark System™</span>
              <h2 className="mt-6 text-[clamp(1.6rem,3vw,2.2rem)] font-normal leading-snug tracking-wide">
                A clearer
                <br />
                path to
                <br />
                <span className="font-bold">what&rsquo;s next.</span>
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                A structured, end-to-end approach that turns insight into
                impact.
              </p>
              <Link
                href="/capabilities"
                className="mt-8 inline-block font-label text-[11px] font-bold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-bright"
              >
                Our Methodology&ensp;→
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-8">
              {/* Desktop: single-row diagram matching the design reference */}
              <div
                className="hidden flex-1 lg:grid lg:items-start"
                style={{ gridTemplateColumns: columns }}
              >
                {sparkSteps.map((step, i) => (
                  <Fragment key={step.num}>
                    <div className="group flex flex-col items-center px-1 text-center">
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-gold/30 bg-surface transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(216,169,82,0.15)]" />
                        <span className="relative text-[11px] font-bold text-gold">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="mt-4 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.1em]">
                        {step.title}
                      </h3>
                      <p className="mt-1 whitespace-nowrap text-[10px] leading-relaxed text-muted">
                        {step.desc}
                      </p>
                    </div>
                    {i < sparkSteps.length - 1 && (
                      <div className="mt-[22px] h-px bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40" />
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="hidden shrink-0 text-right xl:block">
                <p className="text-xs uppercase leading-loose tracking-[0.18em] text-muted/50">
                  Same
                  <br />
                  Bigger
                  <br />
                  Brighter
                  <br />
                  Bolder
                </p>
                <div className="ml-auto mt-4 h-px w-10 bg-gold/40" />
              </div>

              {/* Mobile / tablet: wrapping grid */}
              <div className="relative grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:hidden">
                <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:block" />
                {sparkSteps.map((step) => (
                  <div key={step.num} className="group relative text-center">
                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-gold/30 bg-surface transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(216,169,82,0.15)]" />
                      <span className="relative text-xs font-bold text-gold">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.1em]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
