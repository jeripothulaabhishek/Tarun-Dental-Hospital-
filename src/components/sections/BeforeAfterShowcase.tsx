"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ArrowRightLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { beforeAfterCases } from "@/data/beforeAfter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BeforeAfterShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({});

  const categories = ["All", "Smile Makeover", "Teeth Whitening", "Orthodontics", "Dental Implants"];

  const filteredCases = activeCategory === "All"
    ? beforeAfterCases
    : beforeAfterCases.filter((c) => c.category === activeCategory);

  const handleSliderChange = (id: string, val: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section
      className="section bg-white dark:bg-slate-900 overflow-hidden"
      id="before-after"
      aria-label="Before and after treatment showcase"
    >
      <div className="container">
        <SectionHeader
          label="Proven Smile Results"
          title="Transformations That "
          titleHighlight="Speak For Themselves"
          subtitle="Drag the interactive slider on any case to witness real clinical smile restoration results."
          className="mb-10"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Before / After Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => {
              const sliderPos = sliderPositions[item.id] ?? 50;

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card variant="default" className="p-0 overflow-hidden group border border-slate-200 dark:border-slate-800">
                    {/* Header bar */}
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {item.title}
                        </h3>
                      </div>
                      {item.isDemo && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                          <ShieldCheck size={11} />
                          Clinical Demo Case
                        </span>
                      )}
                    </div>

                    {/* Interactive Image Splitter */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden select-none bg-slate-950">
                      {/* AFTER Image (Full background) */}
                      <Image
                        src={item.afterImage}
                        alt={`${item.title} After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm">
                        AFTER
                      </div>

                      {/* BEFORE Image (Clipped overlay) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPos}%` }}
                      >
                        <Image
                          src={item.beforeImage}
                          alt={`${item.title} Before`}
                          fill
                          className="object-cover max-w-none"
                          style={{ width: "100%", height: "100%" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm">
                          BEFORE
                        </div>
                      </div>

                      {/* Divider Handle */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] z-10 cursor-ew-resize flex items-center justify-center"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center -ml-3.5 border-2 border-blue-500">
                          <ArrowRightLeft size={14} className="text-blue-600" />
                        </div>
                      </div>

                      {/* Native Range Control for Touch & Drag */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        aria-label={`Slide to compare before and after for ${item.title}`}
                      />
                    </div>

                    {/* Footer Info */}
                    <div className="p-5 space-y-3">
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <CheckCircle2 size={13} className="text-teal-500" />
                          <span>Treatment: <strong>{item.treatment}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Sparkles size={13} className="text-blue-500" />
                          <span>Duration: <strong>{item.duration}</strong></span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            href="/contact"
            variant="primary"
            icon={<Calendar size={16} />}
            className="px-8 py-3.5 rounded-xl shadow-lg"
          >
            Schedule Your Free Smile Analysis
          </Button>
        </div>
      </div>
    </section>
  );
}
