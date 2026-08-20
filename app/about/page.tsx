import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Reveal from "@/app/components/ui/Reveal";
import Stats from "@/app/components/sections/Stats";
import ExpertiseBars from "@/app/components/sections/ExpertiseBars";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Thoth Sparkz — where timeless wisdom meets modern digital craft, from Wayanad, Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Where wisdom meets spark"
        subtitle="Inspired by the ancient god of knowledge, we build brands and products charged with purpose."
      />

      <section className="py-24">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="A studio born in the hills of Wayanad"
            />
            <p className="mt-6 leading-relaxed text-muted">
              Before the internet was born — before the first spark of digital
              light — there was a god who wielded the power of knowledge, wisdom,
              and creation: Thoth. Inspired by that timeless force, a new kind of
              spark was kindled in the lush hills of Wayanad, Kerala.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We don’t settle for ordinary. Every campaign, every pixel, and every
              line of code we craft is charged with intent — to make your brand not
              just visible, but unforgettable.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] sm:p-10">
              <h3 className="eyebrow text-gold">Our Expertise</h3>
              <div className="mt-6">
                <ExpertiseBars />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Stats />

      <CTA
        title="Let’s build something worth remembering."
        subtitle="Partner with a team that treats your brand like a legend in the making."
      />
    </>
  );
}
