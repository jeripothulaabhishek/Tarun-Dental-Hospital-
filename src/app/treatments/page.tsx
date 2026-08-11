import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Card from "@/components/ui/Card";
import { ChevronRight, Clock, ShieldCheck, Sparkles, Layers, Activity, Smile, AlignJustify, Baby, Globe, Zap, Scissors, Crown, AlertCircle } from "lucide-react";

export const metadata: Metadata = genMeta({
  title: "Dental Treatments in Hyderabad | All Services at Tarun Dental",
  description:
    "Comprehensive dental treatments in Hyderabad. Dental implants, root canal, smile designing, orthodontics, kids dentistry, whitening & more at Tarun Dental Hospital.",
  canonical: `${SITE.url}/treatments`,
});

const iconMap: Record<string, React.ElementType> = {
  tooth: Layers, activity: Activity, smile: Smile,
  "align-justify": AlignJustify, baby: Baby, globe: Globe,
  zap: Zap, scissors: Scissors, crown: Crown, layers: Sparkles, "alert-circle": AlertCircle,
};

export default function TreatmentsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.8),rgba(2,6,23,1))]" />
        <div className="container relative z-10 text-center max-w-3xl">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-teal-950/80 text-teal-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-teal-800/40">
              <ShieldCheck size={14} className="text-teal-400" />
              100% Painless Digital Clinical Procedures
            </span>
            <h1 className="font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Specialized <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Dental Services</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Complete oral healthcare solutions using 3D digital imaging, laser precision, and premium international materials.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="section bg-slate-50 dark:bg-slate-950">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Layers;
              return (
                <AnimatedSection key={service.id} delay={i * 0.04}>
                  <Card variant="default" className="h-full flex flex-col p-0 overflow-hidden group border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                    {/* Image Header */}
                    <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-blue-600 shadow-md">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="font-bold text-slate-900 dark:text-white text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock size={13} className="text-blue-500" />
                            {service.duration}
                          </span>
                          <span className="font-bold text-teal-600 dark:text-teal-400 font-mono">
                            {service.cost}
                          </span>
                        </div>

                        <Link
                          href={`/treatments/${service.slug}`}
                          className="flex items-center justify-between px-4 py-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <span>Explore Treatment Details</span>
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
