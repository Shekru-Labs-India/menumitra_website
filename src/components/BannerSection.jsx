import React, { useState, useEffect } from 'react';
import { bannerStyles } from './BannerSection.styles';

const BannerSection = () => {
  const [styles, setStyles] = useState(bannerStyles);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1560px)').matches) {
        setStyles(prevStyles => ({
          ...prevStyles,
          zhInrSec: {
            ...prevStyles.zhInrSec,
            maxWidth: '1300px',
          }
        }));
      }
      
      if (window.matchMedia('(max-width: 1380px)').matches) {
        setStyles(prevStyles => ({
          ...prevStyles,
          zhInrSec: {
            ...prevStyles.zhInrSec,
            maxWidth: '95%',
          }
        }));
      }
      
      if (window.matchMedia('(max-width: 767px)').matches) {
        setStyles(prevStyles => ({
          ...prevStyles,
          zhInrSec: {
            ...prevStyles.zhInrSec,
            maxWidth: '100%',
            borderRadius: '0',
            paddingBottom: '60px',
          },
          zhInrBg: {
            ...prevStyles.zhInrBg,
            borderRadius: '0',
          },
          iframe: {
            ...prevStyles.video,
            borderRadius: '9px',
            border: '4px solid rgba(255, 255, 255, 0.5)',
            width: '100%', // Make video width 100% for mobile
            height: '100%', // Maintain aspect ratio
          }
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.zhInrSec}>
      <div style={styles.zhInrBg}></div>
      <div style={styles.zhBnrImgSec}>
        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
          <iframe 
            style={{...styles.video, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            src="https://www.youtube.com/embed/j2e2stCcICo?list=TLGG3vUbEoDSIB4wNzA1MjAyNQ&loop=1&playlist=j2e2stCcICo"
            title="Menu Mitra Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
