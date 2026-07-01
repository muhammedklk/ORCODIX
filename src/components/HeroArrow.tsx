"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroArrow() {
  return (
    <motion.span
      className="inline-flex items-center justify-center relative w-[60px] h-[30px] sm:w-[100px] sm:h-[45px] md:w-[130px] md:h-[55px] lg:w-[160px] lg:h-[70px] mx-2 sm:mx-4 select-none vertical-middle align-middle"
      animate={{
        y: [0, -4, 0],
        rotate: [0, 1.5, -0.5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 160 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Draw Path */}
        <motion.path
          d="M 10 50 C 45 10, 100 15, 145 28"
          stroke="#E07A5F" /* Warm terracotta/orange */
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.2, ease: "easeOut", delay: 0.8 },
            opacity: { duration: 0.4, delay: 0.8 }
          }}
        />

        {/* Arrowhead */}
        <motion.path
          d="M 132 18 L 148 29 L 136 43"
          stroke="#E07A5F"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.8,
            ease: "easeOut"
          }}
        />
      </svg>
    </motion.span>
  );
}
