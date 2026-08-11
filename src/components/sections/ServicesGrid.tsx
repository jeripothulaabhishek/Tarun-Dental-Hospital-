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

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] relative overflow-hidden"
      id="services"
      aria-label="Our dental services"
    >
      <div className="container relative z-10">
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
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Layers;

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
                    className="h-full relative flex flex-col transition-all duration-300 bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300 text-amber-400">
                      <Icon size={22} />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-base mb-2 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">
                      {service.shortDesc}
                    </p>

                    {/* CTA Arrow */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Bottom gradient bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
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

