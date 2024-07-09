// import React from 'react'
import './nav.css'
import { FaAddressBook, FaHome, FaRegUser } from 'react-icons/fa'
import { IoIosContact } from 'react-icons/io'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useState } from 'react'
export default function Nav() {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FaHome/></a> 
      <a href="#about"onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href="#skill"onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><FaAddressBook/></a>
      <a href="#project"onClick={() => setActiveNav('#service')}className={activeNav === '#service' ? 'active' : ''}><RiCustomerService2Line/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
  )
}
