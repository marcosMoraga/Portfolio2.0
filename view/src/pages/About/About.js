import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className='about-section'>
      <div className='about-section-top'>
        <h2>WHO AM I ?</h2>
      </div>
      <div className='about-section-middle'>
        <p>
          <span>
            My name is <h1> Marcos Moraga </h1>
            im developer, passionate about development and innovation, active and motivated by the new challenges he may encounter
            in the professional field.
          </span>
          <span>
            I've had the privilege of working at <a href='https://www.femsa.com/es/' target='_blank' rel="noreferrer">Socofar</a>, <a href='https://www.ayt.cl/' target='_blank' rel="noreferrer">AyT</a> and independently.
            Today i am looking for new challenges that i can colaborate with proactivity, desire to learn, teamwork and much more.
          </span>
        </p>
      </div>
      <div className='about-section-bottom'>
        <div className='about-section-bottom-column-1'>
          <p>
            Some technologies
            i was working
            recently
          </p>
        </div>
        <div className='about-section-bottom-column-2'>
          <ul>
            <option>Javascript</option>
            <option>Typescript</option>
            <option>NodeJs</option>
            <option>Angular</option>
            <option>React</option>
            <option>MongoDB</option>
            <option>MySQL</option>
            <option>Postman</option>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About