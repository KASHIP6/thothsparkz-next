"use client";

import { useState } from "react";
import PortfolioCard from "@/app/components/sections/PortfolioCard";
import { projectCategories, projects } from "@/lib/content";

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 font-label text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                isActive
                  ? "border-ink bg-ink text-onink"
                  : "border-line bg-surface text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
