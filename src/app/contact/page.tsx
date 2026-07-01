"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface ServiceOption {
  id: string;
  label: string;
}

interface BudgetOption {
  id: string;
  label: string;
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState<string>("web-design");
  const [selectedBudget, setSelectedBudget] = useState<string>("10k-30k");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | ORCODIX";
    window.scrollTo(0, 0);
  }, []);

  const services: ServiceOption[] = [
    { id: "web-design", label: "Web Design" },
    { id: "web-developing", label: "Web Developing" },
    { id: "ui-ux", label: "UI / UX Design" },
    { id: "mobile-app", label: "Mobile App Design" },
    { id: "branding", label: "Branding" }
  ];

  const budgets: BudgetOption[] = [
    { id: "under-10k", label: "< $10k" },
    { id: "10k-30k", label: "$10k - $30k" },
    { id: "30k-50k", label: "$30k - $50k" },
    { id: "above-50k", label: "$50k +" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-[#FF7F37]/20">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-[-100px] w-[700px] h-[700px] bg-gradient-to-bl from-[#FF7F37]/[0.025] via-transparent to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-150px] w-[800px] h-[800px] bg-gradient-to-tr from-[#3b82f6]/[0.02] via-transparent to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} 
      />

      <div className="w-full max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto pt-36 sm:pt-40 md:pt-48 pb-24 relative z-10">
        
        {/* Header Block */}
        <motion.div 
          className="flex flex-col gap-6 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#FF7F37] transition-colors duration-300 w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F37]" />
            <span className="uppercase tracking-widest text-[#FF7F37]">↳ LET'S WORK TOGETHER</span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-black uppercase tracking-tighter leading-[0.95] text-[var(--text-primary)]">
            LET&apos;S START<br />
            SOMETHING <span className="bg-gradient-to-r from-[#FF7F37] to-[#ff9b62] bg-clip-text text-transparent">BOLD.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[620px] mt-2">
            Have a project in mind, a business challenge to solve, or just want to chat about design and engineering? Drop us a line below.
          </p>
        </motion.div>

        {/* Main Grid: Info + Planner Form */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Left Column: Direct Communication channels */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Quick Contact Details */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-widest font-extrabold text-[var(--text-secondary)]">↳ DIRECT CHANNELS</h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:hello@orcodix.com"
                  className="flex items-center gap-4 group p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:border-[#FF7F37]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] group-hover:text-[#FF7F37] group-hover:bg-[#FF7F37]/10 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Email Us</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#FF7F37] transition-colors">hello@orcodix.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+15550199"
                  className="flex items-center gap-4 group p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:border-[#3b82f6]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] group-hover:text-[#3b82f6] group-hover:bg-[#3b82f6]/10 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Call Us</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#3b82f6] transition-colors">+1 (555) 0199</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Office</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed mt-0.5">456 Oak Street<br />San Francisco, CA 94105</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stylized Location Graphic (Map substitute) */}
            <motion.div 
              variants={itemVariants} 
              className="relative w-full rounded-[32px] p-6 border border-white/[0.06] bg-white/[0.02] overflow-hidden group shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)]">
                <span>GRID: 37.7749° N, 122.4194° W</span>
                <span className="text-[#FF7F37] font-bold uppercase tracking-wider">↳ HQ COORDINATES</span>
              </div>
              
              {/* Elegant abstract map SVG */}
              <div className="w-full h-44 rounded-2xl bg-neutral-100/50 dark:bg-neutral-900/60 border border-white/[0.04] relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full text-neutral-300 dark:text-neutral-800" viewBox="0 0 100 100" fill="none">
                  {/* Grid Lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                  
                  {/* Concentric rings */}
                  <circle cx="50" cy="50" r="15" stroke="#FF7F37" strokeWidth="0.3" strokeDasharray="3 3" opacity="0.4" />
                  <circle cx="50" cy="50" r="30" stroke="#3b82f6" strokeWidth="0.2" strokeDasharray="4 4" opacity="0.3" />
                  
                  {/* Glowing center indicator */}
                  <circle cx="50" cy="50" r="2.5" fill="#FF7F37" className="animate-pulse" />
                  <circle cx="50" cy="50" r="6" stroke="#FF7F37" strokeWidth="0.5" className="animate-ping" style={{ transformOrigin: "center" }} />
                </svg>
                
                {/* Location text label */}
                <div className="absolute bottom-3 left-4 flex flex-col font-mono text-[9px] text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--text-primary)]">SF BAY AREA</span>
                  <span>USA HEADQUARTERS</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Planner Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div 
              variants={itemVariants}
              className="w-full p-8 sm:p-10 rounded-[32px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xs uppercase tracking-widest font-extrabold text-[var(--text-secondary)] mb-2">↳ PROJECT PLANNER</h3>
                    
                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#FF7F37]/60 transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="email">Your Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#FF7F37]/60 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Service buttons */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">What service do you need?</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setSelectedService(s.id)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border transition-all duration-300 ${
                              selectedService === s.id
                                ? "bg-[#FF7F37] border-[#FF7F37] text-white"
                                : "border-white/[0.06] bg-white/5 text-[var(--text-secondary)] hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-[var(--text-primary)]"
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget buttons */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">What is your project budget?</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setSelectedBudget(b.id)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border transition-all duration-300 ${
                              selectedBudget === b.id
                                ? "bg-[#FF7F37] border-[#FF7F37] text-white"
                                : "border-white/[0.06] bg-white/5 text-[var(--text-secondary)] hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-[var(--text-primary)]"
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                        className="px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#FF7F37]/60 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[var(--foreground)] text-[var(--background)] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[#FF7F37] animate-bounce" />
                    
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-black text-[var(--text-primary)] uppercase">Message Sent!</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[360px]">
                        Thank you for reaching out to ORCODIX. Our core team will analyze your project metrics and contact you within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full border border-[var(--btn-secondary-border)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-colors duration-300"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </main>
  );
}
