import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import './menuContent.scss';

const MenuContent = ({ closeMenu }) => (
  <ul className="menu">
    {NavData.map(nav => (
      <li
        onClick={() => closeMenu()}
        className="menu-item"
      >
        <NavLink
          key={`hamburger${nav.label}`}
          to={nav.route}
        >
          {nav.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};


export default MenuContent;
