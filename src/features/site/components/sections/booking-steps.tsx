import type { BookingStep } from "@/shared/types/site";

type BookingStepsProps = {
  steps: BookingStep[];
};

export function BookingSteps({ steps }: BookingStepsProps) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => (
        <article
          key={step.step}
          className="relative overflow-hidden rounded-[1.4rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(226,242,249,0.94))] p-4 shadow-[var(--shadow-card)] sm:rounded-[1.8rem] sm:p-6"
        >
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(216,165,92,0.22),transparent_70%)] sm:h-24 sm:w-24" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.24em]">
            {step.step}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)] sm:mt-4 sm:text-[1.75rem]">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:mt-4 sm:leading-7">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

