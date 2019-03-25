// Middleware ajax : traitement des recup de données (recettes)


// Import
import { LOAD_GAMES, receiveDataGames } from 'src/store/reducer';
import Consoles from 'src/data/games';


const Middleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_GAMES:
      store.dispatch(receiveDataGames(Consoles));
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default Middleware;
