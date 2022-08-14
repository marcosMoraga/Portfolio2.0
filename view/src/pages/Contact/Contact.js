import React from 'react'
import './Contact.css'

const Contact = () => {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='contact-section'>
      <h2>GET IN TOUCH</h2>
      <p>If you need more information about my experience or maybe my hobbies, we can coordinate a meeting</p>
      <form>
        <input onClick={() => console.log('active')} type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <textarea name='message' placeholder='Message' />
        <button onClick={onSubmit} type='submit'>Send</button>
      </form>
    </section>
  )
}

export default Contact