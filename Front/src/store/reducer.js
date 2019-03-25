const initialState = {
  pathName: '',
};

/**
 * Types
 */
const SET_PATH_NAME = 'SET_PATH_NAME';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_DISPLAY_SUBTITLE = 'SET_DISPLAY_SUBTITLE';
export const LOAD_GAMES = 'LOAD_GAMES';
const RECEIVE_DATA_GAMES = ' RECEIVE_DATA_GAMES';
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
/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
