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
          video: {
            ...prevStyles.video,
            borderRadius: '9px',
            border: '4px solid rgba(255, 255, 255, 0.5)',
            width: '100%', // Make video width 100% for mobile
            height: 'auto', // Maintain aspect ratio
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
        <video 
          style={styles.video}
          width="100%" // Ensure it stretches fully on all screens
          height="auto"
          autoPlay
          loop
          preload="auto"
          muted
          playsInline
          poster="http://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_banner_product_img_lazy.png"
        >
          <source src="//oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zakya_web_anim.mp4" />
        </video>
      </div>
    </div>
  );
};

export default BannerSection;
