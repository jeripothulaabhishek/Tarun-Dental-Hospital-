import { IMAGES } from "./images";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
  achievements: string[];
  isLead?: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "dr-tarun-kumar",
    name: "Dr. Tarun Kumar",
    role: "Chief Dental Surgeon & Founder",
    qualifications: "BDS, MDS (Prosthodontics & Implantology)",
    experience: "15+ Years Experience",
    image: IMAGES.doctors.drTarun,
    isLead: true,
    specialties: [
      "Dental Implants",
      "Smile Designing",
      "Cosmetic Dentistry",
      "Full Mouth Rehabilitation",
      "Prosthodontics",
    ],
    bio: "Dr. Tarun Kumar is a pioneer in painless digital dentistry with over 15 years of surgical experience. Trained at top institutes in India and abroad, he has performed over 4,000 successful dental implant procedures and designed thousands of life-changing smiles.",
    achievements: [
      "Best Dentist Award – Hyderabad Health Excellence Awards 2023",
      "Advanced Implantology Fellow – New York University Dental",
      "Lifetime Member – Indian Dental Association (IDA)",
      "ICOI Diplomate & International Clinical Speaker",
    ],
  },
  {
    id: "dr-ananya-rao",
    name: "Dr. Ananya Rao",
    role: "Consultant Endodontist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "10+ Years Experience",
    image: IMAGES.doctors.drAnanya,
    specialties: [
      "Single-Visit Root Canal",
      "Microscopic Endodontics",
      "Laser Root Canal Therapy",
      "Dental Trauma Management",
    ],
    bio: "Dr. Ananya specializes in painless root canal treatments utilizing surgical operating microscopes and rotary endodontics. Her gentle chairside manner makes even complex root canals stress-free.",
    achievements: [
      "Gold Medalist in MDS Endodontics 2014",
      "Over 6,000 Successful Single-Visit RCTs Performed",
      "Pioneer in Rotary Micro-Endodontic Techniques",
    ],
  },
  {
    id: "dr-vikram-varma",
    name: "Dr. Vikram Varma",
    role: "Specialist Orthodontist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "12+ Years Experience",
    image: IMAGES.doctors.drVikram,
    specialties: [
      "Invisalign Certified Provider",
      "Self-Ligating Braces",
      "Child Orthodontics",
      "Surgical Orthodontics",
    ],
    bio: "Dr. Vikram is an expert in digital orthodontics and invisible aligners. He crafts harmonious facial aesthetics and perfectly aligned teeth for children, teenagers, and adults alike.",
    achievements: [
      "Diamond Invisalign Provider Status",
      "Member – World Federation of Orthodontists (WFO)",
      "Published Author in International Orthodontic Journals",
    ],
  },
  {
    id: "dr-neha-sharma",
    name: "Dr. Neha Sharma",
    role: "Pediatric Dentist",
    qualifications: "BDS, MDS (Pediatric & Preventive Dentistry)",
    experience: "8+ Years Experience",
    image: IMAGES.doctors.drNeha,
    specialties: [
      "Child Preventive Care",
      "Pediatric Crown & Pulpotomy",
      "Conscious Sedation Dentistry",
      "Early Interceptive Orthodontics",
    ],
    bio: "Dr. Neha creates a warm, fear-free environment for young patients. She is passionate about preventive oral health habits and gentle care for children of all ages.",
    achievements: [
      "Specialized Certification in Nitrous Oxide Conscious Sedation",
      "Extensive Work with Special Needs Pediatric Patients",
      "Active Member – Indian Society of Pedodontics",
    ],
  },
];
