import type { Metadata } from "next";
import PageHeader from "@/app/components/ui/PageHeader";
import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on branding, digital strategy, and growth from the Thoth Sparkz team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives that spark"
        subtitle="Thoughts on brand building, digital strategy, and the craft of meaningful growth."
      />

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg text-muted">
                Insights are coming soon. We&apos;re preparing perspectives on brand
                strategy, digital transformation, and growth systems — designed to
                help you think differently about what&apos;s next.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
