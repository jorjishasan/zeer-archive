import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-background)]">
      {/* Texture Overlay */}
      <div className="texture-overlay"></div>

      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden rounded-b-[32px]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/bg_1.mp4"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1831px] mx-auto min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-8 pb-12">
          
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="text-[16px] font-grotesk uppercase tracking-wide">Orbis.Nft</div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center liquid-glass rounded-[28px] px-[52px] py-[24px] space-x-12">
              {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
                <a key={item} href="#" className="font-grotesk text-[13px] uppercase tracking-wider hover:text-[var(--color-neon)] transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex flex-col space-y-4 fixed top-8 right-8 z-50">
              <SocialButtons />
            </div>
          </header>

          {/* Main Hero Text */}
          <main className="flex-grow flex flex-col justify-center mt-20 lg:ml-32 w-full max-w-[780px]">
            <div className="relative inline-block w-fit">
              <h1 className="font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] md:leading-[1] text-white">
                Beyond earth <br />
                and ( its ) <br />
                familiar boundaries
              </h1>
              <div className="absolute -right-4 -top-6 sm:-right-8 sm:-top-8 md:-right-12 md:-top-10 rotate-[-1deg] pointer-events-none mix-blend-exclusion opacity-90 z-20">
                <span className="font-condiment text-[var(--color-neon)] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] normal-case">
                  Nft collection
                </span>
              </div>
            </div>
            
            {/* Mobile Socials */}
            <div className="lg:hidden flex items-center justify-center space-x-4 mt-12 w-full">
              <SocialButtons direction="row" />
            </div>
          </main>
        </div>
      </section>

      {/* SECTION 2: ABOUT / INTRO */}
      <section className="relative w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="/bg_2.mp4"
        />
        <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-20 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
            <div className="relative mb-12 md:mb-0">
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[44px] md:text-[60px] leading-tight max-w-sm">
                Hello!<br />
                I'm orbis
              </h2>
              <span className="absolute -bottom-8 right-0 rotate-[-4deg] font-condiment text-[var(--color-neon)] text-[36px] sm:text-[48px] md:text-[68px] normal-case mix-blend-exclusion pointer-events-none">
                Orbis
              </span>
            </div>
            <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col space-y-4">
              <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed text-[#010828] md:text-white/10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed text-[#010828] md:text-white/10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>
            <div className="hidden lg:flex flex-col space-y-4">
              <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed text-white/10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
              <p className="font-mono text-[14px] md:text-[16px] uppercase max-w-[266px] leading-relaxed text-white/10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NFT COLLECTION GRID */}
      <section className="bg-[var(--color-background)] py-20 md:py-32">
        <div className="max-w-[1831px] mx-auto px-6 sm:px-12 md:px-16">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-8 md:space-y-0">
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[44px] md:text-[60px] leading-[1]">
              Collection of<br />
              <div className="ml-12 sm:ml-24 md:ml-32 mt-2">
                <span className="font-condiment text-[var(--color-neon)] normal-case pr-4">Space</span>
                <span>objects</span>
              </div>
            </h2>
            
            <button className="group relative pr-4">
              <div className="flex items-center space-x-4">
                <span className="font-grotesk uppercase text-[32px] sm:text-[44px] md:text-[60px] leading-none">SEE</span>
                <div className="flex flex-col text-left font-grotesk uppercase text-[20px] sm:text-[28px] md:text-[36px] leading-none space-y-1">
                  <span>ALL</span>
                  <span>CREATORS</span>
                </div>
              </div>
              <div className="absolute bottom-[-8px] left-0 right-0 h-[6px] md:h-[10px] bg-[var(--color-neon)] w-full transform origin-left transition-transform group-hover:scale-x-110"></div>
            </button>
          </div>

          {/* NFT Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <NftCard 
                videoUrl="/card_bg_1.mp4" 
              score="8.7/10" 
            />
            <NftCard 
              videoUrl="/card_bg_2.mp4" 
              score="9/10" 
            />
            <NftCard 
              videoUrl="/card_bg_3.mp4" 
              score="8.2/10" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA / FINAL SECTION */}
      <section className="relative w-full bg-[var(--color-background)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block pointer-events-none"
          src="/footer_bg.mp4"
        />
        
        {/* Absolute Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end py-10 lg:pr-[20%] lg:pl-[15%] px-6">
          <div className="relative text-right max-w-[800px]">
            <span className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 md:-top-20 md:-left-24 font-condiment text-[var(--color-neon)] text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px] normal-case mix-blend-exclusion pointer-events-none text-left w-max">
              Go beyond
            </span>
            <h2 className="font-grotesk uppercase text-[16px] sm:text-[32px] md:text-[48px] lg:text-[60px] leading-[1.1] flex flex-col items-end">
              <span className="mb-4 md:mb-12">JOIN US.</span>
              <span>REVEAL WHAT'S HIDDEN.</span>
              <span>DEFINE WHAT'S NEXT.</span>
              <span>FOLLOW THE SIGNAL.</span>
            </h2>
          </div>
        </div>

        {/* CTA Social Icons */}
        <div className="absolute left-[8%] bottom-[12%] md:bottom-[20%] z-20">
          <div className="flex flex-col liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]">
            <a href="#" className="flex items-center justify-center h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] border-b border-white/10 hover:bg-white/10 transition-colors">
              <Mail className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
            </a>
            <a href="#" className="flex items-center justify-center h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] border-b border-white/10 hover:bg-white/10 transition-colors">
              <Twitter className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
            </a>
            <a href="#" className="flex items-center justify-center h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] hover:bg-white/10 transition-colors">
              <Github className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

// Subcomponents
function SocialButtons({ direction = 'col' }: { direction?: 'col' | 'row' }) {
  const wrapperClass = direction === 'col' ? 'flex-col space-y-4' : 'flex-row space-x-4';
  const btnClass = 'flex items-center justify-center w-[56px] h-[56px] liquid-glass rounded-[1rem] hover:bg-white/10 transition-colors cursor-pointer';
  return (
    <div className={`flex ${wrapperClass}`}>
      <a href="#" className={btnClass}><Mail size={20} /></a>
      <a href="#" className={btnClass}><Twitter size={20} /></a>
      <a href="#" className={btnClass}><Github size={20} /></a>
    </div>
  );
}

function NftCard({ videoUrl, score }: { videoUrl: string, score: string }) {
  return (
    <div className="liquid-glass rounded-[32px] p-[18px] group hover:bg-white/5 transition-all duration-500 ease-out cursor-pointer flex flex-col">
      <div className="aspect-w-1 rounded-[24px] overflow-hidden mb-4 relative flex-shrink-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0"
          src={videoUrl}
        />
      </div>
      <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
        <div className="flex items-baseline space-x-2">
          <span className="font-mono text-[11px] text-white/70 uppercase">RARITY SCORE:</span>
          <span className="font-mono text-[16px] font-bold">{score}</span>
        </div>
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}

const Github = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default App;
