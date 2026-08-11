"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);

  return (
    <motion.div
      className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25d366] hover:bg-[#1fba5a] rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
        <MessageCircle size={26} className="text-white fill-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
