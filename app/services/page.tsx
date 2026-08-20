import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Reveal from "@/app/components/ui/Reveal";
import ServiceCard from "@/app/components/sections/ServiceCard";
import CTA from "@/app/components/sections/CTA";
import { process, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, web design and development, mobile apps, e-commerce, marketing, and UI/UX — end-to-end digital services from Thoth Sparkz.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Services built to move you forward"
        subtitle="From first idea to launch and beyond — a complete set of digital services, delivered with craft and clarity."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.num} delay={(i % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A clear, proven process"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={(i % 4) * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-base p-8">
                  <span className="font-display text-4xl font-semibold text-gold">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.copy}
                  </p>
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
