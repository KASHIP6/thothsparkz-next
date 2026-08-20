import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import PortfolioGrid from "@/app/components/sections/PortfolioGrid";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected web design, mobile app, and branding projects by Thoth Sparkz.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Work we’re proud of"
        subtitle="A cross-section of projects across web, mobile, and brand — filter to explore by discipline."
      />

      <section className="py-24">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <CTA />
    </>
  );
}
