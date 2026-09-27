"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/app/components/ui/Logo";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-noir/90 backdrop-blur-md"
          : "border-b border-transparent bg-noir/70"
      }`}
    >
      <nav className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-20">
        <Link href="/" aria-label="Thoth Sparkz — home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-6 bg-gold" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-gold/60 px-6 py-2.5 font-label text-xs font-bold uppercase tracking-[0.1em] text-ink transition-all hover:border-gold hover:text-gold lg:inline-flex"
          >
            Let&apos;s Talk&ensp;→
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-noir transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-4 text-sm transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex rounded-full border border-gold/60 px-6 py-2.5 font-label text-xs font-bold uppercase tracking-[0.1em] text-ink transition-all hover:border-gold"
            >
              Let&apos;s Talk&ensp;→
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
