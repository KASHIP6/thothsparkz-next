import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
