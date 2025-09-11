import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate low-quality placeholder from the same image
  const generateLQIP = (imageSrc) => {
    // For WebP images, we'll use a simple blur effect
    // In production, you'd want to generate actual LQIP images
    return placeholder;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // For priority images (above the fold), load immediately
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        {...props}
      />
    );
  }

  // For non-priority images, use lazy loading with progressive enhancement
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease'
      }}
      effect="blur"
      placeholderSrc={generateLQIP(src)}
      threshold={100}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      sizes={sizes}
      {...props}
    />
  );
};

export default OptimizedImage;