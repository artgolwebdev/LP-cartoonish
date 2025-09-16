import { useRef, useEffect } from 'react';

interface UseVideoOptions {
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export const useVideo = (options: UseVideoOptions = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const {
      autoPlay = true,
      muted = true,
      loop = true,
      playsInline = true,
    } = options;

    video.autoplay = autoPlay;
    video.muted = muted;
    video.loop = loop;
    video.playsInline = playsInline;

    // Ensure video loads and plays
    const handleLoad = () => {
      if (autoPlay && muted) {
        video.play().catch(console.error);
      }
    };

    video.addEventListener('loadeddata', handleLoad);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoad);
    };
  }, [options]);

  return videoRef;
};
