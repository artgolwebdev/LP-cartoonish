import { useEffect, useState } from 'react';

interface MotionConfig {
  duration: number;
  ease: string;
  repeat?: number;
  delay?: number;
}

interface MobileOptimizedMotionOptions {
  desktop: MotionConfig;
  mobile: MotionConfig;
  reducedMotion?: MotionConfig;
}

export const useMobileOptimizedMotion = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    checkReducedMotion();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  const getOptimizedTransition = (options: MobileOptimizedMotionOptions) => {
    if (prefersReducedMotion && options.reducedMotion) {
      return options.reducedMotion;
    }
    
    if (isMobile) {
      return options.mobile;
    }
    
    return options.desktop;
  };

  const getOptimizedAnimation = (desktopAnimation: any, mobileAnimation?: any) => {
    if (prefersReducedMotion) {
      return {
        opacity: [0, 1],
        transition: { duration: 0.1 }
      };
    }
    
    if (isMobile && mobileAnimation) {
      return mobileAnimation;
    }
    
    return desktopAnimation;
  };

  return {
    isMobile,
    prefersReducedMotion,
    getOptimizedTransition,
    getOptimizedAnimation,
  };
};
