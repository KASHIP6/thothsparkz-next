import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 0%, rgba(200,162,76,0.08), transparent 70%)",
        }}
      />
      <Container className="relative py-20 text-center sm:py-24">
        <Reveal>
          <span className="eyebrow inline-block text-gold">{eyebrow}</span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
