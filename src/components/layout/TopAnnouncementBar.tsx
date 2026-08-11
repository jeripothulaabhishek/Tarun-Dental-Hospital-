"use client";

import { Phone, Clock, MapPin, Sparkles } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function TopAnnouncementBar() {
  return (
    <div className="bg-[#000000] border-b border-amber-500/20 text-slate-300 text-xs py-2 px-4 hidden md:block">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f9db8d] animate-pulse" />
            <span className="font-semibold text-[#f9db8d]">Emergency Care 7 Days a Week</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock size={13} className="text-[#f9db8d]" />
            <span>Mon–Sun: {SITE.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin size={13} className="text-[#f9db8d]" />
            <span>{SITE.address.street}, {SITE.address.city}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-1.5 font-medium hover:text-[#f9db8d] transition-colors"
          >
            <Phone size={13} className="text-[#f9db8d]" />
            <span>Helpline: {SITE.phone}</span>
          </a>
          <span className="text-amber-500/30">|</span>
          <div className="flex items-center gap-1 text-[#f9db8d] font-semibold">
            <Sparkles size={12} />
            <span>Free 3D Consultation Included</span>
          </div>
        </div>
      </div>
    </div>
  );
}

