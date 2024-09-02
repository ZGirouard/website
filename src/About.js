import './About.css';
import React from 'react';
import Navbar from './Navbar';
import ZachPumpkin from './Zach-Pumpkin.JPG'
import textVector from './Vector 1.png'
import Arrow from './arrow.png'
import Contact from './Contact';

function About() {
  return (
<div>
  <Navbar />
  <div className='content'>
  <div className='textBubble'>
  <p className="bioText">I’m a third year student at the University of Nebraska - Lincoln majoring in Computer Science with minors in Sociology and Advertising & Public Relations. 
    I’m passionate about creating accessible, aesthetic designs that give the user a phenomenal journey. 
    I’m looking to pursue a career in UX/UI Design, Fronted Development, or something adjacent. 
    I’ve worked with the Digital Experience Team at UNL to design and implement web pages that receive thousands of visits. 
    I have experience with a host of languages and technologies including, but not limited to: Adobe Photoshop, Adobe Illustrator, Figma, Java, and React.
    Outside of my career, I love skateboarding, collecting vinyl, graphic design, thrifting clothes, and going to concerts. 
    Contact me with any questions you have!
</p>
</div>
  <div>
    <img className='pumpkinImage' src={ZachPumpkin} alt='Me holding a pumpkin in the middle of a pumpking patch'></img>
  </div>
  </div>
  <div className='downArrow'>
    <img src={Arrow} alt="Down Arrow" />
    <h1 id='scrollDown'>Scroll down to contact me!</h1>
  </div>
  <div id='contactMe'>
    <Contact />
  </div>
</div>
);
}

export default About;
