import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AppointmentForm from "@/components/shared/AppointmentForm";
import { CheckCircle2, Clock, DollarSign, ChevronRight, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import Card from "@/components/ui/Card";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/jsonld";
import { getWhatsAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return genMeta({
    title: service.seoTitle,
    description: service.seoDesc,
    keywords: service.keywords,
    canonical: `${SITE.url}/treatments/${slug}`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const whatsappUrl = getWhatsAppUrl(
    SITE.whatsapp,
    `Hello! I'm interested in ${service.title} treatment at Tarun Dental Hospital.`
  );

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Treatments", url: `${SITE.url}/treatments` },
    { name: service.title, url: `${SITE.url}/treatments/${slug}` },
  ]);

  const faqSchema = service.faqs.length > 0 ? getFaqSchema(
    service.faqs.map((f) => ({ question: f.question, answer: f.answer }))
  ) : null;

  return (
    <main className="pt-20 bg-[#07080c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="relative py-20 bg-[#07080c] text-white border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-[#f9db8d] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#f9db8d]" />
            <Link href="/treatments" className="hover:text-[#f9db8d] transition-colors">Treatments</Link>
            <ChevronRight size={12} className="text-[#f9db8d]" />
            <span className="text-[#f9db8d] font-semibold">{service.title}</span>
          </nav>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  {service.title}
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-6">{service.shortDesc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#f9db8d]" />{service.duration}</span>
                  <span className="flex items-center gap-1.5 font-bold text-[#f9db8d]"><DollarSign size={15} className="text-[#f9db8d]" />{service.cost}</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#f9db8d]" />100% Painless Guarantee</span>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-amber-500/30 shadow-[0_0_40px_rgba(249,219,141,0.15)] bg-[#0f1118]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <AnimatedSection>
              <Card variant="default" className="bg-[#0f1118] border border-amber-500/20">
                <h2 className="font-bold text-white text-2xl mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  About {service.title}
                </h2>
                <p className="text-slate-300 leading-relaxed">{service.fullDesc}</p>
              </Card>
            </AnimatedSection>

            {/* Benefits */}
            <AnimatedSection delay={0.1}>
              <Card variant="default" className="bg-[#0f1118] border border-amber-500/20">
                <h2 className="font-bold text-white text-2xl mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-[#f9db8d] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* Procedure */}
            <AnimatedSection delay={0.2}>
              <Card variant="default" className="bg-[#0f1118] border border-amber-500/20">
                <h2 className="font-bold text-white text-2xl mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Treatment Procedure
                </h2>
                <ol className="space-y-4">
                  {service.procedure.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-[#07080c] text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-slate-300 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </Card>
            </AnimatedSection>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <AnimatedSection delay={0.3}>
                <Card variant="default" className="bg-[#0f1118] border border-amber-500/20">
                  <h2 className="font-bold text-white text-2xl mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq) => (
                      <div key={faq.id} className="border-b border-amber-500/10 pb-4 last:border-0">
                        <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                        <p className="text-slate-300 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Appointment Form */}
            <Card variant="default" className="sticky top-24 bg-[#0f1118] border border-amber-500/20">
              <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Book Appointment
              </h3>
              <p className="text-slate-400 text-sm mb-5">Free consultation • No obligation</p>
              <AppointmentForm compact />
              <div className="mt-4 pt-4 border-t border-amber-500/20 space-y-2">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-sm text-slate-300 hover:text-[#f9db8d] transition-colors">
                  <Phone size={14} className="text-[#f9db8d]" />{SITE.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-green-400 transition-colors">
                  <MessageCircle size={14} className="text-green-400" />WhatsApp Us
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
