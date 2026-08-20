import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Reveal from "@/app/components/ui/Reveal";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function CTA({
  title = "Have a vision? Let’s ignite it together.",
  subtitle = "Tell us about your project and we’ll craft something unforgettable.",
}: Props) {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-noir px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, rgba(200,162,76,0.18), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
                {subtitle}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Project
                </Button>
                <Button
                  href="/portfolio"
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-gold-bright"
                >
                  See Our Work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
