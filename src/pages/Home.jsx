import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import homeImage from '../assets/home-cafe-fausse.webp'
import ImageCard from '../components/ImageCard'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Café Fausse</h1>
          <p className="hero-subtitle">Where authentic flavors meet modern elegance</p>
          <p className="hero-description">
            Experience the finest Italian cuisine in Washington, DC. Founded in 2010 by Chef Antonio Rossi 
            and restaurateur Maria Lopez, we blend traditional flavors with modern culinary innovation.
          </p>
          <ImageCard
              src={homeImage}
              title="Welcome to Café Fausse"
              description="Experience authentic Italian flavors."
          />
          <div className="hero-actions">
            <Link to="/reservations" className="btn-primary">Make a Reservation</Link>
            <Link to="/menu" className="btn-secondary">View Our Menu</Link>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="info-section">
        <div className="section-container">
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">Location</h3>
              <p className="info-text">
                1234 Culinary Ave, Suite 100<br />
                Washington, DC 20002
              </p>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">Contact</h3>
              <p className="info-text">
                Phone: (202) 555-4567<br />
                Email: info@cafefausse.com
              </p>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">Hours</h3>
              <p className="info-text">
                Monday - Saturday: 5:00 PM - 11:00 PM<br />
                Sunday: 5:00 PM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to receive our latest news, seasonal menus, and exclusive offers
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
