import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../assets/home-cafe-fausse.webp'
import ImageCard from '../components/ImageCard'

const HomePage = () => {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="text-5xl font-bold mb-6 text-amber-800">
          Welcome to Café Fausse
        </h1>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
          Experience authentic Italian flavors blended with a modern atmosphere in the heart of Washington, DC.
        </p>
      </section>

      {/* Navigation Links */}
      <section className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto mb-12">
        <Link to="/menu" className="btn-primary mb-8 sm:mb-0 mr-4">View Menu</Link>
        <Link to="/reservations" className="btn-secondary">Make Reservation</Link>
      </section>

      {/* Image Section */}
      <section className="flex justify-center mb-16">
        <ImageCard
          src={homeImage}
          alt="Café Fausse Ambiance"
          title="Elegant Dining Experience"
          description="Discover our warm and inviting atmosphere"
        />
      </section>

      {/* About Section */}
      <section className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-amber-800 uppercase text-center">Our Story</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
          Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
