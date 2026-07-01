"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  src: string;
  client: string;
  year: string;
  role: string;
}

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = "Works | ORCODIX";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const tabs = [
    { id: "all", label: "All" },
    { id: "web design", label: "Web Design" },
    { id: "web developing", label: "Web Developing" },
    { id: "ui/ux", label: "UI / UX" },
    { id: "mobile app design", label: "Mobile App Design" },
    { id: "branding", label: "Branding" }
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Frank Dear Branding",
      category: "Branding",
      src: "/images/work-1.jpg",
      client: "Frank Dear Ltd.",
      year: "2024",
      role: "Visual Identity & Packaging"
    },
    {
      id: 2,
      title: "Nova Smartwatch Interface",
      category: "UI / UX",
      src: "/images/hero-watch.png",
      client: "Nova Corp",
      year: "2025",
      role: "Interaction Design & Prototyping"
    },
    {
      id: 3,
      title: "Trial Stationary Design",
      category: "Branding",
      src: "/images/work-2.jpg",
      client: "Trial Office",
      year: "2024",
      role: "Stationary & Print Assets"
    },
    {
      id: 4,
      title: "Vapor Web Platform",
      category: "Web Developing",
      src: "/images/hero-switch.png",
      client: "Vapor Tech",
      year: "2026",
      role: "Next.js & Performance Engineering"
    },
    {
      id: 5,
      title: "SayNoWay - Solid Branding",
      category: "Branding",
      src: "/images/work-3.jpg",
      client: "SayNoWay Co.",
      year: "2025",
      role: "Logo & Brand Strategy"
    },
    {
      id: 6,
      title: "Aether Mobile Dashboard",
      category: "Mobile App Design",
      src: "/images/proc-tablet.png",
      client: "Aether Health",
      year: "2025",
      role: "Mobile App Interface Design"
    },
    {
      id: 7,
      title: "Stray studies",
      category: "Branding",
      src: "/images/work-4.jpg",
      client: "Stray Studio",
      year: "2024",
      role: "Editorial Identity"
    },
    {
      id: 8,
      title: "Prism Creative Hub",
      category: "Web Design",
      src: "/images/hero-prism.png",
      client: "Prism Collective",
      year: "2025",
      role: "Figma Art Direction"
    },
    {
      id: 9,
      title: "Interactive Cube Platform",
      category: "Web Design",
      src: "/images/service-cube.png",
      client: "3D Cubes",
      year: "2026",
      role: "Interactive 3D Art & Layouts"
    },
    {
      id: 10,
      title: "Aura Sound System App",
      category: "Mobile App Design",
      src: "/images/service-orb.png",
      client: "Aura Acoustics",
      year: "2025",
      role: "Acoustics Mobile Interface"
    },
    {
      id: 11,
      title: "Torus Fluid Mechanics",
      category: "UI / UX",
      src: "/images/service-torus.png",
      client: "Torus Labs",
      year: "2026",
      role: "Fluid Simulation UI Design"
    },
    {
      id: 12,
      title: "Vector Marketing Landing",
      category: "Web Developing",
      src: "/images/hero-orange.png",
      client: "Vector Agency",
      year: "2024",
      role: "Tailwind CSS & Webflow Integration"
    }
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <main 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[#FF7F37]/20 md:cursor-none"
    >
      <Navbar />

      {/* Custom Cursor */}
      <CustomCursor containerRef={containerRef} isHovered={isHoveredCard} />

      {/* Decorative Blob Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/[0.02] to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-[#FF7F37]/[0.02] to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* ─── HERO HEADER ─── */}
      <section className="relative pt-36 sm:pt-40 md:pt-48 pb-10 px-6 sm:px-12 md:px-16 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6">
          {/* Back Button */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#FF7F37] transition-colors duration-300 w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Subhead Tag */}
          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
            <span className="uppercase tracking-widest text-[#FF7F37]">↳ Works & Cases</span>
          </div>

          {/* Headline */}
          <h1 className="text-[38px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-black uppercase tracking-tighter leading-[0.95] text-[var(--text-primary)]">
            DRIVEN BY INTENT.<br />
            DEFINED BY <span className="bg-gradient-to-r from-[#FF7F37] to-[#ff9b62] bg-clip-text text-transparent">CRAFT.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[620px] mt-2">
            Explore our curated gallery of full-stack engineering platforms, tactile user interfaces, mobile applications, and strategic brand identities.
          </p>
        </div>
      </section>

      {/* ─── CATEGORY FILTER TABS ─── */}
      <section className="py-6 px-6 sm:px-12 md:px-16 w-full max-w-[1440px] mx-auto relative z-40">
        {/* Mobile Dropdown (Visible on mobile, hidden on desktop) */}
        <div ref={dropdownRef} className="block md:hidden relative w-full mb-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl border border-[var(--nav-border)]/80 bg-[var(--card-bg)] text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] shadow-sm focus:outline-none transition-all duration-300 active:scale-[0.98]"
          >
            <span>{tabs.find(t => t.id === activeTab)?.label}</span>
            <ChevronDown className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-2 z-50 rounded-2xl border border-[var(--nav-border)]/80 bg-white dark:bg-[#1A1A1A] shadow-lg overflow-hidden"
              >
                <div className="flex flex-col p-1.5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                        activeTab === tab.id 
                          ? "bg-[#FF7F37] text-white" 
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-neutral-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Tabs (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex flex-wrap items-center gap-2 border-b border-[var(--nav-border)]/40 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 relative ${
                activeTab === tab.id 
                  ? "text-white" 
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-neutral-100 dark:hover:bg-white/5"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="active-works-tab"
                  className="absolute inset-0 bg-[#FF7F37] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ─── ANIMATED WORKS GRID ─── */}
      <section className="py-12 pb-24 px-6 sm:px-12 md:px-16 w-full max-w-[1440px] mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col gap-5"
                onMouseEnter={() => setIsHoveredCard(true)}
                onMouseLeave={() => setIsHoveredCard(false)}
              >
                {/* Image Wrap */}
                <div className="relative w-full aspect-[4/3] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[var(--nav-border)]/60 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-400 shadow-md">
                  {/* Subtle hover scaling */}
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Hover metadata card overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8 backdrop-blur-[2px]">
                    <div className="w-full flex justify-between items-end text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7F37]">↳ PROJECT DETAILS</span>
                        <div className="flex flex-col text-xs font-medium text-neutral-200 gap-0.5">
                          <span>Client: {project.client}</span>
                          <span>Role: {project.role}</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between items-start px-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] group-hover:text-[#FF7F37] transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                      <span className="uppercase tracking-widest">{project.category}</span>
                      <span>•</span>
                      <span className="font-mono">{project.year}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] bg-neutral-100 dark:bg-white/5 border border-white/[0.04] px-2.5 py-1 rounded-md">
                    {project.id < 10 ? `0${project.id}` : project.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <ContactSection />
    </main>
  );
}
