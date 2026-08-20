import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Reveal from "@/app/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client Stories"
            title="What our clients say"
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)]">
                <div className="text-sm tracking-[0.3em] text-gold">★★★★★</div>
                <blockquote className="mt-5 flex-1 font-display text-xl italic leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft font-display font-semibold text-gold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
