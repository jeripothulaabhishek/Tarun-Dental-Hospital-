"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import Link from "next/link";

export default function AppointmentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 sm:bottom-24 md:bottom-28 left-4 right-4 md:left-auto md:right-20 md:w-80 bg-[#0f1118] rounded-2xl shadow-2xl border border-amber-500/30 z-40 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Book appointment offer"
        >
          {/* Top gradient */}
          <div className="h-1.5 bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b]" />
          <div className="p-5">
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#f9db8d] transition-colors cursor-pointer"
              aria-label="Dismiss popup"
            >
              <X size={18} />
            </button>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0 text-[#f9db8d]">
                <Calendar size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">
                  Free Consultation Today! 🦷
                </p>
                <p className="text-slate-300 text-xs mt-0.5">
                  Book your appointment and get a complimentary dental check-up.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="/contact"
                onClick={dismiss}
                className="btn-primary flex-1 text-sm py-2.5 rounded-xl justify-center"
                style={{ borderRadius: "0.75rem" }}
              >
                Book Now
              </Link>
              <button
                onClick={dismiss}
                className="px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

