import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { doctors } from "@/data/doctors";
import { IMAGES } from "@/data/images";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AppointmentForm from "@/components/shared/AppointmentForm";
import DoctorTeamSection from "@/components/sections/DoctorTeamSection";
import TechnologySection from "@/components/sections/TechnologySection";
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Card from "@/components/ui/Card";

export const metadata: Metadata = genMeta({
  title: "About Tarun Dental Hospital | Best Dentist in Pragathi Nagar",
  description:
    "Learn about Tarun Dental Hospital, our founding vision, advanced digital technology, and meet Dr. Tarun Kumar and specialist dental surgeons. Best dental care in Hyderabad.",
  canonical: `${SITE.url}/about`,
  keywords: ["about tarun dental", "dr tarun kumar dentist", "best dentist hyderabad about"],
});

export default function AboutPage() {
  const leadDoctor = doctors[0];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.8),rgba(2,6,23,1))]" />
        <div className="container relative z-10 text-center max-w-3xl">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-blue-950/80 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-blue-800/40">
              <ShieldCheck size={14} className="text-teal-400" />
              15+ Years of Certified Healthcare Excellence
            </span>
            <h1 className="font-black mb-6" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Redefining <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Dental Hospital</span> Standards
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed font-normal">
              Founded on the principle that world-class, painless dentistry should be accessible to every family in Hyderabad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hospital Story */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800 bg-slate-100">
                <Image
                  src={IMAGES.clinic.reception}
                  alt="Tarun Dental Hospital Clinic Reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">{SITE.name}</p>
                    <p className="text-slate-400 text-xs">{SITE.address.full}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-teal-400 font-bold">
                    ISO 9001:2015
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-5">
                <p className="section-label">Our Journey</p>
                <h2 className="font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  Setting New Benchmarks in <span className="gradient-text">Painless Dental Surgery</span>
                </h2>
                <div className="space-y-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                  <p>
                    Established over 15 years ago in Pragathi Nagar, Tarun Dental Hospital grew from a vision to eliminate the fear associated with dental procedures.
                  </p>
                  <p>
                    Led by Chief Dental Surgeon <strong>{leadDoctor.name}</strong>, our hospital combines multi-disciplinary surgical expertise with world-class digital equipment including 3D CBCT imaging, CAD/CAM ceramic milling, and pain-free diode laser technology.
                  </p>
                  <p>
                    We have successfully treated over 15,000 happy patients, earning a 4.9★ Google rating backed by over 1,250 verified patient reviews.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {[
                    "Digital 3D Smile Diagnostics",
                    "JCI Grade Autoclave Sterilization",
                    "7-Day Emergency Care Helpline",
                    "0% Interest EMI Payment Plans",
                    "International Patient Tourism",
                    "100% Painless Sedation Protocol",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specialist Team Section */}
      <DoctorTeamSection />

      {/* Advanced Technology Section */}
      <TechnologySection />

      {/* Appointment CTA Form */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-bold text-slate-900 dark:text-white text-3xl mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Book Your Consultation
              </h2>
              <p className="text-slate-500 text-sm">Schedule a direct appointment with our specialist dental surgeons.</p>
            </div>
            <Card variant="subtle" className="p-8 border border-slate-200 dark:border-slate-800 shadow-xl rounded-3xl">
              <AppointmentForm />
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
