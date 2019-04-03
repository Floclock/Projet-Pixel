import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Nav from 'src/components/Nav';

// Action Creators

const mapStateToProps = state => ({
  path: state.pathName,
  displayName: state.displayName,
  displaySubtitle: state.displaySubtitle,
});

const mapDispatchToProps = () => ({});

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default withRouter(NavContainer);
