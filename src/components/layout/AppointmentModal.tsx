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
              className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md z-[100]"
            />

            {/* Modal Box */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] overflow-y-auto pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-xl bg-[#0f1118] rounded-3xl shadow-2xl border border-amber-500/30 pointer-events-auto my-8 overflow-hidden relative"
                role="dialog"
                aria-modal="true"
                aria-label="Book Appointment Modal"
              >
                {/* Header Strip */}
                <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 p-6 text-[#07080c] relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#07080c]/30 hover:bg-[#07080c]/60 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Close appointment modal"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#07080c]/20 backdrop-blur-md flex items-center justify-center">
                      <Calendar size={20} className="text-[#07080c]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl leading-tight text-[#07080c]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        Book Free Dental Consultation
                      </h3>
                      <p className="text-[#07080c]/80 text-xs font-semibold mt-0.5">
                        Guaranteed callback within 30 minutes • Zero cancellation fee
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto bg-[#0f1118]">
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

