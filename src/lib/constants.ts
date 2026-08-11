export const SITE = {
  name: "Tarun Dental Hospital",
  tagline: "Advanced Painless Dental Care",
  description:
    "Best dental hospital in Pragathi Nagar, Hyderabad. Expert dental implants, root canal, smile designing, orthodontics & kids dentistry. Book your appointment today.",
  url: "https://tarundentalcare.com",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+919876543210",
  whatsappMessage: "Hello! I'd like to book an appointment at Tarun Dental Hospital.",
  email: "info@tarundentalcare.com",
  address: {
    street: "Pragathi Nagar",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500090",
    country: "India",
    full: "Pragathi Nagar, Hyderabad, Telangana 500090, India",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3985!3d17.4978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTarun+Dental+Hospital!5e0!3m2!1sen!2sin!4v1000000",
  mapsDirections: "https://maps.google.com/?q=Tarun+Dental+Hospital+Pragathi+Nagar+Hyderabad",
  hours: {
    weekday: "9:00 AM – 8:00 PM",
    saturday: "9:00 AM – 6:00 PM",
    sunday: "10:00 AM – 4:00 PM",
  },
  social: {
    facebook: "https://facebook.com/tarundentalcare",
    instagram: "https://instagram.com/tarundentalcare",
    youtube: "https://youtube.com/@tarundentalcare",
    twitter: "https://twitter.com/tarundentalcare",
  },
  googleRating: 4.9,
  reviewCount: 1250,
  patientsServed: 15000,
  yearsExperience: 15,
  successRate: 98,
  awardsWon: 12,
};

export const DOCTOR = {
  name: "Dr. Tarun Kumar",
  title: "Chief Dental Surgeon & Founder",
  qualifications: "BDS, MDS (Prosthodontics & Implantology)",
  experience: "15+ Years Experience",
  specializations: [
    "Dental Implants",
    "Smile Designing",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Prosthodontics",
  ],
  bio: "Dr. Tarun Kumar is a highly experienced dental surgeon with over 15 years of expertise in advanced dental procedures. Trained at premier institutions in India and abroad, he brings world-class dental care to Hyderabad. His commitment to painless dentistry and patient comfort has earned him recognition as one of the top dentists in Pragathi Nagar.",
  achievements: [
    "Best Dentist Award – Hyderabad Health Excellence Awards 2023",
    "Advanced Implantology Certification – New York University",
    "Member – Indian Dental Association (IDA)",
    "Fellow – International Congress of Oral Implantologists (ICOI)",
    "Visiting Faculty – Osmania Dental College",
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Dental Implants", href: "/treatments/dental-implants" },
      { label: "Root Canal", href: "/treatments/root-canal" },
      { label: "Smile Designing", href: "/treatments/smile-designing" },
      { label: "Orthodontics", href: "/treatments/orthodontics" },
      { label: "Kids Dentistry", href: "/treatments/kids-dentistry" },
      { label: "Dental Tourism", href: "/treatments/dental-tourism" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
