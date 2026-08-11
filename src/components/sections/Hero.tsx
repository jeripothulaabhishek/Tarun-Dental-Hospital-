"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  MessageCircle,
  Phone,
  Award,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { SITE, DOCTOR } from "@/lib/constants";
import { IMAGES } from "@/data/images";
import { getWhatsAppUrl } from "@/lib/utils";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);
  const { openModal } = useAppointmentModal();

  // Framer Motion Animation Variants for clean reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#07080c]"
      aria-label="Hero section"
      id="hero"
    >
      {/* ─── Black & Imperial Gold Radial Grid ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),rgba(7,8,12,1))]" />
      
      {/* Gold Grid Pattern with center fade mask */}
      <div
        className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(circle_at_center,white_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,179,8,1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Animated Glowing Gold Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 -left-20 w-[550px] h-[550px] rounded-full bg-yellow-600/10 blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Hero Content Container ─── */}
      <div className="container relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block — Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Gold Theme Pill Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-amber-950/40 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-[0_1px_12px_rgba(234,179,8,0.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="tracking-wide uppercase text-[11px]">Best Dental Hospital in Pragathi Nagar</span>
            </motion.div>

            {/* Premium Black & Gold Bold Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-extrabold tracking-tight text-white leading-[1.08] mb-6"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
              }}
            >
              Advanced.
              <br />
              <span className="bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] bg-clip-text text-transparent drop-shadow-sm">
                Painless.
              </span>
              <br />
              Dental Care.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal"
            >
              Experience world-class dentistry in Hyderabad under Chief Surgeon {DOCTOR.name}. Leveraging digital 3D scans, laser treatment, and advanced sedation for a 100% pain-free dental journey.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col gap-3.5 mb-8 w-full"
            >
              {[
                "Zero Pain Guarantee with advanced digital anesthesia",
                "15+ Years of Certified Surgical Excellence",
                "4.9★ Google Rating with 1,250+ Verified Patient Reviews",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0 border border-amber-500/30">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="font-medium tracking-wide">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 mb-10 w-full"
            >
              <Button
                onClick={() => openModal()}
                variant="primary"
                icon={<Calendar size={18} />}
                className="text-base px-8 py-4.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform active:scale-95 cursor-pointer"
                id="hero-book-appointment"
              >
                Book Appointment
              </Button>
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                external
                icon={<MessageCircle size={18} />}
                className="text-base px-8 py-4.5 rounded-xl shadow-md hover:shadow-green-500/15 transition-all duration-300 transform active:scale-95"
                id="hero-whatsapp"
              >
                WhatsApp Us
              </Button>
              <Button
                href={`tel:${SITE.phoneRaw}`}
                variant="white"
                external
                icon={<Phone size={18} />}
                className="text-base px-8 py-4.5 rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 transform active:scale-95"
                id="hero-call"
              >
                Call Clinic
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center gap-8 w-full pt-6 border-t border-amber-500/15"
            >
              {[
                { value: "15,000+", label: "Happy Smiles" },
                { value: "15+ Years", label: "Clinic Exp." },
                { value: "98.8%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-amber-400">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Block — Black & Gold Doctor Portrait & Glassmorphism Cards */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Doctor Card Frame */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_50px_rgba(234,179,8,0.15)] bg-gradient-to-b from-[#0f1118] to-[#07080c] backdrop-blur-md group">
                
                {/* Backlight Glow Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-transparent to-yellow-600/10 pointer-events-none z-10" />

                {/* Doctor Photo */}
                <Image
                  src={IMAGES.doctors.drTarun}
                  alt={DOCTOR.name}
                  fill
                  priority
                  className="object-cover object-top filter brightness-95 contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Dark Vignette Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/60 to-transparent z-20 flex flex-col justify-end p-6 md:p-8">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-1">
                      <GraduationCap size={13} className="text-amber-400" />
                      <span>{DOCTOR.qualifications}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {DOCTOR.name}
                    </h2>
                    
                    <p className="text-amber-400 font-semibold text-xs tracking-wider uppercase">
                      {DOCTOR.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — Google Review Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 min-w-[210px] shadow-2xl z-30"
              >
                <Card variant="glass" className="p-4 rounded-2xl border border-amber-500/30 backdrop-blur-xl bg-[#07080c]/85">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-[11px] font-bold text-amber-300">Google Verified</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white">{SITE.googleRating}</span>
                    <span className="text-xs text-slate-400">/ 5.0</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-500/20">
                    <StarRating rating={5} size={11} />
                    <span className="text-[10px] text-slate-400 font-medium">
                      {SITE.reviewCount.toLocaleString()}+ Reviews
                    </span>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 2 — Experience & Trust (Top Right) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 min-w-[180px] shadow-2xl z-30"
              >
                <Card variant="glass" className="p-4 rounded-2xl border border-amber-500/30 backdrop-blur-xl bg-[#07080c]/85">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award size={16} className="text-amber-400" />
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Experience</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white">
                    {SITE.yearsExperience}+ Years
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-300 font-semibold">
                    <ShieldCheck size={12} />
                    <span>ISO Certified Clinic</span>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 3 — Painless Tech Badge (Center Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-12 shadow-xl z-30"
              >
                <Card variant="glass" className="p-3.5 rounded-2xl border border-amber-500/30 backdrop-blur-xl bg-[#07080c]/85 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-300 font-mono">3D DIGITAL CARE</p>
                    <p className="text-xs font-bold text-white">100% Painless Tech</p>
                  </div>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ─── Bottom Scroll Indicator ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12 lg:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40 text-xs cursor-pointer group"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            aria-label="Scroll down"
            role="button"
            tabIndex={0}
          >
            <span className="tracking-widest uppercase text-[10px] font-medium group-hover:text-amber-400 transition-colors">
              Explore clinic
            </span>
            <ChevronDown size={16} className="group-hover:text-amber-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


