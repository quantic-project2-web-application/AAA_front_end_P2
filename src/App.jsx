import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home'
import MenuPage from './pages/Menu.jsx'
import ReservationsPage from './pages/Reservations'
import AboutPage from './pages/About'
import GalleryPage from './pages/Gallery'


function App() {
  return (
    // BrowserRouter and paths
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  )
}

export default App

