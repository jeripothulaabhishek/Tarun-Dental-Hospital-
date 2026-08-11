"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Phone,
  Award,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Activity,
  ShieldCheck,
} from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);
  const { openModal } = useAppointmentModal();

  // Framer Motion Animation Variants for Vercel-style clean reveals
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
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
      aria-label="Hero section"
      id="hero"
    >
      {/* ─── Stripe/Vercel Background Grid & Glowing Orbs ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.6),rgba(2,6,23,1))]" />
      
      {/* Premium Grid Pattern with center fade mask */}
      <div
        className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(circle_at_center,white_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Animated Glowing Orbs */}
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
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
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
        className="absolute bottom-10 -left-20 w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Hero Content ─── */}
      <div className="container relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block — Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Vercel-Style Pill Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="tracking-wide">Best Dental Hospital in Pragathi Nagar</span>
            </motion.div>

            {/* Apple/Vercel Bold Headline */}
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
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                Painless.
              </span>
              <br />
              Dental Care.
            </motion.h1>

            {/* Premium Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal"
            >
              Experience world-class dentistry in Hyderabad. Leveraging digital 3D scans, laser treatment, and advanced sedation to ensure a completely pain-free journey.
            </motion.p>

            {/* Trust Bulletins */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col gap-3.5 mb-8 w-full"
            >
              {[
                "Zero Pain Guarantee with advanced digital anesthesia",
                "15+ Years of Certified Clinic Excellence",
                "4.9★ Google Rating with 1,250+ Verified Patient Reviews",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="font-medium tracking-wide">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Stripe-Style Interactive CTAs */}
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
                className="text-base px-8 py-4.5 rounded-xl shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all duration-300 transform active:scale-95 cursor-pointer"
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
                className="text-base px-8 py-4.5 rounded-xl border border-white/10 hover:bg-slate-900 transition-all duration-300 transform active:scale-95"
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
              className="flex items-center gap-8 w-full pt-6 border-t border-white/5"
            >
              {[
                { value: "15,000+", label: "Happy Smiles" },
                { value: "15+ Years", label: "Clinic Exp." },
                { value: "98.8%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Block — Interactive Scan Console & Glassmorphic Parallax Cards */}
          <div className="lg:col-span-5 relative hidden lg:block">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Main Interactive Scan Console */}
              <div className="w-full h-[450px] rounded-3xl overflow-hidden bg-slate-950/60 backdrop-blur-md border border-white/10 flex flex-col justify-between p-6 shadow-2xl relative">
                
                {/* Tech Console Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-blue-400 animate-pulse" />
                    <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                      Smile design telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                    <span className="text-[9px] font-mono text-teal-400 font-bold">ONLINE</span>
                  </div>
                </div>

                {/* SVG Scanning Target & Dental Structure */}
                <div className="flex-1 flex items-center justify-center relative my-4">
                  {/* Rotating Scanner rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[260px] h-[260px] border border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[220px] h-[220px] border border-dotted border-teal-500/20 rounded-full"
                  />

                  {/* High-tech scanner lines */}
                  <motion.div
                    animate={{ y: [-90, 90, -90] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent z-10"
                  />

                  {/* Stylized Tooth SVG Vector */}
                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 200 200"
                    className="relative z-0"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M100 20 C60 20 40 45 40 85 C40 120 55 140 65 145 C75 150 82 170 85 185 C87 195 90 200 100 200 C110 200 113 195 115 185 C118 170 125 150 135 145 C145 140 160 120 160 85 C160 45 140 20 100 20 Z"
                      fill="url(#toothGrad)"
                    />
                    <path
                      d="M75 140 C85 130 115 130 125 140"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.3"
                    />
                    <circle cx="85" cy="65" r="8" fill="white" opacity="0.3" />
                  </svg>
                </div>

                {/* Tech Console Footer Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 text-[9px] font-mono text-slate-400">
                  <div>
                    <span className="block text-slate-500">PRECISION</span>
                    <span className="font-bold text-slate-200">0.01mm MICRONS</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">TECH</span>
                    <span className="font-bold text-slate-200">3D DSD CBCT</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">ESTHETIC</span>
                    <span className="font-bold text-teal-400 font-sans">A+ PREMIUM</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — Apple-Style Google Review */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 min-w-[200px] shadow-2xl z-20"
              >
                <Card variant="glass" className="p-4.5 rounded-2xl border border-white/15 backdrop-blur-xl bg-slate-950/70">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-[11px] font-bold text-slate-300">Google Review</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white">{SITE.googleRating}</span>
                    <span className="text-xs text-slate-400">/ 5.0</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                    <StarRating rating={5} size={11} />
                    <span className="text-[10px] text-slate-400 font-medium">
                      {SITE.reviewCount.toLocaleString()}+ reviews
                    </span>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 2 — Experience & Trust */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 min-w-[170px] shadow-2xl z-20"
              >
                <Card variant="glass" className="p-4 rounded-2xl border border-white/15 backdrop-blur-xl bg-slate-950/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award size={15} className="text-blue-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Experience</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white">
                    {SITE.yearsExperience}+ Years
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-teal-400 font-semibold">
                    <ShieldCheck size={12} />
                    <span>ISO Certified Clinic</span>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 3 — Advanced Technologies */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-12 shadow-xl z-20"
              >
                <Card variant="glass" className="p-3 rounded-2xl border border-white/15 backdrop-blur-xl bg-slate-950/70 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono">DIGITAL SCANS</p>
                    <p className="text-xs font-bold text-white">100% Painless Tech</p>
                  </div>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ─── Apple-Style Interactive Scroll Indicator ─── */}
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
            <span className="tracking-widest uppercase text-[10px] font-medium group-hover:text-blue-400 transition-colors">
              Explore clinic
            </span>
            <ChevronDown size={16} className="group-hover:text-blue-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
