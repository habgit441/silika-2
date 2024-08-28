import React from 'react';
import logo from '../Asset/Images/logo.svg'; // Import your logo image here
const Feature = () => {
  return (
    <header className="feature">
      <div className="scrolling-images">
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Feature;
