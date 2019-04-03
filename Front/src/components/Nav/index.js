import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import HeaderTitle from './HeaderTitle';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const Nav = ({ path, displayName, displaySubtitle }) => (
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
    <HeaderTitle title={displayName} subtitle={displaySubtitle} />
  </nav>
);

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  displaySubtitle: PropTypes.string.isRequired,
};


export default Nav;
