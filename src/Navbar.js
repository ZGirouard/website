import React from 'react';
import './Navbar.css';
import ZGLogo from "./ZGLogo.png"
import homeIcon from './HomeLogo.png'
import aboutIcon from './AboutLogo.png'
import contactIcon from './ContactLogo.png'
import shortLine from './ShortLine.png'
import { HashLink } from 'react-router-hash-link';
import contactShad from './ContactLogoShad.png';
import homeShad from './HomeLogoShad.png';
import zgShad from './zg-transparent-shad.png';
import aboutShad from './AboutLogoShad.png';

const Navbar = () => {
  return (
<nav className="navbar">
  <div className="navbar-logo">
    <a href="/" className="logo">
      <div className="icon-container">
      <img className="shadow" src={zgShad} alt="Home" />
        <img src={ZGLogo} alt="Home" />
      </div>
    </a>
  </div>
  <div className="navbar-links">
    <ul className="nav-links">
      <li>
        <a href="/">
        <div className="icon-container">
        <img className="shadow" src={homeShad} alt="Home" />
         <img src={homeIcon} alt="Home" />
         </div>
        </a>
      </li>
      <li>
      <img className="divider" src={shortLine} alt="divider" />
      </li>
      <li>
        <a href="/about">
        <div className="icon-container">
        <img className="shadow" src={aboutShad} alt="About" />
        <img src={aboutIcon} alt="About" />
        </div>
        </a>
      </li>
      <li>
      <img className="divider" src={shortLine} alt="divider" />
      </li>
      <li>
      <HashLink to="/about#contactMe">
        <div className="icon-container">
        <img className="shadow" src={contactShad} alt="Contact" />
        <img src={contactIcon} alt="Contact" />
        </div>
        </HashLink>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;