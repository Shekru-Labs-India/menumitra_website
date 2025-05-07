import React, { useState, useEffect } from 'react';

const WhatsAppFAB = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappNumber = "918600704616";
  const message = "Hello MenuMitra, I'm interested in your restaurant management solutions and would like to know more details about your services.";
  const encodedMessage = encodeURIComponent(message);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const fabStyle = {
    position: 'fixed',
    bottom: isMobile ? '16px' : '20px',
    right: isMobile ? '16px' : '20px',
    width: isMobile ? '50px' : '60px',
    height: isMobile ? '50px' : '60px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    zIndex: 9999,
    textDecoration: 'none',
    fontSize: isMobile ? '26px' : '32px',
    transition: 'all 0.3s ease'
  };

  const pulseRingStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
    backgroundColor: '#25D366',
    opacity: '0.8',
    zIndex: -1
  };

  const tooltipStyle = {
    position: 'absolute',
    right: '80px',
    backgroundColor: 'white',
    color: '#333',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
    width: '160px',
    textAlign: 'center',
    display: showTooltip && !isMobile ? 'block' : 'none',
    whiteSpace: 'normal',
    fontWeight: '500'
  };

  const keyframesStyle = `
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      70% {
        transform: scale(1.3);
        opacity: 0;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
        style={fabStyle}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div style={pulseRingStyle}></div>
        <i className="bi bi-whatsapp"></i>
        <div style={tooltipStyle}>Chat with us on WhatsApp</div>
      </a>
    </>
  );
};

export default WhatsAppFAB; 