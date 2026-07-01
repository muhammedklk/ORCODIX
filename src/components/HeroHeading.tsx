"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroHeading() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
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
    <motion.div
      className="flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto select-none px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="font-bold leading-[1.08] tracking-[-0.03em] text-[8.5vw] sm:text-[7.8vw] md:text-[6.8vw] lg:text-[104px] xl:text-[120px] w-full flex flex-col items-center text-[var(--text-primary)]"
      >
        {/* Row 1 */}
        <span className="block whitespace-nowrap transition-colors duration-400">
          Digital design &
        </span>
        {/* Row 2 */}
        <span className="block mt-1 sm:mt-2 whitespace-nowrap transition-colors duration-400">
          development agency.
        </span>
      </motion.h1>

      {/* Subheading/Description */}
      <motion.p
        variants={itemVariants}
        className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-[660px] mx-auto mt-6 sm:mt-8 leading-relaxed font-normal transition-colors duration-400"
      >
        We help companies build scalable digital products with thoughtful design
        systems and carefully crafted development.
      </motion.p>
    </motion.div>
  );
}
