import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import './menuContent.scss';

const MenuContent = ({ changeClassName, click }) => (
  <ul className="menu">
    {NavData.map(nav => (
      <li
        onClick={() => {
          changeClassName(nav);
          click();
        }}
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
  changeClassName: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};


export default MenuContent;
