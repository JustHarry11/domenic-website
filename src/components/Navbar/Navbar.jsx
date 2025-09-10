import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className='logo'>LIPPA</div>
                <div className='nav-links'>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </div>
            </nav>
        </header>
    )
}