import React, { useState } from 'react';

import './footer.scss';

const NewsInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="form-subscribe">
      <input
        className="footer-newsletter-field"
        placeholder="ENTREZ VOTRE MAIL"
        type="email"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="footer-newsletter-button"
      >
        GO
      </button>
    </form>
  );
};


export default NewsInput;
