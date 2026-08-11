"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Layers, Activity, Smile, AlignJustify, Baby, Globe,
  Zap, Scissors, Crown, Sparkles, AlertCircle, ChevronRight,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  tooth: Layers,
  activity: Activity,
  smile: Smile,
  "align-justify": AlignJustify,
  baby: Baby,
  globe: Globe,
  zap: Zap,
  scissors: Scissors,
  crown: Crown,
  layers: Sparkles,
  "alert-circle": AlertCircle,
};

const colorPairs = [
  { bg: "from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20", icon: "text-blue-600", border: "hover:border-blue-300 dark:hover:border-blue-700" },
  { bg: "from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20", icon: "text-teal-600", border: "hover:border-teal-300 dark:hover:border-teal-700" },
  { bg: "from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20", icon: "text-purple-600", border: "hover:border-purple-300 dark:hover:border-purple-700" },
  { bg: "from-rose-50 to-rose-100/50 dark:from-rose-950/30 dark:to-rose-900/20", icon: "text-rose-600", border: "hover:border-rose-300 dark:hover:border-rose-700" },
  { bg: "from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20", icon: "text-amber-600", border: "hover:border-amber-300 dark:hover:border-amber-700" },
  { bg: "from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20", icon: "text-green-600", border: "hover:border-green-300 dark:hover:border-green-700" },
];

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-slate-50 dark:bg-slate-950"
      id="services"
      aria-label="Our dental services"
    >
      <div className="container">
        <SectionHeader
          label="Our Services"
          title="Complete Dental Care "
          titleHighlight="Under One Roof"
          subtitle="From routine check-ups to complex smile transformations — we offer a comprehensive range of dental treatments using state-of-the-art technology."
          className="mb-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            const colors = colorPairs[index % colorPairs.length];

            return (
              <motion.article key={service.id} variants={staggerItem}>
                <Link
                  href={`/treatments/${service.slug}`}
                  aria-label={`Learn about ${service.title}`}
                  className="block h-full group"
                >
                  <Card
                    variant="default"
                    hoverEffect="lift"
                    className={cn(
                      "h-full relative flex flex-col transition-all duration-300",
                      colors.border
                    )}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} className={colors.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                      {service.shortDesc}
                    </p>

                    {/* CTA Arrow */}
                    <div className={`flex items-center gap-1 text-xs font-semibold ${colors.icon} group-hover:gap-2 transition-all`}>
                      Learn More
                      <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Bottom gradient bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.bg} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </Card>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Button
            href="/treatments"
            variant="secondary"
            icon={<ChevronRight size={16} />}
            iconPosition="right"
          >
            View All Treatments
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
