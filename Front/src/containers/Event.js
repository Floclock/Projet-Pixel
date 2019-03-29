/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Event from 'src/components/Event';

// Action Creators
import { getDataEvents, sendMsg } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  data: state.dataEvents,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getDataEvents: () => {
    dispatch(getDataEvents());
  },

  sendMsg: (data) => {
    dispatch(sendMsg(data));
  },
});

// Container
const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default EventContainer;
