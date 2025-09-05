import React from 'react';

// About page data
const aboutData = {
  hero: {
    title: "About Café Fausse",
    subtitle: "Discover the story behind Washington DC's premier Italian dining experience"
  },
  sections: [
    {
      title: "Our History",
      content: "Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.",
      icon: "🍽️"
    },
    {
      title: "Our Commitment", 
      content: "We are dedicated to unforgettable dining, excellent food, and the use of fresh, locally sourced ingredients in every dish. Every meal is crafted with passion and attention to detail.",
      icon: "🌱"
    },
    {
      title: "Our Values",
      content: "Authenticity, quality, and hospitality are the cornerstones of our restaurant. We believe in creating memorable experiences that bring people together through exceptional food and warm service.",
      icon: "❤️"
    }
  ],
  founders: [
    {
      name: "Chef Antonio Rossi",
      role: "Executive Chef & Co-Founder",
      bio: "Chef Antonio Rossi founded Café Fausse in 2010, bringing decades of experience in traditional Italian cuisine and a passion for innovative culinary experiences.",
      specialties: ["Traditional Italian Cuisine", "Culinary Innovation", "Menu Development"]
    },
    {
      name: "Maria Lopez", 
      role: "Restaurateur & Co-Founder",
      bio: "Restaurateur Maria Lopez co-founded Café Fausse, championing excellent food and creating a warm, unforgettable dining ambiance through locally sourced ingredients.",
      specialties: ["Restaurant Operations", "Local Sourcing", "Guest Experience"]
    }
  ]
};

// Reusable Section Component
const AboutSection = ({ title, content, icon, children }) => (
  <div style={{ 
    display: 'flex', 
    gap: 48, 
    marginBottom: 64,
    alignItems: 'flex-start'
  }}>
    {/* Text Section */}
    <div style={{ 
      flex: '0 0 300px',
      padding: '24px 0'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: 16 
      }}>
        <span style={{ fontSize: 32, marginRight: 12 }}>{icon}</span>
        <h2 style={{ 
          fontSize: 28, 
          fontWeight: 600, 
          color: '#6E181E', 
          margin: 0 
        }}>
          {title}
        </h2>
      </div>
    </div>
    
    {/* Content Section */}
    <div style={{ flex: 1 }}>
      <p style={{ 
        color: '#374151', 
        fontSize: 16, 
        lineHeight: 1.8, 
        marginBottom: 24 
      }}>
        {content}
      </p>
      {children}
    </div>
  </div>
);

// Founder Card Component
const FounderCard = ({ name, role, bio, specialties }) => (
  <div style={{ 
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f3f4f6',
    marginBottom: 24
  }}>
    <h3 style={{ 
      fontSize: 24, 
      fontWeight: 600, 
      color: '#6E181E', 
      marginBottom: 8 
    }}>
      {name}
    </h3>
    <p style={{ 
      color: '#d97706', 
      fontSize: 16, 
      fontWeight: 500, 
      marginBottom: 16 
    }}>
      {role}
    </p>
    <p style={{ 
      color: '#374151', 
      fontSize: 16, 
      lineHeight: 1.6, 
      marginBottom: 20 
    }}>
      {bio}
    </p>
    <div>
      <h4 style={{ 
        fontSize: 14, 
        fontWeight: 600, 
        color: '#6b7280', 
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        Specialties
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {specialties.map((specialty, index) => (
          <span 
            key={index}
            style={{
              backgroundColor: '#fef3c7',
              color: '#92400e',
              padding: '4px 12px',
              borderRadius: 16,
              fontSize: 14,
              fontWeight: 500
            }}
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  </div>
);


const AboutPage = () => (
  <main className="about-page" style={{ maxWidth: 1000, margin: '0 auto', padding: 32 }}>
    {/* Page Header */}
    <div style={{ textAlign: 'center', marginBottom: 64 }}>
      <h1 style={{ 
        fontSize: 48, 
        fontWeight: 700, 
        marginBottom: 16, 
        color: '#6E181E' 
      }}>
        {aboutData.hero.title}
      </h1>
      <p style={{ 
        fontSize: 18, 
        color: '#6b7280', 
        maxWidth: 600, 
        margin: '0 auto',
        lineHeight: 1.6
      }}>
        {aboutData.hero.subtitle}
      </p>
    </div>

    {/* About Sections */}
    <div style={{ marginBottom: 64 }}>
      {aboutData.sections.map((section, index) => (
        <AboutSection 
          key={index}
          title={section.title}
          content={section.content}
          icon={section.icon}
        />
      ))}
    </div>

    {/* Founders Section */}
    <div style={{ 
      display: 'flex', 
      gap: 48, 
      marginBottom: 64,
      alignItems: 'flex-start'
    }}>
      {/* Text Section */}
      <div style={{ 
        flex: '0 0 300px',
        padding: '24px 0'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 16 
        }}>
          <span style={{ fontSize: 32, marginRight: 12 }}>👥</span>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 600, 
            color: '#6E181E', 
            margin: 0 
          }}>
            Meet Our Founders
          </h2>
        </div>
        <p style={{ 
          color: '#6b7280', 
          fontSize: 16, 
          lineHeight: 1.6 
        }}>
          The passionate team behind Café Fausse's success
        </p>
      </div>
      
      {/* Founders Cards */}
      <div style={{ flex: 1 }}>
        {aboutData.founders.map((founder, index) => (
          <FounderCard key={index} {...founder} />
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div style={{ 
      textAlign: 'center', 
      backgroundColor: '#fef7e4', 
      borderRadius: 16, 
      padding: 48 
    }}>
      <h3 style={{ 
        fontSize: 28, 
        fontWeight: 600, 
        color: '#6E181E', 
        marginBottom: 16 
      }}>
        Ready to Experience Our Story?
      </h3>
      <p style={{ 
        color: '#6b7280', 
        fontSize: 16, 
        marginBottom: 24,
        maxWidth: 500,
        margin: '0 auto 24px'
      }}>
        Join us for an unforgettable dining experience that celebrates tradition, innovation, and the joy of great food.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <a 
          href="/menu" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#6E181E',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#5a1419';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#6E181E';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          View Menu
        </a>
        <a 
          href="/reservations" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#6E181E',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
            border: '2px solid #6E181E',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#6E181E';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#6E181E';
          }}
        >
          Make Reservation
        </a>
      </div>
    </div>
  </main>
);

export default AboutPage;
