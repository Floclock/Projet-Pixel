import React from 'react';
import PropTypes from 'prop-types';
import { TiThumbsUp } from 'react-icons/ti';

import './event.scss';

const VoteEvent = ({
  sendVote,
  eventId,
  userId,
  nbVotes,
}) => {
  const handleVote = () => {
    console.log(nbVotes);
    sendVote({
      user_id: userId,
      event_id: eventId,
    });
  };

  return (
    <div className="vote-event">
      <p> Click pour votez</p>
      <TiThumbsUp onClick={handleVote} className="icon-up" />
      <p>{nbVotes} Votes</p>
    </div>
  );
};

VoteEvent.propTypes = {
  sendVote: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  nbVotes: PropTypes.number.isRequired,
};

export default VoteEvent;
