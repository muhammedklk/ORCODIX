"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
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
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-28 pb-8 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden">
      {/* Top Headline Section */}
      <div className="w-full text-left mt-8">
        <motion.h1
          className="text-[9.5vw] font-black uppercase tracking-tighter text-[var(--text-primary)] leading-none text-left w-full select-none transition-colors duration-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          ORCODIX ®
        </motion.h1>
      </div>

      {/* Middle Content Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-center my-auto pt-8 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Subheading Description */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            variants={itemVariants}
            className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.15] text-[var(--text-primary)] text-left tracking-tight transition-colors duration-400 max-w-[700px]"
          >
            Crafting digital experiences that convert websites tailored to your
            brand and business goals.
          </motion.p>
        </div>

        {/* Right Column: Landscape Image Card */}
        <div className="lg:col-span-5 flex justify-start lg:justify-end w-full relative">
          {/* Soft ambient glow behind hero visual */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF7F37]/10 via-transparent to-[#3b82f6]/5 blur-3xl rounded-full opacity-60 dark:opacity-20 pointer-events-none" />

          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-[460px] aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--nav-border)] bg-[var(--card-bg)] shadow-[0_8px_30px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <video
              src="/videos/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer Section */}
      <motion.div
        className="flex flex-row justify-between items-center w-full pt-6 border-t border-[var(--nav-border)]/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Bottom Left Label */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-400">
          <span>Digital Design & Development Agency</span>
          {/* 8-spoke custom sparkle SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-[var(--text-primary)] transition-colors duration-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </div>

        {/* Bottom Right Label */}
        <span className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] transition-colors duration-400">
          (Scroll)
        </span>
      </motion.div>
    </section>
  );
}
