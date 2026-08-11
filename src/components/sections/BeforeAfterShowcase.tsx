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
      className="section bg-[#07080c] relative overflow-hidden"
      id="before-after"
      aria-label="Before and after treatment showcase"
    >
      <div className="container relative z-10">
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
                  ? "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-[#07080c] shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-[#0f1118] border border-amber-500/20 text-slate-300 hover:border-amber-500/40 hover:text-amber-400"
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
                  <Card variant="default" className="p-0 overflow-hidden group border border-amber-500/20 bg-[#0f1118]">
                    {/* Header bar */}
                    <div className="p-5 bg-[#161924] border-b border-amber-500/20 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase font-mono">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-white text-base">
                          {item.title}
                        </h3>
                      </div>
                      {item.isDemo && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                          <ShieldCheck size={11} />
                          Clinical Demo Case
                        </span>
                      )}
                    </div>

                    {/* Interactive Image Splitter */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden select-none bg-[#07080c]">
                      {/* AFTER Image (Full background) */}
                      <Image
                        src={item.afterImage}
                        alt={`${item.title} After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#07080c] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm">
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
                        <div className="absolute top-3 left-3 bg-[#07080c]/90 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm border border-amber-500/20">
                          BEFORE
                        </div>
                      </div>

                      {/* Divider Handle */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 cursor-ew-resize flex items-center justify-center"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#07080c] text-amber-400 shadow-xl flex items-center justify-center -ml-3.5 border-2 border-amber-400">
                          <ArrowRightLeft size={14} className="text-amber-400" />
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
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-amber-500/20 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <CheckCircle2 size={13} className="text-amber-400" />
                          <span>Treatment: <strong className="text-white">{item.treatment}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Sparkles size={13} className="text-amber-400" />
                          <span>Duration: <strong className="text-white">{item.duration}</strong></span>
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

