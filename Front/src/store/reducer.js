const initialState = {
  pathName: '',
  token: '',
  dataGames: [],
  dataMenu: [],
  isConnected: false,
  userId: '',
};

/**
 * Types
 */
const SET_PATH_NAME = 'SET_PATH_NAME';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_DISPLAY_SUBTITLE = 'SET_DISPLAY_SUBTITLE';
export const LOAD_GAMES = 'LOAD_GAMES';
const RECEIVE_DATA_GAMES = ' RECEIVE_DATA_GAMES';
export const LOAD_MENU = 'LOAD_MENU';
const RECEIVE_DATA_MENU = 'RECEIVE_DATA_MENU';


//Login

const POST_LOGINS = 'POST_LOGINS';
const ERROR_CONNEXION = 'ERROR_CONNEXION';
const USER_IS_CONNECTED = 'USER_IS_CONNECTED';
const RECEIVED_TOKEN = 'RECEIVED_TOKEN';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PATH_NAME:
      return {
        ...state,
        pathName: action.pathName,
      };

    case SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.label,
      };

    case SET_DISPLAY_SUBTITLE:
      return {
        ...state,
        displaySubtitle: action.subtitle,
      };

      case RECEIVE_DATA_GAMES:
      return {
        ...state,
        dataGames: action.dataGames,
      };

    case RECEIVE_DATA_MENU:
      return {
        ...state,
        dataMenu: action.dataMenu,
      };


      //?LOGIN

      case POST_LOGINS:
        return{
          ...state,
        }

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

/**
 * Action Creators
 */
export const setMenuName = pathName => ({
  type: SET_PATH_NAME,
  pathName,
});

export const setDisplayNane = label => ({
  type: SET_DISPLAY_NAME,
  label,
});

export const setDisplaySubtitle = subtitle => ({
  type: SET_DISPLAY_SUBTITLE,
  subtitle,
});

export const getDataGames = () => ({
  type: LOAD_GAMES,
});

export const receiveDataGames = dataGames => ({
  type: RECEIVE_DATA_GAMES,
  dataGames,
});

export const getDataMenu = () => ({
  type: LOAD_MENU,
});

export const receiveDataMenu = dataMenu => ({
  type: RECEIVE_DATA_MENU,
  dataMenu,
});


//?LOGIN

export const submitLogins = logins => ({
  type: POST_LOGINS,
  logins,
})

export const errorConnexion = errorMessage => ({
  type: ERROR_CONNEXION,
  errorMessage,
});

export const UserIsConnected = id => ({
  type: USER_IS_CONNECTED,
  id,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
