// import React from 'react'
import { LuBadgeCheck } from 'react-icons/lu'
import './skill.css'

export default function skill() {
  return (
    <section id='skill' >
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container skill_container'>
        <div className='skill_frontend'>
          <h3>Frontend Development</h3>
          <div className='skill_content'>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>HTML</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>CSS</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>JAVASCRIPT</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>REACT</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>REACT NATIVE</h4>
                <small className='text_light'></small>
            </article>
          </div>

        </div>
        <div className='skill_backend'>
        <h3>Backend Development</h3>
        <div className='skill_content'>
        
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>C LANGUAGE</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>C++</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>JAVA</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>PYTHON</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>MongoDB</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>NODE.JS</h4>
                <small className='text_light'></small>
            </article>
            <article className='skill_details'>
                <LuBadgeCheck/>
                <h4>MySQL</h4>
                <small className='text_light'></small>
            </article>
          </div>


        </div>

      </div>
    </section>
  )
}
