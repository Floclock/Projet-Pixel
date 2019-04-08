import React from 'react';
import PropTypes from 'prop-types';
import { TiThumbsUp } from 'react-icons/ti';

import './event.scss';

const VoteEvent = ({
  sendVote,
  eventId,
  nbVotes,
}) => {
  const handleVote = () => {
    sendVote({
      event_id: eventId,
      user_id: 1,
    },
    eventId);
    console.log(eventId);
  };

  return (
    <div className="vote-event">
      {localStorage.getItem('userName') !== null
        ? (
          <>
            <p> Click pour votez</p>
            <TiThumbsUp onClick={handleVote} className="icon-up" />
          </>
        )
        : (<p> veuillez vous connectez</p>)
        }
      <p>{nbVotes} Votes</p>
    </div>
  );
};

VoteEvent.propTypes = {
  sendVote: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  nbVotes: PropTypes.number.isRequired,
};

export default VoteEvent;
