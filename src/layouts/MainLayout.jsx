import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header will be sticky at the top */}
      <Header />
      
      {/* Main content area - this is where your pages will render */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

export default MainLayout