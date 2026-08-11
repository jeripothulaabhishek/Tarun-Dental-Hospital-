import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import DoctorTeamSection from "@/components/sections/DoctorTeamSection";
import TechnologySection from "@/components/sections/TechnologySection";
import PatientJourney from "@/components/sections/PatientJourney";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import InsurancePartners from "@/components/sections/InsurancePartners";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import LocationMap from "@/components/sections/LocationMap";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Dental Hospital in Pragathi Nagar Hyderabad | Tarun Dental",
  description:
    "Tarun Dental Hospital — best dental clinic in Pragathi Nagar, Hyderabad. Expert dental implants, root canal, smile designing, orthodontics & kids dentistry. Book free consultation.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Best Dental Hospital in Pragathi Nagar Hyderabad | Tarun Dental",
    description: "Advanced painless dental care by Dr. Tarun Kumar. 15+ years, 4.9★ Google rating, 15,000+ happy patients.",
    url: SITE.url,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Credibility Statistics */}
      <Statistics />

      {/* 3. Dental Services System */}
      <ServicesGrid />

      {/* 4. Why Choose Tarun Dental Hospital */}
      <WhyChooseUs />

      {/* 5. Before & After Showcase (Interactive Comparison Slider) */}
      <BeforeAfterShowcase />

      {/* 6. Doctor & Specialist Team */}
      <DoctorTeamSection />

      {/* 7. Advanced Dental Technology & Equipment */}
      <TechnologySection />

      {/* 8. Patient Experience & Journey */}
      <PatientJourney />

      {/* 9. Patient Testimonials & Reviews */}
      <Testimonials />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Insurance & Financial Partners */}
      <InsurancePartners />

      {/* 12. High-Conversion Appointment CTA Banner */}
      <AppointmentCTA />

      {/* 13. Location, Maps & Hours */}
      <LocationMap />
    </>
  );
}
