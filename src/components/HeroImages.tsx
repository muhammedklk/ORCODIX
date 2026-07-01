"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImagesProps {
  type: "stack" | "landscape";
}

export default function HeroImages({ type }: HeroImagesProps) {
  if (type === "stack") {
    // Stack of 3 overlapping vertical images
    const cards = [
      { src: "/images/hero-orange.png", alt: "Orange design mockup", delay: 0, yOffset: [2, -6, 2] },
      { src: "/images/hero-watch.png", alt: "Sleek smartwatch interface", delay: 0.4, yOffset: [-4, 4, -4] },
      { src: "/images/hero-cursor.png", alt: "Modern cursor hand", delay: 0.8, yOffset: [4, -2, 4] },
    ];

    return (
      <span className="inline-flex items-center align-middle justify-center mx-2 sm:mx-4 select-none vertical-middle h-[45px] sm:h-[75px] md:h-[95px] lg:h-[120px] relative">
        <span className="flex -space-x-3 sm:-space-x-5 md:-space-x-7 items-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-[10px] sm:rounded-[14px] md:rounded-[20px] border border-white/60 bg-white/40 shadow-sm md:shadow-lg flex-shrink-0 w-[35px] h-[45px] sm:w-[58px] sm:h-[75px] md:w-[74px] md:h-[95px] lg:w-[94px] lg:h-[120px]`}
              animate={{
                y: card.yOffset,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              }}
              whileHover={{
                scale: 1.1,
                rotate: index === 0 ? -2 : index === 2 ? 2 : 0,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                priority
                sizes="(max-width: 640px) 35px, (max-width: 768px) 58px, (max-width: 1024px) 74px, 94px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </span>
      </span>
    );
  }

  // Single landscape capabilities list card
  const capabilities = [
    { name: "Digital", highlight: true },
    { name: "Web", highlight: false },
    { name: "Branding", highlight: false },
    { name: "Creative", highlight: false },
    { name: "Branding", highlight: false },
    { name: "Immersive", highlight: false },
    { name: "Motion", highlight: false },
    { name: "Social", highlight: false },
    { name: "Culture", highlight: false },
  ];

  return (
    <motion.span
      className="inline-flex items-center align-middle justify-center mx-2 sm:mx-4 select-none vertical-middle h-[45px] sm:h-[75px] md:h-[95px] lg:h-[120px] relative"
      animate={{
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative overflow-hidden rounded-[10px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border border-white/60 bg-gradient-to-br from-[#FFF2EE]/95 via-[#FFFDFD]/80 to-[#EBF3FC]/95 shadow-sm md:shadow-lg w-[76px] h-[45px] sm:w-[130px] sm:h-[75px] md:w-[165px] md:h-[95px] lg:w-[210px] lg:h-[120px] flex flex-col justify-center items-start px-2.5 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-left">
        {capabilities.map((cap, i) => (
          <span
            key={i}
            className={`font-semibold tracking-tight leading-[1.05] text-[4.5px] sm:text-[7.5px] md:text-[9.5px] lg:text-[12px] ${
              cap.highlight ? "text-[#E07A5F]" : "text-[#737373]"
            }`}
          >
            {cap.name}
          </span>
        ))}
      </div>
    </motion.span>
  );
}
