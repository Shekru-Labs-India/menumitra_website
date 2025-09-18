import React, { useEffect, useRef, useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title = "See MenuMitra in Action",
  description = "Watch how our system streamlines operations",
  className = "",
  containerClassName = "",
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  showTitle = true,
  showDescription = true,
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const buildVideoUrl = () => {
    const params = new URLSearchParams({
      controls: controls ? '1' : '0',
      autoplay: (autoplay && isVideoVisible) ? '1' : '0',
      mute: muted ? '1' : '0',
      loop: loop ? '1' : '0',
    });

    if (loop) {
      params.append('playlist', videoId);
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  return (
    <div className={`bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative ${containerClassName}`}>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-8 mb-0 text-center relative !mb-0">
        {showTitle && (
          <h2 className="text-2xl font-semibold mb-4 !mt-0">{title}</h2>
        )}
        {showDescription && (
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>
        )}
        <div ref={videoRef} className={`relative w-full max-w-4xl mx-auto !mb-0 ${className}`}>
          <div className="relative w-full !mb-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={buildVideoUrl()}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
