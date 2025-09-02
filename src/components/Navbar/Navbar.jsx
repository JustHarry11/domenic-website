import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <Link to="home" smooth={true} duration={500} offset={-50}>Home</Link>
                <Link to="about" smooth={true} duration={500} offset={-50} >About</Link>
                <Link to="projects" smooth={true} duration={500} offset={-50} >Projects</Link>
            </nav>
        </header>
    )
}