/**
 * npm import
 */
import { combineReducers } from 'redux';

/**
 * Local import
 */
import login from 'src/store/reducer/login';
import menu from 'src/store/reducer/menu';
import datas from 'src/store/reducer/datas';


const reducers = combineReducers({
    login,
    menu,
    datas,
});

/**
 * Export
 */
export default reducers;