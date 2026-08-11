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
      className="relative py-20 overflow-hidden"
      aria-label="Book appointment call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600" />
      <div
        className="orb w-[500px] h-[500px] bg-white/5 -top-32 -right-32"
        aria-hidden="true"
      />
      <div
        className="orb w-[300px] h-[300px] bg-teal-300/10 -bottom-20 -left-20"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="section-label justify-center text-blue-200">
            <span className="w-6 h-px bg-blue-200 inline-block" aria-hidden="true" />
            Take Action Now
            <span className="w-6 h-px bg-blue-200 inline-block" aria-hidden="true" />
          </p>

          <h2
            className="font-black text-white mb-4"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Ready for Your Perfect Smile?
          </h2>

          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book a free consultation today. No obligation, no waiting. 
            Start your smile journey in just one click.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="btn-white text-base cursor-pointer"
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
              className="flex items-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-200 text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-200 text-base"
            >
              <Phone size={18} />
              {SITE.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/20">
            {[
              "✓ Free Initial Consultation",
              "✓ No Hidden Costs",
              "✓ Flexible EMI Available",
              "✓ Insurance Accepted",
            ].map((badge) => (
              <span key={badge} className="text-blue-100 text-sm font-medium">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
