import Image from "next/image";

export default function Loader() {
  return (
    <div
      className="flex flex-col items-center gap-6"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-line" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" />
        <Image
          src="/logo-icon-dark.svg"
          alt=""
          width={24}
          height={24}
          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        />
      </div>
      <span className="eyebrow text-muted">Loading</span>
    </div>
  );
}
