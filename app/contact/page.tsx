import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import Reveal from "@/app/components/ui/Reveal";
import ContactForm from "@/app/components/sections/ContactForm";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Thoth Sparkz. Reach out and we'll create something unforgettable together.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Connect"
        title="Start a conversation"
        subtitle="Have a vision? Reach out and we'll help you bring it to life."
      />

      <section className="tone-light bg-base py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <span className="eyebrow text-gold">Location</span>
                <p className="mt-1 text-sm text-muted">{siteConfig.origin}</p>
              </div>
              <div>
                <span className="eyebrow text-gold">Email</span>
                <p className="mt-1 text-sm text-muted">
                  <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-ink">{siteConfig.email}</a>
                </p>
                <p className="text-sm text-muted">
                  <a href={`mailto:${siteConfig.emailSecondary}`} className="transition-colors hover:text-ink">{siteConfig.emailSecondary}</a>
                </p>
              </div>
              <div>
                <span className="eyebrow text-gold">Phone</span>
                <p className="mt-1 text-sm text-muted">{siteConfig.phone}</p>
              </div>
              <div>
                <span className="eyebrow text-gold">Hours</span>
                <p className="mt-1 text-sm text-muted">{siteConfig.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
