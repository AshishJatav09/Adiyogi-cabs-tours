import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className = "" }: SectionShellProps) {
  return (
    <div className={`section-shell rounded-[2.4rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
