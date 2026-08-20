import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import Reveal from "@/app/components/ui/Reveal";
import Icon from "@/app/components/ui/Icon";
import ContactForm from "@/app/components/sections/ContactForm";
import type { IconKey } from "@/lib/content";
import { siteConfig } from "@/lib/content";

const details: Array<{ icon: IconKey; label: string; lines: string[] }> = [
  { icon: "location", label: "Location", lines: [siteConfig.origin] },
  {
    icon: "email",
    label: "Email",
    lines: [siteConfig.email, siteConfig.emailSecondary],
  },
  { icon: "phone", label: "Phone", lines: [siteConfig.phone] },
  { icon: "clock", label: "Hours", lines: [siteConfig.hours] },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Thoth Sparkz. Reach out and we’ll create something unforgettable together.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let’s Connect"
        title="Start a project with us"
        subtitle="Have a vision? Reach out and we’ll help you bring it to life."
      />

      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="eyebrow text-gold">{d.label}</div>
                    <div className="mt-1 text-sm leading-relaxed text-muted">
                      {d.lines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
