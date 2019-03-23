import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const Nav = ({ path, displayName }) => (
  <nav className={`header${path}`}>
    <div className="nav">
      <Link key="home-link1111" to="/">
        <img className="logo" alt="pixel-café" src="src/images/logo.png" />
      </Link>
      <HamburgerMenu />
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
    {path === ''
      ? (
        <div id="title">
          <h1 className="sub-title1">bienvenue <br /> au <br /> pixel cafe</h1>
          <div className="line" />
          <p className="sub-title2">De délicieux caféssaupoudrés d'une pincée de retro-gaming ou bien est-ce l'inverse ?</p>
        </div>
      )
      : <h1 className="page-title">{displayName}</h1>}
  </nav>
);

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};


export default Nav;
