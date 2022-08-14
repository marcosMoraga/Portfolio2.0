import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import './Work.css'

const proyects = [
  {
    name: "mytinerary",
    url: "https://mytinerary-moraga.netlify.app/",
    description: {
      role: "Este proyecto se caracteriza por su desarrollo individual (full stack), atendiendo al patrón de diseño MVC.",
      dificulties:
        "En este proyecto lo mas complejo se evidencio a la hora de utilizar estados en los que se necesitaban en mas de un componente, inicialmente teniendo que transportar la información mediante las propiedades de otros componentes.",
      solution:
        "Una de las soluciones mas acertadas, fue el uso de Redux. La que fue elegida por sobre otras (context hook), ya que se prentende que el actual proyecto escale a una gran madurez",
      tech: [
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
        "MongoDBCompass",
      ],
      features: [
        "Login",
        "Registro de usuarios",
        "Likes",
        "Comentarios",
        "Validador - formulario de registro",
      ],
    },
    img: "/proyect-3.jpg",
  },
  {
    name: "broke & fix",
    description: {
      role: "En broke & fix tome el rol de product owner y fui lider en el equipo backend, logrando un producto minimo viable",
      dificulties:
        "En un comienzo se vio afectado por la poca o nula comunicación entre los equipos de desarrollos (backend - frontend)",
      solution:
        "Se establece seguir al pie de la letra la metodologia scrum, donde diariamente en no mas de 20 min, se mencionaba el estado en que se encontraba cada equipo",
      tech: [
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
        "MongoDBCompass",
      ],
      features: [
        "Login",
        "Registro de usuarios",
        "Rating",
        "Comentarios",
        "Validador - formulario de registro",
        "Panel de administración",
      ],
    },
    url: "https://brokandfix.herokuapp.com/",
    img: "/proyect-1.jpg",
  },
  {
    name: "proyecto z",
    description: {
      role: "En Proyecto Z, buscamos familiarizarnos con el mundo de los NFT, siendo mi participacion clave a la hora de desarrollar funcionalidades (tanto de backend como de frontend) propios del sistema en cuestión",
      dificulties:
        "AL ser un proyecto relacionado con un rubro nuevo y con un tiempo muy limitado, existian grandes dificultades a la hora de abordar funcionalidades que derivan del sistema en desarrollo",
      solution:
        "La solución mas proxima fue esclarecer con el equipo de desarrollo el alcance del proyecto, logrando simular un marketplace de ofertas y demandas",
      tech: [
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
        "MongoDBCompass",
        "Paypal",
      ],
      features: [
        "Compra/venta de NFT",
        "Paypal",
        "Juego",
        "Suscripción",
        "Dashboard",
        "Graficos en tiempo real",
      ],
    },
    url: "https://proyectzzzz.netlify.app/",
    img: "/proyect-2.jpg",
  },
];

const Work = () => {

  return (
    <section className='work-section'>
      <div className='work-section-column-2'>
        <div className='work-section-column-proyects'>
          <h2>MYTINERARY</h2>
          <button className='card first'></button>
        </div>
      </div>
      <div className='work-section-colum-action'>
        <div className='work-section-column-left'>
          <button>DEMO</button>
          <BsGithub style={{ fontSize: '40px', justifySelf: 'center' }} />
        </div>
      </div>
      <div className='work-section-column-1'>
        <div className='work-section-column-att'>
          <div className='work-section-column-att-top'>
            <h2>ROL</h2>
            <AiOutlineArrowRight className="arrow" />
          </div>
          <p>Este proyecto se caracteriza por su desarrollo individual (full stack), atendiendo al patrón de diseño MVC.</p>
          <div className='work-section-column-row'>
            {/* <div className='work-section-column-bar'></div> */}
            <AiOutlineArrowLeft className="arrow" />
            <AiFillPlayCircle className="play-pause-animation" />
            {/*<AiFillPauseCircle className="play-pause-animation" />*/}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Work