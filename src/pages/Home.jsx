import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/home-cafe-fausse.webp";
import axios from "axios";

// Home page data
const homeData = {
  hero: {
    title: "Welcome to Café Fausse",
    subtitle:
      "Experience authentic Italian flavors blended with a modern atmosphere in the heart of Washington, DC.",
  },
  buttons: [
    {
      text: "View Menu",
      to: "/menu",
    },
    {
      text: "Make Reservation",
      to: "/reservations",
    },
  ],
  image: {
    src: homeImage,
    alt: "Café Fausse Ambiance",
    title: "Elegant Dining Experience",
    description: "Discover our warm and inviting atmosphere",
  },
  newsletter: {
    title: "Stay Updated",
    subtitle:
      "Subscribe to our newsletter for special offers, new menu items, and exclusive events",
    placeholder: "Enter your email address",
  },
  contactInfo: {
    address: "1234 Culinary Ave, Suite 100, Washington, DC 20002",
    phone: "(202) 555-4567",
    hours: "Monday–Saturday: 5:00PM – 11:00 PM; Sunday: 5:00 PM – 9:00 PM",
  },
};

// Reusable Button Component
const ActionButton = ({ text, to }) => (
  <Link
    to={to}
    style={{
      display: "inline-block",
      padding: "16px 32px",
      backgroundColor: "white",
      color: "#6E181E",
      textDecoration: "none",
      borderRadius: 12,
      fontWeight: 700,
      fontSize: 18,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      border: "2px solid #6E181E",
      transition: "all 0.3s ease",
      textAlign: "center",
      minWidth: 200,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#6E181E";
      e.target.style.color = "white";
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#6E181E";
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
    }}
  >
    {text}
  </Link>
);

// Reusable Image Card Component
const ImageCard = ({ src, alt, title, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: 1000,
      margin: "0 auto",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: 300,
        objectFit: "cover",
        borderRadius: 12,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: 16,
      }}
    />
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ 
        fontSize: 28, 
        fontWeight: 600, 
        marginBottom: 8, 
        color: '#6E181E' 
      }}>
        {title}
      </h3>
      <p style={{ 
        color: '#666', 
        fontSize: 20, 
        lineHeight: 1.5 
      }}>
        {description}
      </p>
    </div>
  </div>
);

// Newsletter Form Component
const NewsletterForm = ({
  data,
  email,
  setEmail,
  error,
  handleSubmit,
  isSubmitted,
}) => (
  <div
    style={{
      backgroundColor: "#f8f9fa",
      padding: 40,
      borderRadius: 12,
      textAlign: "center",
      marginBottom: 48,
    }}
  >
    <h2
      style={{
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 12,
        color: "#6E181E",
      }}
    >
      {data.title}
    </h2>
    <p style={{
      fontSize: 20,
      color: '#666',
      marginBottom: 32,
      maxWidth: 500,
      margin: '0 auto 32px auto',
      lineHeight: 1.5
    }}>
      {data.subtitle}
    </p>

    {isSubmitted ? (
      <div
        style={{
          padding: 20,
          backgroundColor: "#d4edda",
          color: "#155724",
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Thank you for subscribing! You'll receive our latest updates soon.
      </div>
    ) : (
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={data.placeholder}
            className="input-field"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6E181E";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#ddd";
            }}
          />
          {error && (
            <div
              className="error-message"
              style={{
                marginTop: 8,
                color: "#dc3545",
                fontSize: 14,
                textAlign: "left",
              }}
            >
              {error}
            </div>
          )}
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 24px",
            backgroundColor: "#6E181E",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#5a1419";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6E181E";
          }}
        >
          Subscribe Now
        </button>
      </form>
    )}
  </div>
);

const HomePage = () => {
  // Newsletter form state
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Newsletter form validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Newsletter form submission
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!email.trim()) {
    setError("Email is required");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/newsletter-signups/`,
      { email: email }
    );
    if (resp.status === 201) {
      setIsSubmitted(true);
      setEmail("");
    } else {
      setError("Subscription failed. Please try again.");
    }
  } catch (err) {
    setError("Subscription failed. Please try again.", err);
  }
};

  return (
    <main
      className="home-page"
      style={{ maxWidth: 1000, margin: "0 auto", padding: 32 }}
    >
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 16,
            color: "#6E181E",
          }}
        >
          {homeData.hero.title}
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "#666",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {homeData.hero.subtitle}
        </p>
      </div>

      {/* Contact Information Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: 48,
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              fontSize: 16,
              color: "#6E181E",
              fontWeight: 700,
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Address
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#374151",
              fontWeight: 400,
              marginBottom: 0,
            }}
          >
            {homeData.contactInfo.address}
          </p>
        </div>
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              fontSize: 16,
              color: "#6E181E",
              fontWeight: 700,
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Phone Number
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#374151",
              fontWeight: 400,
              marginBottom: 0,
            }}
          >
            {homeData.contactInfo.phone}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 16,
              color: "#6E181E",
              fontWeight: 700,
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Hours
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#374151",
              fontWeight: 400,
              marginBottom: 0,
            }}
          >
            {homeData.contactInfo.hours}
          </p>
        </div>
      </div>

      {/* Action Buttons - Centered Side-by-Side Layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          marginBottom: 48,
          flexWrap: "wrap",
        }}
      >
        {homeData.buttons.map((button, index) => (
          <ActionButton key={index} text={button.text} to={button.to} />
        ))}
      </div>

      {/* Image Section */}
      <div style={{ marginBottom: 48 }}>
        <ImageCard {...homeData.image} />
      </div>

      {/* Newsletter Signup Section */}
      <NewsletterForm
        data={homeData.newsletter}
        email={email}
        setEmail={setEmail}
        error={error}
        handleSubmit={handleNewsletterSubmit}
        isSubmitted={isSubmitted}
      />
    </main>
  );
};

export default HomePage;
