import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { SITE } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Calendar, Clock, ChevronRight, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/jsonld";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tarun Dental Blog`,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${SITE.url}/blog/${slug}`,
    image: `${SITE.url}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog` },
    { name: post.title, url: `${SITE.url}/blog/${slug}` },
  ]);

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <main className="pt-20 bg-[#07080c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section className="py-16 bg-[#07080c] border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)]" />
        <div className="container max-w-3xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-[#f9db8d] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#f9db8d]" />
            <Link href="/blog" className="hover:text-[#f9db8d] transition-colors">Blog</Link>
            <ChevronRight size={12} className="text-[#f9db8d]" />
            <span className="text-[#f9db8d] font-semibold truncate max-w-[200px]">{post.title}</span>
          </nav>
          <AnimatedSection>
            <span className="badge badge-primary mb-4 inline-flex">{post.category}</span>
            <h1 className="text-white font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5"><User size={14} className="text-[#f9db8d]" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#f9db8d]" />{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#f9db8d]" />{post.readingTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-[#07080c] relative overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <AnimatedSection>
            <article className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-200 leading-relaxed mb-8 font-medium border-l-4 border-[#f9db8d] pl-4 bg-[#0f1118] p-4 rounded-r-xl border-amber-500/30">
                {post.excerpt}
              </p>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>{post.content}</p>
                <p>
                  At Tarun Dental Hospital in Pragathi Nagar, Hyderabad, we specialize in {post.category.toLowerCase()}{" "}
                  treatment using the latest technology and techniques. Our experienced team led by Dr. Tarun Kumar 
                  ensures you receive world-class care in a comfortable, patient-friendly environment.
                </p>
                <p>
                  If you&apos;d like to learn more or book a consultation, don&apos;t hesitate to{" "}
                  <Link href="/contact" className="text-[#f9db8d] font-semibold hover:underline">contact us</Link>.
                  Our team is always happy to answer your questions and help you achieve your perfect smile.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-amber-500/20">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-amber-500/10 border border-amber-500/25 text-[#f9db8d] text-xs rounded-full font-mono">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Card variant="glass" className="mt-10 p-8 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 border-0 text-[#07080c] text-center rounded-2xl shadow-xl">
              <h3 className="font-extrabold text-2xl mb-2 text-[#07080c]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Ready to Transform Your Smile?</h3>
              <p className="text-[#07080c]/80 text-sm font-semibold mb-5">Book a free consultation at Tarun Dental Hospital today.</p>
              <Button href="/contact" variant="white" className="text-sm bg-[#07080c] text-white hover:text-[#f9db8d]">Book Free Appointment</Button>
            </Card>
          </AnimatedSection>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-bold text-white text-xl mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="block group">
                    <Card variant="subtle" hoverEffect="lift" className="p-4 rounded-xl h-full flex flex-col justify-between bg-[#0f1118] border border-amber-500/20 hover:border-amber-500/40">
                      <p className="font-semibold text-white text-sm mb-1 group-hover:text-[#f9db8d] transition-colors">{p.title}</p>
                      <p className="text-xs text-slate-400 mt-2">{p.readingTime}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

