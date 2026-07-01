"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  tag: string;
  title: string;
  imageSrc: string;
}

export default function ServicesSection() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      tag: "FOR DIGITAL EXPERIENCES",
      title: "UI UX Design",
      imageSrc: "/images/service-cube.png",
    },
    {
      tag: "FOR STARTUPS & EXISTING COMPANIES",
      title: "Product Revamp",
      imageSrc: "/images/service-orb.png",
    },
    {
      tag: "FOR VISUAL STORYTELLERS",
      title: "Brand Design",
      imageSrc: "/images/service-torus.png",
    },
    {
      tag: "FOR RAPID APP BUILDERS",
      title: "No Code Development",
      imageSrc: "/images/service-cube.png",
    },
    {
      tag: "FOR STARTUPS & FOUNDERS",
      title: "MVP Design",
      imageSrc: "/images/service-orb.png",
    },
    {
      tag: "DEDICATED UX UI TEAM",
      title: "Team Extension",
      imageSrc: "/images/service-torus.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-[#FF7F37] uppercase mb-3">
            WE ARE GREAT AT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] transition-colors duration-400 max-w-[850px] leading-tight">
            UI UX Design and Product Experience Services
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] transition-colors duration-400 mt-4 font-light">
            Designs with Exceptional User Experiences
          </p>
        </div>

        {/* Services Grid (Border Separated Lines) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-[var(--nav-border)]/40 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            const isLastRow = index >= services.length - 2;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCardIdx(index)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                className={`relative group flex flex-row items-center justify-between p-8 sm:p-12 lg:p-14 overflow-hidden min-h-[160px] sm:min-h-[220px] transition-colors duration-300 hover:bg-[var(--text-primary)]/[0.01] ${
                  isLeftColumn ? "md:border-r border-[var(--nav-border)]/40" : ""
                } ${!isLastRow ? "border-b border-[var(--nav-border)]/40" : "max-md:border-b max-md:border-[var(--nav-border)]/40"}`}
              >
                {/* Text Content */}
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-[9px] sm:text-[11px] font-bold text-[var(--text-secondary)] tracking-widest uppercase">
                    {service.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] transition-colors duration-400 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Overlapping Hover Reveal 3D Shape */}
                <AnimatePresence>
                  {hoveredCardIdx === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 45, rotate: -8 }}
                      animate={{ opacity: 0.65, x: 0, rotate: 6 }}
                      exit={{ opacity: 0, x: 45, rotate: -8 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="absolute right-[24%] top-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] pointer-events-none select-none z-0 hidden sm:block"
                    >
                      {/* Subtle ambient light glow underneath */}
                      <div className="absolute inset-0 bg-neutral-400/5 dark:bg-white/5 blur-xl rounded-full" />
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} graphic`}
                        fill
                        className="object-contain filter contrast-[1.03]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Arrow Button */}
                <div className="relative z-10 flex-shrink-0 ml-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--btn-secondary-border)] flex items-center justify-center bg-transparent group-hover:bg-[#FF7F37] group-hover:border-[#FF7F37] transition-all duration-300 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-[var(--text-primary)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 stroke-current fill-none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
