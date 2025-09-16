import { useState, useEffect } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Check if the page is fully loaded
    const handleLoad = () => {
      setIsPageReady(true);
    };

    // Check if DOM is ready
    if (document.readyState === 'complete') {
      setIsPageReady(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Also check for images and videos to be loaded
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll('img');
      const videos = document.querySelectorAll('video');
      
      let loadedCount = 0;
      const totalAssets = images.length + videos.length;
      
      if (totalAssets === 0) {
        // No assets to wait for
        setTimeout(() => setIsPageReady(true), 1000);
        return;
      }

      const onAssetLoad = () => {
        loadedCount++;
        if (loadedCount >= totalAssets) {
          setTimeout(() => setIsPageReady(true), 500);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          onAssetLoad();
        } else {
          img.addEventListener('load', onAssetLoad);
          img.addEventListener('error', onAssetLoad);
        }
      });

      videos.forEach(video => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          onAssetLoad();
        } else {
          video.addEventListener('canplaythrough', onAssetLoad);
          video.addEventListener('error', onAssetLoad);
        }
      });
    };

    // Start checking assets after a short delay
    const assetCheckTimeout = setTimeout(checkAssetsLoaded, 100);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(assetCheckTimeout);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading: isLoading && !isPageReady,
    handleLoadingComplete,
  };
};
