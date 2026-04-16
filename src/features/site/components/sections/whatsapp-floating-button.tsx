import { MessageCircle } from "lucide-react";

import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getGeneralBookingLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1e8e5a] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,142,90,0.35)] transition hover:scale-[1.02]"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

