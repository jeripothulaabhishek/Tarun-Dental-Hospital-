"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Star, ThumbsUp } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { SITE } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    Icon: Users,
    value: SITE.patientsServed,
    suffix: "+",
    label: "Happy Patients",
    description: "Smiles transformed",
  },
  {
    Icon: Award,
    value: SITE.yearsExperience,
    suffix: "+ Years",
    label: "Expert Experience",
    description: "Of dental excellence",
  },
  {
    Icon: Star,
    value: SITE.successRate,
    suffix: "%",
    label: "Success Rate",
    description: "Treatment outcomes",
  },
  {
    Icon: ThumbsUp,
    value: SITE.reviewCount,
    suffix: "+",
    label: "Google Reviews",
    description: `Avg. rating ${SITE.googleRating}★`,
  },
];

export default function Statistics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] py-16 md:py-20 relative overflow-hidden"
      aria-label="Our statistics"
    >
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map(({ Icon, value, suffix, label, description }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] rounded-2xl p-6 lg:p-8 text-center group transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-amber-400 text-amber-400 transition-all duration-300"
              >
                <Icon size={22} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <p className="font-semibold text-white text-sm mb-0.5">
                {label}
              </p>
              <p className="text-xs text-slate-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

