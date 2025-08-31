import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <div className="footer-item">1234 Culinary Ave, Washington, DC 20002</div>
        <div className="footer-separator">•</div>
        <div className="footer-item">Phone: (202) 555-4567</div>
        <div className="footer-separator">•</div>
        <div className="footer-item">&copy; 2025 Café Fausse. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer