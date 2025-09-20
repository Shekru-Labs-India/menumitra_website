'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage immediately when 404 page loads
    router.replace('/');
  }, [router]);

  // Return null to show no UI - instant redirect
  return null;
}