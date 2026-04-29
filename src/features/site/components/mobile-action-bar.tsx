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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[rgba(252,248,242,0.95)] px-2 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur md:hidden sm:px-3 sm:pb-[calc(12px+env(safe-area-inset-bottom))] sm:pt-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <a
          href={getGeneralBookingLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1e8e5a] px-2 py-2.5 text-[11px] font-semibold text-white shadow-[0_10px_20px_rgba(30,142,90,0.26)] sm:gap-2 sm:px-3 sm:py-3 sm:text-xs"
        >
          <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="truncate">{localize(locale, "WhatsApp", "WhatsApp")}</span>
        </a>
        <a
          href={contactConfig.phoneHref}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2 py-2.5 text-[11px] font-semibold text-[var(--color-ink)] sm:gap-2 sm:px-3 sm:py-3 sm:text-xs"
        >
          <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="truncate">{localize(locale, "Call Now", "Call Now")}</span>
        </a>
        <a
          href={bookHref || getGeneralBookingLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--color-accent)] px-2 py-2.5 text-[11px] font-semibold text-white shadow-[0_10px_20px_rgba(181,106,47,0.26)] sm:gap-2 sm:px-3 sm:py-3 sm:text-xs"
        >
          <Ticket className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="truncate">{localize(locale, "Book Package", "Book Package")}</span>
        </a>
      </div>
    </div>
  );
}

