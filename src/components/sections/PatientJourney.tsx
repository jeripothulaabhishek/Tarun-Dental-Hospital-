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
    color: "blue",
  },
  {
    step: "02",
    Icon: ClipboardList,
    title: "Consultation & Diagnosis",
    description:
      "Comprehensive examination with digital X-rays. Clear diagnosis and transparent treatment plan.",
    color: "teal",
  },
  {
    step: "03",
    Icon: Activity,
    title: "Painless Treatment",
    description:
      "State-of-the-art treatment using the latest technology. Comfortable, precise, and effective.",
    color: "purple",
  },
  {
    step: "04",
    Icon: Smile,
    title: "Beautiful Smile",
    description:
      "Walk out with a healthier, brighter smile. Ongoing aftercare support for lasting results.",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-600 to-blue-400",
  teal: "from-teal-600 to-teal-400",
  purple: "from-purple-600 to-purple-400",
  green: "from-green-600 to-green-400",
};

export default function PatientJourney() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-white dark:bg-slate-900"
      id="patient-journey"
      aria-label="Patient journey steps"
    >
      <div className="container">
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
            className="absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 dark:from-blue-900 dark:via-teal-900 dark:to-green-900 hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, Icon, title, description, color }, index) => (
              <motion.article key={step} variants={staggerItem} className="relative text-center">
                {/* Step circle */}
                <div className="relative inline-flex">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-lg mb-5 mx-auto`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-black text-slate-700 dark:text-slate-300">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
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
