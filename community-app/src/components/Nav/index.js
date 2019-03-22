import React from 'react';

import './nav.scss';

const Nav = () => (
  <nav id="header">
    <div className="nav">
      <img className="logo" alt="pixel-café" src="src/images/logo.png" />
      <ul className="nav-link">
        <li>le cafe</li>
        <li>menu</li>
        <li>nos jeux</li>
        <li>réservation</li>
        <li>évenements</li>
        <li>info</li>
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
