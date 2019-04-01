

// Import
import {
    SUBMIT_LOGINS,
    UserIsConnected,
    errorConnexion,
    SUBMIT_NEW_USER,
    messageSubmitNewUser,
    loginResponse,
} from 'src/store/reducer';

import axios from 'axios';
//import decode from 'jwt-decode';

const sendLoginUser = 'http://92.243.8.69/login';
const sendNewUser = 'http://92.243.8.69/api/user/new';



const LoginMiddleware = store => next => (action) => {
    switch (action.type) {
    case SUBMIT_LOGINS:
    console.log('axios: submitLogin');
        axios
        .post(sendLoginUser, action.logins)
          //en cas de succès
        .then((response) => {
            // Le token du membre connecté est stocké dans le localStorage
            //localStorage.setItem('connect_token', response.data.token);
            // On récupère l'id du membre connecté
            //const token = decode(response.data.token); //?
            //const connectedUserId = token.user.id; //?
            // On récupère les informations du membre connecté
            console.log('connexion ok' + response);
            store.dispatch(loginResponse('OK'));
        })
        //en cas d'échec
        .catch((error) => {
            console.error('erreur Connexion: ' + error);
            store.dispatch(loginResponse('NOPE'));
        });
        break;

        case SUBMIT_NEW_USER:
        //console.log('axios: submitNewUser');
            axios
            .post(sendNewUser, action.newUserRegister)
            // en cas de succès
            .then((resp) => {
                console.log('c est bon ca marche' + resp)
                store.dispatch(messageSubmitNewUser('OK'));
            })
            //en cas d'échec
            .catch((err) => {
                console.error('pas d\'envoi des informations:' + err);
                store.dispatch(messageSubmitNewUser('NOPE'));
            });
            break;


        default:
            break;
    }

    // Passe à ton voisin
    next(action);
};

export default LoginMiddleware;

