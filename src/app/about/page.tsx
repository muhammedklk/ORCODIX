"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  Target, 
  Award, 
  Layers, 
  Globe, 
  Compass,
  Bookmark
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

interface TimelineItem {
  year: string;
  title: string;
  tag: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

interface ValueCard {
  title: string;
  subtitle: string;
  description: string;
  glowClass: string; // custom glowing class for hover
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  bio: string;
  gradient: string;
  initials: string;
  skills: string[];
}

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  useEffect(() => {
    document.title = "About Details | ORCODIX";
    window.scrollTo(0, 0);
  }, []);

  const timelineData: TimelineItem[] = [
    {
      year: "2021",
      tag: "THE GENESIS",
      title: "Design & Code As One",
      description: "ORCODIX is founded in San Francisco as a unified studio.",
      details: [
        "Eliminated hand-off friction between designers and developers.",
        "Delivered 12 bespoke WebGL portfolios for tech startups.",
        "Established core values of pixel craftsmanship."
      ],
      icon: <Target className="w-5 h-5 text-[#FF7F37]" />
    },
    {
      year: "2023",
      tag: "GOING GLOBAL",
      title: "Decentralized Growth",
      description: "Scaling our footprint to support global creative projects.",
      details: [
        "Expanded operations with remote creators in Europe and Asia.",
        "Launched full-scale digital design systems for international enterprise brands.",
        "Shipped 40+ responsive high-performance platforms."
      ],
      icon: <Globe className="w-5 h-5 text-[#3b82f6]" />
    },
    {
      year: "2025",
      tag: "PEAK CRAFT",
      title: "Award-Winning Work",
      description: "Pushing limits of web engineering and interaction design.",
      details: [
        "Awarded multiple UI/UX design and creative development prizes.",
        "Implemented advanced spring physics and tactile interfaces universally.",
        "Maintained 99% client satisfaction score across all contract cycles."
      ],
      icon: <Award className="w-5 h-5 text-[#8b5cf6]" />
    },
    {
      year: "2026",
      tag: "THE FUTURE",
      title: "The Next Frontier",
      description: "Pioneering the next wave of interactive digital architecture.",
      details: [
        "Integrating bespoke AI-driven layout tools into client portal sites.",
        "Exploring custom WebGL libraries for interactive spatial displays.",
        "Setting benchmark speeds for complex frontend architectures."
      ],
      icon: <Sparkles className="w-5 h-5 text-[#fbbf24]" />
    }
  ];

  const values: ValueCard[] = [
    {
      title: "Uncompromising Craft",
      subtitle: "↳ Quality is Non-Negotiable",
      description: "We don't build standard layouts. Every micro-interaction, transition easing, and pixel alignment is hand-crafted and polished until it feels organic.",
      glowClass: "group-hover:bg-[#FF7F37]/[0.08] group-hover:border-[#FF7F37]/25",
      icon: <Layers className="w-5 h-5 text-[#FF7F37]" />
    },
    {
      title: "Radical Simplicity",
      subtitle: "↳ Function Follows Focus",
      description: "We strip away clutter to expose core intents. Our designs emphasize space and high-contrast typography, making every interaction clear and meaningful.",
      glowClass: "group-hover:bg-[#3b82f6]/[0.08] group-hover:border-[#3b82f6]/25",
      icon: <Compass className="w-5 h-5 text-[#3b82f6]" />
    },
    {
      title: "Fluid Interaction",
      subtitle: "↳ Tactile Digital Physics",
      description: "We believe software should feel alive. By integrating fluid spring mechanics and cursor responsiveness, we bridge the gap between user and screen.",
      glowClass: "group-hover:bg-[#8b5cf6]/[0.08] group-hover:border-[#8b5cf6]/25",
      icon: <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
    },
    {
      title: "Strategic Impact",
      subtitle: "↳ Metrics Over Hype",
      description: "A gorgeous design that doesn't convert is a failure. We structure layouts around your user journeys to elevate retention and maximize commercial growth.",
      glowClass: "group-hover:bg-[#fbbf24]/[0.08] group-hover:border-[#fbbf24]/25",
      icon: <Target className="w-5 h-5 text-[#fbbf24]" />
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Marcus Thorne",
      role: "Founder & Creative Director",
      quote: "“Design is the silent, visual ambassador of your brand’s intent.”",
      bio: "Marcus has spent over a decade crafting custom visual languages and immersive interfaces for top-tier design houses, startups, and international companies.",
      gradient: "from-[#FF7F37] to-[#e11d48]",
      initials: "MT",
      skills: ["Brand Systems", "Interactive Art Direction", "Typographic Layouts"]
    },
    {
      name: "Sophia Lin",
      role: "Co-Founder & Chief Engineer",
      quote: "“Clean code isn’t a technical detail—it is the foundation of speed.”",
      bio: "Sophia is a systems architect focused on Next.js performance and responsive web dynamics. She ensures our interactions render flawlessly at 60fps.",
      gradient: "from-[#3b82f6] to-[#06b6d4]",
      initials: "SL",
      skills: ["Web Performance", "React Architecture", "Animation Engineering"]
    },
    {
      name: "Dr. Ethan Vance",
      role: "Head of Product Strategy",
      quote: "“Design for the human mind, and conversion will follow naturally.”",
      bio: "Ethan applies user psychology data to optimize layouts, reducing cognitive friction to naturally guide customers along commercial product cycles.",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      initials: "EV",
      skills: ["User Psychology", "Conversion Analytics", "Product Strategy"]
    }
  ];

  const stats = [
    { value: "99%", label: "Client Satisfaction Score", sub: "Based on multi-year contract renewals" },
    { value: "150+", label: "Digital Products Delivered", sub: "Websites, web apps, and design systems" },
    { value: "12", label: "Creative Design Awards", sub: "For UI craftsmanship and interaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[#FF7F37]/20">
      <Navbar />

      {/* ─── DYNAMIC RADIAL BLOBS (AESTHETIC UPGRADE) ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF7F37]/[0.03] via-[#3b82f6]/[0.02] to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] left-[-200px] w-[900px] h-[900px] bg-gradient-to-tr from-[#3b82f6]/[0.02] via-[#8b5cf6]/[0.02] to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-100px] w-[700px] h-[700px] bg-gradient-to-tl from-[#fbbf24]/[0.02] via-[#FF7F37]/[0.015] to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* ─── REDESIGNED HERO SECTION ─── */}
      <section className="relative pt-36 sm:pt-40 md:pt-48 pb-16 px-6 sm:px-12 md:px-16 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dynamic Typographic Stack */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back Button */}
            <Link 
              href="/"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#FF7F37] transition-colors duration-300 w-fit group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            {/* Tagline */}
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
              <span className="uppercase tracking-widest text-[#FF7F37]">↳ THE ART & SCIENCE OF ORCODIX</span>
            </div>

            {/* Redesigned Headline */}
            <h1 className="text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-black uppercase tracking-tighter leading-[0.95] text-[var(--text-primary)]">
              WE SHAPE THE<br />
              <span className="bg-gradient-to-r from-[#FF7F37] via-[#FF7F37] to-[#ff9b62] bg-clip-text text-transparent">INTENTIONAL</span><br />
              DIGITAL FUTURE.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[620px] mt-2">
              We merge striking, premium visual art direction with mathematically precise frontend architecture. We believe software shouldn't just run—it must feel alive, loading instantaneously while delivering fluid, tactile interactions.
            </p>
          </motion.div>

          {/* Right: Premium Glassmorphic Manifesto Card */}
          <motion.div
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full rounded-[32px] p-8 sm:p-10 border border-white/[0.06] dark:border-white/[0.04] bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.03)] overflow-hidden group">
              {/* Radial sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7F37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7F37]"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#FF7F37] uppercase">↳ OUR CREDO</span>
                  </div>
                  <Bookmark className="w-4 h-4 text-[var(--text-secondary)]/50" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                  “We write code for what comes next.”
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  A digital interface shouldn't just occupy screen space; it must capture cognitive focus, respond with physical spring kinetics, and be engineered to scale. We reject standard templates to build custom systems that fuel brand growth.
                </p>

                <div className="w-full h-px bg-gradient-to-r from-[var(--nav-border)]/40 to-transparent my-2" />

                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                  <span>EST. 2021 // SF</span>
                  <span className="text-[#FF7F37] font-semibold">ORCODIX DIGITAL</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── DYNAMIC STATS PANEL (REDESIGNED) ─── */}
      <section className="py-16 w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 border-t border-[var(--nav-border)]/30 pt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 rounded-3xl border border-white/[0.05] dark:border-white/[0.03] bg-white/[0.01] dark:bg-white/[0.005] backdrop-blur-sm transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group"
            >
              {/* Inner glowing dot on hover */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#FF7F37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[#FF7F37]">
                {s.value}
              </span>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-xs sm:text-sm font-extrabold text-[var(--text-primary)]">
                  {s.label}
                </span>
                <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {s.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── GLOW-ON-HOVER VALUES SECTION ─── */}
      <section className="py-24 bg-neutral-100/20 dark:bg-white/[0.005] border-y border-[var(--nav-border)]/20 relative">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          <motion.div 
            className="flex flex-col gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#FF7F37]">↳ CORE ABSTRACTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Our Operating Ideals
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-[32px] border border-white/[0.06] dark:border-white/[0.04] bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-md shadow-sm transition-all duration-300 flex flex-col gap-5 relative overflow-hidden group"
                >
                  {/* Custom radial background light on hover */}
                  <div className="absolute -inset-px bg-gradient-to-tr from-transparent via-transparent to-white/[0.03] transition-all duration-500 group-hover:to-white/[0.08]" />
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl rounded-full bg-gradient-to-bl from-current" />

                  {/* Icon wrap with custom color theme styling */}
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center relative transition-colors duration-300 z-10">
                    {v.icon}
                  </div>
                  
                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">{v.subtitle}</span>
                    <h3 className="text-xl font-extrabold text-[var(--text-primary)] transition-colors group-hover:text-[#FF7F37] duration-300">{v.title}</h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed z-10">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── REDESIGNED INTERACTIVE JOURNEY TIMELINE ─── */}
      <section className="py-28 w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Left Column: Heading and Year Indexes */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF7F37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
                <span className="uppercase tracking-widest">↳ OUR HISTORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] leading-[1.05]">
                Milestones of Our Evolution.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-[420px]">
                In a few short years, we have built a reputation for outstanding interaction design and high-end engineering architecture.
              </p>
            </motion.div>

            {/* Clickable Timeline Indices (Aesthetic Upgrade) */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col gap-4 border-l-2 border-[var(--nav-border)]/40 relative pl-6 mt-6"
            >
              {/* Active Indicator Bar on left track */}
              <div 
                className="absolute left-[-2px] w-[2px] bg-[#FF7F37] transition-all duration-500 rounded-full"
                style={{ 
                  height: "24px", 
                  transform: `translateY(${activeTimeline * 40}px)` 
                }} 
              />
              
              {timelineData.map((t, idx) => (
                <button
                  key={t.year}
                  onClick={() => setActiveTimeline(idx)}
                  className={`flex items-center gap-3 text-left py-1 text-sm font-semibold transition-all duration-300 outline-none ${
                    activeTimeline === idx 
                      ? "text-[#FF7F37] translate-x-2" 
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-1"
                  }`}
                >
                  <span className="font-mono text-xs">{t.year}</span>
                  <span>—</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-extrabold">{t.tag}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Redesigned Timeline View */}
          <div className="lg:col-span-7 w-full">
            <motion.div variants={itemVariants} className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimeline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full p-8 sm:p-10 rounded-[32px] border border-white/[0.06] dark:border-white/[0.04] bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col gap-6 relative overflow-hidden"
                >
                  {/* Decorative faint background year */}
                  <span className="absolute -bottom-10 -right-6 text-[10rem] sm:text-[14rem] font-black tracking-tighter text-neutral-100 dark:text-white/[0.01] pointer-events-none select-none leading-none font-mono">
                    {timelineData[activeTimeline].year}
                  </span>

                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono text-6xl font-black text-[#FF7F37]/15">
                      {timelineData[activeTimeline].year}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center">
                      {timelineData[activeTimeline].icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7F37]">
                      {timelineData[activeTimeline].tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                      {timelineData[activeTimeline].title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-[550px] z-10">
                    {timelineData[activeTimeline].description}
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-[var(--nav-border)]/40 to-transparent my-1 z-10" />

                  {/* Staggered Timeline Sub-bullet list */}
                  <div className="flex flex-col gap-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">↳ KEY RESULTS</span>
                    {timelineData[activeTimeline].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37] mt-2 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── REDESIGNED TEAM & LEADERSHIP SECTION ─── */}
      <section className="py-24 bg-neutral-100/20 dark:bg-white/[0.005] border-y border-[var(--nav-border)]/20 relative">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          <motion.div 
            className="flex flex-col gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF7F37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
                  <span className="uppercase tracking-widest">↳ CREATIVE CORE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                  The Pioneers.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-[360px] leading-relaxed">
                A highly aligned product core dedicating every ounce of their focus to elevating your digital metrics.
              </p>
            </motion.div>

            {/* Redesigned Team Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[36px] border border-white/[0.06] dark:border-white/[0.04] bg-white/[0.02] dark:bg-white/[0.01] backdrop-blur-xl shadow-sm flex flex-col gap-6 group transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover outline ring */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#FF7F37]/20 rounded-[36px] pointer-events-none transition-all duration-300" />
                  
                  {/* Custom animated glowing background highlight */}
                  <div className={`absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.04] transition-all duration-500 pointer-events-none blur-2xl`} />

                  {/* Header Row: Initials Avatar + Name/Role */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform duration-300 relative`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      {member.initials}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#FF7F37] transition-colors duration-300 leading-tight">
                        {member.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mt-1">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Handwritten Quote Block (REDESIGN ADDITION) */}
                  <div className="px-4 py-3 rounded-2xl bg-neutral-100/50 dark:bg-white/[0.02] border border-white/[0.04] italic text-xs leading-relaxed text-[var(--text-secondary)] relative">
                    <span className="absolute top-[-5px] left-3 text-lg font-serif text-[#FF7F37]/20">“</span>
                    <p className="relative z-10 pl-2">
                      {member.quote}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="w-full h-px bg-[var(--nav-border)]/40" />

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-white/[0.03] text-[9px] font-bold uppercase tracking-widest text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[#FF7F37]/20 group-hover:text-[#FF7F37]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill Badge Divider */}
                  <div className="w-full h-px bg-[var(--nav-border)]/40 my-1" />

                  {/* Social Badges */}
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <a
                      href="#"
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] hover:text-[#FF7F37] hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer text-[10px]"
                      aria-label={`${member.name} Twitter Profile`}
                    >
                      TW
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] hover:text-[#FF7F37] hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer text-[10px]"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      LI
                    </a>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT / CTA SECTION ─── */}
      <ContactSection />
    </main>
  );
}
