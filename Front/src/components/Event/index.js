import React, { useState } from 'react';

import './event.scss';
import WatchEvent from 'src/containers/WatchEvent';
import SubmitEvent from 'src/containers/SubmitEvent';

const Event = () => {
  const [view, setView] = useState('watch');

  return (
    <div id="event">
      <div className="button-box">
        <button
          className="event-button left"
          type="button"
          onClick={() => setView('watch')}
        >
        Voir les evenements
        </button>
        <button
          className="event-button right"
          type="button"
          onClick={() => setView('submit')}
        >
        Soummetre un evenement
        </button>
      </div>
      {view === 'watch' ? <WatchEvent /> : <SubmitEvent />}
    </div>
  );
};

export default Event;
