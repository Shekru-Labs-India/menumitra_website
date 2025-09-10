import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { Link } from "react-router-dom";

const ManagementPageLayout = ({
  title,
  description,
  keywords,
  heroImage,
  heroTitle,
  heroDescription,
  heroButtonText = "Book a free demo",
  heroButtonIcon = "fas fa-shopping-cart",
  heroButtonLink = "/book_demo",
  featuresTitle,
  featuresSubtitle,
  features,
  operationsTitle,
  operationsSubtitle,
  operations,
  intelligenceTitle,
  intelligenceDescription,
  intelligenceImage,
  intelligenceFeatures,
  integrationTitle,
  integrationSubtitle,
  integrationFeatures,
  successStoriesTitle,
  successStoriesSubtitle,
  successStories,
  ctaTitle,
  ctaDescription,
  ctaButtonText = "Book Free Demo",
  ctaButtonIcon = "fas fa-calendar-alt",
  ctaButtonLink = "/book_demo",
  pageClassName = "",
}) => {
  return (
    <>
      <Header />

      <div className={`main-container p-0 management-page ${pageClassName}`}>
        {/* Hero Section */}
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={heroImage}
                  alt={`${title} System`}
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">{heroTitle}</h2>
                <p className="mb-30">{heroDescription}</p>
                <Link to={heroButtonLink} className="btn btn-primary pill mr-5">
                  <i className={`${heroButtonIcon} mr-5`} />
                  <span>{heroButtonText}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <div id="features" className="mt-80">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-50">{featuresTitle}</h2>
              <p className="lead text-muted mb-5">{featuresSubtitle}</p>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                      <i
                        style={{
                          fontSize: "48px",
                          color: feature.color,
                          marginBottom: "15px",
                        }}
                        className={`${feature.icon} feature-icon`}
                      ></i>
                      <h5
                        style={{
                          fontWeight: 600,
                          marginBottom: "10px",
                          color: "#333",
                        }}
                        className="feature-title"
                      >
                        {feature.title}
                      </h5>
                      <p
                        style={{ color: "#666" }}
                        className="feature-description"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Operations */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title mb-3">{operationsTitle}</h2>
              <p className="lead text-muted">{operationsSubtitle}</p>
            </div>
            <div className="row g-4">
              <div className="row">
                {operations.slice(0, 2).map((operation, index) => (
                  <div key={index} className="col-6">
                    <div className="operation-card-item">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-4">
                          <div
                            className={`${operation.bgColor} text-white rounded-circle d-flex align-items-center justify-content-center operation-icon`}
                            style={{ width: "70px", height: "70px" }}
                          >
                            <i className={`${operation.icon} fa-lg`}></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-2 fw-bold">{operation.title}</h5>
                          <p className="text-muted mb-0">{operation.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row g-4 mt-30">
              <div className="row">
                {operations.slice(2, 4).map((operation, index) => (
                  <div key={index + 2} className="col-6">
                    <div className="operation-card-item">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-4">
                          <div
                            className={`${operation.bgColor} text-white rounded-circle d-flex align-items-center justify-content-center operation-icon`}
                            style={{ width: "70px", height: "70px" }}
                          >
                            <i className={`${operation.icon} fa-lg`}></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-2 fw-bold">{operation.title}</h5>
                          <p className="text-muted mb-0">{operation.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Section */}
        <section className="py-5 business-intelligence-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src={intelligenceImage}
                  alt={`${intelligenceTitle} Dashboard`}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="mb-4 text-gradient">{intelligenceTitle}</h2>
                <p className="lead mb-4">{intelligenceDescription}</p>
                <div className="row g-3">
                  {intelligenceFeatures.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex align-items-center bi-card">
                        <i className={`${feature.icon} ${feature.color} me-3 fa-lg`}></i>
                        <div>
                          <h6 className="mb-1">{feature.title}</h6>
                          <small className="text-dark">{feature.description}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Scalability */}
        <section className="py-5 bg-gradient-primary text-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-white mb-3">{integrationTitle}</h2>
              <p className="lead text-white-50">{integrationSubtitle}</p>
            </div>
            <div className="row g-3">
              {integrationFeatures.map((feature, index) => (
                <div key={index} className="col-md-4">
                  <div className="text-center">
                    <div
                      className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <i className={`${feature.icon} fa-2x`}></i>
                    </div>
                    <h5 className="text-white mb-3">{feature.title}</h5>
                    <p className="text-white-50">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title mb-3">{successStoriesTitle}</h2>
              <p className="lead text-dark">{successStoriesSubtitle}</p>
            </div>
            <div className="row g-3">
              {successStories.map((story, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card border-0 shadow-sm h-100 success-story-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={story.image}
                          alt="Restaurant"
                          className="rounded-circle me-3"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <h6 className="mb-0">{story.name}</h6>
                          <small className="text-muted">{story.location}</small>
                        </div>
                      </div>
                      <p className="text-dark">"{story.testimonial}"</p>
                      <div className="d-flex align-items-center">
                        <div className="text-warning me-2">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                        <small className="text-muted">{story.rating} Rating</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-3">{ctaTitle}</h2>
                <p className="lead text-white-50 mb-0">{ctaDescription}</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to={ctaButtonLink} className="btn btn-light btn-lg me-3 mb-2">
                  <i className={`${ctaButtonIcon} me-2`}></i>
                  {ctaButtonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Form />
      <Footer />
    </>
  );
};

export default ManagementPageLayout;
