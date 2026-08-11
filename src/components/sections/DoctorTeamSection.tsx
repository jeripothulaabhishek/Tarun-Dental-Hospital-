"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Calendar, Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { doctors } from "@/data/doctors";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function DoctorTeamSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const leadDoctor = doctors.find((d) => d.isLead) || doctors[0];
  const associateDoctors = doctors.filter((d) => !d.isLead);

  return (
    <section
      ref={ref}
      className="section bg-slate-50 dark:bg-slate-950"
      id="doctors"
      aria-label="Meet our doctors"
    >
      <div className="container">
        <SectionHeader
          label="Specialist Team"
          title="Experienced Dental "
          titleHighlight="Surgeons & Specialists"
          subtitle="Our multi-specialty team brings over 45 combined years of clinical expertise across implantology, root canal therapy, orthodontics, and pediatric care."
          className="mb-14"
        />

        {/* Lead Doctor Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <Card variant="default" className="p-8 md:p-10 border border-blue-100 dark:border-blue-900/50 bg-white dark:bg-slate-900 shadow-xl rounded-3xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Doctor Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-100">
                  <Image
                    src={leadDoctor.image}
                    alt={leadDoctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    Chief Surgeon & Founder
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="badge badge-primary mb-2">
                    <GraduationCap size={13} /> {leadDoctor.qualifications}
                  </span>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-3xl mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {leadDoctor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {leadDoctor.role} • {leadDoctor.experience}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {leadDoctor.bio}
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Clinical Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leadDoctor.specialties.map((spec) => (
                      <span key={spec} className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs rounded-lg font-medium border border-blue-100 dark:border-blue-900">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-1.5 pt-2">
                  {leadDoctor.achievements.map((ach) => (
                    <div key={ach} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    icon={<Calendar size={16} />}
                    className="px-6 py-3 rounded-xl text-sm"
                  >
                    Book Consultation with {leadDoctor.name}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Specialist Team Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {associateDoctors.map((doc) => (
            <motion.article key={doc.id} variants={staggerItem}>
              <Card variant="default" className="h-full flex flex-col p-6 hover:shadow-lg transition-all duration-300">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {doc.experience}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-0.5">
                      {doc.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-xs mb-2">
                      {doc.role}
                    </p>
                    <p className="text-slate-400 text-xs mb-3 font-mono">
                      {doc.qualifications}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star size={13} fill="currentColor" />
                      <span>4.9 / 5.0</span>
                    </div>
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      Book Doctor →
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
