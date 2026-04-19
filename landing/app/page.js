"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CATEGORIES = ["All", "Branding", "AI", "Product Design", "Web Design", "UGC", "Web3"];

const PROJECTS = [
  { id: 1, title: "Aethera Architecture", tag: "Branding", index: "01", asset: "/landing_assets/aethera.gif", url: "https://zeer.studio" },
  { id: 2, title: "Orbis Digital", tag: "Web3", index: "02", asset: "/landing_assets/orbis.gif", url: "https://zeer.studio" },
  { id: 3, title: "Sentinel Intelligence", tag: "AI", index: "03", asset: "/landing_assets/sentinel.gif", url: "https://zeer.studio" },
  { id: 4, title: "Drema Interface", tag: "Product Design", index: "04", asset: "/landing_assets/drema.gif", url: "https://zeer.studio" },
  { id: 5, title: "Sequa Ventura", tag: "Branding", index: "05", asset: "/landing_assets/sequa.gif", url: "https://zeer.studio" },
  { id: 6, title: "Neuralyn Systems", tag: "Web Design", index: "06", asset: "/landing_assets/neuralyn.gif", url: "https://zeer.studio" },
  { id: 7, title: "Mind Loop", tag: "Product Design", index: "07", asset: "/landing_assets/mind.gif", url: "https://zeer.studio" },
  { id: 8, title: "Prisma Labs", tag: "AI", index: "08", asset: "/landing_assets/prisma.gif", url: "https://zeer.studio" },
  { id: 9, title: "Quantum Void", tag: "Web3", index: "09", asset: "/landing_assets/aethera.gif", url: "https://zeer.studio" },
  { id: 10, title: "Lumina Studio", tag: "UGC", index: "10", asset: "/landing_assets/orbis.gif", url: "https://zeer.studio" },
  { id: 11, title: "Vertex Flow", tag: "Web Design", index: "11", asset: "/landing_assets/sentinel.gif", url: "https://zeer.studio" },
  { id: 12, title: "Eos Interface", tag: "Product Design", index: "12", asset: "/landing_assets/drema.gif", url: "https://zeer.studio" },
];

export default function CasesArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.tag === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      
      {/* --- Navbar --- */}
      <nav className="site-nav">
        <div className="nav-archive-text">Archive</div>
        <div className="nav-logo-wrap" onClick={() => window.location.href = '/'}>
          <div className="logo-square" />
          <span className="logo-text">ZEER.STUDIO</span>
        </div>
        <Link href="/" className="nav-right-link">Back to Home</Link>
      </nav>

      <main className="full-bleed">
        {/* --- Filter Bar --- */}
        <section className="filter-wrapper">
          <div className="filter-group">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
            <div className="filter-divider" />
            <div className="filter-dropdown">
              Industry <span className="opacity-20 text-[8px]">▼</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-2">
            <div className="filter-dropdown">
              Vibe <span className="opacity-20 text-[8px]">▼</span>
            </div>
            <div className="filter-dropdown">
              Stack <span className="opacity-20 text-[8px]">▼</span>
            </div>
          </div>
        </section>

        {/* --- Widescreen Showcase Grid --- */}
        <section className="showcase-grid-wide">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="case-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="case-media-container">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="case-external-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <img 
                  src={project.asset} 
                  alt={project.title} 
                  className="case-media"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x800/0a0a0a/ffffff?text=Case+Study";
                  }}
                />
                <div className="case-overlay" />
              </div>
              <div className="case-content">
                <div className="case-meta">
                  <span className="case-index">{project.index}</span>
                  <span className="case-tag">{project.tag}</span>
                </div>
                <h3 className="case-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* --- Modal System --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="modal-media-wrapper">
              <img 
                src={selectedProject.asset} 
                alt={selectedProject.title} 
                className="modal-media"
              />
            </div>
            
            <div className="modal-info">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase block mb-2">
                  CASE STUDY // {selectedProject.index}
                </span>
                <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6 leading-none">
                  {selectedProject.title}
                </h2>
                <div className="flex gap-2 mb-10">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black tracking-widest uppercase opacity-60">
                    {selectedProject.tag}
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black tracking-widest uppercase opacity-60">
                    2026
                  </span>
                </div>
                <p className="text-sm opacity-40 leading-relaxed font-medium">
                  Exploring the intersection of high-fidelity design and technical excellence. This study dives deep into the architectural choices and user experience patterns developed for {selectedProject.title}.
                </p>
              </div>
              
              <a 
                href={selectedProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-12 flex items-center justify-between group border border-white/10 hover:border-white transition-all p-7 rounded-[1.5rem] bg-white/[0.02]"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-opacity uppercase">Launch Project</span>
                  <span className="text-[15px] font-bold tracking-tight">VISIT EXPERIENCE</span>
                </div>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-xl">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

