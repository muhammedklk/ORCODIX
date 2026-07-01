"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState<string>("craft");

  const pillars: Pillar[] = [
    {
      id: "craft",
      icon: <Sparkles className="w-5 h-5 text-[#FF7F37]" />,
      title: "Precision Craftsmanship",
      subtitle: "Aesthetics + Engineering",
      description: "We hand-craft every line of code and UI component, ensuring mathematically precise layouts, clean codebases, and stunning animations that load instantaneously.",
    },
    {
      id: "immersive",
      icon: <Compass className="w-5 h-5 text-[#FF7F37]" />,
      title: "Immersive Interactions",
      subtitle: "Tactile Sensory Feel",
      description: "By integrating fluid micro-interactions, spring physics, and sleek dark modes, we create digital environments that feel alive and responsive to every cursor movement.",
    },
    {
      id: "strategic",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF7F37]" />,
      title: "Strategic Impact",
      subtitle: "Conversion + Growth",
      description: "We don't just build beautiful portfolios. We design tailored digital systems built around your specific business goals, converting visitors into lifelong loyal advocates.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "150+", label: "Projects Delivered" },
    { value: "12", label: "Creative Awards" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF7F37]/5 to-[#3b82f6]/5 blur-3xl rounded-full opacity-50 pointer-events-none dark:opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3b82f6]/5 to-[#FF7F37]/5 blur-3xl rounded-full opacity-50 pointer-events-none dark:opacity-20" />

      <motion.div
        className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {/* Left Column: Narrative Copy & Stats */}
        <div className="lg:col-span-6 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            {/* Subhead Tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[var(--text-secondary)] transition-colors duration-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
              <span className="uppercase tracking-widest text-[#FF7F37]">↳ Who We Are</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-[32px] sm:text-[42px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] transition-colors duration-400"
            >
              We build digital masterpieces that redefine how brands connect.
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed transition-colors duration-400 max-w-[550px]"
            >
              At <span className="text-[var(--text-primary)] font-semibold">ORCODIX</span>, we merge striking aesthetics with precision software engineering. We believe every pixel must serve a purpose, transforming complex challenges into clean, high-performance, and responsive digital products.
            </motion.p>

            {/* Read More Link */}
            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7F37] hover:text-[#ff9254] transition-colors duration-300 group"
              >
                Discover our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-[var(--nav-border)]/40 pt-10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] transition-colors duration-400 bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-primary)]/80 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] transition-colors duration-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Pillars Grid */}
        <div className="lg:col-span-6 w-full flex flex-col gap-6">
          <motion.div variants={itemVariants} className="w-full flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] mb-2">
              ↳ Our Core Pillars
            </h3>
            
            <div className="flex flex-col gap-4">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <motion.div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`relative p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-400 flex flex-col gap-2 overflow-hidden ${
                      isActive
                        ? "border-[#FF7F37] bg-white dark:bg-white/[0.02] shadow-[0_8px_30px_rgba(255,127,55,0.04)]"
                        : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-neutral-300 dark:hover:border-neutral-700"
                    }`}
                    whileHover={{ x: isActive ? 0 : 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glass sheen overlay for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F37]/5 via-transparent to-transparent pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between w-full z-10">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive ? "bg-[#FF7F37]/10" : "bg-neutral-100 dark:bg-white/5"
                        }`}>
                          {pillar.icon}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-extrabold text-sm sm:text-base text-[var(--text-primary)] transition-colors duration-400">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] transition-colors duration-400">
                            {pillar.subtitle}
                          </span>
                        </div>
                      </div>
                      
                      {/* Check indicator */}
                      <CheckCircle2 className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? "text-[#FF7F37] opacity-100 scale-100" : "text-neutral-300 dark:text-neutral-700 opacity-40 scale-75"
                      }`} />
                    </div>

                    {/* Animated Description expansion */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden z-10"
                        >
                          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-3 border-t border-[var(--nav-border)]/40 pt-3 transition-colors duration-400">
                            {pillar.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
