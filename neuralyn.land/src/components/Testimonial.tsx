import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const quoteText = "Neuralyn revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Neuralyn revolutionized how we handle financial insights using smart analytics.";
const quoteArray = quoteText.split(" ");

const Word = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  // Use hsla to ensure framer-motion handles it well
  const color = useTransform(progress, [start, end], ["hsla(0, 0%, 35%, 1)", "hsla(0, 0%, 100%, 1)"]);

  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em] will-change-[opacity,color]">
      {word}
    </motion.span>
  );
};

export const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center py-24 md:py-32 px-8 md:px-28"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-start gap-10">
        
        <img 
          src="/quote-symbol.png" 
          alt="Quote mark" 
          className="w-14 h-10 object-contain mix-blend-screen" 
        />
        
        <h2 className="text-4xl md:text-5xl font-medium leading-[1.2] flex flex-wrap">
          {quoteArray.map((word, i) => {
            const start = i / quoteArray.length;
            const end = (i + 1) / quoteArray.length;
            
            return (
              <Word 
                key={i} 
                word={word} 
                progress={scrollYProgress} 
                start={start} 
                end={end} 
              />
            );
          })}
          <span className="text-muted-foreground ml-2">"</span>
        </h2>
        
        <div className="flex items-center gap-4">
          <img 
            src="/testimonial-avatar.png" 
            alt="Brooklyn Simmons" 
            className="w-14 h-14 rounded-full border-[3px] border-foreground object-cover" 
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold leading-7 text-foreground">Brooklyn Simmons</span>
            <span className="text-sm font-normal leading-5 text-muted-foreground">Product Manager</span>
          </div>
        </div>

      </div>
    </section>
  );
};
