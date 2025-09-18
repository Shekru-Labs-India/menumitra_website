'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAOS } from '@/hooks/useAOS';

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  const { refreshAOS } = useAOS();
  const pathname = usePathname();

  useEffect(() => {
    // Refresh AOS when route changes
    const timer = setTimeout(() => {
      refreshAOS();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, refreshAOS]);

  return <>{children}</>;
};

export default AOSProvider;
