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
          className="group rounded-[1.6rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(226,242,249,0.94))] p-5 shadow-[var(--shadow-card)] sm:p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-ink)] sm:text-lg">
            <span>{faq.question}</span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(181,106,47,0.28)] text-sm text-[var(--color-accent)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

