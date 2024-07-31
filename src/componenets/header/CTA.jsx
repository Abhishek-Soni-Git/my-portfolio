//import React from 'react'
import CV from '../../assets/cv.pdf'
export default function CTA () {
  return (
    <div className='cta'>
        <a href={CV} download={true} className='btn'>Resume</a>
        <a href="#contact" className="btn btn-primary">Let's Connect</a>

    </div>
  )
}

