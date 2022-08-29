import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import './Work.css'

const proyects = [
  {
    name: "mytinerary",
    url: "https://mytinerary-moraga.netlify.app/",
    git: "https://github.com/marcosMoraga/mytinerary",
    description: [
      {
        name: 'ROL',
        value: "Este proyecto se caracteriza por su desarrollo individual (full stack), atendiendo al patrón de diseño MVC."
      },
      {
        name: 'DIFICULTADES',
        value: "En este proyecto lo mas complejo se evidencio a la hora de utilizar estados en los que se necesitaban en mas de un componente."
      },
      {
        name: 'SOLUCIÓN',
        value: "Una de las soluciones mas acertadas fue el uso de Redux, aplicando el middleware 'thunk' para procesar datos asincronanicamente "
      },
      {
        name: 'TECNOLOGÍAS',
        value: [
          "React",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "Mongodb",
          "JOI",
          "Passport",
          "JWT",
          "Mongoose",
          "Google OAuth",
          "Git",
          "Postman",
        ],
      },
      {
        name: 'FUNCIONES',
        value: [
          "Login",
          "Registro de usuarios",
          "Likes",
          "Comentarios",
          "Validador - formulario de registro",
        ]
      }
    ],
    img: "/assets/img/proyect-3.jpg",
  },
  {
    name: "broke & fix",
    git: "https://github.com/marcosMoraga/brokenfix",
    description: [
      {
        name: 'ROL',
        value: "En broke & fix tome el rol de product owner y fui lider en el equipo backend, logrando un producto minimo viable"
      },
      {
        name: 'DIFICULTADES',
        value: "En un comienzo se vio afectado por la poca o nula comunicación entre los equipos de desarrollos (backend - frontend)"
      },
      {
        name: 'SOLUCIÓN',
        value: "Se establece seguir al pie de la letra la metodologia scrum, donde diariamente en no mas de 15 min, se menciona el estado actual de tareas en desarrollo, futuras tareas por realizar y posibles bloqueos "
      },
      {
        name: 'TECNOLOGÍAS',
        value: [
          "React",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "Mongodb",
          "JOI",
          "Passport",
          "JWT",
          "Mongoose",
          "Google OAuth",
          "Git",
          "Postman",
        ]
      },
      {
        name: 'FUNCIONES',
        value: [
          "Login",
          "Registro de usuarios",
          "Rating",
          "Comentarios",
          "Validador - formulario de registro",
          "Panel de administración",
        ]
      }
    ],
    url: "https://brokandfix.herokuapp.com/",
    img: "/assets/img/proyect-1.jpg",
  },
  {
    name: "proyecto z",
    git: "https://github.com/marcosMoraga/Proyecto-ZzZz",
    description: [
      {
        name: 'ROL',
        value: "En Proyecto Z, buscamos familiarizarnos con el mundo de los NFT, siendo mi participacion clave a la hora de desarrollar funcionalidades (tanto de backend como de frontend) propios del sistema."
      },
      {
        name: 'DIFICULTADES',
        value: "AL ser un proyecto relacionado con un rubro nuevo y con un tiempo muy limitado, existian grandes dificultades a la hora de abordar funcionalidades que derivan del sistema en desarrollo."
      },
      {
        name: 'SOLUCIÓN',
        value: "La solución mas proxima fue esclarecer con el equipo de desarrollo el alcance del proyecto, logrando simular un marketplace de ofertas y demandas"
      },
      {
        name: 'TECNOLOGÍAS',
        value: [
          "React",
          "Redux",
          "NodeJs",
          "ExpressJs",
          "Mongodb",
          "Websockets",
          "JOI",
          "Passport",
          "JWT",
          "Mongoose",
          "Google OAuth",
          "Git",
          "Postman",
          "Paypal",
        ]
      },
      {
        name: 'FUNCIONES',
        value: [
          "Compra/venta de NFT",
          "Paypal",
          "Juego",
          "Suscripción",
          "Dashboard",
          "Graficos en tiempo real",
        ]
      }
    ],
    url: "https://proyectzzzz.netlify.app/",
    img: "/assets/img/proyect-2.jpg",
  },
];

const Work = () => {
  const [current, setCurrent] = React.useState(0);
  const [currentProyect, setCurrentProyect] = React.useState(proyects[0]);
  const stepperRef = React.useRef(null);
  const backgroundImageRef = React.useRef(null);

  const stepperIncrease = () => {
    if (current === currentProyect.description.length - 1) {
      setCurrent(currentProyect.description.length - 1);
    } else {
      setCurrent(current + 1);
    }
  }
  const stepperDecrease = () => {
    if (current === 0) {
      setCurrent(0);
    } else {
      setCurrent(current - 1);
    }
  }

  const activeStep = (event) => {
    const stepperBtns = stepperRef.current.children;
    for (let i = 0; i < stepperBtns.length; i++) {
      stepperBtns[i].classList.remove('stepper-active');
    }
    event.target.classList.add('stepper-active');


    switch (event.target.id) {
      case 'proyect-1':
        setCurrentProyect(proyects[0]);
        break;
      case 'proyect-2':
        setCurrentProyect(proyects[1]);
        break;
      case 'proyect-3':
        setCurrentProyect(proyects[2]);
        break;
      default:
        setCurrentProyect(proyects[0]);
    }
    setCurrent(0)

  }

  return (
    <section className='work-section'>
      <div className='work-section-column-2'>
        <div className='work-section-column-proyects'>
          <div ref={stepperRef} className='work-section-column-proyects-stepper'>
            <button className='stepper-active' id='proyect-1' onClick={activeStep}></button>
            <button id='proyect-2' onClick={activeStep}></button>
            <button id='proyect-3' onClick={activeStep}></button>
          </div>
          <a href={currentProyect.url} target='_blank' rel="noreferrer" ref={backgroundImageRef} style={{ backgroundImage: `url(${currentProyect.img})` }} className='card first'>
            <h2>{currentProyect.name.toUpperCase()}</h2>
          </a>
        </div>
      </div>
      <div className='work-section-colum-action'>
        <div className='work-section-column-left'>
          <a href={currentProyect.url} target='_blank' rel="noreferrer" >DEMO</a>
          <a href={currentProyect.git} target='_blank' rel="noreferrer" ><BsGithub style={{ fontSize: '40px', justifySelf: 'center' }} /></a>
        </div>
      </div>
      <div className='work-section-column-1'>
        <div className='work-section-column-att'>
          <div className='work-section-column-att-top'>
            <h2>{currentProyect.description[current].name}</h2>
            <AiOutlineArrowRight onClick={stepperIncrease} className={`${current === currentProyect.description.length - 1 ? 'disabled' : 'arrow'}`} />
          </div>
          {current <= 2 && <p style={{ height: '150px' }}>{currentProyect.description[current].value}</p>}
          {current >= 3 && <ul>{currentProyect.description[current].value.map((item, index) => <li key={index}>{item}</li>)}</ul>}
          <AiOutlineArrowLeft onClick={stepperDecrease} className={`${current === 0 ? 'disabled' : 'arrow'}`} />
        </div>
      </div>

    </section>
  )
}

export default Work