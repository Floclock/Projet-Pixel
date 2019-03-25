import React from 'react';

import './games.scss';

const GamesBox = ({ data }) => (
  <div className="games-box">
    <ul className="game-list">
      {data.games.map(game => (
        <li className="game-list-game">
          <p className="game-list-game-title">{game.name} :</p>
          <p className="game-list-game-description">{game.description.substring(0, 180)} ...</p>
        </li>
      ))}
    </ul>
  </div>
);


export default GamesBox;
