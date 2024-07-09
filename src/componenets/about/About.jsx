// import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { LuUsers2 } from 'react-icons/lu'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <h2>EDUCATION:</h2>
      

      <div className='container about_container'>
        
        <div className='about_content'>
          <div className='edu-main'>
          <div className='edu'>
          <h2>JECRC UNIVERSITY</h2>
          <h2>MCA - cloud computing(AWS)</h2>
          <h2>Aug 2023 - *</h2>
        </div>
        <div className='edu'>
          <h2>RAJASTHAN UNIVERSITY</h2>
          <h2>BCA</h2>
          <h3>Sri Balaji College,Jaipur</h3>
          <h2>Aug 2020 - May 2023</h2>
          <h3>Grade - 72.00%</h3>
        </div>

          </div>
        
        <p>
            I am a software developer (front-end developer and back-end developer).Focused on
            crafting clean and user-friendly experiences,I am passionate about building 
            excellent software that improve the lives of those around me.  
          </p>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>0 year working</small>
            
            </article>

            <article className='about_card'>
              <LuUsers2 className='about_icon'/>
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            
            </article>

            <article className='about_card'>
              <VscFolderLibrary  className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            
            </article>


          </div>
    

        </div>

      </div>
    </section>
    
  )
}
