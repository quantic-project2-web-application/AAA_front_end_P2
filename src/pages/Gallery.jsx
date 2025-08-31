import React from 'react'



const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">Discover the ambiance, cuisine, and awards that define Café Fausse</p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-container">
          <h2 className="section-title">Our Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3 className="award-title">Culinary Excellence Award</h3>
              <p className="award-year">2022</p>
              <p className="award-description">
                Recognized for outstanding culinary innovation and traditional Italian techniques
              </p>
            </div>

            <div className="award-card">
              <div className="award-icon">🌟</div>
              <h3 className="award-title">Restaurant of the Year</h3>
              <p className="award-year">2023</p>
              <p className="award-description">
                Awarded for exceptional service, atmosphere, and dining experience
              </p>
            </div>

            <div className="award-card">
              <div className="award-icon">🍽️</div>
              <h3 className="award-title">Best Fine Dining Experience</h3>
              <p className="award-year">Foodie Magazine, 2023</p>
              <p className="award-description">
                Featured as the top fine dining destination in Washington, DC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="photos-section">
        <div className="section-container">
          <h2 className="section-title">Restaurant Gallery</h2>
          <div className="photo-grid">
            {/* Placeholder for restaurant images */}
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Interior Ambiance</span>
              </div>
            </div>
            
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Signature Dishes</span>
              </div>
            </div>
            
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Private Events</span>
              </div>
            </div>
            
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Chef's Kitchen</span>
              </div>
            </div>
            
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Wine Selection</span>
              </div>
            </div>
            
            <div className="photo-card">
              <div className="photo-placeholder">
                <span className="photo-label">Elegant Dining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="section-container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <blockquote className="review-text">
                "Exceptional ambiance and unforgettable flavors. Every dish was a masterpiece 
                that perfectly balanced tradition with innovation."
              </blockquote>
              <cite className="review-source">— Gourmet Review</cite>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <blockquote className="review-text">
                "A must-visit restaurant for food enthusiasts. The attention to detail 
                and quality of service is absolutely outstanding."
              </blockquote>
              <cite className="review-source">— The Daily Bite</cite>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <blockquote className="review-text">
                "Café Fausse sets the standard for fine dining in DC. The combination 
                of atmosphere, service, and cuisine is truly exceptional."
              </blockquote>
              <cite className="review-source">— Washington Food Critics</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
