import Image from "next/image";

type Props = {
  className?: string;
  variant?: "full" | "icon";
};

export default function Logo({ className, variant = "full" }: Props) {
  if (variant === "icon") {
    return (
      <Image
        src="/logo-icon-dark.svg"
        alt="Thoth Sparkz"
        width={48}
        height={48}
        className={className}
        priority
      />
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo-icon-dark.svg"
        alt=""
        width={48}
        height={48}
        className="h-8 w-auto"
        priority
      />
      <span className="font-display text-base font-semibold uppercase tracking-[0.18em]">
        <span className="text-ink">Thoth</span>{" "}
        <span className="text-gold">Sparkz</span>
      </span>
    </div>
  );
}
