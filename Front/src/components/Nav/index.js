import React from 'react';
import { NavLink } from 'react-router-dom';

import NavData from 'src/data/nav';
import './nav.scss';

const Nav = () => (
  <nav id="header">
    <div className="nav">
      <img className="logo" alt="pixel-café" src="src/images/logo.png" />
      <ul className="nav-link">
        {NavData.map(nav => (
          <li>
            <NavLink
              key={nav.label}
              to={nav.route}
            >
              {nav.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div id="title">
      <h1 className="sub-title1">bienvenue <br /> au <br /> pixel cafe</h1>
      <div className="line" />
      <p className="sub-title2">De délicieux caféssaupoudrés d'une pincée de retro-gaming ou bien est-ce l'inverse ?</p>
    </div>
  </nav>
);


export default Nav;
