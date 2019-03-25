import React from 'react';

import './nav.scss';

const HeaderTitle = ({ title, subtitle}) => (
  <div id="title">
    <h1 className="sub-title1">{title}</h1>
    <div className="line" />
    <p className="sub-title2">{subtitle}</p>
  </div>
);


export default HeaderTitle;
