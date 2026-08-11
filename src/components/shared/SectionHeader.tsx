"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className = "",
  light = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.p
          variants={fadeInUp}
          className="section-label justify-center"
          style={{ justifyContent: centered ? "center" : "flex-start" }}
        >
          <span
            className="w-6 h-px bg-amber-400 inline-block"
            aria-hidden="true"
          />
          {label}
          <span
            className="w-6 h-px bg-amber-400 inline-block"
            aria-hidden="true"
          />
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-bold leading-tight mb-4 text-white"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {titleParts[0]}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">{titleHighlight}</span>
        )}
        {titleParts[1]}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg max-w-2xl leading-relaxed text-slate-300 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

