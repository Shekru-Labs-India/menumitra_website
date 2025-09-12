'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ClientSection: React.FC = () => {
  return (
    <section className="client pt-[140px] pb-[145px] max-lg:py-20">
      <div className="container overflow-hidden max-lg:!px-0">
        <div className="text-center max-w-[550px] px-[10px] mx-auto max-lg:px-2.5">
          <h2 className="mb-10">The world&apos;s best companies trust aplio.</h2>
          <p className="text-light mb-15">Trusted by thousands of companies across 50+ countries</p>
        </div>
        <div className="relative after:absolute before:absolute after:w-[120px] after:h-[40px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[120px] before:h-[40px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-dark-gradient dark:before:from-dark-gradient">
          <div className="absolute left-0 top-0 w-full max-lg:hidden">
            <Image 
              src="/images/clients/client-border.svg" 
              alt="border" 
              width={1200} 
              height={40} 
              className="inline-block dark:hidden"
            />
            <Image 
              src="/images/clients/client-border-dark.svg" 
              alt="border" 
              width={1200} 
              height={40} 
              className="hidden dark:inline-block"
            />
          </div>
          <div className="marquee marquee-items">
            <div className="marquee-content flex items-center justify-between py-8" id="clients">
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/group.svg" 
                  alt="group" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/group-dark.svg" 
                  alt="group" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/infinity.svg" 
                  alt="infinity" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/infinity-dark.svg" 
                  alt="infinity" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/artifact.svg" 
                  alt="artifact" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/artifact-dark.svg" 
                  alt="caudile" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/caudile.svg" 
                  alt="caudile" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/caudile-dark.svg" 
                  alt="caudile" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/axeptio.svg" 
                  alt="axeptio" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/axeptio-dark.svg" 
                  alt="axeptio" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/mfinity.svg" 
                  alt="mfinity" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/mfinity-dark.svg" 
                  alt="mfinity" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-15 flex items-center justify-center">
          <Link href="/contact" className="btn-outline">
            Start your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
