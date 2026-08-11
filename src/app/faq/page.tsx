import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { faqs } from "@/data/faqs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FAQPageClient from "./FAQPageClient";
import { getFaqSchema } from "@/lib/jsonld";

export const metadata: Metadata = genMeta({
  title: "FAQ | Dental Questions Answered | Tarun Dental Hospital Hyderabad",
  description:
    "Get answers to your dental questions. FAQ about dental implants, root canal, costs, insurance, dental tourism and more at Tarun Dental Hospital, Pragathi Nagar.",
  canonical: `${SITE.url}/faq`,
});

export default function FAQPage() {
  const faqSchema = getFaqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#0f2460] to-[#0a4d40]">
        <div className="container text-center">
          <AnimatedSection>
            <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Frequently Asked <span className="gradient-text-hero">Questions</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Everything you need to know about dental care at Tarun Dental Hospital.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FAQPageClient faqs={faqs} />
    </main>
  );
}
