"use client";

import { useState, useEffect } from "react";
import { PROJECTS } from "./data/projects";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const CATEGORIES = ["All", "AI", "Web3", "Product Design", "Web Design", "Branding", "WebGL", "Research"];

export default function CasesArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedId, setSelectedId] = useState(null);
  const [loadedIds, setLoadedIds] = useState(new Set());
  const [loadedAssets, setLoadedAssets] = useState(new Set());
  
  // Magnetic Fluid Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navigate = (direction) => {
    setSelectedId(prev => {
      if (!prev) return prev;
      const idx = PROJECTS.findIndex(p => p.id === prev);
      let newIdx = idx + direction;
      if (newIdx < 0) newIdx = PROJECTS.length - 1;
      if (newIdx >= PROJECTS.length) newIdx = 0;
      const newId = PROJECTS[newIdx].id;
      setLoadedIds(loaded => {
        if (!loaded.has(newId)) return new Set([...loaded, newId]);
        return loaded;
      });
      return newId;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setFilteredProjects(activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === activeCategory));
  }, [activeCategory]);

  // Surgical Sequential Background Loader
  useEffect(() => {
    let isMounted = true;

    const loadSequentially = async () => {
      // Small delay to ensure browser finishes initial page load & stops spinner
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      for (const project of PROJECTS) {
        if (!isMounted) break;
        
        // Skip if already loaded (e.g. if user hovered/clicked)
        if (loadedAssets.has(project.asset)) continue;

        await new Promise((resolve) => {
          if (project.asset.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.src = project.asset;
            video.onloadeddata = () => {
              if (isMounted) {
                setLoadedAssets(prev => new Set(prev).add(project.asset));
              }
              resolve();
            };
            video.onerror = resolve;
          } else {
            const img = new Image();
            img.src = project.asset;
            img.onload = () => {
              if (isMounted) {
                setLoadedAssets(prev => new Set(prev).add(project.asset));
              }
              resolve();
            };
            img.onerror = resolve; // Continue even if one fails
          }
        });
        
        // Tiny gap between requests to keep the main thread fluid
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    loadSequentially();
    return () => { isMounted = false; };
  }, []);

  const warmUp = (id) => {
    if (!loadedIds.has(id)) {
      setLoadedIds(prev => new Set([...prev, id]));
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      <div className="noise-overlay" />
      
      {/* Magnetic Fluid Circular Cursor */}
      <motion.div 
        className="custom-cursor-dot hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />

      <header className="site-nav border-none bg-transparent">
        <div className="container-narrow flex flex-col items-center justify-center py-12 md:py-16 gap-6 md:gap-8 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-[7.5rem] font-black tracking-[-0.08em] uppercase leading-[0.8] whitespace-nowrap transition-all duration-700">
            Archive <span className="text-white/10 font-light">//</span> Zeer
          </h1>
          <a href="https://zeer.studio" className="px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase rounded-none">
            Zeer Studio
          </a>
        </div>
      </header>

      <main className="pb-40">
        {/* --- High-Density Category Bar --- */}
        <section className="w-full mb-16 border-y border-white/5 bg-white/[0.01]">
          <div className="container-narrow">
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide items-center gap-1">
               {CATEGORIES.map(cat => {
                  const isActive = activeCategory === cat;
                  const count = cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.tag === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`group relative px-6 py-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-wider transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20 hover:opacity-100'}`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeSquare"
                          className="w-1.5 h-1.5 bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 15, stiffness: 200 }}
                        />
                      )}
                      <span className="relative flex items-center gap-1.5">
                        {cat}
                        <span className="text-[7px] opacity-30 font-black">[{count}]</span>
                      </span>
                    </button>
                  );
               })}
            </div>
          </div>
        </section>

        {/* --- Surgical Border Grid --- */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5 mx-6 md:mx-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => {
                  warmUp(project.id);
                  setSelectedId(project.id);
                }}
                onMouseEnter={() => warmUp(project.id)}
                className="group flex flex-col border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-1000 cursor-pointer overflow-hidden p-8 gap-8"
              >
                <div className="overflow-hidden aspect-[16/9] bg-white/[0.02] relative">
                  {project.asset.endsWith('.mp4') ? (
                    <video
                      src={project.asset}
                      muted
                      loop
                      playsInline
                      autoPlay
                      onLoadedData={() => setLoadedAssets(prev => new Set(prev).add(project.asset))}
                      className={`w-full h-full object-cover object-top transition-all duration-[1500ms] ease-out ${
                        loadedAssets.has(project.asset) 
                          ? 'opacity-70 blur-0 scale-100 group-hover:opacity-100 group-hover:scale-110' 
                          : 'opacity-20 blur-2xl scale-105'
                      }`}
                    />
                  ) : (
                    <img 
                      src={project.asset} 
                      alt={project.title} 
                      loading={project.id <= 4 ? "eager" : "lazy"}
                      // @ts-ignore
                      fetchPriority={project.id <= 4 ? "high" : "auto"}
                      onLoad={() => setLoadedAssets(prev => new Set(prev).add(project.asset))}
                      className={`w-full h-full object-cover object-top transition-all duration-[1500ms] ease-out ${
                        loadedAssets.has(project.asset) 
                          ? 'opacity-70 blur-0 scale-100 group-hover:opacity-100 group-hover:scale-110' 
                          : 'opacity-20 blur-2xl scale-105'
                      }`} 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-3">
                   <span className="text-[8px] font-black tracking-widest uppercase opacity-20">{project.tag}</span>
                   <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Elevated Window Viewer --- */}
      <AnimatePresence mode="wait">
        {selectedId && (
          <motion.div 
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[5000] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 lg:p-12"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              key="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full max-h-[90vh] max-w-[1600px] flex flex-col shadow-[0_0_120px_rgba(0,0,0,0.8)]"
            >
              {/* Mac Window Chrome */}
              <div className="w-full bg-[#111]/90 backdrop-blur-md border-t border-x border-white/10 rounded-t-2xl md:rounded-t-3xl p-4 md:p-5 flex items-center justify-between relative overflow-hidden z-20">
                 <div className="flex items-center gap-2 md:gap-3 relative z-10">
                    <div 
                      className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#FF5F56] hover:brightness-125 cursor-pointer flex items-center justify-center transition-all group shadow-sm" 
                      onClick={() => setSelectedId(null)} 
                      title="Close window"
                    >
                       <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="8" height="8" viewBox="0 0 24 24" fill="none">
                         <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="6" strokeLinecap="round" />
                       </svg>
                    </div>
                    <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#FFBD2E] opacity-40 shadow-sm" />
                    <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#27C93F] opacity-40 shadow-sm" />
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] md:text-[12px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-40">
                      {PROJECTS.find(p=>p.id===selectedId)?.title}
                    </span>
                 </div>
                 <div className="flex items-center gap-3 md:gap-4 relative z-10">
                    <div className="hidden md:block w-px h-4 bg-white/10" />
                    <span className="hidden md:block text-[10px] font-mono tracking-widest uppercase opacity-40">
                      {String(PROJECTS.findIndex(p => p.id === selectedId) + 1).padStart(2, '0')} <span className="opacity-30">/</span> {String(PROJECTS.length).padStart(2, '0')}
                    </span>
                 </div>
              </div>

              {/* Viewport Core */}
              <div className="flex-1 w-full bg-black relative border-x border-b border-white/10 rounded-b-2xl md:rounded-b-3xl overflow-hidden z-10">
                <div className="absolute inset-0 crt-overlay pointer-events-none opacity-[0.05] z-20 mix-blend-screen" />
                
                <AnimatePresence mode="wait">
                  {PROJECTS.map(p => {
                    if (selectedId !== p.id) return null;
                    return (
                      <motion.div 
                        key={p.id}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 flex flex-col md:flex-row pointer-events-auto"
                      >
                        {loadedIds.has(p.id) && (
                          <>
                            {/* Left: GIF/Video Asset */}
                            <div className="w-full md:w-[70%] h-[50%] md:h-full relative border-b md:border-b-0 md:border-r border-white/5 bg-[#0a0a0a] group/image overflow-hidden">
                              
                              {/* Navigation Overlay Controls */}
                              <div className="absolute inset-y-0 left-0 w-1/4 z-30 cursor-w-resize flex items-center justify-start px-4 md:px-8 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" onClick={(e) => { e.stopPropagation(); navigate(-1); }}>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 hover:scale-110 transition-all transform -translate-x-4 group-hover/image:translate-x-0 duration-700 ease-out shadow-2xl">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                                </div>
                              </div>
                              <div className="absolute inset-y-0 right-0 w-1/4 z-30 cursor-e-resize flex items-center justify-end px-4 md:px-8 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" onClick={(e) => { e.stopPropagation(); navigate(1); }}>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 hover:scale-110 transition-all transform translate-x-4 group-hover/image:translate-x-0 duration-700 ease-out shadow-2xl">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                                </div>
                              </div>

                              {p.asset.endsWith('.mp4') ? (
                                <video
                                  src={p.asset}
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  className="w-full h-full object-cover opacity-80 mix-blend-lighten transition-opacity duration-1000 group-hover/image:opacity-100"
                                />
                              ) : (
                                <img 
                                  src={p.asset} 
                                  alt={p.title} 
                                  className="w-full h-full object-cover opacity-80 mix-blend-lighten transition-opacity duration-1000 group-hover/image:opacity-100"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-black/60 pointer-events-none" />
                            </div>

                            {/* Right: Info & Link */}
                            <div className="w-full md:w-[30%] h-[50%] md:h-full flex flex-col bg-black/90 backdrop-blur-2xl relative z-10">
                               <div className="flex-1 flex flex-col justify-center p-6 md:p-10 lg:p-12">
                                  <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                    className="mb-3 md:mb-5"
                                  >
                                     <span className="inline-block px-2 md:px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/50">{p.tag}</span>
                                  </motion.div>
                                  <motion.h2 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                    className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6"
                                  >
                                    {p.title}
                                  </motion.h2>
                                  <motion.p 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                                    className="text-white/40 text-xs md:text-sm lg:text-[15px] leading-relaxed font-light"
                                  >
                                     {p.description}
                                  </motion.p>
                               </div>

                               <motion.div 
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                 className="mt-auto p-6 md:p-8 lg:p-10 pt-0 md:pt-0 lg:pt-0"
                               >
                                  <a 
                                    href={p.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group/btn w-full flex items-center justify-between px-6 py-4 md:py-5 border border-white/10 hover:border-white/40 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-500 rounded-lg overflow-hidden relative"
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase relative z-10">Launch Project</span>
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-500 opacity-50 group-hover/btn:opacity-100 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                  </a>
                               </motion.div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
