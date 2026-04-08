import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Background Video Setup
  useEffect(() => {
    const videoSource = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSource);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoSource;
      }
    }
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Setting initial state
      gsap.set(".name-reveal", { opacity: 0, y: 50 });
      gsap.set(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20 });

      tl.to(".name-reveal", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out",
      });

      tl.to(
        ".blur-in",
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=1.0" // overlap start time or start after 0.3s overall
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Role Cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span className="blur-in text-xs text-muted uppercase tracking-[0.3em] mt-24 mb-8">
          COLLECTION '26
        </span>
        
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Jorjis Hasan
        </h1>
        
        <p className="blur-in text-lg md:text-2xl text-text-primary mb-6 font-medium">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Moon.
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex items-center gap-4 flex-col sm:flex-row">
          <a
            href="#work"
            className="group relative rounded-full overflow-hidden inline-block"
          >
            {/* Outline Gradient on hover */}
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 block bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary rounded-full px-7 py-3.5 text-sm font-medium transition-colors hover:scale-[1.01] m-[2px]">
              See Works
            </span>
          </a>

          <a
            href="mailto:hello@jorjishasan.com"
            className="group relative rounded-full overflow-hidden inline-block"
          >
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 block bg-bg text-text-primary border-2 border-stroke group-hover:border-transparent rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:scale-[1.01] m-[2px]">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] opacity-80">
          Scroll
        </span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="w-full h-full bg-text-primary animate-scroll-down origin-top" />
        </div>
      </div>
    </section>
  );
}
