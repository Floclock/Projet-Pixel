import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const Nav = ({ path, displayName, displaySubtitle, isConnected, setConnected }) => {
  console.log(isConnected);
  const toggle = () => {
    if (localStorage.getItem('userName') !== null) {
      setConnected(true);
      console.log('test');
    }
  };
  useEffect(() => {
    toggle();
  }, [isConnected, path]);

  const disconnect = () => {
    localStorage.clear();
    setConnected(false);
  };
  return (
    <nav>
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
          { isConnected === false
            ? (
              <li><NavLink key="login" to="login">login</NavLink></li>)
            : (
              <li onClick={disconnect}>deconexion</li>)
          }
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  displaySubtitle: PropTypes.string.isRequired,
};


export default Nav;
