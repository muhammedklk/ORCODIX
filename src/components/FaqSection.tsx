"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Star } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is UI UX design, and why is it important?",
      answer:
        "UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.",
    },
    {
      question: "What is the UX design process, and how long does it take?",
      answer:
        "Our process consists of four key phases: discovery & strategy, wireframing & prototyping, visual UI design, and development handoff. Depending on project scope, it usually takes between 3 to 6 weeks to complete.",
    },
    {
      question: "What types of UX design services do you offer?",
      answer:
        "We offer comprehensive digital product design, web app interface design, branding & identity development, MVP design for startup founders, product revamps, and dedicated team extensions.",
    },
    {
      question: "How does ORCODIX UI UX Design differ from other design solutions?",
      answer:
        "ORCODIX fuses ultra-premium Apple-level minimalism with conversion-focused design psychology. We do not just build pretty layouts; we build scalable digital experiences structured specifically around your business goals.",
    },
    {
      question: "Are there any customer reviews or case studies available for ORCODIX UI UX Design?",
      answer:
        "Yes! We have worked with over 50 startups and mid-market companies. You can explore our featured work gallery above or contact us directly to request case studies matching your niche.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[var(--background)] transition-colors duration-400 select-none overflow-hidden border-t border-[var(--nav-border)]/20">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Headings & Badges */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-[#FF7F37] uppercase mb-4">
            FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] transition-colors duration-400 leading-tight mb-4 max-w-[400px]">
            Questions? We’ve Got Answers
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] transition-colors duration-400 font-light leading-relaxed mb-8 max-w-[440px]">
            ORCODIX reduces design complexity & speeds up product launches with
            clear UX workflows, scalable visual systems, and no-code execution.
          </p>

          {/* CTA Buttons & Ratings */}
          <div className="flex flex-wrap items-center gap-6 w-full">
            {/* Book Call Pill Button */}
            <motion.a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--background)] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition-all select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Book a free call</span>
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </motion.a>

            {/* Ratings Badge */}
            <div className="flex items-center gap-3">
              {/* Clutch-style C icon */}
              <div className="w-9 h-9 rounded-full bg-[#121212] dark:bg-white/5 border border-neutral-200/10 flex items-center justify-center relative">
                <span className="font-extrabold text-base text-[#FF7F37]">C</span>
                <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#FF7F37]" />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5 text-yellow-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-[var(--text-primary)] transition-colors duration-400">
                  Rating 8 reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion Lists */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;

            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className={`w-full rounded-2xl border cursor-pointer select-none transition-all duration-400 p-6 flex flex-col justify-center ${
                  isOpen
                    ? "border-[#FF7F37] bg-[#1A1A1A]/20 dark:bg-white/[0.02]"
                    : "border-neutral-200/50 dark:border-neutral-800/80 bg-white dark:bg-[#121212]/30 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                {/* Question Row Header */}
                <div className="flex items-center justify-between gap-4 w-full">
                  <h3
                    className="text-sm sm:text-base font-extrabold transition-colors duration-300 text-[var(--text-primary)]"
                  >
                    {faq.question}
                  </h3>

                  {/* Indicator Box */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FF7F37] text-white"
                        : "border border-neutral-200 dark:border-neutral-800 text-[var(--text-secondary)]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </div>

                {/* Answer Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
