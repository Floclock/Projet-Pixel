import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavData from 'src/data/nav';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const Nav = () => {
  const [path, setPath] = useState('');
  const [label, setLabel] = useState('');

  const changePath = (nav) => {
    setPath(nav.route.substr(1));
    setLabel(nav.label);
  };

  return (
    <nav className={`header${path}`}>
      <div className="nav">
        <img className="logo" alt="pixel-café" src="src/images/logo.png" />
        <HamburgerMenu changeClassName={changePath} />
        <ul className="nav-link">
          {NavData.map(nav => (
            <li onClick={() => changePath(nav)}>
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
      {path === ''
        ? (
          <div id="title">
            <h1 className="sub-title1">bienvenue <br /> au <br /> pixel cafe</h1>
            <div className="line" />
            <p className="sub-title2">De délicieux caféssaupoudrés d'une pincée de retro-gaming ou bien est-ce l'inverse ?</p>
          </div>
        )
        : <h1 className="page-title">{label}</h1>}
    </nav>
  );
};


export default Nav;
