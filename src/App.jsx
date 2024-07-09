//import { useState } from 'react'
import Header from './componenets/header/Header'
import Nav from './componenets/nav/Nav'
import About from './componenets/about/About'
import Skill from './componenets/Skills/skill'
import Project from './componenets/projects/Project'
import Contact from './componenets/contact/Contact'
import Footer from'./componenets/footer/Footer'



function App() {

  return (
    <>
      <Header/>
      <div className='nav-bar'>
        <Nav />
      </div>
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
