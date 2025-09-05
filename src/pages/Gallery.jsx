import React from 'react'
import cafeInterior from '../assets/gallery-cafe-interior.webp'
import ribeyeSteak from '../assets/gallery-ribeye-steak.webp'
import specialEvent from '../assets/gallery-special-event.webp'

// Gallery data structure
const galleryData = [
  {
    id: 1,
    src: cafeInterior,
    alt: "Café Fausse Interior",
    title: "Elegant Dining Room",
    description: "Experience our warm and inviting atmosphere"
  },
  {
    id: 2,
    src: ribeyeSteak,
    alt: "Ribeye Steak",
    title: "Prime Ribeye Steak",
    description: "Our award-winning signature dish"
  },
  {
    id: 3,
    src: specialEvent,
    alt: "Special Event",
    title: "Private Dining",
    description: "Perfect for celebrations and special occasions"
  }
];

// Awards data
const awardsData = [
  {
    title: "Culinary Excellence Award 2022",
    description: "Recognized for outstanding culinary innovation and traditional Italian techniques"
  },
  {
    title: "Restaurant of the Year 2023",
    description: "Awarded for exceptional service, atmosphere, and dining experience"
  },
  {
    title: "Best Fine Dining Experience",
    subtitle: "Foodie Magazine, 2023",
    description: "Featured as the top fine dining destination in Washington, DC"
  }
];

// Reviews data
const reviewsData = [
  {
    rating: "⭐⭐⭐⭐⭐",
    quote: "Exceptional ambiance and unforgettable flavors. Every dish was a masterpiece that perfectly balanced tradition with innovation.",
    author: "Gourmet Review"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    quote: "A must-visit restaurant for food enthusiasts. The attention to detail and quality of service is absolutely outstanding.",
    author: "The Daily Bite"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    quote: "Café Fausse sets the standard for fine dining in DC. The combination of atmosphere, service, and cuisine is truly exceptional.",
    author: "Washington Food Critics"
  }
];

// Reusable Image Card Component
const ImageCard = ({ src, alt, title, description }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    height: '100%' // Ensure full height for consistent alignment
  }}>
    <img 
      src={src} 
      alt={alt} 
      style={{ 
        width: '100%', 
        height: 300, // Reduced height for better side-by-side layout
        objectFit: 'cover', 
        borderRadius: 12,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }} 
    />
    <div style={{ textAlign: 'center', marginTop: 12 }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#333' }}>
        {title}
      </h3>
      <p style={{ color: '#666', fontSize: 14, lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  </div>
);

// Reusable Award Card Component
const AwardCard = ({ title, subtitle, description }) => (
  <div style={{ 
    backgroundColor: 'white', 
    borderRadius: 8, 
    padding: 24, 
    marginBottom: 16,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f0f0f0'
  }}>
    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#333' }}>
      {title}
    </h3>
    {subtitle && (
      <p style={{ color: '#d97706', fontWeight: 500, marginBottom: 8, fontSize: 14 }}>
        {subtitle}
      </p>
    )}
    <p style={{ color: '#666', fontSize: 14, lineHeight: 1.5 }}>
      {description}
    </p>
  </div>
);

// Reusable Review Card Component
const ReviewCard = ({ rating, quote, author }) => (
  <div style={{ 
    backgroundColor: 'white', 
    borderRadius: 8, 
    padding: 24, 
    marginBottom: 16,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f0f0f0'
  }}>
    <div style={{ color: '#fbbf24', marginBottom: 12, fontSize: 16 }}>
      {rating}
    </div>
    <blockquote style={{ 
      color: '#374151', 
      fontStyle: 'italic', 
      marginBottom: 16, 
      fontSize: 14,
      lineHeight: 1.6
    }}>
      "{quote}"
    </blockquote>
    <cite style={{ color: '#d97706', fontWeight: 500, fontSize: 14 }}>
      — {author}
    </cite>
  </div>
);

const GalleryPage = () => (
  <main className="gallery-page" style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
    {/* Header Section */}
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#333' }}>
        Gallery
      </h1>
      <p style={{ fontSize: 18, color: '#666', maxWidth: 600, margin: '0 auto' }}>
        Discover the ambiance, cuisine, and awards that define Café Fausse
      </p>
    </div>

    {/* Gallery Images - Side by Side Layout */}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', // Changed from 'column' to 'row' for side-by-side layout
      gap: 16, // Increased gap for side-by-side spacing
      marginBottom: 48,
      justifyContent: 'center', // Center the images horizontally
      alignItems: 'flex-start', // Align items to top
      flexWrap: 'wrap' // Allow wrapping on smaller screens
    }}>
      {galleryData.map((item) => (
        <div 
          key={item.id}
          style={{ 
            flex: '1 1 300px', // Flexible width with minimum 300px
            maxWidth: '45%', // Maximum 45% width for side-by-side with gap
            minWidth: '280px' // Minimum width for mobile responsiveness
          }}
        >
          <ImageCard {...item} />
        </div>
      ))}
    </div>

    {/* Awards & Reviews Section */}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 48 
    }}>
      {/* Awards Section */}
      <div>
        <h2 style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          marginBottom: 24, 
          color: '#333',
          textAlign: 'center'
        }}>
          Our Awards & Recognition 🏆
        </h2>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
      
      {/* Reviews Section */}
      <div>
        <h2 style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          marginBottom: 24, 
          color: '#333',
          textAlign: 'center'
        }}>
          What Our Guests Say
        </h2>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default GalleryPage;
