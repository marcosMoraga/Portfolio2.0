import React, { useRef, useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const navBtns = navRef.current.children;
        const url = window.location.href
        const page = url.slice(22, 100)
        const current = Array.from(navBtns).find(element => {
            if (page === '') {
                return element.id === 'inicio'
            } else {
                return element.id === page
            }
        })
        current.classList.add('active');
    }, [navRef])


    const activeBtn = (event) => {
        const navBtns = navRef.current.children;
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove('active');
        }
        event.target.classList.add('active');
    }

    return (
        <nav className="navbar">
            <div ref={navRef} className='navbar-group-items'>
                <Link id='inicio' onClick={activeBtn} to='/'>Inicio</Link>
                <Link id='about' onClick={activeBtn} to='/about'>About</Link>
                <Link id='experiences' onClick={activeBtn} to='/experiences'>Experience</Link>
                <Link id='work' onClick={activeBtn} to='/work'>Work</Link>
                <Link id='contact' onClick={activeBtn} to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
