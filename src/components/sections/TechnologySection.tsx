"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { technologyList } from "@/data/technology";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function TechnologySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] text-white relative overflow-hidden"
      id="technology"
      aria-label="Dental technology and equipment"
    >
      {/* Subtle Gold Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader
          label="Cutting-Edge Equipment"
          title="World-Class "
          titleHighlight="Digital Technology"
          subtitle="We invest in premier German and US digital dental equipment to make every treatment faster, pain-free, and remarkably accurate."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologyList.map((tech) => (
            <motion.article key={tech.id} variants={staggerItem}>
              <Card
                variant="glass"
                className="h-full flex flex-col p-0 overflow-hidden border border-amber-500/20 bg-[#0f1118]/80 backdrop-blur-md hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 group"
              >
                {/* Tech Image */}
                <div className="relative w-full h-48 overflow-hidden bg-[#07080c]">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#07080c] text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded-full uppercase backdrop-blur-sm shadow-md">
                    {tech.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1.5 group-hover:text-amber-400 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-amber-400 text-xs font-semibold mb-3 flex items-center gap-1">
                      <Zap size={12} />
                      {tech.tagline}
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>

                  {/* Patient Benefit Highlight */}
                  <div className="pt-4 border-t border-amber-500/20 space-y-2">
                    <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-3 text-xs text-amber-300">
                      <strong className="block text-amber-400 font-semibold mb-0.5">Patient Advantage:</strong>
                      {tech.patientBenefit}
                    </div>

                    <ul className="space-y-1 pt-2">
                      {tech.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-[11px] text-slate-300 font-mono">
                          <CheckCircle2 size={12} className="text-amber-400" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

