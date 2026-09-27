import Reveal from "@/app/components/ui/Reveal";
import { clients } from "@/lib/content";

export default function TrustedBy() {
  return (
    <section className="tone-light bg-base">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-y-6">
            <div className="w-full shrink-0 sm:w-auto sm:pr-8">
              <p className="eyebrow leading-relaxed text-gold">
                Trusted by<br />visionary brands
              </p>
            </div>

            <div className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-4">
              {clients.map((c) => (
                <span
                  key={c.name}
                  className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink/80"
                >
                  {c.name}
                </span>
              ))}
            </div>

            <div className="hidden border-l border-line pl-8 lg:block">
              <p className="text-[10px] uppercase tracking-[0.08em] leading-relaxed text-muted">
                And 100+<br />more brands<br />across 10+ industries
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
