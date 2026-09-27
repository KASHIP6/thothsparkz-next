import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";
import { caseStudies } from "@/lib/content";


export default function SelectedWork() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <div>
              <span className="eyebrow text-gold">Selected Work</span>
              <h2 className="mt-6 text-[clamp(1.6rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide">
                Real brands.<br />
                <span className="font-bold">Real results.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                From local businesses to international
                campaigns, we help brands find their
                voice, reach the right audience and
                grow with purpose.
              </p>
              <Link
                href="/work"
                className="mt-8 inline-block font-label text-[11px] font-bold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-bright"
              >
                View All Work&ensp;→
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((study, i) => (
              <Reveal key={study.client} delay={i * 80}>
                <Link href="/work" className="group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-sm">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 p-5">
                    <h3 className="text-[11px] font-bold uppercase tracking-wide">
                      {study.client}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] uppercase tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex items-end justify-between p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wide">
                      {study.tagline}
                    </p>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-onink">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
