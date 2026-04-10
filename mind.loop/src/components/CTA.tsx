import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export const CTA = () => {
  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero_bg_4.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60">
            <div className="w-5 h-5 rounded-full border border-foreground/60"></div>
          </div>
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-serif italic mb-6">
          Start Your Journey
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg mb-12 max-w-lg">
          Join thousands of other forward-thinkers building their content and audience on Mindloop.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-foreground text-background font-medium rounded-lg px-8 py-3.5 hover:scale-105 transition-transform duration-300">
            Subscribe Now
          </button>
          <button className="w-full sm:w-auto liquid-glass font-medium rounded-lg px-8 py-3.5 hover:bg-white/5 transition-all duration-300">
            Start Writing
          </button>
        </motion.div>
      </div>
    </section>
  );
};
