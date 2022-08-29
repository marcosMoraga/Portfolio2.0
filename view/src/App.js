import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Inicio from './pages/Inicio/Inicio'
import About from './pages/About/About'
import React, { useState } from 'react'
import Experiences from './pages/Experiences/Experiences'
import Contact from './pages/Contact/Contact'
import Work from './pages/Work/Work'
import './App.css';



function App() {
  const [flag, setFlag] = useState(false)

  return (
    <BrowserRouter>
      <div className="main">
        <div className='main-column-top'>
          <div className="main-column-top--logo" />
          <h3 className="main-column-top--qualities">
            Creative | Developer | Enthusiastic
          </h3>
        </div>
        <div className="main-column">
          <Routes>
            <Route path='/' element={<Inicio setFlag={setFlag} />} />
            <Route path='/about' element={<About />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Navbar flag={flag} setFlag={setFlag} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
