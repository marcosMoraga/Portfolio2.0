import React from 'react'
import './Inicio.css'
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
        <button className='start-section-action'>See my work!</button>
        <span>or</span>
        <a download className='start-section-cv' rel="noreferrer" href="http://192.168.100.3:3000/assets/CV-marcosmoraga.pdf">My CV</a>
      </div>

    </section>
  )
}

export default Inicio