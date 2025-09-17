'use client';

import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import BookDemoFormSection from '@/components/forms/BookDemoFormSection';

export default function BookDemoPage() {
  return (
    <>
      <Header />
      <BookDemoFormSection />
      <FooterSection />
    </>
  );
}