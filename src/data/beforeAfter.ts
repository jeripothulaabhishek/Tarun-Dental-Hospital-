import { IMAGES } from "./images";

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: "Smile Makeover" | "Teeth Whitening" | "Orthodontics" | "Dental Implants";
  treatment: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  description: string;
  doctor: string;
  isDemo: boolean;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Complete Aesthetic Smile Transformation",
    category: "Smile Makeover",
    treatment: "E.max Porcelain Veneers & Gum Contouring",
    beforeImage: IMAGES.beforeAfter[0].before,
    afterImage: IMAGES.beforeAfter[0].after,
    duration: "2 Weeks (2 Sessions)",
    description: "Corrected heavy tetracycline discoloration, uneven central incisors, and gummy smile line with 8 ultra-thin veneers.",
    doctor: "Dr. Tarun Kumar",
    isDemo: true,
  },
  {
    id: "case-2",
    title: "1-Hour Laser Teeth Whitening",
    category: "Teeth Whitening",
    treatment: "Triple-Cycle In-Office Laser Whitening",
    beforeImage: IMAGES.beforeAfter[1].before,
    afterImage: IMAGES.beforeAfter[1].after,
    duration: "60 Minutes",
    description: "Lifted 8 shades of stubborn coffee and smoking stains while preserving natural tooth enamel integrity.",
    doctor: "Dr. Ananya Rao",
    isDemo: true,
  },
  {
    id: "case-3",
    title: "Upper Jaw Full-Arch Implant Rehabilitation",
    category: "Dental Implants",
    treatment: "All-On-4 Dental Implants with Zirconia Bridge",
    beforeImage: IMAGES.beforeAfter[2].before,
    afterImage: IMAGES.beforeAfter[2].after,
    duration: "3 Months",
    description: "Restored full chewing function and youthfulness for a patient with terminal upper teeth deterioration.",
    doctor: "Dr. Tarun Kumar",
    isDemo: true,
  },
  {
    id: "case-4",
    title: "Invisible Aligner Crowding Correction",
    category: "Orthodontics",
    treatment: "Custom Clear Aligners",
    beforeImage: IMAGES.beforeAfter[3].before,
    afterImage: IMAGES.beforeAfter[3].after,
    duration: "10 Months",
    description: "Resolved severe anterior crowding and deep bite without tooth extraction or metal brackets.",
    doctor: "Dr. Vikram Varma",
    isDemo: true,
  },
];
