"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, CheckCircle2, Calendar } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";
import { DOCTOR, SITE } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DoctorIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section bg-white dark:bg-slate-900"
      id="doctor"
      aria-label="Meet our doctor"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ─── Left: Image ─── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 opacity-10 dark:opacity-20" />

              {/* Doctor image placeholder */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-blue-950/30 aspect-[4/5] flex items-center justify-center border border-slate-200 dark:border-slate-700">
                {/* SVG Doctor silhouette */}
                <svg
                  width="240"
                  height="320"
                  viewBox="0 0 240 320"
                  className="opacity-40"
                  aria-hidden="true"
                >
                  <circle cx="120" cy="80" r="55" fill="#2563eb" opacity="0.6" />
                  <path
                    d="M40 240 Q40 170 120 160 Q200 170 200 240 L200 320 L40 320 Z"
                    fill="#0f172a"
                    opacity="0.4"
                  />
                  <path
                    d="M95 160 Q95 195 120 200 Q145 195 145 160"
                    fill="#2563eb"
                    opacity="0.5"
                  />
                  {/* Stethoscope */}
                  <circle cx="140" cy="220" r="12" fill="none" stroke="#2563eb" strokeWidth="3" opacity="0.6" />
                  <path d="M140 208 Q140 190 155 185" stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.6" />
                  <circle cx="158" cy="183" r="5" fill="#2563eb" opacity="0.6" />
                </svg>
                {/* Replace with: <Image src="/images/doctor.jpg" alt="Dr. Tarun Kumar" fill className="object-cover" /> */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <p className="text-white font-bold text-xl">{DOCTOR.name}</p>
                  <p className="text-blue-200 text-sm">{DOCTOR.qualifications}</p>
                </div>
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-5 text-white shadow-xl"
              >
                <p className="text-4xl font-black">{SITE.yearsExperience}+</p>
                <p className="text-xs font-medium text-blue-100">Years of Excellence</p>
              </motion.div>

              {/* Award badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-lg border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-yellow-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">Award Winner</p>
                    <p className="text-[10px] text-slate-400">2023 Excellence</p>
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
                  <span className="w-6 h-px bg-blue-600 inline-block" aria-hidden="true" />
                  Meet Your Doctor
                  <span className="w-6 h-px bg-blue-600 inline-block" aria-hidden="true" />
                </p>
                <h2
                  className="font-bold text-slate-900 dark:text-white mb-3"
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
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                  {DOCTOR.bio}
                </p>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {DOCTOR.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={15} className="text-teal-500 mt-0.5 flex-shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-center px-4 border-r border-slate-200 dark:border-slate-700">
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{SITE.googleRating}</p>
                  <StarRating rating={5} size={12} className="justify-center mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
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
