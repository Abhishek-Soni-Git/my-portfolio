//import React from 'react'
import './header.css'
import CTA from './CTA'

export default function Header() {
  return (
    <div className= "container header_container">
      <h5>Hello i am</h5>
      <h1>Abhishek soni</h1>
      <h5 className="text-light">Fresher</h5>
      <CTA />
    </div>
  )
}