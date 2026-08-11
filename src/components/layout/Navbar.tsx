"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { getWhatsAppUrl } from "@/lib/utils";
import { useFocusTrap } from "@/lib/hooks";
import { useAppointmentModal } from "@/components/layout/AppointmentModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useFocusTrap(mobileOpen);
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
    });
    return () => cancelAnimationFrame(handle);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Tarun Dental Hospital - Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2C8.5 2 6 4.5 6 7c0 1.5.6 2.8 1.5 3.8C6.8 12 6 14 6 16c0 2.2 1.3 4 3 4.7V21a1 1 0 002 0v-.3c1.7-.7 3-2.5 3-4.7 0-2-.8-4-1.5-5.2C13.4 9.8 14 8.5 14 7c0-2.5-2.5-5-2-5z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M12 2c3.5 0 6 2.5 6 5 0 1.5-.6 2.8-1.5 3.8.7 1.2 1.5 3.2 1.5 5.2 0 2.2-1.3 4-3 4.7V21a1 1 0 01-2 0v-.3"
                    stroke="white"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="text-base font-bold leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  <span className="text-blue-600">Tarun</span>{" "}
                  <span className={scrolled ? "text-slate-800 dark:text-white" : "text-slate-800 dark:text-white"}>
                    Dental
                  </span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-none">
                  Pragathi Nagar, Hyderabad
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() => link.children && setOpenDropdown(link.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setOpenDropdown(null);
                      const parentLink = e.currentTarget.querySelector("a");
                      if (parentLink) parentLink.focus();
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      isActive(link.href)
                        ? "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-1.5 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center px-4 py-2.5 text-sm transition-colors",
                                isActive(child.href)
                                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40"
                                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Desktop Actions ── */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`Call us: ${SITE.phone}`}
              >
                <Phone size={15} />
                <span className="hidden xl:inline">{SITE.phone}</span>
              </a>
              <button
                onClick={() => openModal()}
                className="btn-primary text-sm px-5 py-2.5 rounded-lg"
                style={{ borderRadius: "0.5rem" }}
              >
                <Calendar size={15} />
                Book Appointment
              </button>
            </div>

            {/* ── Mobile Menu Button ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Tarun Dental
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl text-blue-600 font-semibold text-sm"
                >
                  <Phone size={18} />
                  {SITE.phone}
                </a>
                <a
                  href={getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-950/20 rounded-xl text-green-600 font-semibold text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openModal();
                  }}
                  className="btn-primary w-full text-sm py-3 rounded-xl justify-center"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <Calendar size={16} />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
