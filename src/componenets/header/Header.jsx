import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

export default function Header() {
  // Yahan console.log likhte hain — component ke andar, JSX se pehle
  console.log(import.meta.env.VITE_APP_NAME)
  console.log(import.meta.env.VITE_APP_ENV)

  return (
    <section className="container header_container">
      <h5 className='intro'>Hello i am</h5>
      <h1>Abhishek soni</h1>
      <h5 className="profesion">Devops Engineer</h5>
      <CTA />
      <div className='pi-container'>
         <img id='pi' src={ME} alt=""/>
      </div>
      <a href="#about" className='scroll_down'>Scroll Down</a>
    </section>
  )
}