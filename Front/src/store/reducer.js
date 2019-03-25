const initialState = {
  pathName: '',
};

/**
 * Types
 */
const SET_PATH_NAME = 'SET_PATH_NAME';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_DISPLAY_SUBTITLE = 'SET_DISPLAY_SUBTITLE';

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

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
