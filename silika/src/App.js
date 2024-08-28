import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';
import About from './component/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <About />
    </div>
  );
}

export default App;
