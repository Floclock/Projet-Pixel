

const initialState = {
    dataGames: [], 
}


// === Types ===
export const LOAD_GAMES = 'LOAD_GAMES';
const RECEIVE_DATA_GAMES = ' RECEIVE_DATA_GAMES';
export const LOAD_MENU = 'LOAD_MENU';
const RECEIVE_DATA_MENU = 'RECEIVE_DATA_MENU';



// === Reducer ===

export default (state = initialState, action = {}) => {
    switch (action.type) {
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

        default:
        return state
    }
};


// === Action ===

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
