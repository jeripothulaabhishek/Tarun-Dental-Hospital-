"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function StickyMobileCTA() {
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);
  const { openModal } = useAppointmentModal();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 safe-area-bottom"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex flex-col items-center gap-1 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
          aria-label={`Call ${SITE.phone}`}
        >
          <Phone size={20} />
          <span className="text-[10px] font-semibold tracking-wide">CALL</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-slate-600 dark:text-slate-400 hover:text-green-600 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-semibold tracking-wide">WHATSAPP</span>
        </a>
        <button
          onClick={() => openModal()}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white cursor-pointer"
          aria-label="Book appointment"
        >
          <Calendar size={20} />
          <span className="text-[10px] font-semibold tracking-wide">BOOK</span>
        </button>
      </div>
    </div>
  );
}
