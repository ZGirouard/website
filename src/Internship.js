import './Internship.css';
import React from 'react';
import Navbar from './Navbar';
import Nebraska from './NebraskaLogo.png'
import D10 from './D10.png'

function Internship() {
  return (
<div>
  <Navbar />
  <div className='content1'>
    <div class="card card2">
        <img src={Nebraska}></img>
        <div class="textWrap">
        <h1><b>UNL Internship</b></h1>
        <h3><b>A Professional Endeavor</b></h3>
        </div>
    </div>
  </div>
  <div className='textInfo'>
    <h1>Overview</h1>
    <p>For over 6 months, I’ve been working with the Digital Experience Group (DXG) which is part of the University Communication & Marketing department at the University of Nebraska-Lincoln. As part of my of internship, I’ve held a host of responsibilities including:
    </p>
    <ul>
        <li>
        Using the Drupal 10 CMS system to recreate web pages ensuring user accessibility and ease of use
        </li>
        <li>
        Creating templates using Twig, a template engine for PHP, to display imported data and adjust webpage layout
        </li>
        <li>
        Wrote code in HTML, JavaScript, and CSS to modify webpage display and functionality
        </li>
        <li>
        Utilized Adobe Photoshop and Adobe Illustrator to alter images and graphics to ensure they were suitable for web use
        </li>
        <li>
        Participated in stand-up meeting to discuss goals and progress with other members of the team
        </li>
        <li>
        Trained individuals on using the Drupal 10 CMS, answering questions and addressing concerns    
        </li>
    </ul>
    <p>
    Overall, the internship has been a very valuable experience to me. I’ve honed skills in a slew of areas including software development, user experience design, and graphic design. I’m confident this experience will be crucial to my success in the future.
    </p>
    <div className='DemoImages2'>
    <div>
        <h1>Drupal 10 Interface</h1>
        <img src={D10} alt="Drupal 10 Interface"></img>
        </div>
        </div>
    </div>
</div>
);
}

export default Internship;
