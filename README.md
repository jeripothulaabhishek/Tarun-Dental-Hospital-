# Tarun Dental Hospital — World-Class Website

> A premium dental hospital website built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and more.

![Tarun Dental Hospital](./public/og-default.jpg)

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.x | App Router, SSG, API Routes |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 11.x | Animations |
| React Hook Form | 7.x | Form Handling |
| Zod | 3.x | Form Validation |
| Embla Carousel | 8.x | Testimonials Carousel |
| Lenis | 1.x | Smooth Scrolling |
| next-themes | 0.3.x | Dark Mode |
| GSAP | 3.x | Advanced Animations |
| Lucide React | Latest | Icons |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO, JSON-LD
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── treatments/         # Treatments hub + [slug] pages
│   ├── gallery/            # Photo gallery
│   ├── testimonials/       # Patient reviews
│   ├── faq/               # Interactive FAQ
│   ├── blog/              # Blog listing + [slug]
│   ├── contact/           # Contact + appointment form
│   ├── privacy-policy/    # Privacy policy
│   ├── terms/             # Terms of service
│   ├── not-found.tsx      # Custom 404
│   ├── sitemap.ts         # Dynamic XML sitemap
│   ├── robots.ts          # robots.txt
│   └── globals.css        # Design system + CSS tokens
├── components/
│   ├── layout/            # Navbar, Footer, floating CTAs
│   ├── sections/          # Home page sections
│   ├── shared/            # Reusable components
│   └── ui/               # Base UI components
├── data/                  # Content CMS layer
│   ├── services.ts        # 12 dental services
│   ├── testimonials.ts    # Patient reviews
│   ├── faqs.ts            # FAQ content
│   └── blog-posts.ts      # Blog articles
├── lib/                   # Utilities
│   ├── constants.ts       # Site config, clinic info
│   ├── utils.ts           # Helper functions
│   ├── animations.ts      # Framer Motion variants
│   ├── seo.ts             # Metadata factory
│   └── jsonld.ts          # Structured data generators
└── types/                 # TypeScript interfaces
    └── index.ts
```

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tarundentalcare.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GOOGLE_VERIFICATION=your-google-verification-code
```

## 📝 Customization

### Update Clinic Information

Edit `src/lib/constants.ts`:
- `SITE.phone` — Clinic phone number
- `SITE.whatsapp` — WhatsApp number
- `SITE.email` — Contact email
- `SITE.address` — Clinic address
- `SITE.mapUrl` — Google Maps embed URL
- `SITE.googleRating` — Google rating
- `SITE.reviewCount` — Number of reviews

### Update Doctor Information

Edit `DOCTOR` in `src/lib/constants.ts`:
- Name, qualifications, bio, achievements, specializations

### Add Real Photos

Replace placeholder images in `public/images/`:
- `doctor.jpg` — Doctor headshot
- `clinic/` — Clinic interior photos
- `services/` — Service-specific photos
- `og-default.jpg` — Social sharing image (1200×630px)

### Update Services

Edit `src/data/services.ts` to update service descriptions, costs, and FAQs.

### Blog Posts

Edit `src/data/blog-posts.ts` or connect to a headless CMS (Contentful, Sanity, etc.).

## 🔍 SEO Features

- ✅ Next.js Metadata API for all pages
- ✅ Dynamic XML Sitemap (`/sitemap.xml`)
- ✅ robots.txt (`/robots.txt`)
- ✅ JSON-LD structured data:
  - Dentist / MedicalBusiness schema
  - BreadcrumbList schema
  - FAQPage schema
  - Article schema for blog
- ✅ OpenGraph + Twitter Cards
- ✅ Canonical URLs
- ✅ Local SEO keywords
- ✅ Semantic HTML structure

## 🎨 Design System

Colors, spacing, typography, and component styles are defined in `src/app/globals.css` as CSS custom properties:

```css
--color-primary: #2563EB    /* Blue */
--color-secondary: #0F172A  /* Dark Navy */
--color-accent: #14B8A6     /* Teal */
--color-background: #F8FAFC /* Light Gray */
```

## 📱 Features

- ✅ Dark Mode (toggle in navbar)
- ✅ Mobile-responsive (all breakpoints)
- ✅ Floating WhatsApp button
- ✅ Sticky mobile bottom CTA bar
- ✅ Auto-triggered appointment popup (30s)
- ✅ Back to top button
- ✅ Scroll progress bar
- ✅ Animated number counters
- ✅ Interactive FAQ accordion
- ✅ Embla Carousel (testimonials)
- ✅ React Hook Form + Zod (appointment booking)
- ✅ Google Maps embed

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the `.next` folder
```

### Self-Hosted

```bash
npm run build
npm start
# Serve on port 3000
```

## 📞 Support

Built for **Tarun Dental Hospital**, Pragathi Nagar, Hyderabad.

For customizations and updates, contact the development team.

---

*Made with ❤️ in Hyderabad*
