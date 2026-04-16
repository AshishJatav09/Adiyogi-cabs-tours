import { ShieldCheck } from "lucide-react";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="relative -mt-10 z-10 px-6 lg:px-10">
      <div className="section-shell mx-auto max-w-7xl rounded-[2rem] px-5 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="relative flex h-full items-start gap-3 rounded-[1.6rem] border border-[var(--color-line)] bg-white/90 px-5 py-5 shadow-[0_12px_30px_rgba(49,36,22,0.05)]"
            >
              <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <p className="text-sm leading-7 text-[var(--color-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
