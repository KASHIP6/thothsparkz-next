export default function Loader() {
  return (
    <div
      className="flex flex-col items-center gap-6"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative h-16 w-16">
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-2 border-line" />
        {/* Spinner */}
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" />
        {/* Brand bolt */}
        <svg
          viewBox="0 0 40 50"
          className="absolute left-1/2 top-1/2 h-6 -translate-x-1/2 -translate-y-1/2"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="loader-bolt" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c8a24c" />
              <stop offset="100%" stopColor="#8b6914" />
            </linearGradient>
          </defs>
          <polygon
            points="22,2 6,28 18,28 18,48 34,22 22,22"
            fill="url(#loader-bolt)"
          />
        </svg>
      </div>
      <span className="eyebrow text-muted">Loading</span>
    </div>
  );
}
