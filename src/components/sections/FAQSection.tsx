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
      className="section bg-[#07080c] relative overflow-hidden"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container relative z-10">
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
                  className="bg-[#0f1118] rounded-xl border border-amber-500/20 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex items-center justify-between w-full p-5 text-left hover:bg-[#161924] transition-colors"
                    aria-expanded={openId === faq.id}
                    id={`faq-btn-${faq.id}`}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span className="font-semibold text-white text-sm pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
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
                    <p className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-amber-500/10 pt-3">
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
            className="text-center mt-10"
          >
            <a
              href="/faq"
              className="btn-secondary text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2"
            >
              <span>View All FAQs</span>
              <ChevronDown size={14} className="-rotate-90 text-[#f9db8d]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

