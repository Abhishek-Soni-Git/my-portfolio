//import { useState } from 'react'
import Header from './componenets/header/Header'
import Footer from'./componenets/footer/Footer'
import About from './componenets/about/About'
import Contact from './componenets/contact/Contact'
import Nav from './componenets/nav/Nav'
import Experience from './componenets/nav/Experience'
import Service from './componenets/services/Service'
import Portfolio from './componenets/portfolio/Portfolio'
import Testimonials from './componenets/testimonials/Testimonials'



function App() {

  return (
    <>
      <Header/>
      <Footer />
      <About />
      <Contact />
      <Nav />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
    </>
  )
}

export default App
