import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {

  return (
    <section className='contact-section'>
      <h2>CONTÁCTAME !</h2>
      <p>Si necesitas más información sobre mi experiencia laboral o quizás mis hobbies, podemos coordinar una reunión!</p>
      <div className='contact-section-action'>
        <a href='https://www.linkedin.com/in/marcos-moraga-hermosilla' target='_blank' rel='noreferrer'><AiFillLinkedin className='contact-icon' /></a>
        <a href="mailto:moraga.dev@gmail.com" target='_blank' rel='noreferrer'><AiOutlineMail className='contact-icon' /></a>
      </div>
    </section>
  )
}

export default Contact