import './Home.css';
import React from 'react';
import Navbar from './Navbar';
import Arrow from './arrow.png';
import HomeWork from './HomeWork';
import GroceryStore from './GroceryStore';



function Home() {
  return (
<div>
<Navbar />
  <div className='content'>
  <div className='textBubble'>
    <div> 
      <h1 id='Hey'>Hey!</h1>
    </div>
      <h2 id='Zach'>I'm Zach, an aspiring UX/UI Designer and Frontend Developer.</h2>
  <p className="bioText">
</p>
</div>
  </div>
  <div className='downArrow'>
    <img src={Arrow} alt="Down Arrow" />
    <h1 id='scrollDown'>Scroll down to see some of my work</h1>
  </div>
  <div>
  </div>
  <div id='HomeWork'>
    <HomeWork />
  </div>
</div>
);
}

export default Home;