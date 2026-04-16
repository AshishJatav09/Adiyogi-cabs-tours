import type { FaqItem } from "@/shared/types/site";

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="grid gap-4">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[1.7rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,241,232,0.96))] p-6 shadow-[var(--shadow-card)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[var(--color-ink)]">
            <span>{faq.question}</span>
            <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

