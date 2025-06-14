import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Courses from './component/Courses'
import AboutUs from './component/AboutUs'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App