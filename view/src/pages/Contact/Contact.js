import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {

  return (
    <section className='contact-section'>
      <h2>GET IN TOUCH</h2>
      <p>If you need more information about my experience or maybe my hobbies, we can coordinate a meeting !</p>
      <div className='contact-section-action'>
        <a href='https://www.linkedin.com/in/marcos-moraga-hermosilla' target='_blank' rel='noreferrer'><AiFillLinkedin className='contact-icon' /></a>
        <a href="mailto:moraga.dev@gmail.com" target='_blank' rel='noreferrer'><AiOutlineMail className='contact-icon' /></a>
      </div>
      {/* <form>
        <input onClick={() => console.log('active')} type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <textarea name='message' placeholder='Message' />
        <button onClick={onSubmit} type='submit'>Send</button>
      </form> */}
    </section>
  )
}

export default Contact