import React from 'react'
import './Inicio.css'
import { Link } from 'react-router-dom'
const Inicio = () => {

  return (
    <section className='start-section'>
      <div className='start-section-top'>
        <h2>hola, soy</h2>
        <h1>MARCOS MORAGA.</h1>
        <h4>Me encanta hacer cosas que me hagan aumentar el potencial.</h4>
      </div>
      <div className='start-section-bottom'>
        <p>
          Actualmente estoy en el último año en ingeniería civil en computación e informática,
          mi especialidad es construir y divertirme con el desarrollo web.
        </p>
        <Link to='/work' className='start-section-action'>ve mi trabajo!</Link>
        <span>o</span>
        <a download className='start-section-cv' rel="noreferrer" href="https://marcosmoraga.netlify.app/assets/CV-marcosmoraga.pdf">Mi CV</a>
      </div>

    </section>
  )
}

export default Inicio