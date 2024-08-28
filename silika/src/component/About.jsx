import React from 'react';
import './About.css'
import video from '../Asset/Images/Group.svg';

const About = () => {
  return (
    <header className="About">
      <div className='us'>
        <h1>more About us</h1>
      </div>
      <div className='silika'>
        <div className="abouttext">
          <h2>professional & team  <br/> choose copy.ai</h2>
          <p>Odio dictum lacus augue nulla sit integer facilisis massa. Nec et tellus eu amet. Faucibus sit sit massa ullamcorper </p>
        </div>
        <div className="">
          <img src={video} alt="video" style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
            borderRadius: '2rem',
          }} />
        </div>
      </div>

    </header>
  );
};

export default About;