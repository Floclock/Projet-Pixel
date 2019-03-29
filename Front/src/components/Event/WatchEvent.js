import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import CommentField from './CommentField';
import './event.scss';

const WatchEvent = ({ dataEvents, sendMsg }) => (
  <div id="watch-event">
    {dataEvents.map(event => (
      <div className="event-box">
        <img className="event-img" src="src/images/PlayStation.jpg" alt="" />
        <div className="event-description">
          <p className="event-description-date">{event.date.date}</p>
          <p className="event-description-name">{event.name}</p>
          <p className="event-description-desc">{event.description}</p>
          <p className="event-description-numb">Nombres de Participants: {event.nbParticipants}</p>
        </div>
        <div className="event-coments">
          <ul>
            {event.comments.map(comment => (
              <li>
                <p className="event-coments-user"><FaUserAlt /> user</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
          <CommentField eventId={event.id} sendMsg={sendMsg} />
        </div>
      </div>
    ))}
  </div>
);

WatchEvent.propTypes = {
  dataEvents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};


export default WatchEvent;
