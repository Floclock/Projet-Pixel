import React from 'react';

import './games.scss';

const ImgBox = ({ data }) => (
  <div className="img-box">
    <img src={`src/images/${data.name}.jpg`} alt="videogames" />
    <div className="console">
      <p className="console-brand">{data.brand}</p>
      <p className="console-name">{data.name}</p>
      <p className="console-year">{data.releaseDate.date.substring(0, 4)}</p>
    </div>
  </div>
);


export default ImgBox;
