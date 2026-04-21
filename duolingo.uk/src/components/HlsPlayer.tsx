import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HlsPlayerProps {
  src: string;
  className?: string;
  poster?: string;
}

const HlsPlayer: React.FC<HlsPlayerProps> = ({ src, className, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isInitialized) {
              initHls(video, src);
              setIsInitialized(true);
            } else {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, isInitialized]);

  const initHls = (video: HTMLVideoElement, source: string) => {
    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: false,
        startLevel: -1,
        abrEwmaDefaultEstimate: 50000000,
        maxBufferLength: 60,
        maxMaxBufferLength: 120,
      });

      hls.loadSource(source);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.currentLevel = hls.levels.length - 1;
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
    }
  };

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
    />
  );
};

export default HlsPlayer;
