import React from 'react';
import Consoles from 'src/data/games';

import ImgBox from './ImgBox';
import GamesBox from './GamesBox';
import './games.scss';

const Games = () => (
  <div id="games">
    {Consoles.map(console => (
      <div>
        {console.id % 2 === 0
          ? (
            <div className="pair">
              <ImgBox data={console} />
              <GamesBox data={console} />
            </div>
          )
          : (
            <div className="inpair">
              <ImgBox data={console} />
              <GamesBox data={console} />
            </div>
          )}
      </div>
    ))}
  </div>
);


export default Games;
