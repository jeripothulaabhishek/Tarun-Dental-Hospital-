"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

const partners = [
  "Star Health",
  "Niva Bupa",
  "HDFC Ergo",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Oriental Insurance",
  "United India Insurance",
  "New India Assurance",
];

export default function InsurancePartners() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-[#07080c] border-t border-b border-amber-500/20 relative overflow-hidden"
      id="insurance"
      aria-label="Insurance and payment partners"
    >
      <div className="container relative z-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck size={20} className="text-[#f9db8d]" />
            <p className="text-[#f9db8d] font-mono text-xs uppercase tracking-widest font-bold">INSURANCE & PAYMENTS</p>
          </div>
          <h2 className="text-white text-xl md:text-2xl font-extrabold mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Cashless Hospitalization & Flexible EMI
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            We accept all major insurance plans and offer flexible payment options for your convenience.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#0f1118] rounded-xl border border-amber-500/25 text-slate-200 text-xs sm:text-sm font-semibold hover:border-[#f9db8d] hover:bg-amber-500/10 hover:text-[#f9db8d] transition-all duration-200"
            >
              <ShieldCheck size={14} className="text-[#f9db8d]" />
              {partner}
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] rounded-xl text-[#07080c] text-xs sm:text-sm font-bold shadow-md cursor-default"
          >
            <Star size={14} />
            + Many More
          </div>
        </motion.div>

        <p className="text-center text-xs text-slate-400 mt-6 font-medium">
          Also accept: UPI, Credit/Debit Cards, Net Banking, Cash. No-cost EMI available.
        </p>
      </div>
    </section>
  );
}

