"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Code2 } from "lucide-react";

interface ProcessItem {
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
  isActiveByDefault?: boolean;
  hasButton?: boolean;
  buttonText?: string;
}

export default function ProcessSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps: ProcessItem[] = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#FF7F37]" strokeWidth={2} />,
      number: "01",
      title: "Idea",
      desc: "We meet with your team to learn more about your project idea and goals.",
    },
    {
      icon: (
        // Custom precise Figma SVG Icon
        <svg
          viewBox="0 0 36 36"
          fill="none"
          className="w-6 h-6 text-[#FF7F37]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9C12 6.51472 14.0147 4.5 16.5 4.5C18.9853 4.5 21 6.51472 21 9V13.5H16.5C14.0147 13.5 12 11.4853 12 9Z"
            fill="currentColor"
          />
          <path
            d="M12 18C12 15.5147 14.0147 13.5 16.5 13.5H21V22.5H16.5C14.0147 22.5 12 20.4853 12 18Z"
            fill="currentColor"
          />
          <path
            d="M21 13.5H25.5C27.9853 13.5 30 11.4853 30 9C30 6.51472 27.9853 4.5 25.5 4.5C23.0147 4.5 21 6.51472 21 9V13.5Z"
            fill="currentColor"
          />
          <path
            d="M21 13.5H25.5C27.9853 13.5 30 15.5147 30 18C30 20.4853 27.9853 22.5 25.5 22.5H21V13.5Z"
            fill="currentColor"
          />
          <path
            d="M12 27C12 24.5147 14.0147 22.5 16.5 22.5H21V27C21 29.4853 18.9853 31.5 16.5 31.5C14.0147 31.5 12 29.4853 12 27Z"
            fill="currentColor"
          />
        </svg>
      ),
      number: "02",
      title: "Web Design",
      desc: "We will design a mockup or prototype of your website and present it to you.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#FF7F37]" strokeWidth={2} />,
      number: "03",
      title: "Development",
      desc: "We develop websites using the best practices and standards.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#FF7F37]" strokeWidth={2} />,
      number: "04",
      title: "Launch",
      desc: "When the project is completed, we will schedule a 2hr session to train your team on using",
      isActiveByDefault: true,
      hasButton: true,
      buttonText: "Find your plan",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
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

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-[#FF7F37] uppercase mb-3">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] transition-colors duration-400 leading-tight">
            Our Design & Development Process
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] transition-colors duration-400 mt-4 font-light">
            A clear, proven process to turn your ideas into impactful digital solutions.
          </p>
        </div>

        {/* Process Cards Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {steps.map((step, index) => {
            const isHovered = hoveredIdx === index;
            const isLaunchCard = step.isActiveByDefault;
            const showActiveStyle = isLaunchCard || isHovered;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`relative flex flex-col justify-center items-center text-center p-8 min-h-[350px] rounded-[28px] border transition-all duration-400 select-none bg-[var(--card-bg)] border-[var(--card-border)] ${
                  isLaunchCard
                    ? "shadow-[0_8px_30px_rgba(255,127,55,0.04)] border-[#FF7F37]/35 dark:border-[#FF7F37]/20 bg-gradient-to-b from-[#FF7F37]/[0.04] to-[var(--card-bg)]"
                    : isHovered
                    ? "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.03),0_10px_10px_-5px_rgba(0,0,0,0.02)] border-[#FF7F37]/30 dark:border-[#FF7F37]/35"
                    : "shadow-[0_8px_30px_rgba(0,0,0,0.02),0_1px_2px_rgba(0,0,0,0.01)]"
                }`}
              >
                {/* Header Section (Icon + Title) */}
                <div className="flex flex-col items-center w-full">
                  {/* Glowing Real Icon in Circle Housing */}
                  <div className="mb-6 flex justify-center w-full">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 dark:bg-orange-950/20 text-[#FF7F37] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500/15">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 transition-colors duration-300 ${
                      isLaunchCard
                        ? "text-[#FF7F37]"
                        : isHovered
                        ? "text-[#FF7F37]"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed max-w-[245px]">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Border Accent Underlight (For Cards 1, 2, and 3) */}
                {!isLaunchCard && (
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2.5px] bg-gradient-to-r from-transparent via-[#FF7F37] to-transparent transition-all duration-500 rounded-full ${
                      isHovered ? "opacity-100 scale-x-105" : "opacity-40 scale-x-100"
                    }`}
                  />
                )}

                {/* Action Button (Card 4 only - Rounded Pill Gold-Orange Gradient) */}
                {step.hasButton && (
                  <motion.a
                    href="#contact"
                    className="w-full max-w-[220px] py-3 bg-gradient-to-r from-[#FFB74D] to-[#FF5E3A] text-black font-semibold text-sm rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-opacity mt-8 select-none"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {step.buttonText}
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
