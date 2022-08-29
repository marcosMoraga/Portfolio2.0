import React, { useState, useRef } from 'react'
import './Experiences.css'
import styled, { keyframes } from 'styled-components'

const experiences = [
  {
    id: 1,
    title: 'Analista de Procesos ECommerce',
    activities: [
      'Elaboración/Análisis de diagramas de flujo.',
      'Detección y seguimiento de problemas involucrado en ecomerce regional e internacional.',
      'Desarrollo de informes asociados a issues y actualizaciones en ecommerce regional.'
    ],
    period: {
      year: '2021',
      month: 'Ene - Mar'
    },
    company: 'Femsa'
  },
  {
    id: 2,
    title: 'Desarrollador Front-end',
    activities: [
      'Colaboración general en el desarrollo de nuevo proyecto ( Dashboard ) ',
      'Creación de servicios en Angular para optimización de notificaciones',
      'Creación de plugins para correcta visualización de gráficos en dispositivos moviles( Chartjs )',
      'Optimización de codigo javascript',
    ],

    period: {
      year: '2022',
      month: 'Feb - Jun'
    },
    company: 'AyT'
  },
  {
    id: 3,
    title: 'Desarrollo Sitio web (CMS)',
    activities: [
      'Creación y seguimiento de campaña en Google Ads.',
      'Optimización en tiempos de renderizado.',
      'Integración pasarela de pago y carrito de compras.',
    ],
    period: {
      year: '2020',
      month: 'Feb - Oct'
    },
    company: 'materia',
    rrss: 'www.instagram.com/materia.chile/'
  }
]



const Experiences = () => {
  const [experience, setExperience] = useState(experiences[0])
  const [currentMargin, setCurrentMargin] = useState(0)
  const [previousMargin, setPreviousMargin] = useState([0])

  const heightBar = useRef(null)
  const heightBarr = useRef(null)

  const movement = keyframes`
    from {
    margin-left: ${previousMargin[0]}%;
    }
    to {
    margin-left: ${currentMargin}%;
    }
`;
  const movementMediumSize = keyframes`
    from {
      margin-top: ${previousMargin[0]}px;
    }
    to {
      margin-top: ${currentMargin}px;
    }
`;
  const SteperBar = styled.div`
    width: 33.33%;
    height: 10px;
    background-color: #6398A6;
    border-radius: 15px;
    animation: ${movement} 1s linear forwards;
    
    @media only screen and (min-width: 963px) {
      height: 33.33%;
      width:10px;
      animation: ${movementMediumSize} 1s linear forwards !important;

    }
    
    `;

  const handleClick = (id) => {
    setExperience(experiences.find(experience => experience.id === id))
    switch (id) {
      case 1:
        setCurrentMargin(0)
        setPreviousMargin((prev) =>
          [currentMargin, ...prev])
        break;
      case 2:
        setCurrentMargin(window.screen.availWidth >= 963 ? heightBar.current.offsetHeight / 3 : 33.3333)
        setPreviousMargin((prev) =>
          [currentMargin, ...prev])
        break;
      case 3:
        setCurrentMargin(window.screen.availWidth >= 963 ? heightBar.current.offsetHeight - heightBarr.current.offsetHeight : 67)
        setPreviousMargin((prev) =>
          [currentMargin, ...prev])
        break;
      default:
        break;
    }
  }

  return (
    <section className='experiences-section'>
      <div className='experiences-container'>
        <div className='experiences-atributtes-container'>
          <div className='experiences-atributtes'>
            <h2>{experience.title}</h2>
            {experience.activities.map((activity, index) => (
              <div key={index} className='card-item'>
                <div className='card-circle'></div>
                <p>
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='experiences-info-container'>
          <div className='experiences-info'>
            <h3>{experience.period.year}</h3>
            <h3>{experience.period.month}</h3>
            <a rel='noreferrer' target='_blank' href={experience.company}>{experience.company}</a>
          </div>
        </div>
        <aside className='experiences-btns'>
          <div className='steper-actions'>
            <button onClick={() => handleClick(1)}>Socofar</button>
            <button onClick={() => handleClick(2)}>AyT</button>
            <button onClick={() => handleClick(3)}>Materia</button>
          </div>
          <div ref={heightBar} className='stepper-bar-container'>
            <SteperBar ref={heightBarr} />
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Experiences