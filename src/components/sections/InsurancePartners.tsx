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
      className="py-16 bg-white dark:bg-slate-900 border-t border-b border-slate-100 dark:border-slate-800"
      id="insurance"
      aria-label="Insurance and payment partners"
    >
      <div className="container">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck size={18} className="text-blue-600" />
            <p className="section-label">Insurance & Payments</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
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
              className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 transition-all duration-200"
            >
              <ShieldCheck size={15} className="text-teal-500" />
              {partner}
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-xl text-white text-sm font-semibold"
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
