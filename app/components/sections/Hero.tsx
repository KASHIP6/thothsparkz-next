import Button from "@/app/components/ui/Button";
import Reveal from "@/app/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-noir">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #030405, #0C1115 55%, #1C1710)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[15%] top-[10%] h-[460px] w-[460px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, #F3C56D 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-20 pt-[120px] sm:px-8 lg:px-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">
                Brands for a brighter tomorrow
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.15] tracking-wide">
                INTELLIGENCE<br />
                THAT <span className="text-gold-bright">SPARKS</span>
                <br />
                TRANSFORMATION.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                We build brands, digital experiences and growth systems
                that move businesses forward.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="gold" size="lg">
                  Build Your Brand&ensp;→
                </Button>
                <Button href="/work" variant="outline" size="lg">
                  Explore Our Work
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.18em] text-muted/60">
                Strategy&ensp;&ensp;×&ensp;&ensp;Creativity&ensp;&ensp;×&ensp;&ensp;Technology&ensp;&ensp;×&ensp;&ensp;Growth
              </p>
            </Reveal>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <Reveal delay={200}>
              <div className="text-right">
                <p className="text-xs uppercase leading-loose tracking-[0.18em] text-muted/50">
                  Ideas<br />Strategy<br />Creation<br />Action<br />Transformation
                </p>
                <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted/70">
                  A brighter<br />tomorrow<br />is a choice.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#manifesto"
          className="flex flex-col items-center gap-3 text-muted/50 transition-colors hover:text-gold"
        >
          <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
          <span className="relative flex h-9 w-[18px] items-start justify-center rounded-full border border-current p-1.5">
            <span className="h-1.5 w-0.5 animate-bounce rounded-full bg-current" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
