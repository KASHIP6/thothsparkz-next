import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-label font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-onink hover:bg-gold hover:text-white hover:shadow-[0_12px_30px_rgba(169,127,46,0.35)]",
  secondary:
    "border border-line bg-surface text-ink hover:border-gold hover:text-gold",
  ghost: "text-ink hover:text-gold",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsLink = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type AsButton = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export default function Button(props: AsLink | AsButton) {
  const { children, variant = "primary", size = "md", className, ...rest } =
    props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<
      AsLink,
      keyof CommonProps
    >;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { href: _ignored, ...buttonRest } = rest as Omit<
    AsButton,
    keyof CommonProps
  >;
  void _ignored;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
