import React, { useState } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import aubdsNavLogo from '../../images/nav-logo.png'

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (


        <nav className="navigation">
            <div className="logo">
                <img src={aubdsNavLogo} alt="" />
                <h1>AUBDS</h1>
            </div>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }} >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white">
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <ul className='menu'>
                    <Link to='/home' className='item'>
                        <a href="#home">Home</a>
                    </Link>
                    <Link to='/about' className='item'>
                        <a href="#about">About</a>
                    </Link>
                    <Link to='/bloodDonation' className='item'>
                        <a href="#services">Services</a>
                    </Link>
                    <Link to='/events' className='item'>
                        <a href="#events">Events</a>
                    </Link>
                    <Link to='/contact' className='item'>
                        <a href="#home">Contact</a>
                    </Link>
                    <div>
                        <button class="button">Emergency</button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

