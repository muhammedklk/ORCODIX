"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MotionLink = motion(Link);


export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme setup (defaulting to dark)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // ScrollSpy Intersection Observer
    const sectionIds = ["about", "work", "blog", "contact"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -55% 0px", // triggers when section is in main middle area of screen
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Work", href: isHome ? "#work" : "/#work" },
    { label: "Blog", href: isHome ? "#blog" : "/#blog" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 sm:px-12 md:px-16 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-sm"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full max-w-[1440px] flex items-center justify-between">
          {/* Left: Logo */}
          <Link href={isHome ? "#" : "/"} className="flex items-center group">
            <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-[var(--text-primary)] transition-colors duration-400">
              ORCODIX.
            </span>
          </Link>

          {/* Center: Premium Sliding Glass Capsule Menu */}
          <nav 
            className="hidden md:flex items-center bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full p-1.5 shadow-sm transition-all duration-400"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`text-xs lg:text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-full relative block ${
                      isActive ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className="relative z-10 flex flex-col items-center">
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-dot"
                          className="w-1 h-1 rounded-full bg-[#FF7F37] absolute -bottom-1"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </span>
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="navbar-hover-pill"
                        className="absolute inset-0 bg-neutral-200/60 dark:bg-white/5 rounded-full -z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-[var(--text-secondary)]/40 select-none text-xs pointer-events-none">
                      •
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[var(--nav-border)] bg-neutral-100/50 dark:bg-white/5 text-[var(--text-primary)] hover:bg-neutral-200/50 dark:hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle light/dark theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Outlined Action Button ("Get template") */}
            <MotionLink
              href={isHome ? "#template" : "/#template"}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full border border-[var(--btn-secondary-border)] bg-transparent text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--text-primary)] hover:text-[var(--background)] hover:border-[var(--text-primary)] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get template
            </MotionLink>

            {/* Mobile Menu Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[var(--text-primary)] hover:opacity-75 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col justify-between p-8 pt-28 border-b border-[var(--nav-border)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Nav List */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-bold transition-colors ${
                        isActive ? "text-[#FF7F37]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Options */}
            <motion.div
              className="w-full flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={isHome ? "#template" : "/#template"}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-3.5 rounded-full border border-[var(--btn-secondary-border)] bg-transparent text-[var(--text-primary)] text-base font-semibold hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-colors text-center"
              >
                Get template
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
