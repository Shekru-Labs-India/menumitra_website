import React, { useState, useRef, useEffect } from 'react';

const LazyYouTube = ({ 
  videoId, 
  title, 
  className = '', 
  style = {},
  autoplay = false,
  loop = false,
  playlist = null,
  mute = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const buildYouTubeUrl = () => {
    let url = `https://www.youtube.com/embed/${videoId}?`;
    const params = [];
    
    if (autoplay) params.push('autoplay=1');
    if (mute) params.push('mute=1');
    if (loop) params.push('loop=1');
    if (playlist) params.push(`playlist=${playlist}`);
    
    return url + params.join('&');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`lazy-youtube-container ${className}`} style={style}>
      {!isInView ? (
        // Placeholder until video comes into view
        <div 
          className="youtube-placeholder d-flex align-items-center justify-content-center"
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: '#000',
            borderRadius: '20px',
            cursor: 'pointer',
            position: 'relative',
            minHeight: '315px',
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...style
          }}
          onClick={() => setIsInView(true)}
        >
          <div 
            className="play-button d-flex align-items-center justify-content-center"
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 0, 0, 0.9)',
              borderRadius: '50%',
              color: 'white',
              fontSize: '30px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            ▶
          </div>
          <div 
            className="overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '20px'
            }}
          />
        </div>
      ) : (
        // Actual YouTube iframe
        <iframe
          src={buildYouTubeUrl()}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            ...style
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyYouTube;
