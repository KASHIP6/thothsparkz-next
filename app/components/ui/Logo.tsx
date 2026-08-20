type Props = {
  className?: string;
  /** Render the wordmark on a dark background (light text). */
  dark?: boolean;
};

export default function Logo({ className, dark = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 50"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-bolt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8a24c" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
        </defs>
        <polygon points="22,2 6,28 18,28 18,48 34,22 22,22" fill="url(#logo-bolt)" />
      </svg>
      <span
        className={`font-display text-lg font-semibold tracking-[0.06em] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        THOTH SPARKZ
      </span>
    </span>
  );
}
