"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, CheckCircle2, Calendar } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";
import { DOCTOR, SITE } from "@/lib/constants";
import { IMAGES } from "@/data/images";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DoctorIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] relative overflow-hidden"
      id="doctor"
      aria-label="Meet our doctor"
    >
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ─── Left: Image ─── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 opacity-20 blur-xl" />

              {/* Doctor Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0f1118] aspect-[4/5] flex items-center justify-center border border-amber-500/30 shadow-2xl">
                <Image
                  src={IMAGES.doctors.drTarun}
                  alt={DOCTOR.name}
                  fill
                  className="object-cover object-top filter brightness-95 contrast-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent p-6 flex flex-col justify-end">
                  <p className="text-white font-extrabold text-2xl">{DOCTOR.name}</p>
                  <p className="text-amber-400 font-semibold text-sm">{DOCTOR.qualifications}</p>
                </div>
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 rounded-2xl p-5 text-[#07080c] shadow-2xl border border-amber-300/40"
              >
                <p className="text-4xl font-black">{SITE.yearsExperience}+</p>
                <p className="text-xs font-bold text-[#07080c]">Years of Excellence</p>
              </motion.div>

              {/* Award badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -left-4 bg-[#0f1118] rounded-xl p-3 shadow-xl border border-amber-500/30 backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-amber-400" />
                  <div>
                    <p className="text-xs font-bold text-white">Award Winner</p>
                    <p className="text-[10px] text-amber-300">2023 Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ─── Right: Info ─── */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="section-label">
                  <span className="w-6 h-px bg-amber-400 inline-block" aria-hidden="true" />
                  Meet Your Doctor
                  <span className="w-6 h-px bg-amber-400 inline-block" aria-hidden="true" />
                </p>
                <h2
                  className="font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                >
                  {DOCTOR.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge badge-primary">
                    <GraduationCap size={13} />
                    {DOCTOR.qualifications}
                  </span>
                  <span className="badge badge-accent">
                    <Award size={13} />
                    {DOCTOR.experience}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">
                  {DOCTOR.bio}
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="font-semibold text-amber-400 text-xs uppercase tracking-wider mb-3">
                  Clinical Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/25 text-amber-300 text-sm rounded-lg font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="font-semibold text-amber-400 text-xs uppercase tracking-wider mb-3">
                  Honors & Recognition
                </h3>
                <ul className="space-y-2">
                  {DOCTOR.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 p-4 bg-[#0f1118] border border-amber-500/20 rounded-xl">
                <div className="text-center px-4 border-r border-amber-500/20">
                  <p className="text-3xl font-black text-amber-400">{SITE.googleRating}</p>
                  <StarRating rating={5} size={12} className="justify-center mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    Google Verified Rating
                  </p>
                  <p className="text-slate-400 text-xs">
                    Based on {SITE.reviewCount.toLocaleString()}+ patient reviews
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact" className="btn-primary inline-flex">
                <Calendar size={17} />
                Book Appointment with {DOCTOR.name}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

