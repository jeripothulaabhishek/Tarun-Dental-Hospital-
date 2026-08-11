import { Testimonial } from "@/types";
import { IMAGES } from "./images";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Pragathi Nagar, Hyderabad",
    rating: 5,
    review:
      "I was terrified of dental visits, but Dr. Tarun made the entire experience so comfortable. Got my dental implants done here and the results are absolutely stunning. The entire team is professional and caring. Highly recommend!",
    service: "Dental Implants",
    avatar: IMAGES.testimonials.avatar1,
    date: "2024-12-15",
    verified: true,
    source: "Google",
  },
  {
    id: "t2",
    name: "Rajesh Kumar",
    location: "Kukatpally, Hyderabad",
    rating: 5,
    review:
      "Had a root canal done at Tarun Dental and I couldn't believe how painless it was! The modern equipment and Dr. Tarun's expertise made all the difference. I was back to work the same day.",
    service: "Root Canal",
    avatar: IMAGES.testimonials.avatar2,
    date: "2024-11-22",
    verified: true,
    source: "Google",
  },
  {
    id: "t3",
    name: "Ananya Reddy",
    location: "KPHB Colony, Hyderabad",
    rating: 5,
    review:
      "My smile makeover at Tarun Dental has completely changed my life. Dr. Tarun spent so much time understanding exactly what I wanted and delivered beyond my expectations. The before and after is incredible!",
    service: "Smile Designing",
    avatar: IMAGES.testimonials.avatar3,
    date: "2024-10-08",
    verified: true,
    source: "Google",
  },
  {
    id: "t4",
    name: "Mohammed Imran",
    location: "Miyapur, Hyderabad",
    rating: 5,
    review:
      "Brought my 6-year-old son who was very scared of dentists. The staff was incredibly patient and made it a fun experience for him. He actually asked to come back for his next check-up!",
    service: "Kids Dentistry",
    avatar: IMAGES.testimonials.avatar4,
    date: "2024-09-30",
    verified: true,
    source: "Google",
  },
  {
    id: "t5",
    name: "Sunita Patel",
    location: "Nizampet, Hyderabad",
    rating: 5,
    review:
      "Got my braces here and the result after 18 months is amazing. Dr. Tarun was always available to address my concerns. The clinic is spotlessly clean and the staff is so friendly. Best dental clinic in Hyderabad!",
    service: "Orthodontics",
    date: "2024-08-14",
    verified: true,
    source: "Google",
  },
  {
    id: "t6",
    name: "David Thompson",
    location: "London, UK",
    rating: 5,
    review:
      "Came from the UK specifically for dental treatment. Got 6 dental implants and veneers at a fraction of UK costs. The quality is incredible — my UK dentist couldn't believe the work. The team handled everything — airport pickup, hotel, the works. Will return!",
    service: "Dental Tourism",
    date: "2024-07-20",
    verified: true,
    source: "Google",
  },
  {
    id: "t7",
    name: "Kavitha Nair",
    location: "Pragathi Nagar, Hyderabad",
    rating: 5,
    review:
      "Emergency toothache at 7 PM and Tarun Dental still saw me that same evening. Professional, quick, and genuinely caring. Dr. Tarun explained everything clearly and made sure I left pain-free.",
    service: "Emergency Dental Care",
    date: "2024-06-18",
    verified: true,
    source: "Google",
  },
  {
    id: "t8",
    name: "Arjun Mehta",
    location: "Bachupally, Hyderabad",
    rating: 5,
    review:
      "Got teeth whitening done here and walked out 8 shades brighter! The procedure was comfortable and the results exceeded my expectations. My confidence has skyrocketed since then.",
    service: "Teeth Whitening",
    date: "2024-05-25",
    verified: true,
    source: "Google",
  },
];
