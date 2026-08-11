"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Cpu, Clock, Smile, Heart, Award, Globe, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

const reasons = [
  {
    Icon: Zap,
    title: "Painless Dentistry",
    description: "Advanced anesthesia and gentle techniques ensure a completely comfortable experience.",
    color: "yellow",
  },
  {
    Icon: Cpu,
    title: "Latest Technology",
    description: "Digital X-rays, 3D imaging, CEREC CAD/CAM, and laser dentistry for precise results.",
    color: "blue",
  },
  {
    Icon: Shield,
    title: "Safe & Sterile",
    description: "Hospital-grade sterilization, single-use instruments, and strict infection control protocols.",
    color: "green",
  },
  {
    Icon: Award,
    title: "Award-Winning Care",
    description: "Recognized as the best dental clinic in Pragathi Nagar by multiple healthcare bodies.",
    color: "purple",
  },
  {
    Icon: Clock,
    title: "Convenient Hours",
    description: "Open 7 days a week with evening appointments. Emergency dental care always available.",
    color: "teal",
  },
  {
    Icon: Heart,
    title: "Patient-Centered",
    description: "We treat every patient like family. Your comfort and satisfaction are our top priorities.",
    color: "rose",
  },
  {
    Icon: Globe,
    title: "Global Standards",
    description: "International training and certifications. Treatment quality at par with the world's best clinics.",
    color: "indigo",
  },
  {
    Icon: Smile,
    title: "Guaranteed Results",
    description: "We stand behind our work with quality guarantees and comprehensive aftercare support.",
    color: "orange",
  },
];

const colorMap: Record<string, string> = {
  yellow: "bg-yellow-50 dark:bg-yellow-950/20 text-yellow-600",
  blue: "bg-blue-50 dark:bg-blue-950/20 text-blue-600",
  green: "bg-green-50 dark:bg-green-950/20 text-green-600",
  purple: "bg-purple-50 dark:bg-purple-950/20 text-purple-600",
  teal: "bg-teal-50 dark:bg-teal-950/20 text-teal-600",
  rose: "bg-rose-50 dark:bg-rose-950/20 text-rose-600",
  indigo: "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600",
  orange: "bg-orange-50 dark:bg-orange-950/20 text-orange-600",
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-slate-50 dark:bg-slate-950"
      id="why-us"
      aria-label="Why choose Tarun Dental Hospital"
    >
      <div className="container">
        <SectionHeader
          label="Why Choose Us"
          title="The Tarun Dental "
          titleHighlight="Difference"
          subtitle="8 reasons why over 15,000 patients trust us with their smiles."
          className="mb-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map(({ Icon, title, description, color }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`w-11 h-11 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                {title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
