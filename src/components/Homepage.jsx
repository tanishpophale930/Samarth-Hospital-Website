import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      
      <main className=''>
        <div id="home">
          <Home />
        </div>

        <div className='mt-20 md:mt-20 lg:mt-2' id="about">
          <About />
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Homepage
