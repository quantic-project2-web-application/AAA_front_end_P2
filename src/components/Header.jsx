import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

// Header data
const headerData = {
  logo: {
    src: logo,
    alt: "Café Fausse Logo"
  },
  navigation: [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/reservations", label: "Reservations" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" }
  ]
}

// Mobile Menu Button Component
const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: 30,
      height: 30,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      zIndex: 10
    }}
    aria-label="Toggle mobile menu"
  >
    <span style={{
      width: '100%',
      height: 3,
      background: isOpen ? '#fbbf24' : '#f6f5f3',
      transition: 'all 0.3s linear',
      transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
    }} />
    <span style={{
      width: '100%',
      height: 3,
      background: isOpen ? 'transparent' : '#f6f5f3',
      transition: 'all 0.3s linear',
      opacity: isOpen ? 0 : 1
    }} />
    <span style={{
      width: '100%',
      height: 3,
      background: isOpen ? '#fbbf24' : '#f6f5f3',
      transition: 'all 0.3s linear',
      transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
    }} />
  </button>
)

// Navigation Links Component
const NavigationLinks = ({ links, isMobile, isOpen }) => (
  <nav style={{
    display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? 24 : 16,
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '100%' : 'auto',
    left: isMobile ? 0 : 'auto',
    right: isMobile ? 0 : 'auto',
    backgroundColor: isMobile ? 'rgb(110, 24, 30)' : 'transparent',
    padding: isMobile ? '24px 16px' : 0,
    boxShadow: isMobile ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: 5,
    width: isMobile ? '100%' : 'auto'
  }}>
    {links.map((link, index) => (
      <Link
        key={index}
        to={link.to}
        style={{
          textDecoration: 'none',
          color: '#f6f5f3',
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontSize: isMobile ? '1.25rem' : '1.125rem',
          padding: isMobile ? '12px 0' : '8px 16px',
          transition: 'color 0.2s ease',
          textAlign: isMobile ? 'center' : 'left',
          width: isMobile ? '100%' : 'auto',
          borderBottom: isMobile ? '1px solid rgba(246, 245, 243, 0.1)' : 'none'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#fbbf24'
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#f6f5f3'
        }}
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header style={{
      position: 'relative',
      backgroundColor: 'rgb(110, 24, 30)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 10
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{ flex: '0 0 auto' }}>
          <img 
            src={headerData.logo.src} 
            alt={headerData.logo.alt} 
            style={{
              height: '180px', // Increased from 120px to 180px (50% bigger again)
              width: 'auto',
              transition: 'height 0.3s ease'
            }}
            className="sm:h-48 md:h-56 lg:h-64" // Updated responsive classes for 50% bigger again
          />
        </div>

        {/* Desktop Navigation - Always visible on desktop */}
        <div className="hidden md:block">
          <NavigationLinks 
            links={headerData.navigation} 
            isMobile={false} 
            isOpen={false} 
          />
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="block md:hidden">
          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />
        </div>
      </div>

      {/* Mobile Navigation - Only visible on mobile */}
      <div className="block md:hidden">
        <NavigationLinks 
          links={headerData.navigation} 
          isMobile={true} 
          isOpen={isMobileMenuOpen} 
        />
      </div>
    </header>
  )
}

export default Header
