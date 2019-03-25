import React, { useEffect } from 'react';

import ImgBox from './ImgBox';
import GamesBox from './GamesBox';
import './games.scss';

const Games = ({ getDataGames, data }) => {
  
  return (
    <div id="games">
      {data.map(console => (
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
};


export default Games;
