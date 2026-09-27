import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-20 ${className ?? ""}`}>
      {children}
    </div>
  );
}
