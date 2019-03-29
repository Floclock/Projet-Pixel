
import axios from 'axios';
//import decode from 'jwt-decode';


// Import
import {
    SUBMIT_LOGINS,
    UserIsConnected,
    errorConnexion,
    SUBMIT_NEW_USER,
    submitNewUser,
} from 'src/store/reducer';

const sendNewUser = 'http://92.243.8.69/api/user/new';



const LoginMiddleware = store => next => (action) => {
    switch (action.type) {
    case SUBMIT_LOGINS:
    console.log('axios: submitLogin');
        axios({
            method: 'post',
            url: ``, 
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

        case SUBMIT_NEW_USER:
        //console.log('axios: submitNewUser');
            axios
            .post(sendNewUser, action.newUserRegister)
            // en cas de succès
            .then((response) => {
                store.dispatch(messageSubmitNewUser('OK'));
                console.log('c est bon ca marche')
            })
            //en cas d'échec
            .catch((error) => {
                console.error('Envoi des informations:', error);
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

