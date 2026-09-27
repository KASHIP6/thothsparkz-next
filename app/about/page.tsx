import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import Reveal from "@/app/components/ui/Reveal";
import Stats from "@/app/components/sections/Stats";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Thoth Sparkz — intelligence that sparks transformation, from Wayanad, Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Intelligence that sparks transformation"
        subtitle="Inspired by the ancient god of knowledge, we build brands and growth systems charged with purpose."
      />

      <section className="tone-light bg-base py-24">
        <Container className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-gold">Who We Are</span>
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide text-ink">
              A studio born in the hills of Wayanad
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-6 leading-relaxed text-muted">
              Before the internet was born — before the first spark of digital
              light — there was a god who wielded the power of knowledge, wisdom,
              and creation: Thoth. Inspired by that timeless force, a new kind of
              spark was kindled in the lush hills of Wayanad, Kerala.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We don&apos;t settle for ordinary. Every campaign, every pixel, and every
              line of code we craft is charged with intent — to make your brand not
              just visible, but unforgettable.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow text-gold">Our Philosophy</span>
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide text-ink">
              Ideas are everywhere. Transformation is not.
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-6 leading-relaxed text-muted">
              At Thoth Sparkz, we combine the intelligence of Thoth with
              the creative energy of Sparkz — to build brands, create
              opportunities and drive meaningful growth.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Brand. Digital. Growth. Transformation. Together, they create
              possibilities that last.
            </p>
          </Reveal>
        </Container>
      </section>

      <Stats />
      <CTA />
    </>
  );
}
