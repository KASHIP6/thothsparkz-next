import Link from "next/link";
import Logo from "@/app/components/ui/Logo";
import { navItems, services, siteConfig } from "@/lib/content";

const year = 2025;

export default function Footer() {
  return (
    <footer className="bg-noir text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs font-display text-lg leading-relaxed text-white/55">
            We craft digital experiences that captivate audiences and drive real
            results — from the hills of Wayanad to the world.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold-bright">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.num}>
                <Link
                  href="/services"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-bright">Company</h3>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-bright">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>{siteConfig.origin}</li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs tracking-wide text-white/45 sm:flex-row sm:px-8">
          <span>© {year} {siteConfig.name} LLP. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
