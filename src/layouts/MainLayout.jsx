import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100"> {/* full height column flex container with background color */}
      <Header />
      <main className="flex-grow"> {/* takes remaining space */}
        {children}
      </main>
      <Footer /> {/* stays at the bottom due to flexbox rules */}
    </div>
  )
}

export default MainLayout

