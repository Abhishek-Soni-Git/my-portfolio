// import React from 'react'
import './contact.css'
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  return (
    <section  id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
      <div className="contact_option">
        <a href="mailto:soniabhishek4567@gamil.com" className="contact_options" target="_blank"><AiTwotoneMail size={35}/><span>Email</span></a>
        <a href="https://wa.me/916376588502" className="contact_options" target="_blank"><FaWhatsapp size={35}/><span>Whatsapp</span></a>
        <a href="https://www.facebook.com/profile.php?id=100025202867884" className="contact_options"target="_blank"> <FaFacebook size={35}/><span>FaceBook</span></a>
        <a href="https://github.com/soni292"className="contact_options" target='_blank'> <FaGithub size={35}/><span>GitHub</span></a>      
        <a href="https://leetcode.com/u/soniabhishek4567/" className="contact_options" target='_blank'> <SiLeetcode size={35}/> <span>Leetcode</span></a>
        <a href="https://www.linkedin.com/in/abhishek-soni-0945611a5/" className="contact_options" target='_blank'> <FaLinkedin size={35}/> <span>Linkedin</span></a>

      </div>

      </div>
 
      

    </section>
  )
}
