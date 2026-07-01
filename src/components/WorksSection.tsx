"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import Link from "next/link";

interface WorkItem {
  src: string;
  title: string;
  category: string;
}

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveredCard, setIsHoveredCard] = useState(false);

  const works: WorkItem[] = [
    {
      src: "/images/work-1.jpg",
      title: "Frank Dear Branding",
      category: "Branding",
    },
    {
      src: "/images/work-2.jpg",
      title: "Trial stationary design",
      category: "Print",
    },
    {
      src: "/images/work-3.jpg",
      title: "SayNoWay - Solid Branding / Package",
      category: "Branding / Packaging",
    },
    {
      src: "/images/work-4.jpg",
      title: "Stray studies",
      category: "Branding",
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
    hidden: { opacity: 0, y: 40 },
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
      id="work"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 md:py-32 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20 scroll-mt-28"
    >
      {/* Premium Custom Cursor Overlay */}
      <CustomCursor containerRef={containerRef} isHovered={isHoveredCard} />

      <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        {/* Section Header */}
        <div className="flex flex-row items-center justify-between mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[var(--text-primary)] transition-colors duration-400 flex items-center gap-2 tracking-tight">
            <span className="text-[var(--text-secondary)]">↳</span> Featured works
          </h2>
          <Link
            href="/works"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:opacity-75 transition-opacity"
          >
            <span>View all</span>
            {/* Fine diagonal arrow in a circle */}
            <div className="w-6 h-6 rounded-full border border-[var(--btn-secondary-border)] flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 stroke-current fill-none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Works Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer flex flex-col gap-4 md:cursor-none"
              onMouseEnter={() => setIsHoveredCard(true)}
              onMouseLeave={() => setIsHoveredCard(false)}
            >
              {/* Rounded Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-[var(--nav-border)]/60 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-400 shadow-md">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Category Info */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] transition-colors duration-400 leading-snug">
                  {work.title}
                </h3>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium transition-colors duration-400">
                  {work.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
