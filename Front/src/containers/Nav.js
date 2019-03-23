import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Nav from 'src/components/Nav';

// Action Creators
import { setMenuName } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  path: state.pathName,
  displayName: state.displayName,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
 
});

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

export default withRouter(NavContainer);
