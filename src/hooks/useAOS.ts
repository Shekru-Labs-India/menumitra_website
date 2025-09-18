'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    AOS?: {
      init: (config?: any) => void;
      refresh: () => void;
    };
  }
}

export const useAOS = () => {
  useEffect(() => {
    // Check if AOS is available
    if (typeof window !== 'undefined' && window.AOS) {
      // Initialize AOS if not already initialized
      window.AOS.init({
        duration: 500,
        once: true,
        offset: 50,
        easing: 'ease-out',
        delay: 0
      });

      // Refresh AOS to detect new elements
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }, 100);
    }
  }, []);

  // Return a function to manually refresh AOS
  const refreshAOS = () => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  };

  return { refreshAOS };
};
