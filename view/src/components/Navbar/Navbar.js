import React, { useRef, useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const navRef = useRef(null);
    useEffect(() => {
        const navBtns = navRef.current.children;
        if (props.flag) {
            const workComponent = Array.from(navBtns).find(element => element.id === 'work')
            navBtns[0].classList.remove('active');
            workComponent.classList.add('active')
        }
    }, [props.flag])
    useEffect(() => {
        const navBtns = navRef.current.children;
        const url = window.location.href
        const page = url.slice(33, 100)
        const current = Array.from(navBtns).find(element => {
            if (page === '') {
                return element.id === 'inicio'
            } else {
                return element.id === page
            }
        })
        current.classList.add('active')
    }, [])


    const activeBtn = (event) => {
        const navBtns = navRef.current.children;
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove('active');
        }

        props.setFlag(false)
        event.target.classList.add('active');
    }

    return (
        <nav className="navbar">
            <div ref={navRef} className='navbar-group-items'>
                <Link id='inicio' onClick={activeBtn} to='/'>Intro</Link>
                <Link id='about' onClick={activeBtn} to='/about'>Sobre mi</Link>
                <Link id='experiences' onClick={activeBtn} to='/experiences'>Experencia</Link>
                <Link id='work' onClick={activeBtn} to='/work'>Trabajo</Link>
                <Link id='contact' onClick={activeBtn} to='/contact'>Contacto</Link>
            </div>
        </nav>
    )
}

export default Navbar
