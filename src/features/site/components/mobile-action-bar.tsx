import { MessageCircle, Phone, Ticket } from "lucide-react";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

type MobileActionBarProps = {
  bookHref?: string;
  locale: Locale;
};

export function MobileActionBar({ bookHref, locale }: MobileActionBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[rgba(255,250,244,0.96)] px-3 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-3">
        <a
          href={getGeneralBookingLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e8e5a] px-3 py-3 text-xs font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          {localize(locale, "WhatsApp", "व्हाट्सऐप")}
        </a>
        <a
          href={contactConfig.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3 py-3 text-xs font-semibold text-[var(--color-ink)]"
        >
          <Phone className="h-4 w-4" />
          {localize(locale, "Call Now", "कॉल करें")}
        </a>
        <a
          href={bookHref || getGeneralBookingLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-3 text-xs font-semibold text-white"
        >
          <Ticket className="h-4 w-4" />
          {localize(locale, "Book Package", "बुक करें")}
        </a>
      </div>
    </div>
  );
}

