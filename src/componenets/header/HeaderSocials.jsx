// import React from 'react'

import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className='header_socials'>
       <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
       <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
       <a href="https://github.com" target="_blank"><FaGithub/></a>
       <a href="https://whatsapp.com" target="_blank"><FaWhatsapp/></a>
    </div>
  )
}

