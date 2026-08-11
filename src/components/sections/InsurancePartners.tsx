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
      className="py-16 bg-[#07080c] border-t border-b border-amber-500/20 relative overflow-hidden"
      id="insurance"
      aria-label="Insurance and payment partners"
    >
      <div className="container relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck size={18} className="text-amber-400" />
            <p className="section-label">Insurance & Payments</p>
          </div>
          <p className="text-slate-300 text-sm">
            We accept all major insurance plans and offer flexible payment options
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-2 px-5 py-3 bg-[#0f1118] rounded-xl border border-amber-500/20 text-slate-300 text-sm font-semibold hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200"
            >
              <ShieldCheck size={15} className="text-amber-400" />
              {partner}
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl text-[#07080c] text-sm font-bold shadow-md"
          >
            <Star size={15} />
            + Many More
          </div>
        </motion.div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Also accept: UPI, Credit/Debit Cards, Net Banking, Cash. No-cost EMI available.
        </p>
      </div>
    </section>
  );
}

