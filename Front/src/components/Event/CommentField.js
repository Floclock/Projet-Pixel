import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './event.scss';

const CommentField = ({ eventId, sendMsg }) => {
  const [msg, setMsg] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setMsg(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (msg !== '') {
      sendMsg({
        content: msg,
        user: 2,
        event: eventId,
      });
      setMsg('');
    }
  };

  return (
    <form id="msg-form" onSubmit={handleSubmit}>
      <input
        value={msg}
        onChange={handleChange}
        id="msg-field"
        placeholder="Entrez votre commentaire"
        autoComplete="off"
      />
    </form>
  );
};

CommentField.propTypes = {
  eventId: PropTypes.number.isRequired,
  sendMsg: PropTypes.func.isRequired,
};

export default CommentField;
