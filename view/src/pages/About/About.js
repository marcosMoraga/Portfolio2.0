import React from 'react'
import './About.css'

const About = () => {

  return (
    <section className='about-section'>
      <div className='about-section-top'>
        <h2>QUIÉN SOY ?</h2>
      </div>
      <div className='about-section-middle'>
        <p>
          <span>
            Mi nombre es marcos moraga.
            Soy desarrollador, apasionado por el desarrollo y la innovación, activo y motivado por los nuevos desafíos que pueda encontrar
            en el campo profesional.
          </span>
          <span>
            He tenido el privilegio de trabajar en <a href='https://www.femsa.com/es/' target='_blank' rel="noreferrer">Socofar</a>, <a href='https://www.ayt.cl/' target='_blank' rel="noreferrer">AyT</a> e independiente.
            Hoy busco nuevos retos en los que pueda colaborar con creatividad, ganas de aprender, trabajo en equipo y mucho más.
          </span>
        </p>
      </div>
      <div className='about-section-bottom'>
        <div className='about-section-bottom-column-1'>
          <p>
            Algunas tecnologías
            con las que he trabajado recientemente
          </p>
        </div>
        <div className='about-section-bottom-column-2'>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>NodeJs</li>
            <li>Angular</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About