"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/app/components/ui/Logo";
import Button from "@/app/components/ui/Button";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Subtle solid/shadow state once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent bg-base/0"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" aria-label="Thoth Sparkz — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-label text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive(item.href)
                    ? "text-gold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right cluster — theme toggle stays visible at every breakpoint */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="md">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-base transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-4 font-label text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive(item.href) ? "text-gold" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-4">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
