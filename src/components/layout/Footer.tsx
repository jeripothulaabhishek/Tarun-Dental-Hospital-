"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronRight,
  Calendar,
} from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);
  const { openModal } = useAppointmentModal();
  const year = 2026;

  return (
    <footer
      className="bg-[#050507] text-white border-t border-amber-500/20"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ─── Top CTA Strip ─── */}
      <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-[#07080c]">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#07080c]">
                Ready to Transform Your Smile?
              </p>
              <p className="text-[#07080c]/80 text-sm font-medium mt-0.5">
                Book your free consultation today — no obligation
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openModal()}
                className="px-6 py-3 rounded-full bg-[#07080c] text-amber-400 font-bold text-sm hover:bg-[#12141d] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Calendar size={15} />
                Book Appointment
              </button>
              <a href={`tel:${SITE.phoneRaw}`} className="px-6 py-3 rounded-full bg-[#07080c]/90 text-white font-bold text-sm hover:bg-[#07080c] transition-all shadow-md flex items-center gap-2">
                <Phone size={15} className="text-amber-400" />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Footer ─── */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2C8.5 2 6 4.5 6 7c0 1.5.6 2.8 1.5 3.8C6.8 12 6 14 6 16c0 2.2 1.3 4 3 4.7V21a1 1 0 002 0v-.3c1.7-.7 3-2.5 3-4.7 0-2-.8-4-1.5-5.2C13.4 9.8 14 8.5 14 7c0-2.5-2.5-5-2-5z"
                    fill="#07080c"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-amber-400 text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Tarun Dental Hospital
                </div>
                <div className="text-amber-300/70 text-[10px] tracking-wide">
                  Pragathi Nagar, Hyderabad
                </div>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Advanced painless dental care with world-class technology. 
              Serving Hyderabad with pride for {SITE.yearsExperience}+ years.
            </p>
            {/* Google Rating */}
            <div className="flex items-center gap-2 bg-[#0f1118] border border-amber-500/20 rounded-xl p-3 w-fit">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-sm">{SITE.googleRating}</span>
                  <StarRating rating={5} size={11} />
                </div>
                <p className="text-amber-300/80 text-[10px]">{SITE.reviewCount.toLocaleString()}+ reviews</p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { href: SITE.social.facebook, label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { href: SITE.social.instagram, label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" },
                { href: SITE.social.youtube, label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
                { href: SITE.social.twitter, label: "X (Twitter)", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0f1118] border border-amber-500/20 hover:border-amber-400 hover:bg-amber-400 hover:text-[#07080c] flex items-center justify-center text-amber-400 transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-amber-400 font-semibold text-xs mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    <ChevronRight size={13} className="text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 text-sm transition-colors"
                >
                  <ChevronRight size={13} className="text-amber-400" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Treatments */}
          <div>
            <h3 className="text-amber-400 font-semibold text-xs mb-4 tracking-wider uppercase">
              Treatments
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Dental Implants", href: "/treatments/dental-implants" },
                { label: "Root Canal", href: "/treatments/root-canal" },
                { label: "Smile Designing", href: "/treatments/smile-designing" },
                { label: "Orthodontics", href: "/treatments/orthodontics" },
                { label: "Kids Dentistry", href: "/treatments/kids-dentistry" },
                { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
                { label: "Dental Tourism", href: "/treatments/dental-tourism" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    <ChevronRight size={13} className="text-amber-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-amber-400 font-semibold text-xs mb-4 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
                  aria-label={`Call ${SITE.phone}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0f1118] border border-amber-500/20 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-[#07080c] flex items-center justify-center flex-shrink-0 transition-colors text-amber-400">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">{SITE.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0f1118] border border-amber-500/20 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-[#07080c] flex items-center justify-center flex-shrink-0 transition-colors text-amber-400">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email</p>
                    <p className="text-sm font-medium">{SITE.email}</p>
                  </div>
                </a>
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-[#0f1118] border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Address</p>
                  <p className="text-sm font-medium">{SITE.address.full}</p>
                </div>
              </li>
              <li className="flex gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-[#0f1118] border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Hours</p>
                  <p className="text-sm">Mon–Fri: {SITE.hours.weekday}</p>
                  <p className="text-sm">Sat: {SITE.hours.saturday}</p>
                  <p className="text-sm">Sun: {SITE.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-amber-500/20 bg-[#030305]">
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              © {year} {SITE.name}. All rights reserved. Made with ❤️ in Hyderabad.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

