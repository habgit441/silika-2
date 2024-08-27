import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons correctly
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <div className="logo">
         logo
          </div>
          <div className="menu-toggle" onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li className="nav-item dropdown">
              <span className="dropdown-toggle">Use Cases</span>
              <ul className="dropdown-menu">
                <li>Use Case 1</li>
                <li>Use Case 2</li>
                <li>Use Case 3</li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="dropdown-toggle">Resources</span>
              <ul className="dropdown-menu">
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
              </ul>
            </li>
            <li className="nav-item">Week Demo</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Login</li>
          </ul>
          <button className="get-started-button">Get Started</button>
        </nav>
      </header>
    </div>
  );
}

export default App;
