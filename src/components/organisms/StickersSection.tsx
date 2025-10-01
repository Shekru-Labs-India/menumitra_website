import React from 'react';
import Image from 'next/image';

interface StickersSectionProps {
  className?: string;
}

const stickers: Array<{ src: string; alt: string; preferredWidth: number }> = [
  { src: '/images/stickers/medal1.svg', alt: 'High Performer', preferredWidth: 70 },
  { src: '/images/stickers/medal2.svg', alt: 'Best Support', preferredWidth: 70 },
  { src: '/images/stickers/medal3.svg', alt: 'Leader', preferredWidth: 70 },
  { src: '/images/stickers/medal4.svg', alt: 'Easiest To Do Business With', preferredWidth: 70 },
  { src: '/images/stickers/medal-users-love-us.svg', alt: 'Users Love Us', preferredWidth: 70 },
  { src: '/images/stickers/MomentumLeader.svg', alt: 'Momentum Leader', preferredWidth: 100 },
  { src: '/images/stickers/Business_Leader.svg', alt: 'Grid Leader', preferredWidth: 100 },
];

const StickersSection: React.FC<StickersSectionProps> = ({ className = '' }) => {
  return (
    <div className={`text-center mt-8 ${className}`}>
      <p className="text-xl md:text-lg lg:text-[22px] font-bold">
        We&apos;re the best, as we&apos;ve mentioned before!
      </p>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4">
        {stickers.map(({ src, alt, preferredWidth }) => (
          <div key={src} className="p-[5px]">
            <Image
              src={src}
              alt={alt}
              width={preferredWidth}
              height={preferredWidth}
              className="h-auto w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickersSection;


