import { useRef, useEffect } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We control opacity via inline style directly
    video.style.opacity = '0';

    const cancelFade = () => {
      if (fadeAnimationRef.current !== null) {
        cancelAnimationFrame(fadeAnimationRef.current);
        fadeAnimationRef.current = null;
      }
    };

    const runFade = (targetOpacity: number, duration: number) => {
      cancelFade();
      let start: number | null = null;
      const initialOpacity = parseFloat(video.style.opacity || '0');
      
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        const currentOpacity = initialOpacity + (targetOpacity - initialOpacity) * progress;
        video.style.opacity = currentOpacity.toString();

        if (progress < 1) {
          fadeAnimationRef.current = requestAnimationFrame(animate);
        }
      };
      
      fadeAnimationRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      runFade(1, 250); // Fade in on load
      // Attempt generic auto-play logic if not caught by properties
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
      // 250ms fade-out when 0.55 seconds remain before video end
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        if (!fadingOutRef.current) {
          fadingOutRef.current = true;
          runFade(0, 250);
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          fadingOutRef.current = false;
          runFade(1, 250); // Fade back in
        }).catch(console.error);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      cancelFade();
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black flex justify-center items-start">
      <video
        ref={videoRef}
        muted
        playsInline
        className="min-w-[115%] min-h-[115%] w-[115%] h-[115%] object-cover object-top"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
      />
    </div>
  );
}
