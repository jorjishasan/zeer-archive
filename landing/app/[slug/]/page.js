"use client";

import { use } from "react";
import { PROJECTS } from "../data/projects";
import Link from "next/link";

export default function ProjectViewer({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Project Not Found</h1>
        <Link href="/" className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase text-xs font-bold tracking-widest">
          Return Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[2000] overflow-hidden flex flex-col">
      {/* Control Bar */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-white/5 bg-black z-[2001]">
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            ←
          </Link>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-30 uppercase">{project.tag} // {project.index}</span>
            <span className="text-xs font-bold tracking-tight uppercase">{project.title}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            External Link
          </a>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 w-full bg-[#050505] relative">
        <iframe 
          src={project.url} 
          className="w-full h-full border-none"
          title={project.title}
        />
        {/* Subtle Overlay to match brand vibe if needed */}
        <div className="absolute inset-0 pointer-events-none border border-white/5" />
      </div>
    </div>
  );
}
