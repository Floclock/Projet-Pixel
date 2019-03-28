import { connect } from 'react-redux';


import LoginView from 'src/components/LoginPage/LoginView';
import { submitLogins, changeUsernameInput, changePasswordInput } from 'src/store/reducer'

const mapStateToProps = state => ({
    username: state.username,
    password: state.password,
});


const mapDispatchToProps = dispatch => ({
    changeUsernameInput: (usernameValue) => {
        dispatch(changeUsernameInput(usernameValue));
    },
    changePasswordInput: (passwordValue) => {
        dispatch(changePasswordInput(passwordValue))
    },
    submitLogins: (logins) => {
        dispatch(submitLogins(logins));
    }
})

const LoginViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginView);

export default LoginViewContainer;
