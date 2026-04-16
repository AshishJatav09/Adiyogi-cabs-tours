import type { BookingStep } from "@/shared/types/site";

type BookingStepsProps = {
  steps: BookingStep[];
};

export function BookingSteps({ steps }: BookingStepsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => (
        <article
          key={step.step}
          className="relative overflow-hidden rounded-[1.9rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
        >
          <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(213,171,103,0.14),transparent_68%)]" />
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {step.step}
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            {step.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

