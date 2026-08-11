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
    <main className="pt-20 bg-[#07080c]">
      {/* Hero */}
      <section className="py-20 bg-[#07080c] border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Dental <span className="bg-gradient-to-r from-[#f9db8d] via-[#e3b768] to-[#bb8e4b] bg-clip-text text-transparent">Health Blog</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Expert tips, treatment insights, and dental care advice from Dr. Tarun Kumar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-[#07080c] relative overflow-hidden">
        <div className="container relative z-10">
          {/* Featured Posts */}
          <h2 className="font-bold text-white text-xl mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featured.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.05}>
                <Card variant="default" hoverEffect="lift" className="overflow-hidden p-0 h-full flex flex-col group bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40">
                  <div className="aspect-video bg-gradient-to-br from-amber-500/10 via-[#07080c] to-amber-500/5 flex items-center justify-center border-b border-amber-500/15">
                    <span className="text-4xl font-black text-[#f9db8d]/30">
                      {post.category[0]}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/25 text-[#f9db8d] rounded-full font-mono font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400"><Clock size={11} />{post.readingTime}</span>
                    </div>
                    <h2 className="font-bold text-white text-base mb-2 group-hover:text-[#f9db8d] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-amber-500/15">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={11} />
                        {formatDate(post.publishedAt)}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-xs font-semibold text-[#f9db8d] hover:gap-2 transition-all"
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
          <h2 className="font-bold text-white text-xl mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            More Articles
          </h2>
          <div className="space-y-4">
            {rest.map((post) => (
              <AnimatedSection key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <Card variant="default" hoverEffect="lift" className="flex gap-5 p-5 bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-500/10 to-[#07080c] border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-black text-[#f9db8d]/40">{post.category[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-[#f9db8d] bg-amber-500/10 border border-amber-500/25 px-2.5 py-0.5 rounded-full font-mono">
                        {post.category}
                      </span>
                      <h2 className="font-bold text-white text-sm mt-1.5 mb-1 group-hover:text-[#f9db8d] transition-colors">
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

