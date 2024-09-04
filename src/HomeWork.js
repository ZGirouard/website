import './HomeWork.css';
import React from 'react';
import LinkedIn from './linkedin.png';
import GitHub from './github.png';
import Resume from './resume.png';
import Nebraska from './NebraskaLogo.png';
import Grocery from './GroceryLogo.png';
import Photoshop from './PhotoshopLogo.png'
import GroceryStore from './GroceryStore';
import { HashLink } from 'react-router-hash-link';


function HomeWork() {
  return (
    <div className='contactArea'>
      <HashLink className="workLink" to="/Internship">
      <div class='cards card2'>
        <img src={Nebraska} alt="Nebraska Logo" />
        <div class="container">
        <h2 class="heading"><b>UNL Internship</b></h2>
        </div>
      </div>
      </HashLink>
      <HashLink className="workLink" to="/GroceryStore">
      <div class='cards card1'>
        <img src={Grocery} alt="Grocery Store Logo" />
        <div class="container">
        <h2 class="heading"><b>Grocery Store App</b></h2>
        </div>
      </div>
      </HashLink>
      <HashLink className="workLink" to="/GraphicDesign">
      <div class='cards card3'>
        <img src={Photoshop} alt="Photoshop Logo" />
        <div class="container">
        <h2 class="heading"><b>Graphic Design</b></h2>
        </div>
      </div>
      </HashLink>
    </div>
);
}

export default HomeWork;