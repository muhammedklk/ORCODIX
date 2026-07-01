"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 sm:mt-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.5,
        ease: [0.16, 1, 0.3, 1], // premium custom ease-out
      }}
    >
      {/* Primary Action Button */}
      <motion.button
        className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#111111] text-white font-medium text-sm sm:text-base tracking-tight shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <span className="relative z-10">Start Your Project</span>
        {/* Glow effect on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
      </motion.button>

      {/* Secondary Action Button */}
      <motion.button
        className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full border border-neutral-200 bg-white text-[#111111] font-medium text-sm sm:text-base tracking-tight shadow-sm hover:bg-neutral-50 hover:border-neutral-300 transition-colors duration-300"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        View Our Work
      </motion.button>
    </motion.div>
  );
}
