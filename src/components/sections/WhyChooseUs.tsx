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
  },
  {
    Icon: Cpu,
    title: "Latest Technology",
    description: "Digital X-rays, 3D imaging, CEREC CAD/CAM, and laser dentistry for precise results.",
  },
  {
    Icon: Shield,
    title: "Safe & Sterile",
    description: "Hospital-grade sterilization, single-use instruments, and strict infection control protocols.",
  },
  {
    Icon: Award,
    title: "Award-Winning Care",
    description: "Recognized as the best dental clinic in Pragathi Nagar by multiple healthcare bodies.",
  },
  {
    Icon: Clock,
    title: "Convenient Hours",
    description: "Open 7 days a week with evening appointments. Emergency dental care always available.",
  },
  {
    Icon: Heart,
    title: "Patient-Centered",
    description: "We treat every patient like family. Your comfort and satisfaction are our top priorities.",
  },
  {
    Icon: Globe,
    title: "Global Standards",
    description: "International training and certifications. Treatment quality at par with the world's best clinics.",
  },
  {
    Icon: Smile,
    title: "Guaranteed Results",
    description: "We stand behind our work with quality guarantees and comprehensive aftercare support.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] relative overflow-hidden"
      id="why-us"
      aria-label="Why choose Tarun Dental Hospital"
    >
      <div className="container relative z-10">
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
          {reasons.map(({ Icon, title, description }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="bg-[#0f1118] rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] transition-all duration-300 group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-amber-400 text-amber-400 transition-all duration-300"
              >
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                {title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

