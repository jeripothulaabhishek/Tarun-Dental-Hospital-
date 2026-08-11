"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faqs";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getFaqSchema } from "@/lib/jsonld";

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [openId, setOpenId] = useState<string | null>(null);

  const homeFaqs = faqs.slice(0, 7);
  const faqSchema = getFaqSchema(
    homeFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section
      ref={ref}
      className="section bg-white dark:bg-slate-900"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked "
          titleHighlight="Questions"
          subtitle="Everything you need to know about dental care at Tarun Dental Hospital."
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-3"
          >
            {homeFaqs.map((faq) => (
              <motion.div key={faq.id} variants={staggerItem}>
                <div
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex items-center justify-between w-full p-5 text-left hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
                    aria-expanded={openId === faq.id}
                    id={`faq-btn-${faq.id}`}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                      {openId === faq.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </button>
                  <motion.div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    initial={false}
                    animate={{ height: openId === faq.id ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-5 pb-5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="/faq"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1.5"
            >
              View All FAQs
              <ChevronDown size={14} className="-rotate-90" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
