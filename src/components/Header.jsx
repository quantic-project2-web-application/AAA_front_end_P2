import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'


function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Café Fausse Logo" className="logo" />
        <h1 className="site-title">Café Fausse</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
