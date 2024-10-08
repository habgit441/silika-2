import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Correct import for Font Awesome icons
import silika from '../Asset/Images/silika.svg'; // Import your silika logo image here
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <img src={silika} alt="Silika logo" />
            </div>
            <div className="menu-toggle" onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">Use Cases</li>
                <li className="nav-item">Resources</li>
                <li className="nav-item">Weekly Demo</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">Login</li>
            </ul>
            <button className="get-started-button">Get Started</button>
        </header>
    );
};

export default Navbar;
