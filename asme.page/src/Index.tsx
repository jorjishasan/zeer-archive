import { useRef, useCallback, useEffect } from 'react';
import { Globe, ArrowRight, Camera, MessageCircle } from 'lucide-react';
import AboutSection from './components/AboutSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number>(0);

  const animateOpacity = useCallback(
    (el: HTMLVideoElement, from: number, to: number, duration: number, onDone?: () => void) => {
      cancelAnimationFrame(animFrameRef.current);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        el.style.opacity = String(from + (to - from) * t);
        if (t < 1) {
          animFrameRef.current = requestAnimationFrame(tick);
        } else if (onDone) {
          onDone();
        }
      };
      animFrameRef.current = requestAnimationFrame(tick);
    },
    []
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.style.opacity = '0';

    const onCanPlay = () => {
      v.play();
      animateOpacity(v, 0, 1, 500);
    };

    const onTimeUpdate = () => {
      if (v.duration - v.currentTime <= 0.55) {
        animateOpacity(v, parseFloat(v.style.opacity || '1'), 0, 500);
      }
    };

    const onEnded = () => {
      v.style.opacity = '0';
      setTimeout(() => {
        v.currentTime = 0;
        v.play();
        animateOpacity(v, 0, 1, 500);
      }, 100);
    };

    v.addEventListener('canplay', onCanPlay);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('ended', onEnded);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      v.removeEventListener('canplay', onCanPlay);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('ended', onEnded);
    };
  }, [animateOpacity]);

  return (
    <div className="bg-black">
      {/* ── SECTION 1: HERO ── */}
      <section className="min-h-screen overflow-hidden relative flex flex-col">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{ opacity: 0 }}
          muted
          autoPlay
          playsInline
          preload="auto"
          src="/hero_bg.mp4"
        />

        {/* Navbar */}
        <nav className="relative z-20 px-4 sm:px-6 lg:px-8 pt-4 pb-2 sm:pt-6 sm:pb-4">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center">
              <Globe size={22} className="text-white flex-shrink-0" />
              <span className="text-white font-semibold text-lg ml-2.5">Asme</span>
              <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-8 lg:ml-10">
                {['Features', 'Pricing', 'About'].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-white text-sm font-medium cursor-pointer hover:text-white/80 transition-colors">
                Sign Up
              </button>
              <button className="liquid-glass rounded-full px-5 sm:px-6 py-2 text-white text-sm font-medium cursor-pointer hover:bg-white/10 transition-colors">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center" style={{ marginTop: '-6vh' }}>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Know it then <em className="italic">all</em>.
          </h1>

          {/* Email input */}
          <div className="max-w-md sm:max-w-lg md:max-w-xl w-full mt-8 sm:mt-10">
            <div className="liquid-glass rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm min-w-0"
              />
              <button className="bg-white rounded-full p-2.5 sm:p-3 text-black flex-shrink-0 cursor-pointer hover:bg-white/90 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white/60 text-sm leading-relaxed px-4 mt-5 sm:mt-6 max-w-md">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>

          {/* Manifesto button */}
          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors mt-5 sm:mt-6 cursor-pointer">
            Manifesto
          </button>
        </div>

        {/* Social icons footer */}
        <div className="relative z-10 flex justify-center gap-3 sm:gap-4 pb-8 sm:pb-12">
          {[Camera, MessageCircle, Globe].map((Icon, i) => (
            <button
              key={i}
              className="liquid-glass rounded-full p-3 sm:p-4 text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ── */}
      <AboutSection />

      {/* ── SECTION 3: FEATURED VIDEO ── */}
      <FeaturedVideoSection />

      {/* ── SECTION 4: PHILOSOPHY ── */}
      <PhilosophySection />

      {/* ── SECTION 5: SERVICES ── */}
      <ServicesSection />
    </div>
  );
}

export default Index;
