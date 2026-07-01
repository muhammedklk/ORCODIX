"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCheck } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3500);
  };

  return (
    <>
      {/* ─── CTA HERO BLOCK ─── */}
      <section
        id="contact"
        className="relative w-full py-16 sm:py-20 md:py-24 bg-[var(--background)] transition-colors duration-400 overflow-hidden scroll-mt-28"
      >
        <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          {/* Rounded dark card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-950 dark:bg-[#0A0A0A] border border-white/[0.06] flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 md:py-40 gap-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
          >
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,127,55,0.07)_0%,transparent_70%)] pointer-events-none" />
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
            }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                Have a project in mind ?
              </p>

              {/* Giant headline */}
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-black uppercase tracking-tighter leading-none text-white"
                style={{
                  backgroundImage: "linear-gradient(180deg, #FFFFFF 40%, rgba(255,255,255,0.45) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                LET&apos;S WORK
              </motion.h2>

              {/* CTA Button */}
              <motion.a
                href="mailto:hello@orcodix.com"
                className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s work
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative w-full bg-[var(--background)] transition-colors duration-400 overflow-hidden border-t border-[var(--nav-border)]/20">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Col 1: Brand */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <a href="#" className="inline-block">
                <span className="font-black tracking-tight text-2xl sm:text-3xl text-[var(--text-primary)] transition-colors duration-400">
                  ORCODIX.
                </span>
              </a>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[280px] transition-colors duration-400">
                We craft premium digital experiences that convert — blending art and engineering for modern brands.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-4 pt-2">
                {[
                  { label: "Fb", href: "#facebook" },
                  { label: "Ig", href: "#instagram" },
                  { label: "Tw", href: "#twitter" },
                  { label: "Li", href: "#linkedin" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-8 h-8 rounded-full border border-[var(--nav-border)] flex items-center justify-center text-[10px] font-bold text-[var(--text-secondary)] hover:border-[#FF7F37] hover:text-[#FF7F37] transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Contact */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)] transition-colors duration-400">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@orcodix.com"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                >
                  hello@orcodix.com
                </a>
                <a
                  href="tel:+15550199"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                >
                  +1 (555) 0199
                </a>
                <p className="text-sm text-[var(--text-secondary)] transition-colors duration-400">
                  456 Oak Street<br />San Francisco, CA 94105
                </p>
              </div>
            </div>

            {/* Col 3: Pages */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)] transition-colors duration-400">
                Pages
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home", href: "#" },
                  { label: "About us", href: "#about" },
                  { label: "Work", href: "#work" },
                  { label: "Services", href: "#services" },
                  { label: "Blog", href: "#blog" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 group relative w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FF7F37] group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: Social */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-primary)] transition-colors duration-400">
                Social
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Facebook", href: "#facebook" },
                  { label: "Instagram", href: "#instagram" },
                  { label: "Twitter", href: "#twitter" },
                  { label: "LinkedIn", href: "#linkedin" },
                  { label: "Dribbble", href: "#dribbble" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[#FF7F37] transition-colors duration-300 group relative w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FF7F37] group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-12 mt-12 border-t border-[var(--nav-border)]/30 gap-4">
            <span className="text-xs font-medium text-[var(--text-secondary)] transition-colors duration-400">
              © {new Date().getFullYear()} ORCODIX. All Rights Reserved.
            </span>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
