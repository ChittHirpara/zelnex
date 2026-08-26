"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PillNav } from "@/components/ui/PillNav";
import { BLOG_POSTS } from "@/data/blogs";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  Truck,
  Globe2,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Insights", icon: BookOpen },
  { id: "Regulatory & Dossiers", label: "Regulatory & Dossiers", icon: FileCheck2 },
  { id: "Quality & GMP", label: "Quality & GMP", icon: ShieldCheck },
  { id: "Cold-Chain & Logistics", label: "Cold-Chain", icon: Truck },
  { id: "Market Expansion", label: "Market Expansion", icon: Globe2 },
];

export function BlogsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return BLOG_POSTS.slice(0, 3);
    return BLOG_POSTS.filter((p) => p.category === selectedCategory).slice(0, 3);
  }, [selectedCategory]);

  return (
    <section
      id="blogs"
      className="relative w-full bg-white text-[#181B1F] py-20 sm:py-28 px-4 sm:px-6 md:px-8 select-none font-sans overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006EDC]/10 border border-[#006EDC]/20 mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#006EDC] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006EDC]">
              Pharmaceutical Knowledge & Insights
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Regulatory Insights & Industry Intelligence
          </h2>

          <p className="mt-4 text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Technical guides, eCTD submission guidelines, Zone IVb stability protocols, and cold-chain logistics for global distributors and MOH procurement teams.
          </p>
        </div>

        {/* ── GSAP Category Filter Tabs ── */}
        <div className="mb-12 flex justify-center">
          <PillNav
            items={CATEGORIES.map((cat) => ({
              id: cat.id,
              label: cat.label,
              icon: cat.icon,
            }))}
            activeId={selectedCategory}
            onSelect={(id) => setSelectedCategory(id)}
            baseColor="#082B61"
            pillColor="#FAFBF9"
            pillTextColor="#2A3447"
            hoveredPillTextColor="#FFFFFF"
          />
        </div>

        {/* ── 3-Column Articles Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#FAFBF9] border border-[#E5E5E5] hover:border-[#006EDC]/40 shadow-xs hover:shadow-[0_16px_36px_rgba(0,110,220,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={`/blogs/${post.slug}`} className="block flex-1 flex flex-col">
                  {/* Cover Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-[10.5px] font-bold text-[#082B61] shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-bold text-[#111111] group-hover:text-[#006EDC] transition-colors leading-snug mb-2.5 line-clamp-2"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#555555] leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author row */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <span className="text-xs font-semibold text-[#111111]">
                          {post.author.name}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#006EDC]">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View All Insights CTA Button ── */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#082B61] text-white hover:bg-[#006EDC] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Explore All Regulatory Guides & Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
