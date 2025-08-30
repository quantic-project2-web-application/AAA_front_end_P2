import React from 'react'
import logo from '../assets/logo.webp'

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          
          <span className="block text-amber-600 mt-2">Welcome to Café Fausse</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Where authentic flavors meet modern elegance. 
          Experience the finest coffee and cuisine in a warm, inviting atmosphere.
        </p>
      </div>
    </div>
  )
}

export default HomePage
