import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import AppointmentForm from "@/components/shared/AppointmentForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import Card from "@/components/ui/Card";

export const metadata: Metadata = genMeta({
  title: "Contact Us | Book Appointment | Tarun Dental Hospital Hyderabad",
  description:
    "Contact Tarun Dental Hospital in Pragathi Nagar, Hyderabad. Book an appointment online, call us, or WhatsApp. Free dental consultation available.",
  canonical: `${SITE.url}/contact`,
});

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(SITE.whatsapp, SITE.whatsappMessage);

  return (
    <main className="pt-20 bg-[#07080c]">
      {/* Hero */}
      <section className="py-20 bg-[#07080c] border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Book Your <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Appointment</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Reach out to us via phone, WhatsApp, email, or fill out the form below.
              We confirm appointments within 30 minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-[#07080c] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                { Icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}`, external: false },
                { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappUrl, external: true },
                { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
                { Icon: MapPin, label: "Address", value: SITE.address.full, href: SITE.mapsDirections, external: true },
              ].map(({ Icon, label, value, href, external }) => {
                return (
                  <AnimatedSection key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="block group"
                    >
                      <Card variant="default" hoverEffect="lift" className="flex gap-4 p-5 bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-amber-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-amber-400/80 mb-0.5 uppercase tracking-wide font-mono">{label}</p>
                          <p className="font-semibold text-white text-sm">{value}</p>
                        </div>
                      </Card>
                    </a>
                  </AnimatedSection>
                );
              })}

              {/* Hours */}
              <AnimatedSection>
                <Card variant="default" className="p-5 bg-[#0f1118] border border-amber-500/20">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0 text-amber-400">
                      <Clock size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-400/80 mb-2 uppercase tracking-wide font-mono">Clinic Hours</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Mon – Fri</span>
                          <span className="font-semibold text-slate-200">{SITE.hours.weekday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Saturday</span>
                          <span className="font-semibold text-slate-200">{SITE.hours.saturday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Sunday</span>
                          <span className="font-semibold text-slate-200">{SITE.hours.sunday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Appointment Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <Card variant="default" className="p-8 bg-[#0f1118] border border-amber-500/20 shadow-xl">
                <h2 className="font-bold text-white text-2xl mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Request an Appointment
                </h2>
                <p className="text-slate-300 text-sm mb-6">
                  Fill out the form below and we&apos;ll confirm your appointment within 30 minutes.
                </p>
                <AppointmentForm />
              </Card>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection className="mt-8">
            <Card variant="default" className="p-0 overflow-hidden h-64 md:h-80 border border-amber-500/20 bg-[#0f1118]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3985!3d17.4978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTarun+Dental+Hospital!5e0!3m2!1sen!2sin!4v1000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tarun Dental Hospital location"
              />
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

