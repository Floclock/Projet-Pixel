import React from 'react';

import './home-event.scss';

const HomeEvent = () => (
  <div id="home-event">
    <p className="event-title">Prochainement au pixel café</p>
    <div className="event">
      <p className="event-date">15/03/2019 -19h</p>
      <div>
        <p className="event-name">Street Fighter 2 (Super Nes)</p>
        <p className="event-description">Le Lorem Ipsum est simplement du faux texte employé dans la composition</p>
      </div>
    </div>
    
    <div className="event">
      <p className="event-date">28/04/2019 -20h</p>
      <div>
        <p className="event-name">Street Of Rage 2 (Megadrive)</p>
        <p className="event-description">Le Lorem Ipsum est simplement du faux texte employé dans la composition</p>
      </div>
    </div>
  </div>
);


export default HomeEvent;
