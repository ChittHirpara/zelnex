import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-28 pb-20 select-none">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Breadcrumb & Back Link ── */}
          <div className="mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#006EDC] hover:text-[#082B61] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          {/* ── Article Header ── */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold text-[#006EDC] mb-3">
              <span className="px-3 py-1 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20">
                {post.category}
              </span>
              <span>•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight leading-[1.14] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Row */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-sm font-bold text-[#111111]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Verified Technical Guide
                </span>
                <ShieldCheck className="w-5 h-5 text-[#008A8A]" />
              </div>
            </div>
          </div>

          {/* ── Featured Cover Image ── */}
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-slate-200">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>

          {/* ── Article Content Grid with Sidebar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Reading Flow */}
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Summary Callout */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFBF9] border border-[#E5E5E5] text-[#111111]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Executive Regulatory Summary</span>
                </div>
                <p className="text-sm leading-relaxed text-[#333333] font-medium">
                  {post.content.summary}
                </p>
              </div>

              {/* Dynamic Content Sections */}
              {post.content.sections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2
                    className="text-2xl font-bold text-[#111111] tracking-tight leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base text-[#4B5563] leading-relaxed font-normal"
                    >
                      {p}
                    </p>
                  ))}

                  {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                    <div className="mt-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                      <div className="text-xs font-bold text-[#006EDC] uppercase tracking-wider">
                        Key Regulatory Standards:
                      </div>
                      {sec.keyTakeaways.map((takeaway, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-2.5 text-xs text-[#1E293B] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#008A8A] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Tags */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-2">
                  Related Topics:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Dossier Request Card */}
              <div className="sticky top-28 rounded-3xl p-6 bg-gradient-to-br from-[#082B61] to-[#040D22] text-white border border-white/10 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00f2fe] mb-2">
                  Commercial Sourcing
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Need Dossiers or Sourcing Quotes?
                </h3>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Connect directly with our regulatory and export division for immediate CTD dossier indexes, MOQs, and FOB/CIF commercial pricing.
                </p>

                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#006edc] text-[#040d22] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                >
                  <span>Inquire For Export</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>

          {/* ── Related Articles ── */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#006EDC] mb-2">
                Recommended Reading
              </div>
              <h2
                className="text-2xl font-bold text-[#111111] mb-8"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                More Regulatory & Quality Insights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blogs/${rPost.slug}`}
                    className="group flex flex-col justify-between p-6 rounded-3xl bg-[#FAFBF9] border border-[#E5E5E5] hover:border-[#006EDC]/40 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#006EDC] mb-2">
                        {rPost.category} · {rPost.readTime}
                      </div>
                      <h3
                        className="text-lg font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-snug mb-2"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {rPost.title}
                      </h3>
                      <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed">
                        {rPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#006EDC]">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
