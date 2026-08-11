import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Tarun Dental Hospital",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container max-w-3xl">
          <h1 className="font-black text-slate-900 dark:text-white mb-2" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            {[
              {
                title: "Information We Collect",
                content: `We collect information you provide when booking appointments, including your name, phone number, email address, and dental concerns. We may also collect technical data such as IP address, browser type, and pages visited on our website.`,
              },
              {
                title: "How We Use Your Information",
                content: `We use your information to confirm and manage appointments, send appointment reminders, improve our services, respond to your inquiries, and comply with legal obligations. We do not sell your personal information to third parties.`,
              },
              {
                title: "Data Security",
                content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers with encryption.`,
              },
              {
                title: "Cookies",
                content: `Our website uses cookies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser. Disabling cookies may affect website functionality.`,
              },
              {
                title: "Third-Party Services",
                content: `We use Google Analytics for website analytics and Google Maps for location services. These services have their own privacy policies. We encourage you to review them separately.`,
              },
              {
                title: "Your Rights",
                content: `You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or clicking the unsubscribe link in emails.`,
              },
              {
                title: "Contact Us",
                content: `If you have questions about this Privacy Policy, please contact us at ${SITE.email} or call ${SITE.phone}.`,
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
