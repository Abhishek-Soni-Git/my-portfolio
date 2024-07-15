// import React from 'react'
import './project.css'
import HM from '../../assets/hp.png';
export default function Project() {
  return (
    <section id='project' >
      <h5>Let's Know About</h5>
      <h2>My Projects</h2>
      <div className='project_container'>
        <div className='project'>
          <img className='image_pro' src={HM} alt="" />
          <h2 className='project-head'>Online Hotel Room Booking</h2>
          
      
          <p className='para'>Online Hotel Management System,developed using Java,One of its standout features is the "Best Available Room" functionality, which ensures guests always find the perfect room for their stay. Additionally, our system includes a driver service feature, offering seamless transportation options for guests. The friendly reception interface guarantees that hotel staff can manage check-ins and guest inquiries efficiently, providing exceptional service. With a focus on affordability, this system is built to offer the best services at the minimum price, ensuring maximum value for both the hotel and its guests</p>

          </div>
      </div>
      
     

    </section>
  )
}

