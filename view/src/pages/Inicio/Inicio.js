import React from 'react'
import './Inicio.css'
const Inicio = () => {

  return (
    <section className='start-section'>
      <div className='start-section-top'>
        <h2>hey, i am</h2>
        <h1>MARCOS MORAGA.</h1>
        <h4>I love making things thats make me increase the potential.</h4>
      </div>
      <div className='start-section-bottom'>
        <p>
          At present im in the last year on civil engineering in computing and informatics,
          my specialty is build and have fun with the web development.
        </p>
        <button className='start-section-action'>See my work!</button>
        <span>or</span>
        <a download className='start-section-cv' rel="noreferrer" href="http://192.168.100.3:3000/assets/CV-marcosmoraga.pdf">My CV</a>
      </div>

    </section>
  )
}

export default Inicio