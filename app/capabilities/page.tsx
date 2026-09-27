import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import Reveal from "@/app/components/ui/Reveal";
import { capabilities, sparkSteps } from "@/lib/content";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Brand, Digital, Growth, and Transformation — end-to-end capabilities from Thoth Sparkz.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Connected for greater impact"
        subtitle="Brand. Digital. Growth. Transformation. Together, they create possibilities that last."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.num} delay={i * 80}>
                <div className="border-l border-line pl-6">
                  <span className="text-sm tracking-wide text-muted">
                    {cap.num}
                  </span>
                  <h3
                    className={`mt-2 text-base font-semibold uppercase tracking-[0.08em] ${
                      cap.highlight ? "text-gold-bright" : "text-ink"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {cap.services.map((s) => (
                      <li key={s} className="text-sm text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-light border-t border-line bg-base py-24">
        <Container>
          <Reveal>
            <div className="text-center">
              <span className="eyebrow text-gold">The Spark System™</span>
              <h2 className="mx-auto mt-4 max-w-xl text-[clamp(1.6rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide text-ink">
                A structured, end-to-end approach
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-gold" />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sparkSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="rounded-xl border border-line bg-surface p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold">
                    <span className="text-sm font-semibold text-gold">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
