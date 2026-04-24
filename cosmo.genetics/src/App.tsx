/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Dna, Database, Zap, Globe, Shield, Activity, Terminal, Cpu } from 'lucide-react';

// --- Reveal Component ---
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string; y?: number }> = ({
  children,
  delay = 0,
  className = "",
  y = 30
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- NavItem Component (Swipe Animation) ---
const NavItem: React.FC<{ label: string }> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="relative overflow-hidden px-4 py-2 cursor-pointer block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[1rem] overflow-hidden">
        <span
          className={`block font-mono text-[10px] tracking-[0.3em] uppercase transition-transform duration-600 ease-[0.16,1,0.3,1] ${isHovered ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          {label}
        </span>
        <span
          className={`absolute inset-0 font-mono text-[10px] tracking-[0.3em] uppercase text-crimson transition-transform duration-600 ease-[0.16,1,0.3,1] ${isHovered ? "translate-y-0" : "translate-y-full"
            }`}
        >
          {label}
        </span>
      </div>
    </a>
  );
};

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // High-end parallax for hero content
  const yHero = useTransform(scrollY, [0, 1000], [0, -120]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-Scrubbing Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateVideo = () => {
      if (video && !video.seeking && video.duration) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = window.scrollY / (scrollHeight || 1);
        const targetTime = scrollFraction * video.duration;

        if (Math.abs(video.currentTime - targetTime) * 1000 > 30) {
          video.currentTime = targetTime;
        }
      }
      requestAnimationFrame(updateVideo);
    };

    requestAnimationFrame(updateVideo);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian text-bone font-sans selection:bg-crimson noise-bg">

      {/* Background Video (Fully Standout) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260412_050523_dc974590-633e-46d2-b3a7-6c19609cd6ed.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/80" />
      </div>

      {/* Header */}
      <header className={`sticky-header flex items-center justify-between ${isScrolled ? "sticky-header-scrolled" : ""}`}>
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-[0.2em] uppercase font-heading text-bone">Cosmo</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {["Strategy", "Synthesis", "Protocols", "Facility"].map((item) => (
              <li key={item}>
                <NavItem label={item} />
              </li>
            ))}
          </ul>
        </nav>

        <button className="btn-minimal">
          <span>Institutional Access</span>
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center px-12 md:px-32 relative">
          {/* Metric HUD for Investor Trust */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:flex flex-col gap-12 items-end">
            {[
              { label: "Data Synthesized", val: "1.42 PB" },
              { label: "Active Sequences", val: "482,109" },
              { label: "Orbital Uptime", val: "99.98%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.2), duration: 1 }}
                className="text-right"
              >
                <div className="font-mono text-[9px] text-crimson tracking-[0.4em] uppercase mb-1">{stat.label}</div>
                <div className="text-2xl font-bold font-heading">{stat.val}</div>
              </motion.div>
            ))}
          </div>

          <motion.div style={{ y: yHero, opacity: opacityHero }} className="max-w-[1400px]">
            {/* Fixed Clipping: Managed font size and generous padding */}
            <div className="overflow-hidden py-32 -my-32">
              <motion.h1
                initial={{ y: "110%", filter: "blur(20px)", opacity: 0 }}
                animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,10vw,140px)] leading-[1.0] font-extrabold tracking-tighter mb-16 relative font-heading"
              >
                Architecting <br />
                <span className="italic text-crimson pr-4">Molecular</span> <br />
                Monoliths.
              </motion.h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-end gap-16 md:gap-48 mt-8">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="text-white/50 text-xl md:text-3xl font-light leading-relaxed max-w-2xl font-sans"
                >
                  Proprietary orbital synthesis platforms decoding the next multi-generational biological frontier.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="group cursor-pointer flex items-center gap-6 pb-4 border-b border-white/10 hover:border-crimson transition-all duration-500"
              >
                <div className="relative overflow-hidden h-[1.2rem]">
                  <span className="block font-mono text-[11px] tracking-[0.5em] uppercase transition-transform duration-500 group-hover:-translate-y-full text-white/40">
                    Investor Core
                  </span>
                  <span className="absolute inset-0 font-mono text-[11px] tracking-[0.5em] uppercase text-crimson transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                    Investor Core
                  </span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-full group-hover:bg-crimson group-hover:border-crimson transition-all duration-500">
                  <ArrowRight size={16} className="text-white/40 group-hover:text-obsidian group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Global Nodes Section - Fixed Overlap */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-[60vh] flex flex-col justify-center relative">
          <div className="absolute top-0 left-12 md:left-32 right-12 md:right-32 h-[1px] bg-gradient-to-r from-crimson/0 via-white/10 to-crimson/0" />
          <div className="max-w-[1400px] mx-auto w-full">
            <Reveal y={40}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-24">
                <div>
                  <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-heading leading-tight">Proprietary <br /><span className="italic text-white/50">Infrastructure.</span></h2>
                </div>
                <p className="text-white/40 font-light max-w-sm text-base leading-relaxed pt-4 border-t border-white/5">
                  Synchronized sequence synthesis across four planetary hubs, creating a scalable global genomic moat.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { city: "Geneva", code: "HUB_ALPHA" },
                  { city: "Tokyo", code: "HUB_DELTA" },
                  { city: "Cambridge", code: "HUB_BETA" },
                  { city: "Orbital", code: "HUB_ZERO" }
                ].map((node, i) => (
                  <div key={i} className="group relative pt-12 border-t border-white/10 hover:border-crimson transition-colors duration-700 cursor-pointer">
                    <div className="absolute top-4 right-0 w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                    <span className="text-3xl md:text-4xl font-extrabold tracking-tighter block mb-4 group-hover:text-crimson transition-colors duration-500 font-heading">{node.city}</span>
                    <span className="font-mono text-[9px] text-white/30 tracking-[0.3em] uppercase group-hover:text-white/70 transition-colors">{node.code}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-[70vh] flex flex-col justify-center relative bg-white/[0.01]">
          <div className="absolute top-0 left-12 md:left-32 right-12 md:right-32 h-[1px] bg-gradient-to-r from-crimson/0 via-white/5 to-crimson/0" />
          <div className="max-w-[1400px] mx-auto w-full">
            <Reveal y={40}>
              <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-16">
                <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter font-heading leading-tight">The Orbital <br /><span className="italic text-crimson">Advantage.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">
                {[
                  { title: "Zero-G", val: "CRYSTAL PURITY", desc: "Molecular synthesis in micro-gravity eliminates terrestrial structural defects." },
                  { title: "Quantum", val: "SEQUENCE TOPOGRAPHY", desc: "Proprietary algorithmic mapping of metabolic future-states." },
                  { title: "Synthetic", val: "SCALABLE ASSEMBLY", desc: "Automated construction of patentable base-pair architectures." }
                ].map((step, i) => (
                  <div key={i} className="relative pt-16 border-t border-white/10 hover:border-crimson transition-colors duration-1000 group">
                    <h3 className="text-3xl font-extrabold tracking-tight uppercase mb-4 font-heading group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
                    <p className="text-crimson text-[10px] font-mono tracking-widest uppercase mb-6 font-bold">{step.val}</p>
                    <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">{step.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Partners Section - No Overlay */}
        <section className="px-12 md:px-32 py-32 border-t border-white/5 relative">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              {["Global Health", "Orbital Authority", "Quantum Labs", "Deep Space Bio"].map((partner, i) => (
                <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter uppercase font-heading">{partner}</span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Operational Security - New Section (No Overlay) */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-[60vh] flex flex-col justify-center relative">
          <div className="max-w-[1400px] mx-auto w-full">
            <Reveal y={40}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-heading leading-tight">Operational <br /><span className="italic text-white/50">Security.</span></h2>
                <div className="space-y-12">
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                    Decentralized genomic encryption protocols ensuring complete data sovereignty across all planetary nodes.
                  </p>
                  <div className="flex gap-12 border-t border-white/5 pt-12">
                    <div>
                      <div className="text-crimson font-mono text-[9px] tracking-[0.4em] uppercase mb-2">Protocol</div>
                      <div className="text-xl font-bold font-heading uppercase">End-to-End</div>
                    </div>
                    <div>
                      <div className="text-crimson font-mono text-[9px] tracking-[0.4em] uppercase mb-2">Encryption</div>
                      <div className="text-xl font-bold font-heading uppercase">256-BIT QUANTUM</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Strategic Yield - New Section (No Overlay) */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-[60vh] flex flex-col justify-center relative">
          <div className="absolute top-0 left-12 md:left-32 right-12 md:right-32 h-[1px] bg-gradient-to-r from-crimson/0 via-white/10 to-crimson/0" />
          <div className="max-w-[1400px] mx-auto w-full">
            <Reveal y={40}>
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="max-w-xl">
                  <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-heading mb-12">Strategic <br /><span className="italic text-crimson">Yield.</span></h2>
                  <p className="text-white/40 text-lg leading-relaxed font-light">
                    Transforming high-fidelity molecular data into actionable biological intellectual property for the next century of medicine.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-24 gap-y-12 border-l border-white/10 pl-16">
                  <div>
                    <div className="text-3xl font-extrabold font-heading text-bone">14X</div>
                    <div className="text-[9px] font-mono tracking-widest text-white/30 uppercase mt-2">Efficiency Gain</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold font-heading text-bone">92%</div>
                    <div className="text-[9px] font-mono tracking-widest text-white/30 uppercase mt-2">Success Rate</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-crimson/[0.01]" />
          <div className="max-w-[1200px] mx-auto w-full relative z-10">
            <Reveal y={40}>
              <h2 className="text-[clamp(2.5rem,7vw,90px)] font-extrabold leading-[0.95] tracking-tighter font-heading mb-24">
                "We are architecting the <br /> 
                <span className="italic text-crimson text-[1.1em]">next phase</span> of <br /> 
                biological evolution."
              </h2>
              <div className="flex flex-col items-center gap-12">
                <div className="w-[1px] h-32 bg-gradient-to-b from-crimson/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Global CTA */}
        <section className="px-12 md:px-32 py-48 md:py-64 min-h-[80vh] text-center flex flex-col justify-center relative">
          <div className="absolute top-0 left-12 md:left-32 right-12 md:right-32 h-[1px] bg-gradient-to-r from-crimson/0 via-white/5 to-crimson/0" />
          <Reveal y={50}>
            <h2 className="text-[clamp(4rem,10vw,140px)] leading-[0.8] font-extrabold tracking-tighter mb-24 font-heading">
              Secure The <br /> <span className="text-crimson italic pr-4">Synthesis.</span>
            </h2>
            <button className="group relative px-12 py-6 overflow-hidden border border-white/10 rounded-full hover:border-crimson transition-all duration-700">
              <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 font-mono text-[10px] tracking-[0.4em] uppercase group-hover:text-obsidian font-bold transition-colors duration-500">
                Initiate Strategic Partnership
              </span>
            </button>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-12 md:px-32 py-24 border-t border-white/5 relative z-10 bg-obsidian">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-[0.2em] uppercase font-heading text-bone">Cosmo</span>
          </div>
          <ul className="flex gap-12 font-mono text-[9px] tracking-[0.5em] uppercase text-white/20">
            {["Ethics", "Compliance", "Investor Relations"].map(l => (
              <li key={l}><a href="#" className="hover:text-crimson transition-colors">{l}</a></li>
            ))}
          </ul>
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/10">
            © 2026 Orbital Division
          </span>
        </div>
      </footer>
    </div>
  );
}



