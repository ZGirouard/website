import './GraphicDesign.css';
import React from 'react';
import Navbar from './Navbar';
import PhotoShop from './PhotoshopLogo.png'
import TourPoster from './Quarters-Of-Change-Tour-V2.png'
import Portraits from './Portraits-Poster.png'
import MacMiller from './Swimming-V6.png'
import FOB from './Folie-a-deuxs.png'


function GraphicDesign() {
  return (
<div>
  <Navbar />
  <div className='content1'>
    <div class="card card3">
        <img src={PhotoShop}></img>
        <div class="textWrap">
        <h1><b>Graphic Design</b></h1>
        <h3><b>A Personal Passion</b></h3>
        </div>
    </div>
  </div>
  <div className='textInfo'>
    <h1>Overview</h1>
    <p>In my free time, I love to experiment with different design techniques and create posters and visuals with Adobe Photoshop and Adobe Illustrator. This hobby allows me to blend my artistic and technical skills, working on composition, color theory, and typography. Since I’m also a huge music fan, a lot of these pieces relate to albums or artists I enjoy. It’s very fulfilling to push my boundaries and refine my existing skills. This creative outlet not only fuels my artistic passion, but also serves as a platform for expressing my appreciation for music through visually compelling designs. I’ve even received recognition from some of the artists themselves for my work. From what I've created, these are some of my favorite pieces:
    </p>
    <div className='DemoImages1'>
    <div>
        <h1>Portraits</h1>
        <img src={Portraits} alt="Portraits Poster"></img>
    </div>    
    <div>
        <h1>Tour Poster</h1>
        <img src={TourPoster} alt="Tour Poster"></img>
    </div>
    <div>
        <h1>Swimming</h1>
        <img src={MacMiller} alt="Swimming Poster"></img>
    </div>
    <div>
        <h1>Folie à Deux</h1>
        <img src={FOB} alt="Folie a Duex Poster"></img>
    </div>
    </div>
    </div>
</div>
);
}

export default GraphicDesign;
