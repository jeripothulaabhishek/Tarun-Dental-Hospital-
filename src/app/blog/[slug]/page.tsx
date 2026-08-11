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
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-[#0f2460] to-[#0a4d40]">
        <div className="container max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-300 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white truncate max-w-[200px]">{post.title}</span>
          </nav>
          <AnimatedSection>
            <span className="badge badge-primary mb-4 inline-flex">{post.category}</span>
            <h1 className="text-white font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readingTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium border-l-4 border-blue-500 pl-4">
                {post.excerpt}
              </p>
              <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                <p>{post.content}</p>
                <p>
                  At Tarun Dental Hospital in Pragathi Nagar, Hyderabad, we specialize in {post.category.toLowerCase()} 
                  treatment using the latest technology and techniques. Our experienced team led by Dr. Tarun Kumar 
                  ensures you receive world-class care in a comfortable, patient-friendly environment.
                </p>
                <p>
                  If you&apos;d like to learn more or book a consultation, don&apos;t hesitate to{" "}
                  <Link href="/contact" className="text-blue-600 font-semibold hover:underline">contact us</Link>.
                  Our team is always happy to answer your questions and help you achieve your perfect smile.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Card variant="glass" className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-teal-500 border-0 text-white text-center rounded-2xl shadow-none">
              <h3 className="font-bold text-xl mb-2 text-white">Ready to Transform Your Smile?</h3>
              <p className="text-blue-100 text-sm mb-4">Book a free consultation at Tarun Dental Hospital today.</p>
              <Button href="/contact" variant="white" className="text-sm">Book Free Appointment</Button>
            </Card>
          </AnimatedSection>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-bold text-slate-900 dark:text-white text-xl mb-5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="block group">
                    <Card variant="subtle" hoverEffect="lift" className="p-4 rounded-xl h-full flex flex-col justify-between">
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-blue-600 transition-colors">{p.title}</p>
                      <p className="text-xs text-slate-400">{p.readingTime}</p>
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
