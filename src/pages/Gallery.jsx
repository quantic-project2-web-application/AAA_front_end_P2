import React from 'react'
import ImageCard from '../components/ImageCard'
import cafeInterior from '../assets/gallery-cafe-interior.webp'
import ribeyeSteak from '../assets/gallery-ribeye-steak.webp'
import specialEvent from '../assets/gallery-special-event.webp'

const GalleryPage = () => {
  return (
    <div className="page-content">
      {/* Header Section */}
      <section className="hero-section">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the ambiance, cuisine, and awards that define Café Fausse
        </p>
      </section>

      {/* Gallery & Info Grid */}
      <section className="content-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left column: Images */}
          <div className="flex flex-col gap-12 items-center justify-center">
            <ImageCard
              src={cafeInterior}
              alt="Café Fausse Interior"
              title="Elegant Dining Room"
              description="Experience our warm and inviting atmosphere"
            />
            <ImageCard
              src={ribeyeSteak}
              alt="Ribeye Steak"
              title="Prime Ribeye Steak"
              description="Our award-winning signature dish"
            />
            <ImageCard
              src={specialEvent}
              alt="Special Event"
              title="Private Dining"
              description="Perfect for celebrations and special occasions"
            />
          </div>

          {/* Right column: Awards & Reviews */}
          <div className="flex flex-col gap-12">
            {/* Awards Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 section-title">Our Awards & Recognition 🏆</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">Culinary Excellence Award 2022</h3>
                  <p className="text-gray-600 text-sm">Recognized for outstanding culinary innovation and traditional Italian techniques</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">Restaurant of the Year 2023</h3>
                  <p className="text-gray-600 text-sm">Awarded for exceptional service, atmosphere, and dining experience</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">Best Fine Dining Experience</h3>
                  <p className="text-amber-600 font-medium mb-2 text-sm">Foodie Magazine, 2023</p>
                  <p className="text-gray-600 text-sm">Featured as the top fine dining destination in Washington, DC</p>
                </div>
              </div>
            </div>
            
            {/* Reviews Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 section-title">What Our Guests Say</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "Exceptional ambiance and unforgettable flavors. Every dish was a masterpiece that perfectly balanced tradition with innovation."
                  </blockquote>
                  <cite className="text-amber-600 font-medium">— Gourmet Review</cite>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "A must-visit restaurant for food enthusiasts. The attention to detail and quality of service is absolutely outstanding."
                  </blockquote>
                  <cite className="text-amber-600 font-medium">— The Daily Bite</cite>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "Café Fausse sets the standard for fine dining in DC. The combination of atmosphere, service, and cuisine is truly exceptional."
                  </blockquote>
                  <cite className="text-amber-600 font-medium">— Washington Food Critics</cite>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
