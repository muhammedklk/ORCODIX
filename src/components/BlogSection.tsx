"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  src: string;
  category: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
}

export default function BlogSection() {
  const posts: BlogPost[] = [
    {
      src: "/images/blog-1.jpg",
      category: "Product Design",
      date: "June 28, 2026",
      title: "Aesthetic Precision: Why Every Pixel Counts in Modern Interfaces",
      description: "An exploration of how visual structure, alignment, and minimalist spacing affect human trust and conversion rates in luxury branding.",
      readTime: "5 min read",
    },
    {
      src: "/images/blog-2.jpg",
      category: "Development",
      date: "June 15, 2026",
      title: "Mastering Fluid Motion and Performance with Framer Motion",
      description: "A developer-focused guide on spring physics parameters, hardware-accelerated animations, and maintaining performance in highly dynamic apps.",
      readTime: "7 min read",
    },
    {
      src: "/images/blog-3.jpg",
      category: "Brand Strategy",
      date: "May 29, 2026",
      title: "The Art of Simplicity: Building Digital Identities That Stand Out",
      description: "How minimalist design choices, bespoke typography, and generous negative space establish authority and memorability in saturated markets.",
      readTime: "4 min read",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="blog"
      className="relative w-full py-24 sm:py-32 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20 scroll-mt-28"
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[var(--text-secondary)] transition-colors duration-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
              <span className="uppercase tracking-widest text-[#FF7F37]">↳ Insights & Writing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] transition-colors duration-400 max-w-[750px] leading-tight">
              Latest thoughts on design, engineering, and digital growth.
            </h2>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:opacity-75 transition-opacity"
          >
            <span>Read all articles</span>
            <div className="w-6 h-6 rounded-full border border-[var(--btn-secondary-border)] flex items-center justify-center flex-shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Blog Post Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="group cursor-pointer flex flex-col gap-4 p-4 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[#FF7F37]/30 hover:bg-white/[0.01] dark:hover:bg-white/[0.01] transition-all duration-400 shadow-sm"
              whileHover={{ y: -6 }}
            >
              {/* Rounded Image Wrapper */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--nav-border)]/40 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-400">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                
                {/* Float Badge */}
                <span className="absolute top-3 left-3 bg-[var(--background)]/90 backdrop-blur-md border border-[var(--nav-border)]/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] px-3 py-1 rounded-full shadow-sm z-10 transition-colors">
                  {post.category}
                </span>
              </div>

              {/* Meta & Info details */}
              <div className="flex flex-col gap-2 px-1 py-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--text-secondary)] transition-colors uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug group-hover:text-[#FF7F37] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal line-clamp-3 leading-relaxed mt-1">
                  {post.description}
                </p>

                {/* Inline link arrow trigger */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-primary)] mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
