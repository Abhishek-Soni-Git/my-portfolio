// import React from 'react'
// import { LuBadgeCheck } from 'react-icons/lu'
import './skill.css'
import h from '../../assets/Html.png'
import css from '../../assets/Css.png'
import js from '../../assets/javascript.png'
import React from '../../assets/react.png'
import c from '../../assets/C.png'
import df from '../../assets/C++.png'
import java from '../../assets/Java.jpeg'
import nodejs from '../../assets/Node.jfif'
import tail from '../../assets/tailwindcss.webp'
import py from '../../assets/python.png'
import aws from '../../assets/AWS.jpg'
import tra from '../../assets/Trraform.png'
import git from '../../assets/Git.png'
import gi from '../../assets/github.jpg'
import Mongodb from '../../assets/mongodb.png'
import red from '../../assets/redhat linux.jpeg'
import my from '../../assets/mysql.png'


export default function Skill() {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container skill_container'>
        {/* Frontend Development */}
        <div className='skill_frontend'>
          <h3>Frontend Development</h3>
          <div className='skill_content'>
           <img className='skill_details' src={h} alt=""/><h4>HTML</h4>
           <img className='skill_details' src={css} alt=""/><h4>CSS</h4>
           <img className='skill_details' src={js} alt=""/><h4>JavaScript</h4>
           <img className='skill_details' src={tail} alt=""/><h4>Tailwind CSS</h4>
           <img className='skill_details' src={React} alt=""/> <h4>ReactJS</h4>
          </div>
        </div>
        
        {/* Backend Development */}
        <div className='skill_backend'>
          <h3 className='name'>Backend Development</h3>
          <div className='skill_content'>
          <img className='skill_details' src={c} alt=""/><h4>C</h4>
          <img className='skill_details' src={df} alt=""/><h4>C++</h4>
          <img className='skill_details' src={java} alt=""/><h4>Java</h4>
          <img className='skill_details' src={py} alt=""/><h4>Python</h4>
            <img className='skill_details' src={Mongodb} alt=""/><h4>MongoDB</h4>
            <img className='skill_details' src={my} alt=""/><h4>MySQL</h4>
            <img className='skill_details' src={nodejs} alt=""/><h4>Node.js</h4>
          </div>
        </div>
        
        {/* DevOps & Cloud */}
        <div className='skill_devops'>
          <h3 className='name'>DevOps & Cloud</h3>
          <div className='skill_content'>
          <img className='skill_details' src={aws} alt=""/><h4>AWS</h4>
          <img className='skill_details' src={tra} alt=""/><h4>Terraform</h4>
          <img className='skill_details' src={c} alt=""/><h4>Jenkins</h4>
          <img className='skill_details' src={git} alt=""/><h4>Git</h4>
          <img className='skill_details' src={gi} alt=""/><h4>GitHub</h4>
          <img className='skill_details' src={red} alt=""/><h4>RedHat Linux</h4>
          </div>
        </div>
      </div>
    </section>
  )
}