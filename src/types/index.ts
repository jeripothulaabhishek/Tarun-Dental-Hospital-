// ─── Service ──────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  procedure: string[];
  duration: string;
  cost: string;
  faqs: FAQ[];
  seoTitle: string;
  seoDesc: string;
  keywords: string[];
}

// ─── Doctor ───────────────────────────────────────────────────────────────────
export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  specializations: string[];
  bio: string;
  achievements: string[];
  image: string;
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  avatar?: string;
  date: string;
  verified: boolean;
  source: "Google" | "Direct";
}

// ─── Gallery Image ────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "before-after" | "team" | "technology" | "events";
  width: number;
  height: number;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ─── Blog Post ────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured: boolean;
}

// ─── Insurance Partner ────────────────────────────────────────────────────────
export interface InsurancePartner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

// ─── Appointment Form ─────────────────────────────────────────────────────────
export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

// ─── Before After ─────────────────────────────────────────────────────────────
export interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  label: string;
  service: string;
}

// ─── Nav Link ─────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// ─── Technology Item ──────────────────────────────────────────────────────────
export interface TechnologyItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}
