import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MockDashboard } from "./MockDashboard";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax Text
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start pt-32 md:pt-40">
      
      {/* Background Video - Fixed Inset-0 to show from top */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-50 scale-105 origin-top"
        >
            <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        {/* Top gradient to ensure navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Hero Content Group */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 flex flex-col items-center px-4 max-w-4xl mx-auto text-center will-change-transform"
      >
        {/* Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="liquid-glass px-3 py-2 rounded-lg mb-8 flex items-center gap-2"
        >
          <span className="bg-white text-black px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">New</span>
          <span className="text-sm font-medium text-muted-foreground/90">Say Hello to Corewave v3.2</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-[88px] font-medium tracking-[-3px] leading-[0.95] md:leading-[1.05] mb-6"
        >
          Your Insights. <br />
          One Clear <span className="font-serif italic font-normal tracking-tight">Overview.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-[19px] font-normal leading-relaxed opacity-90 mb-10 max-w-lg mx-auto"
          style={{ color: "var(--hero-subtitle)" }}
        >
          Neuralyn helps teams track metrics, goals,<br className="hidden md:block" />
          and progress with precision.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group"
        >
          {/* Subtle glow behind button */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-r from-[#99f6e4] via-[#fbcfe8] to-[#fef08a] text-black rounded-full px-12 py-4 text-[17px] font-bold shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
          >
            Get Started for Free
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Entire dashboard strip: transform-only entrance (no parent opacity — avoids backdrop-filter flicker) */}
      <motion.div
        initial={{ y: 32 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.78,
          delay: 0.38,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mt-[-5vh] ml-[calc(-50vw+50%)] w-screen md:h-[90vh]"
      >
        <div className="absolute inset-0 flex items-center justify-center px-4 pt-20 md:px-0">
          <div className="w-full max-w-6xl">
            <MockDashboard className="h-[500px] md:h-[650px]" />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

    </section>
  );
};
