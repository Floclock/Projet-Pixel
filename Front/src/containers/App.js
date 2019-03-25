import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import App from 'src/components/App';

// Action Creators
import { setMenuName, setDisplayNane, setDisplaySubtitle } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  pathName: state.pathName,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  sendUrl: (match, label, subtitle) => {
    const pathName = match.url.substr(1);
    dispatch(setMenuName(pathName));
    dispatch(setDisplayNane(label));
    dispatch(setDisplaySubtitle(subtitle));
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

export default withRouter(AppContainer);
