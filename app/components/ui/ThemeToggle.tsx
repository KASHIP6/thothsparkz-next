"use client";

// The current theme lives on <html data-theme>, set before paint by the inline
// script in the root layout. We read/write it directly (no React state) so the
// icon swap is purely CSS-driven and never mismatches during hydration.
type DocWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => unknown;
};

export default function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const el = document.documentElement;
    const next = el.getAttribute("data-theme") === "dark" ? "light" : "dark";

    const apply = () => {
      el.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore storage errors (private mode, etc.) */
      }
    };

    // Crossfade the whole page via the View Transitions API where supported;
    // otherwise fall back to the CSS color transition on <body>.
    const doc = document as DocWithViewTransition;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold ${
        className ?? ""
      }`}
    >
      {/* Moon — shown in light mode (click to go dark) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 dark:hidden"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Sun — shown in dark mode (click to go light) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-5 w-5 dark:block"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
