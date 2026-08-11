"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function AppointmentCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);
  const { openModal } = useAppointmentModal();

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-[#07080c] border-y border-amber-500/20"
      aria-label="Book appointment call to action"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,219,141,0.12),transparent_70%)]" />
      <div
        className="orb w-[500px] h-[500px] bg-amber-500/10 -top-32 -right-32 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="orb w-[300px] h-[300px] bg-yellow-600/10 -bottom-20 -left-20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="section-label justify-center text-[#f9db8d] font-mono text-xs uppercase tracking-widest font-bold mb-3">
            <span className="w-6 h-px bg-[#f9db8d] inline-block" aria-hidden="true" />
            Take Action Now
            <span className="w-6 h-px bg-[#f9db8d] inline-block" aria-hidden="true" />
          </p>

          <h2
            className="font-black text-white mb-4"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Ready for Your <span className="bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] bg-clip-text text-transparent">Perfect Smile?</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Book a free consultation today. No obligation, no waiting. 
            Start your smile journey in just one click.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => openModal()}
              className="btn-primary text-sm sm:text-base cursor-pointer px-7 sm:px-8 py-3.5 sm:py-4 rounded-full"
              id="cta-book-appointment"
            >
              <Calendar size={18} />
              Book Free Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-green-950/40 hover:bg-green-900/50 backdrop-blur-sm border border-green-500/40 text-green-300 font-semibold rounded-full transition-all duration-200 text-sm sm:text-base shadow-md"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#0f1118] hover:bg-[#161924] backdrop-blur-sm border border-amber-500/30 text-[#f9db8d] font-semibold rounded-full transition-all duration-200 text-sm sm:text-base shadow-md"
            >
              <Phone size={18} className="text-[#f9db8d]" />
              {SITE.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-amber-500/20">
            {[
              "✓ Free Initial Consultation",
              "✓ No Hidden Costs",
              "✓ Flexible EMI Available",
              "✓ Insurance Accepted",
            ].map((badge) => (
              <span key={badge} className="text-[#f9db8d] text-xs sm:text-sm font-semibold">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

