import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  lazy = true, 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate WebP and fallback paths
  const getImagePaths = (originalSrc) => {
    const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[0] || '.jpg';
    
    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc
    };
  };

  const { webp, fallback } = getImagePaths(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`lazy-placeholder ${className}`}
        style={{ 
          backgroundColor: '#f0f0f0',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...props}
      >
        <div style={{ color: '#999' }}>Loading...</div>
      </div>
    );
  }

  return (
    <picture className={className} {...props}>
      {/* WebP source for modern browsers */}
      <source 
        srcSet={webp} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback for older browsers */}
      <img
        ref={imgRef}
        src={fallback}
        alt={alt}
        className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          width: '100%',
          height: 'auto'
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
