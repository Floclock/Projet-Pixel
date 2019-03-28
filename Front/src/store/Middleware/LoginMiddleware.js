// Middleware ajax : traitement des recup de données (recettes)
import axios from 'axios';
//import decode from 'jwt-decode';


// Import
import {
    POST_LOGINS,
    UserIsConnected,
    errorConnexion,
} from 'src/store/reducer';



const LoginMiddleware = store => next => (action) => {
    switch (action.type) {
    case POST_LOGINS:
        axios({
            method: 'post',
            url: ``, //?
            responseType: 'json',
            data: action.logins,
        })
          //en cas de succès
        .then((response) => {
            // Le token du membre connecté est stocké dans le localStorage
            localStorage.setItem('connect_token', response.data.token);
            // On récupère l'id du membre connecté
            const token = decode(response.data.token); //?
            const connectedUserId = token.user.id; //?
            // On récupère les informations du membre connecté
            store.dispatch(UserIsConnected(connectedUserId));
        })
        //en cas d'échec
        .catch((error) => {
            console.error('Connexion: ', error);
            store.dispatch(errorConnexion('Les identifiants ne sont pas valides'));
        });
        break;

        default:
            break;
    }

    // Passe à ton voisin
    next(action);
};

export default LoginMiddleware;

