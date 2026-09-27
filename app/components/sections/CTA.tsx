import Button from "@/app/components/ui/Button";
import Reveal from "@/app/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-noir py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(216,169,82,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <Reveal>
            <p className="eyebrow leading-relaxed text-gold">
              Let&apos;s create<br />what&apos;s next.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="text-center">
              <h2 className="text-[clamp(1.3rem,2.5vw,1.5rem)] font-normal tracking-wide">
                Ready to spark
              </h2>
              <h2 className="text-[clamp(1.5rem,3vw,1.6rem)] font-bold tracking-wide">
                a brighter tomorrow?
              </h2>
              <div className="mt-8">
                <Button href="/contact" variant="gold" size="lg">
                  Start a Conversation&ensp;→
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="hidden lg:block">
            <p className="text-xs leading-relaxed text-muted">
              Tell us where your brand is today.<br />
              We&apos;ll help define where it should<br />
              go next.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
