import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Reveal from "@/app/components/ui/Reveal";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft, subtle background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(200,162,76,0.10), transparent 70%)",
        }}
      />
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {siteConfig.tagline}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              We don&apos;t just build.
              <span className="mt-2 block text-gold">We ignite legends.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Inspired by the ancient god of wisdom, we fuse timeless intellect
              with modern craft — building brands and digital products that rise
              above the ordinary, from the lush hills of Wayanad to the world.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/portfolio" variant="primary" size="lg">
                View Our Work
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Refined geometric mark */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-8 rounded-full border border-line/70" />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(200,162,76,0.16), transparent 65%)",
              }}
            />
            <svg
              viewBox="0 0 200 280"
              fill="none"
              className="absolute left-1/2 top-1/2 h-[62%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hero-bolt" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e0c374" />
                  <stop offset="55%" stopColor="#c8a24c" />
                  <stop offset="100%" stopColor="#8b6914" />
                </linearGradient>
              </defs>
              <polygon
                points="115,20 55,130 95,130 85,260 145,150 105,150"
                fill="url(#hero-bolt)"
              />
            </svg>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
