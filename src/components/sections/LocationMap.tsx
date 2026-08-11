"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { SITE } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

export default function LocationMap() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section bg-[#07080c] relative overflow-hidden"
      id="location"
      aria-label="Our location and contact information"
    >
      <div className="container relative z-10">
        <SectionHeader
          label="Find Us"
          title="Visit Our Clinic in "
          titleHighlight="Pragathi Nagar"
          subtitle="Conveniently located in the heart of Pragathi Nagar, Hyderabad. Easy parking available."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Address */}
            <div className="bg-[#0f1118] rounded-2xl p-5 border border-amber-500/20">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/25 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {SITE.address.full}
                  </p>
                  <a
                    href={SITE.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-semibold mt-2 hover:gap-2.5 transition-all"
                  >
                    <Navigation size={12} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#0f1118] rounded-2xl p-5 border border-amber-500/20">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/25 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Clock size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm mb-2">Clinic Hours</p>
                  {[
                    { day: "Mon – Fri", hours: SITE.hours.weekday },
                    { day: "Saturday", hours: SITE.hours.saturday },
                    { day: "Sunday", hours: SITE.hours.sunday },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">{day}</span>
                      <span className="font-semibold text-slate-200">{hours}</span>
                    </div>
                  ))}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Emergency care available
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#0f1118] rounded-2xl p-5 border border-amber-500/20">
              <div className="space-y-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/25 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#07080c] transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="font-semibold text-slate-200 text-sm group-hover:text-amber-400 transition-colors">
                      {SITE.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/25 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#07080c] transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="font-semibold text-slate-200 text-sm group-hover:text-amber-400 transition-colors">
                      {SITE.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-amber-500/25 bg-[#0f1118] h-[380px] sm:h-[450px] lg:h-full relative shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3985!3d17.4978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTarun+Dental+Hospital+Pragathi+Nagar+Hyderabad!5e0!3m2!1sen!2sin!4v1000000"
              className="w-full h-full border-0 min-h-[350px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tarun Dental Hospital location map"
              aria-label="Google Maps showing Tarun Dental Hospital location in Pragathi Nagar, Hyderabad"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

