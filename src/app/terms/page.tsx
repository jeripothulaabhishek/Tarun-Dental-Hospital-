import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Tarun Dental Hospital",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container max-w-3xl">
          <h1 className="font-black text-slate-900 dark:text-white mb-2" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            {[
              {
                title: "Acceptance of Terms",
                content: "By using the Tarun Dental Hospital website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
              },
              {
                title: "Appointment Booking",
                content: "Appointment requests made through this website are subject to availability and confirmation by our team. We will contact you to confirm or reschedule within 30 minutes during business hours.",
              },
              {
                title: "Medical Disclaimer",
                content: "Content on this website is for informational purposes only and does not constitute medical advice. Always consult with our qualified dental professionals for specific dental concerns. Individual results may vary.",
              },
              {
                title: "Cancellation Policy",
                content: "Please provide at least 24 hours notice for appointment cancellations. Repeated no-shows may result in a cancellation fee. Emergency cancellations are understood and accommodated.",
              },
              {
                title: "Payment Terms",
                content: "Payment is due at the time of service unless prior arrangements have been made. We accept insurance, cash, card, and UPI payments. EMI options require prior approval.",
              },
              {
                title: "Limitation of Liability",
                content: `${SITE.name} is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our liability is limited to the amount paid for the specific service.`,
              },
              {
                title: "Governing Law",
                content: "These terms are governed by the laws of Telangana, India. Any disputes will be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.",
              },
              {
                title: "Contact",
                content: `For questions about these terms, contact us at ${SITE.email}.`,
              },
            ].map(({ title, content }) => (
              <section key={title}>
                <h2 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{title}</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
