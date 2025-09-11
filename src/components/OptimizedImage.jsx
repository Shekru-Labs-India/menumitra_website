import React, { useState, useRef, useEffect } from 'react';

// Lazy loading image component
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            width: '100%',
            height: 'auto'
          }}
        />
      )}
      {!isLoaded && (
        <img
          src={placeholder}
          alt="Loading..."
          style={{
            opacity: 1,
            width: '100%',
            height: 'auto',
            filter: 'blur(5px)'
          }}
        />
      )}
    </div>
  );
};

// Critical image component (loads immediately)
const CriticalImage = ({ src, alt, className = '', ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      {...props}
    />
  );
};

// Optimized image component that chooses between lazy and critical
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  ...props 
}) => {
  if (priority) {
    return <CriticalImage src={src} alt={alt} className={className} {...props} />;
  }
  
  return <LazyImage src={src} alt={alt} className={className} {...props} />;
};

export default OptimizedImage;
export { LazyImage, CriticalImage };