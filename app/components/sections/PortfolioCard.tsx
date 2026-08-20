import Icon from "@/app/components/ui/Icon";
import type { Project } from "@/lib/content";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gold-soft to-surface">
        <Icon
          name={project.icon}
          className="h-14 w-14 text-gold transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="border-t border-line p-6">
        <span className="eyebrow text-gold">{project.category}</span>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.desc}</p>
      </div>
    </article>
  );
}
