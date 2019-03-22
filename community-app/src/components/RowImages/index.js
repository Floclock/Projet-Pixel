import React from 'react';

import './row-images.scss';

const RowImages = () => (
  <div id="row-images">
    <div className="zone row-gaming">
      <div className="row-content">
        <p className="row-title">Retro gaming Zone</p>
        <p className="row-description">venez découvrir nos jeux et nos consoles rétro</p>
      </div>
    </div>
    <div className="zone row-menus">
      <div className="row-content">
        <p className="row-title">menu</p>
        <p className="row-description">venez découvrir nos boissons et laissez vous séduire par nos cafés</p>
      </div>
    </div>
    <div className="zone row-event">
      <div className="row-content">
        <p className="row-title">évenements</p>
        <p className="row-description">venez découvrir nos tournois et évenement et vous frottez aux meilleurs</p>
      </div>
    </div>
  </div>
);


export default RowImages;
