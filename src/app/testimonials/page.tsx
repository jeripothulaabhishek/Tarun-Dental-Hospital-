import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { testimonials } from "@/data/testimonials";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { BadgeCheck, Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Card from "@/components/ui/Card";

export const metadata: Metadata = genMeta({
  title: "Patient Testimonials | Tarun Dental Hospital Reviews Hyderabad",
  description:
    "Read genuine patient reviews for Tarun Dental Hospital. 4.9★ Google rating, 1,250+ reviews. Dental implants, smile makeover, root canal success stories from Hyderabad patients.",
  canonical: `${SITE.url}/testimonials`,
});

export default function TestimonialsPage() {
  return (
    <main className="pt-20 bg-[#07080c]">
      {/* Hero */}
      <section className="py-20 bg-[#07080c] border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Patient <span className="bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-6">
              Real stories from real patients who transformed their smiles at Tarun Dental Hospital.
            </p>
            {/* Overall Rating */}
            <div className="inline-flex items-center gap-3 bg-[#0f1118] backdrop-blur-sm border border-amber-500/30 rounded-xl px-6 py-3 shadow-[0_0_25px_rgba(249,219,141,0.1)]">
              <StarRating rating={5} size={18} />
              <div className="text-left">
                <p className="text-white font-bold">4.9 / 5.0</p>
                <p className="text-[#f9db8d] text-xs">Based on 1,250+ Google Reviews</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-[#07080c] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.05}>
                <Card variant="default" hoverEffect="lift" className="h-full flex flex-col transition-all duration-300 bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40">
                  {/* Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={t.rating} size={14} />
                    <div className="flex items-center gap-1.5">
                      {t.source === "Google" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      )}
                      {t.verified && <BadgeCheck size={14} className="text-[#f9db8d]" aria-label="Verified review" />}
                    </div>
                  </div>

                  {/* Service badge */}
                  <span className="text-xs font-semibold text-[#f9db8d] bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 rounded-full mb-3 w-fit font-mono">
                    {t.service}
                  </span>

                  {/* Review */}
                  <Quote size={18} className="text-[#f9db8d]/40 mb-2" aria-hidden="true" />
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">
                    {t.review}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-amber-500/20">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-[#07080c] font-bold text-sm" aria-hidden="true">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.location}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

