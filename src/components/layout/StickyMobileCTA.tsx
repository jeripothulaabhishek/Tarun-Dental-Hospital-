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
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#07080c]/95 backdrop-blur-xl border-t border-amber-500/20 safe-area-bottom shadow-[0_-5px_25px_rgba(0,0,0,0.8)]"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-amber-500/20">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex flex-col items-center gap-1 py-3 text-slate-300 hover:text-[#f9db8d] transition-colors"
          aria-label={`Call ${SITE.phone}`}
        >
          <Phone size={20} className="text-[#f9db8d]" />
          <span className="text-[10px] font-semibold tracking-wide">CALL</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-green-400 hover:text-green-300 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-semibold tracking-wide">WHATSAPP</span>
        </a>
        <button
          onClick={() => openModal()}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-[#07080c] font-bold cursor-pointer"
          aria-label="Book appointment"
        >
          <Calendar size={20} />
          <span className="text-[10px] font-extrabold tracking-wide">BOOK</span>
        </button>
      </div>
    </div>
  );
}

