import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Inicio from './pages/Inicio/Inicio'
import About from './pages/About/About'
import Experiences from './pages/Experiences/Experiences'
import Contact from './pages/Contact/Contact'
import Work from './pages/Work/Work'
import './App.css';



function App() {

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
            <Route path='/' element={<Inicio />} />
            <Route path='/about' element={<About />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
