import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Tarun Dental Hospital",
  description: "The page you are looking for doesn't exist. Return to Tarun Dental Hospital homepage.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#07080c] pt-20">
      <div className="container text-center max-w-lg">
        {/* Tooth illustration */}
        <div className="relative inline-block mb-8">
          <svg width="120" height="140" viewBox="0 0 120 140" className="mx-auto" aria-hidden="true">
            <defs>
              <linearGradient id="g404" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9db8d" />
                <stop offset="100%" stopColor="#bb8e4b" />
              </linearGradient>
            </defs>
            <ellipse cx="60" cy="48" rx="35" ry="38" fill="url(#g404)" opacity="0.3" />
            <ellipse cx="60" cy="48" rx="32" ry="35" fill="url(#g404)" opacity="0.5" />
            <path
              d="M35 72 C35 90 38 108 42 118 C46 128 50 132 60 132 C70 132 74 128 78 118 C82 108 85 90 85 72"
              fill="url(#g404)"
              opacity="0.4"
            />
            {/* Sad face on tooth */}
            <circle cx="50" cy="40" r="3" fill="#f9db8d" opacity="0.8" />
            <circle cx="70" cy="40" r="3" fill="#f9db8d" opacity="0.8" />
            <path d="M48 58 Q60 50 72 58" stroke="#f9db8d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
          </svg>
          {/* 404 badge */}
          <div className="absolute -top-2 -right-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-[#07080c] text-xs font-black px-3 py-1 rounded-full shadow-lg">
            404
          </div>
        </div>

        <h1 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Page Not Found
        </h1>
        <p className="text-slate-300 mb-8 text-base">
          Oops! Looks like this page has a cavity. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/treatments" className="btn-secondary">
            View Treatments
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

