import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* full height column flex container */}
      <Header />
      <main className="flex-grow"> {/* takes remaining space */}
        {children}
      </main>
      <Footer /> {/* stays at the bottom due to flexbox rules */}
    </div>
  )
}

export default MainLayout

