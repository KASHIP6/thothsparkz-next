import Icon from "@/app/components/ui/Icon";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card-hover)]">
      <span
        className="pointer-events-none absolute right-6 top-6 font-display text-5xl font-semibold text-line transition-colors duration-300 group-hover:text-gold-soft"
        aria-hidden
      >
        {service.num}
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {service.copy}
      </p>
    </article>
  );
}
