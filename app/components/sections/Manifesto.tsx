import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";

export default function Manifesto() {
  return (
    <section id="manifesto" className="tone-light bg-base">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[auto_1px_1fr_1fr] lg:gap-12 lg:px-20">
        <Reveal>
          <p className="eyebrow leading-relaxed text-gold">
            More<br className="hidden lg:block" /> Than<br className="hidden lg:block" /> Marketing.
          </p>
        </Reveal>

        <div className="hidden h-full w-px bg-line lg:block" />

        <Reveal delay={80}>
          <div>
            <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-normal leading-snug tracking-wide text-ink">
              Ideas are everywhere.
            </h2>
            <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold leading-snug tracking-wide text-ink">
              Transformation is not.
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div>
            <p className="text-sm leading-relaxed text-muted">
              At Thoth Sparkz, we combine the intelligence of Thoth
              with the creative energy of Sparkz — to build brands,
              create opportunities and drive meaningful growth.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block font-label text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-gold"
            >
              Our Philosophy&ensp;→
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
