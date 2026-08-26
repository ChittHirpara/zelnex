import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { BLOG_POSTS } from "@/data/blogs";
import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | Zelnex Pharmaceuticals" };

  return {
    title: `${post.title} | Zelnex Pharma Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative min-h-screen bg-[#FCFBF9] text-[#111111] antialiased selection:bg-[#006EDC] selection:text-white overflow-x-hidden">
      {/* ── Global Styles & Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&family=Syne:wght@600;700;800&family=Reenie+Beanie&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-jetbrains {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        .font-reenie {
          font-family: 'Reenie Beanie', cursive;
        }
      `}</style>

      <Navbar />

      <main className="relative pt-32 pb-24 select-none">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Breadcrumb & Back Link ── */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#006EDC] hover:text-[#082B61] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          {/* ── Article Header ── */}
          <div className="mb-10 space-y-4">
            <div className="flex items-center gap-3 text-xs font-semibold text-[#006EDC]">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 font-bold">
                {post.category}
              </span>
              <span>•</span>
              <span className="text-neutral-500 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="text-neutral-500 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl font-normal text-[#111111] tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            <p className="font-inter text-base sm:text-lg text-neutral-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Row */}
            <div className="pt-6 border-t border-[#DCDCD2] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border border-[#DCDCD2]"
                />
                <div>
                  <div className="text-sm font-bold text-[#111111]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-neutral-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-jetbrains text-[10px] uppercase font-bold text-neutral-400 hidden sm:inline tracking-wider">
                  Verified Technical Guide
                </span>
                <ShieldCheck className="w-5 h-5 text-[#006EDC]" />
              </div>
            </div>
          </div>

          {/* ── Featured Cover Image ── */}
          <div className="relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden mb-12 shadow-md border border-[#DCDCD2]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>

          {/* ── Article Content ── */}
          <div className="space-y-10">
            {/* Executive Summary Callout */}
            <div className="p-7 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#006EDC]" />
                <span>Executive Regulatory Summary</span>
              </div>
              <p className="font-inter text-sm sm:text-base leading-relaxed text-neutral-700 font-normal">
                {post.content.summary}
              </p>
            </div>

            {/* Dynamic Content Sections */}
            {post.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-syne text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-inter text-base text-neutral-600 leading-relaxed font-normal"
                  >
                    {p}
                  </p>
                ))}

                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="mt-4 p-6 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2.5">
                    <div className="font-jetbrains text-xs font-bold text-teal-800 uppercase tracking-wider">
                      Key Technical Takeaways:
                    </div>
                    {sec.keyTakeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-sm text-neutral-800 font-inter">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Tags Row */}
            <div className="pt-8 border-t border-[#DCDCD2] flex items-center gap-2 flex-wrap">
              <span className="font-jetbrains text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2">
                Indexed Topics:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-[#DCDCD2] text-xs font-bold text-neutral-600 shadow-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Related Posts Section ── */}
          <div className="mt-20 pt-12 border-t border-[#DCDCD2]">
            <h3 className="font-playfair text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight mb-8">
              More Technical Regulatory Insights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blogs/${rPost.slug}`}
                  className="group p-6 rounded-3xl bg-white border border-[#DCDCD2] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#006EDC] uppercase font-mono mb-2 block">
                      {rPost.category}
                    </span>
                    <h4 className="font-syne text-lg font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-snug line-clamp-2 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="font-inter text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {rPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* ── SECTION DIVIDER TO FOOTER ── */}
      <SectionDivider from="#FCFBF9" to="#06132d" flip height={72} />

      <Footer />
    </div>
  );
}
