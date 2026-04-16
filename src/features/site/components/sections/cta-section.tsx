import { MessageCircle, Phone } from "lucide-react";

import { contactConfig } from "@/features/site/config/contact";
import { getCustomPackageLink } from "@/features/site/lib/whatsapp";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CTASection({ eyebrow, title, description }: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,250,244,0.98),rgba(239,225,204,0.94))] p-8 text-[var(--color-ink)] shadow-[0_26px_90px_rgba(26,18,11,0.1)] sm:p-12">
        <div className="ornament-ring -right-10 top-[-3.5rem] h-40 w-40 opacity-70" />
        <div className="ornament-ring bottom-[-2.5rem] left-[-1.5rem] h-28 w-28 opacity-55" />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-[15ch] font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-[39rem] text-base leading-8 text-[var(--color-muted)]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={getCustomPackageLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
            >
              <MessageCircle className="h-4 w-4" />
              Plan Custom Yatra
            </a>
            <a
              href={contactConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-surface)]"
            >
              <Phone className="h-4 w-4" />
              {contactConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

