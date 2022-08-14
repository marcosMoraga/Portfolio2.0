import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-group-items'>
                <Link to='/' className="active">Inicio</Link>
                <Link to='/about'>About</Link>
                <Link to='/experiences'>Experience</Link>
                <Link to='/work'>Work</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
