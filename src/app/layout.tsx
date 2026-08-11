import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { getDentistSchema } from "@/lib/jsonld";
import TopAnnouncementBar from "@/components/layout/TopAnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import ThemeProvider from "@/components/ui/ThemeProvider";
import AppointmentPopup from "@/components/layout/AppointmentPopup";
import { AppointmentModalProvider } from "@/components/layout/AppointmentModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tarun Dental Hospital",
    default: "Best Dental Hospital in Pragathi Nagar Hyderabad | Tarun Dental",
  },
  description: SITE.description,
  keywords: [
    "best dentist pragathi nagar",
    "dental hospital hyderabad",
    "dental implants hyderabad",
    "root canal hyderabad",
    "smile designing hyderabad",
    "dentist near me pragathi nagar",
    "emergency dentist hyderabad",
    "tarun dental hospital",
    "painless dentistry hyderabad",
  ],
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Dental Hospital in Pragathi Nagar Hyderabad | Tarun Dental",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: SITE.name }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Dental Hospital — Best Dentist in Pragathi Nagar Hyderabad",
    description: SITE.description,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getDentistSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <AppointmentModalProvider>
            <ScrollProgress />
            <TopAnnouncementBar />
            <Navbar />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
            <StickyMobileCTA />
            <BackToTop />
            <AppointmentPopup />
          </AppointmentModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
