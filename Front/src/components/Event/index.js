import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './event.scss';
import WatchEvent from './WatchEvent';
import SubmitEvent from './SubmitEvent';

const Event = ({ getDataEvents, data, sendMsg }) => {
  const [view, setView] = useState('watch');

  useEffect(() => {
    getDataEvents();
  }, [data]);
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
      {view === 'watch' ? <WatchEvent dataEvents={data} sendMsg={sendMsg} /> : <SubmitEvent />}
    </div>
  );
};

Event.propTypes = {
  getDataEvents: PropTypes.func.isRequired,
  sendMsg: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Event;
