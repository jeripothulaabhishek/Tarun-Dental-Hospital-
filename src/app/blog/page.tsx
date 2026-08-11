import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Card from "@/components/ui/Card";

export const metadata: Metadata = genMeta({
  title: "Dental Health Blog | Tips & Insights | Tarun Dental Hospital",
  description:
    "Expert dental health articles by Dr. Tarun Kumar. Tips for teeth care, implants, orthodontics, kids dentistry, and dental tourism from our Hyderabad dental blog.",
  canonical: `${SITE.url}/blog`,
});

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#0f2460] to-[#0a4d40]">
        <div className="container text-center">
          <AnimatedSection>
            <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Dental <span className="gradient-text-hero">Health Blog</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Expert tips, treatment insights, and dental care advice from Dr. Tarun Kumar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-slate-50 dark:bg-slate-950">
        <div className="container">
          {/* Featured Posts */}
          <h2 className="font-bold text-slate-900 dark:text-white text-xl mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featured.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.05}>
                <Card variant="default" hoverEffect="lift" className="overflow-hidden p-0 h-full flex flex-col group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-950/30 dark:to-teal-950/30 flex items-center justify-center">
                    <span className="text-4xl font-black text-blue-200 dark:text-blue-800">
                      {post.category[0]}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readingTime}</span>
                    </div>
                    <h2 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-blue-600 transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={11} />
                        {formatDate(post.publishedAt)}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:gap-2 transition-all"
                      >
                        Read More <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Rest */}
          <h2 className="font-bold text-slate-900 dark:text-white text-xl mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            More Articles
          </h2>
          <div className="space-y-4">
            {rest.map((post) => (
              <AnimatedSection key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <Card variant="default" hoverEffect="lift" className="flex gap-5 p-5 border border-slate-200 dark:border-slate-800 transition-all duration-300">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-black text-blue-200 dark:text-blue-800">{post.category[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <h2 className="font-bold text-slate-900 dark:text-white text-sm mt-1.5 mb-1 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-400 text-xs">{post.readingTime} · {formatDate(post.publishedAt)}</p>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
