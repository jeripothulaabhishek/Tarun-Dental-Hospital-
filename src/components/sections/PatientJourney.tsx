"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ClipboardList, Activity, Smile } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    step: "01",
    Icon: Phone,
    title: "Book Appointment",
    description:
      "Call, WhatsApp, or book online. Get an appointment confirmed within 30 minutes.",
  },
  {
    step: "02",
    Icon: ClipboardList,
    title: "Consultation & Diagnosis",
    description:
      "Comprehensive examination with digital X-rays. Clear diagnosis and transparent treatment plan.",
  },
  {
    step: "03",
    Icon: Activity,
    title: "Painless Treatment",
    description:
      "State-of-the-art treatment using the latest technology. Comfortable, precise, and effective.",
  },
  {
    step: "04",
    Icon: Smile,
    title: "Beautiful Smile",
    description:
      "Walk out with a healthier, brighter smile. Ongoing aftercare support for lasting results.",
  },
];

export default function PatientJourney() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] relative overflow-hidden"
      id="patient-journey"
      aria-label="Patient journey steps"
    >
      <div className="container relative z-10">
        <SectionHeader
          label="How It Works"
          title="Your Journey to a "
          titleHighlight="Perfect Smile"
          subtitle="From your first call to your final smile reveal — we make the entire process simple and stress-free."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connector line — desktop */}
          <div
            className="absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-amber-500/20 via-yellow-500/40 to-amber-500/20 hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, Icon, title, description }, index) => (
              <motion.article key={step} variants={staggerItem} className="relative text-center">
                {/* Step circle */}
                <div className="relative inline-flex">
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.3)] mb-5 mx-auto text-[#07080c]"
                  >
                    <Icon size={28} />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0f1118] border-2 border-amber-400 flex items-center justify-center text-xs font-black text-amber-400">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-bold text-white text-base mb-2">
                  {title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

