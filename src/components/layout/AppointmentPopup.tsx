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
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Book appointment offer"
        >
          {/* Top gradient */}
          <div className="h-1.5 bg-gradient-to-r from-blue-600 to-teal-500" />
          <div className="p-5">
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Dismiss popup"
            >
              <X size={18} />
            </button>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  Free Consultation Today! 🦷
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
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
                className="px-4 py-2.5 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
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
