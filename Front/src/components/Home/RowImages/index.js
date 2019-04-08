import React from 'react';
import { NavLink } from 'react-router-dom';

import './row-images.scss';

const RowImages = () => (
  <div id="row-images">
    <div className="zone row-gaming">
      <NavLink key="nos-jeux" to="/nos-jeux">
        <div className="row-content">
          <p className="row-title">Retro gaming Zone</p>
          <p className="row-description">venez découvrir nos jeux et nos consoles rétro</p>
        </div>
      </NavLink>
    </div>

    <div className="zone row-menus">
      <NavLink key="menu" to="/menu">
        <div className="row-content">
          <p className="row-title">Menu</p>
          <p className="row-description">venez découvrir nos boissons et laissez vous séduire par nos cafés</p>
        </div>
      </NavLink>
    </div>

    <div className="zone row-event">
      <NavLink key="evenement" to="/evenement">
        <div className="row-content">
          <p className="row-title">Evenements</p>
          <p className="row-description">venez découvrir nos tournois et évenement et vous frottez aux meilleurs</p>
        </div>
      </NavLink>
    </div>
  </div>
);


export default RowImages;
