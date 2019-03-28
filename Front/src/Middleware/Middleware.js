import {
  LOAD_GAMES, 
  receiveDataGames,
  receiveDataMenu,
  LOAD_MENU,
} from 'src/store/reducer';

import axios from 'axios';


const menuUrl = 'http://92.243.8.69/api/types';
const gamesUrl = 'http://92.243.8.69/api/consoles';


const Middleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_GAMES:
      axios
        .get(gamesUrl)
        .then(({ data }) => {
          store.dispatch(receiveDataGames(data));
        })
        .catch(() => {
          console.error('Error receiveDataGames');
        });
      break;

    case LOAD_MENU:
      axios
        .get(menuUrl)
        .then(({ data }) => {
          store.dispatch(receiveDataMenu(data));
        })
        .catch(() => {
          console.error('Error receiveDataMenu');
        });
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default Middleware;
