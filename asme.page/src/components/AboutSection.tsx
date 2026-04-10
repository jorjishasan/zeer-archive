import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-black pt-28 sm:pt-32 md:pt-44 pb-12 md:pb-20 px-6 md:px-10 lg:px-16 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Pioneering{' '}
          <em className="italic text-white/60">ideas</em> 
        </motion.h2>
      </div>
    </section>
  );
}

export default AboutSection;
