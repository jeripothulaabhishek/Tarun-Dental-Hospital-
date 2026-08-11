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
    color: "blue",
  },
  {
    Icon: Award,
    value: SITE.yearsExperience,
    suffix: "+ Years",
    label: "Expert Experience",
    description: "Of dental excellence",
    color: "teal",
  },
  {
    Icon: Star,
    value: SITE.successRate,
    suffix: "%",
    label: "Success Rate",
    description: "Treatment outcomes",
    color: "yellow",
  },
  {
    Icon: ThumbsUp,
    value: SITE.reviewCount,
    suffix: "+",
    label: "Google Reviews",
    description: `Avg. rating ${SITE.googleRating}★`,
    color: "green",
  },
];

const colorMap = {
  blue: "bg-blue-50 dark:bg-blue-950/20 text-blue-600",
  teal: "bg-teal-50 dark:bg-teal-950/20 text-teal-600",
  yellow: "bg-yellow-50 dark:bg-yellow-950/20 text-yellow-500",
  green: "bg-green-50 dark:bg-green-950/20 text-green-600",
};

export default function Statistics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section bg-white dark:bg-slate-900 py-16 md:py-20"
      aria-label="Our statistics"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map(({ Icon, value, suffix, label, description, color }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="card-premium p-6 lg:p-8 text-center group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${colorMap[color as keyof typeof colorMap]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={22} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">
                {label}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
