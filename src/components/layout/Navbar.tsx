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
import TopAnnouncementBar from "@/components/layout/TopAnnouncementBar";

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <TopAnnouncementBar />
        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-[#000000]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
              : "bg-[#000000]/85 backdrop-blur-md border-b border-amber-500/15"
          )}
        >
          <div className="container">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* ── Logo ── */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group"
                aria-label="Tarun Dental Hospital - Home"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] flex items-center justify-center shadow-[0_0_15px_rgba(249,219,141,0.3)] group-hover:shadow-[0_0_25px_rgba(249,219,141,0.5)] transition-all flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 2C8.5 2 6 4.5 6 7c0 1.5.6 2.8 1.5 3.8C6.8 12 6 14 6 16c0 2.2 1.3 4 3 4.7V21a1 1 0 002 0v-.3c1.7-.7 3-2.5 3-4.7 0-2-.8-4-1.5-5.2C13.4 9.8 14 8.5 14 7c0-2.5-2.5-5-2-5z"
                      fill="#000000"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-base font-bold leading-tight flex items-center gap-1"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    <span className="text-[#f9db8d]">Tarun</span>{" "}
                    <span className="text-white">
                      Dental
                    </span>
                  </div>
                  <div className="text-[10px] font-medium text-slate-400 leading-none tracking-wide">
                    Pragathi Nagar, Hyderabad
                  </div>
                </div>
              </Link>

              {/* ── Desktop Nav ── */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2" role="navigation" aria-label="Main navigation">
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
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200",
                        isActive(link.href)
                          ? "text-[#f9db8d] bg-amber-500/15 border border-amber-500/30"
                          : "text-slate-300 hover:text-[#f9db8d] hover:bg-amber-500/10"
                      )}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          size={13}
                          className={cn(
                            "transition-transform duration-200 text-[#f9db8d]",
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
                            className="absolute top-full left-0 mt-1.5 w-56 bg-[#0f1118] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "flex items-center px-4 py-2.5 text-sm transition-colors",
                                  isActive(child.href)
                                    ? "bg-amber-500/20 text-[#f9db8d] font-semibold"
                                    : "text-slate-300 hover:bg-amber-500/10 hover:text-[#f9db8d]"
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
              <div className="hidden lg:flex items-center gap-3">
                <ThemeToggle />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#f9db8d] hover:bg-amber-500/10 transition-colors"
                  aria-label={`Call us: ${SITE.phone}`}
                >
                  <Phone size={14} className="text-[#f9db8d]" />
                  <span className="hidden xl:inline">{SITE.phone}</span>
                </a>
                <button
                  onClick={() => openModal()}
                  className="btn-primary text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-lg cursor-pointer"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <Calendar size={14} />
                  Book Appointment
                </button>
              </div>

              {/* ── Mobile Menu Button ── */}
              <div className="flex items-center gap-2 lg:hidden">
                <ThemeToggle />
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-[#f9db8d] hover:bg-amber-500/10 transition-colors border border-amber-500/20 cursor-pointer"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-[#0f1118] border-l border-amber-500/30 shadow-2xl z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-5 border-b border-amber-500/20">
                <span className="font-bold text-amber-400" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Tarun Dental
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-amber-500/10 hover:text-amber-400"
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
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "text-slate-300 hover:bg-amber-500/10 hover:text-amber-400"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-amber-500/15 pl-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-amber-500/20 space-y-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 font-semibold text-sm"
                >
                  <Phone size={18} />
                  {SITE.phone}
                </a>
                <a
                  href={getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-green-950/40 border border-green-500/30 rounded-xl text-green-400 font-semibold text-sm"
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
