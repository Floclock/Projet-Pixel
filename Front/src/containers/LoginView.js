import { connect } from 'react-redux';

import LoginView from 'src/components/LoginView';

import { } from 'src/store/reducer'

const mapStateToProps = (state, ownProps) => ({
    token: state.token,
    errorMessage: state.errorMessage,
    

});


const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LoginViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginView);

export default LoginViewContainer; 