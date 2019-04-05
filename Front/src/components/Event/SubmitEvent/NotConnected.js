import React from 'react';
import { Link } from 'react-router-dom';

import './submit-event.scss';

const NotConnected = () => (
  <div className="submit-event">
    <div className="submit-event-submit">
      <p className="submit-event-submit-title">Vous n'etes pas actuelement connecter</p>
      <p className="submit-event-submit-content">Veuillez cliquer sur le lien ci-dessous afin de vous connecter</p>
      <Link
        className="submit-event-submit-button"
        key="login"
        to="login"
      >login
      </Link>
    </div>
  </div>
);


export default NotConnected;
