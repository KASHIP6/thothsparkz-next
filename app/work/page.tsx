import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/ui/Container";
import PageHeader from "@/app/components/ui/PageHeader";
import Reveal from "@/app/components/ui/Reveal";
import { caseStudies } from "@/lib/content";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected brand, digital, and growth projects by Thoth Sparkz.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Real brands. Real results."
        subtitle="From local businesses to international campaigns — work that moves brands forward."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.client} delay={(i % 2) * 100}>
                <Link href="/work" className="group relative flex h-[400px] flex-col justify-between overflow-hidden rounded-sm">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide">
                      {study.client}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex items-end justify-between p-8">
                    <p className="text-sm font-bold uppercase tracking-wide">
                      {study.tagline}
                    </p>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-onink">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
