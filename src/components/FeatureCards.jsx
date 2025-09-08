import React from 'react';

const FeatureCards = ({ 
  title, 
  cards, 
  cardClassName = "feature-card",
  containerClassName = "container mt-80",
  titleClassName = "text-center mb-50",
  colorTheme = "green" // "green", "orange", or "yellow"
}) => {
  // Dynamic styles based on color theme
  const getThemeStyles = () => {
    if (colorTheme === "orange") {
      return {
        cardBackground: "linear-gradient(135deg, #faf2eb 0%, #f5e6d3 100%)",
        iconBackground: "linear-gradient(135deg, #ff8c00, #ff6b35)",
        iconShadow: "rgba(255, 140, 0, 0.2)",
        iconHoverShadow: "rgba(255, 140, 0, 0.4)",
        borderColor: "#ff8c00",
        topBar: "linear-gradient(90deg, #ff8c00, #ff6b35)"
      };
    } else if (colorTheme === "yellow") {
      return {
        cardBackground: "linear-gradient(135deg, #fffbf0 0%, #fef7e0 100%)",
        iconBackground: "linear-gradient(135deg, #ffc107, #ffb300)",
        iconShadow: "rgba(255, 193, 7, 0.2)",
        iconHoverShadow: "rgba(255, 193, 7, 0.4)",
        borderColor: "#ffc107",
        topBar: "linear-gradient(90deg, #ffc107, #ffb300)"
      };
    } else {
      return {
        cardBackground: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        iconBackground: "linear-gradient(135deg, #28a745, #20c997)",
        iconShadow: "rgba(40, 167, 69, 0.2)",
        iconHoverShadow: "rgba(40, 167, 69, 0.4)",
        borderColor: "#28a745",
        topBar: "linear-gradient(90deg, #28a745, #20c997)"
      };
    }
  };

  const theme = getThemeStyles();

  // Default styles for feature cards
  const cardStyles = `
    <style>
      .feature-card {
        background: ${theme.cardBackground};
        border: 2px solid #e9ecef;
        border-radius: 28px;
        padding: 2.5rem 2rem;
        height: 100%;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.05);
        position: relative;
        overflow: hidden;
        margin-bottom: 1rem;
      }
      
      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${theme.topBar};
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1);
        border: 2px solid ${theme.borderColor};
        border-radius: 32px;
      }
      
      .feature-card-icon {
        width: 70px;
        height: 70px;
        background: ${theme.iconBackground};
        border-radius: 22px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px ${theme.iconShadow};
      }
      
      .feature-card-icon i {
        font-size: 28px;
        color: white;
      }
      
      .feature-card:hover .feature-card-icon {
        transform: scale(1.15);
        box-shadow: 0 8px 20px ${theme.iconHoverShadow};
      }
      
      .feature-card-content {
        text-align: left;
        padding: 1rem;
      }
      
      .feature-card-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 1.2rem;
        line-height: 1.4;
      }
      
      .feature-card-text {
        color: #6c757d;
        font-size: 1rem;
        line-height: 1.7;
        margin: 0;
        padding-right: 0.5rem;
      }
      
      @media (max-width: 768px) {
        .feature-card {
          padding: 2rem 1.5rem;
        }
        
        .feature-card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 1.5rem;
        }
        
        .feature-card-icon i {
          font-size: 24px;
        }
        
        .feature-card-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .feature-card-text {
          font-size: 0.95rem;
        }
      }
    </style>
  `;

  return (
    <>
      <style>{cardStyles}</style>
      <div className={containerClassName}>
        {title && (
          <h2 className={titleClassName}>
            {title}
          </h2>
        )}
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className={cardClassName}>
                <div className="feature-card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="feature-card-content">
                  <h6 className="feature-card-title">{card.title}</h6>
                  <p className="feature-card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
