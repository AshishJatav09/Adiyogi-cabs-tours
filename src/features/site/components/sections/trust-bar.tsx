import { ShieldCheck } from "lucide-react";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:-mt-10 sm:px-6 lg:px-10">
      <div className="section-shell mx-auto max-w-7xl rounded-[1.6rem] px-3 py-3.5 sm:rounded-[2rem] sm:px-6 sm:py-5 lg:px-8">
        <div className="mx-auto grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="relative flex h-full items-start gap-2.5 rounded-[1.15rem] border border-[var(--color-line)] bg-white/88 px-3 py-3 shadow-[0_14px_28px_rgba(16,46,65,0.08)] sm:gap-3 sm:rounded-[1.4rem] sm:px-5 sm:py-5"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(181,106,47,0.12)] sm:h-6 sm:w-6">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-accent)] sm:h-4 sm:w-4" />
              </div>
              <p className="text-xs leading-6 text-[var(--color-muted)] sm:text-sm sm:leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

