import { useRef, useEffect } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
      runFade(1, 250);
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
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
        video
          .play()
          .then(() => {
            fadingOutRef.current = false;
            runFade(1, 250);
          })
          .catch(console.error);
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
    <div className="fixed inset-0 z-0 flex items-start justify-center overflow-hidden bg-[#0a0c0b]">
      <video
        ref={videoRef}
        muted
        playsInline
        className="h-full min-h-full w-full min-w-full object-cover object-[center_22%] sm:object-top md:object-[center_top]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35"
        aria-hidden
      />
    </div>
  );
}
