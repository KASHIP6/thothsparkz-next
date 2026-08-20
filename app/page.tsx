import Link from "next/link";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Reveal from "@/app/components/ui/Reveal";
import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import ServiceCard from "@/app/components/sections/ServiceCard";
import PortfolioCard from "@/app/components/sections/PortfolioCard";
import Testimonials from "@/app/components/sections/Testimonials";
import Newsletter from "@/app/components/sections/Newsletter";
import CTA from "@/app/components/sections/CTA";
import { projects, services } from "@/lib/content";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <Stats />

      {/* Services preview */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Comprehensive digital solutions"
              subtitle="End-to-end services that help your business thrive in an ever-evolving landscape."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.num} delay={(i % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
            >
              View all services →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Featured work */}
      <section className="border-t border-line bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Recent projects"
              subtitle="A selection of work we’re proud of — crafted for clarity, impact, and results."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 100}>
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
            >
              See the full portfolio →
            </Link>
          </Reveal>
        </Container>
      </section>

      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}
