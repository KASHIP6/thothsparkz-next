import Reveal from "@/app/components/ui/Reveal";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="tone-light bg-base">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-y-6">
            <div className="w-full shrink-0 sm:w-auto sm:pr-8">
              <p className="eyebrow leading-relaxed text-gold">
                Built to<br />create impact.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-nowrap lg:items-center lg:gap-0 lg:overflow-x-auto">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="lg:shrink-0 lg:border-l lg:border-line lg:pl-5 lg:pr-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="text-xl font-bold text-ink">
                    {s.value}
                  </span>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
