import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className = "" }: SectionShellProps) {
  return (
    <div className={`section-shell rounded-[2.4rem] px-6 py-18 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
