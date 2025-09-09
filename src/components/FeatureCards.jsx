import React from 'react';
import './FeatureCards.css';

const FeatureCards = ({ 
  title = "Complete Restaurant Management Solution",
  subtitle = "Everything you need to run your new restaurant efficiently",
  cards = [],
  ctaTitle = "Ready to Start Your Restaurant Journey?",
  ctaDescription = "Get started with MenuMitra's complete restaurant management solution. Book a free demo and see how we can help your new outlet succeed.",
  ctaButtonText = "Book Free Demo",
  ctaButtonLink = "/book_demo",
  ctaButtonIcon = "fas fa-calendar-alt",
  showCta = true,
  className = ""
}) => {
  return (
    <div id="features" className={`mt-80 bg-light feature-cards-section ${className}`}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">
            {title}
          </h2>
          <p className="lead text-muted">
            {subtitle}
          </p>
        </div>
        
        <div className="row g-5 mb-5">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm feature-card">
                <div className="card-body p-4 text-center">
                  <div className="feature-icon-wrapper mb-5">
                    <i 
                      className={`${card.icon} feature-icon`} 
                      style={{ fontSize: '48px', color: card.iconColor || '#007bff' }}
                    ></i>
                  </div>
                  <h5 className={`card-title mb-3 ${card.titleColor || 'text-primary'}`}>
                    {card.title}
                  </h5>
                  <p className="card-subtitle mb-0 fw-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {showCta && (
          <div className="text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-section">
                  <h4 className="mb-3">{ctaTitle}</h4>
                  <p className="mb-4">
                    {ctaDescription}
                  </p>
                  <a href={ctaButtonLink} className="btn btn-light btn-lg px-4">
                    <i className={`${ctaButtonIcon} me-2`}></i>
                    {ctaButtonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCards;