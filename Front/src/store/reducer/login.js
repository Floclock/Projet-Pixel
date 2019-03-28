const initialState = {
    isConnected: false,
    userId: '',
};



const POST_LOGINS = 'POST_LOGINS';
const ERROR_CONNEXION = 'ERROR_CONNEXION';
const USER_IS_CONNECTED = 'USER_IS_CONNECTED';
const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
const CHANGE_USERNAME_INPUT = 'CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';


// === Reducer === 

export default (state = initialState, action = {}) => {
    switch (action.type) {
    
        case POST_LOGINS:
        return{
            ...state,
        }

        case CHANGE_USERNAME_INPUT:
        return {
            ...state,
            username: action.usernameValue,
        };

        case CHANGE_PASSWORD_INPUT:
        return {
            ...state,
            password: action.passwordValue,
        };

        case RECEIVED_TOKEN:
        return {
            ...state,
            token: action.token,
        }

        case ERROR_CONNEXION:
        return{
            ...state,
            errorMessage: action.errorMessage
        }

        case USER_IS_CONNECTED:
        return{
            ...state,
            isConnected: true,
            userId: action.id,
        }

    default:
        return state;
    
    }
};


export const submitLogins = logins => ({
    type: SUBMIT_LOGINS,
    logins,
  });
  
  export const errorConnexion = errorMessage => ({
    type: ERROR_CONNEXION,
    errorMessage,
  });
  
  export const UserIsConnected = id => ({
    type: USER_IS_CONNECTED,
    id,
  });
  
  export const changeUsernameInput = usernameValue => ({
    type: CHANGE_USERNAME_INPUT,
    usernameValue,
  })
  
  export const changePasswordInput = passwordValue => ({
    type: CHANGE_PASSWORD_INPUT,
    passwordValue,
  })


