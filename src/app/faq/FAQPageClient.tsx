"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { FAQ } from "@/types";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const categories = ["All", "General", "Treatments", "Costs & Payment", "Dental Tourism"];

export default function FAQPageClient({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchSearch =
      !search ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="section bg-[#07080c] relative overflow-hidden">
      <div className="container max-w-3xl relative z-10">
        {/* Search */}
        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-[#0f1118] border border-amber-500/30 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#f9db8d]/20 focus:border-[#f9db8d]"
            aria-label="Search FAQ"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              variant={activeCategory === cat ? "primary" : "white"}
              className="px-4 py-2 text-sm rounded-full cursor-pointer"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3" role="tabpanel">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-400 py-10">No questions found. Try a different search.</p>
          ) : (
            filtered.map((faq) => (
              <Card
                key={faq.id}
                variant="default"
                className="p-0 overflow-hidden bg-[#0f1118] border border-amber-500/20"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex items-center justify-between w-full p-5 text-left hover:bg-[#161924] transition-colors cursor-pointer"
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-semibold text-white text-sm pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#f9db8d]"
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-amber-500/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))
          )}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-[#f9db8d] font-semibold hover:underline">
            Contact us directly
          </a>
        </p>
      </div>
    </section>
  );
}

