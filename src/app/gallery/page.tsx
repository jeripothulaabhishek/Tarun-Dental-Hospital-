import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/data/images";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = genMeta({
  title: "Gallery | Clinic & Smile Transformation Photos | Tarun Dental",
  description:
    "Explore our dental clinic gallery — before & after smile makeovers, modern hospital interiors, digital 3D equipment, and expert surgical team photos.",
  canonical: `${SITE.url}/gallery`,
});

const galleryItems = [
  { id: "g1", label: "Hospital Reception Lounge", category: "Clinic", image: IMAGES.clinic.reception },
  { id: "g2", label: "Smile Makeover Transformation", category: "Before & After", image: IMAGES.beforeAfter[0].after },
  { id: "g3", label: "Digital 3D Intraoral Scanner", category: "Technology", image: IMAGES.technology.scanner3D },
  { id: "g4", label: "Dr. Tarun Kumar & Patient", category: "Team", image: IMAGES.doctors.drTarun },
  { id: "g5", label: "Advanced Operatory Suite", category: "Clinic", image: IMAGES.clinic.operatory },
  { id: "g6", label: "Laser Teeth Whitening Case", category: "Before & After", image: IMAGES.beforeAfter[1].after },
  { id: "g7", label: "CBCT 3D Diagnostic Imaging", category: "Technology", image: IMAGES.technology.cbctXray },
  { id: "g8", label: "Dr. Ananya Rao & Endodontic Team", category: "Team", image: IMAGES.doctors.drAnanya },
  { id: "g9", label: "Sterilization & Hygiene Station", category: "Clinic", image: IMAGES.clinic.sterilization },
  { id: "g10", label: "Digital CAD/CAM Ceramic Unit", category: "Technology", image: IMAGES.technology.cadcam },
  { id: "g11", label: "Invisible Aligner Transformation", category: "Before & After", image: IMAGES.beforeAfter[3].after },
  { id: "g12", label: "Dr. Vikram Varma & Patient", category: "Team", image: IMAGES.doctors.drVikram },
];

export default function GalleryPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <h1 className="font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Hospital <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Step inside Tarun Dental Hospital. Experience our state-of-the-art facilities, digital technology, and smile transformations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-slate-50 dark:bg-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.04}>
                <Card
                  variant="bordered"
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden group cursor-pointer p-0 border-0 shadow-lg bg-slate-900",
                    i % 5 === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-square" : ""
                  )}
                  role="img"
                  aria-label={item.label}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-bold mt-1.5">{item.label}</p>
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
