// import React from 'react'
import './project.css'
import HM from '../../assets/hp.png';
import re from '../../assets/recipe.png';
import em from '../../assets/email.png';
export default function Project() {
  return (
    <section id='project' >
      <h5>Let's Know About</h5>
      <h2>My Projects</h2>
      <div className='project_container'>
        <div className='project'>
          <img className='image_pro' src={HM} alt="" />
          <h2 className='project-head'>Online Hotel Room Booking</h2>
          <p className='para'><b>Technologies:</b>Java, Jwt, JDBC, SQL</p>
          <p className='para'>Online Hotel Management System,developed using Java,One of its standout features is the "Best Available Room" functionality, which ensures guests always find the perfect room for their stay. Additionally, our system includes a driver service feature, offering seamless transportation options for guests. The friendly reception interface guarantees that hotel staff can manage check-ins and guest inquiries efficiently, providing exceptional service. With a focus on affordability, this system is built to offer the best services at the minimum price, ensuring maximum value for both the hotel and its guests</p>

        </div>
        <div className='project'>
          <img className='image_pro1' src={re} alt="" />
          <h2 className='project-head'>Food Recipe Website</h2>
          <p className='para'><b>Technologies:</b>React.js, Node.js, Express.js, Mongodb</p>

          <p className='para'>Explore our food recipe website, where culinary creativity meets convenience. Discover a diverse collection of mouthwatering recipes ranging from quick weeknight meals to gourmet delights. Whether you're a novice in the kitchen or a seasoned chef, our site offers step-by-step instructions, expert tips, and a variety of cuisines to satisfy every palate. Join our community of food enthusiasts and embark on a flavorful journey with us</p>

        </div>
        <div className='project'>
          <img className='image_pro1' src={em} alt="" />
          <h2 className='project-head'>Email Builder System</h2>
          <p className='para'><b>Technologies:</b>React.js, Mongodb</p>

          <p className='para'>An email builder is a tool that allows you to create professional and visually appealing emails effortlessly. With an email builder, you can design newsletters, marketing campaigns, or personal messages without needing extensive technical knowledge. These tools often provide customizable templates, drag-and-drop functionality for easy layout adjustments, and options for adding images, text, buttons, and more. They help streamline the process of crafting engaging emails that resonate with your audience, making email marketing campaigns more effective and efficient.</p>

        </div>
      </div>

    </section>
  )
}

