"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import AppointmentForm from "@/components/shared/AppointmentForm";

interface AppointmentModalContextType {
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
  preselectedService?: string;
}

const AppointmentModalContext = createContext<AppointmentModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export const useAppointmentModal = () => useContext(AppointmentModalContext);

export function AppointmentModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

  const openModal = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreselectedService(undefined);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AppointmentModalContext.Provider value={{ openModal, closeModal, isOpen, preselectedService }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[100]"
            />

            {/* Modal Box */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] overflow-y-auto pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 pointer-events-auto my-8 overflow-hidden relative"
                role="dialog"
                aria-modal="true"
                aria-label="Book Appointment Modal"
              >
                {/* Header Strip */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 p-6 text-white relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
                    aria-label="Close appointment modal"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        Book Free Dental Consultation
                      </h3>
                      <p className="text-blue-100 text-xs mt-0.5">
                        Guaranteed callback within 30 minutes • Zero cancellation fee
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                  <AppointmentForm />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </AppointmentModalContext.Provider>
  );
}
