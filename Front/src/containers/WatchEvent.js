import { connect } from 'react-redux';

import WatchEvent from 'src/components/Event/WatchEvent';

// Action Creators
import { getDataEvents, sendMsg, sendVote } from 'src/store/reducer';

const mapStateToProps = state => ({
  data: state.dataEvents,
  memberId: state.memberId,
});

const mapDispatchToProps = dispatch => ({
  getDataEvents: () => {
    dispatch(getDataEvents());
  },

  sendMsg: (data) => {
    dispatch(sendMsg(data));
  },

  sendVote: (data) => {
    dispatch(sendVote(data));
  },

});

// Container
const WatchEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchEvent);

export default WatchEventContainer;
