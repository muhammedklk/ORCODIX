"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

interface CustomCursorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isHovered: boolean;
}

export default function CustomCursor({ containerRef, isHovered }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Initialize cursor position out of viewport
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physical interpolation config for high-fidelity LERP cursor
  const springConfig = { damping: 35, stiffness: 350, mass: 0.45 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch/mobile devices
    const checkTouchDevice = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsTouchDevice(isTouch);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      // Subtract half cursor dimension (60px / 2 = 30px) for centering
      mouseX.set(e.clientX - 30);
      mouseY.set(e.clientY - 30);
    };

    const handleMouseEnter = () => {
      if (!isTouchDevice) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 100,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.15 : 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-[60px] h-[60px] rounded-full bg-white text-black flex flex-col items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-neutral-100/50"
        >
          {/* Eye Icon */}
          <motion.div
            animate={{
              y: isHovered ? -3 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <Eye className="w-5 h-5 text-black" strokeWidth={2.5} />
          </motion.div>

          {/* View text fades in below on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: 5 }}
                className="text-[9px] font-extrabold uppercase tracking-widest text-black mt-0.5"
                transition={{ duration: 0.18 }}
              >
                View
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
