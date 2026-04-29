import { MessageCircle } from "lucide-react";

import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getGeneralBookingLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full border border-[rgba(30,142,90,0.4)] bg-[#1e8e5a] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_44px_rgba(30,142,90,0.34)] transition hover:scale-[1.02] md:inline-flex"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
