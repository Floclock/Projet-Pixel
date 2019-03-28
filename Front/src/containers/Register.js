import { connect } from 'react-redux';


import Register from 'src/components/LoginPage/Register';
import { submitNewUser } from 'src/store/reducer'

const mapStateToProps = state => ({
    username: state.username,
    password: state.password,
});


const mapDispatchToProps = dispatch => ({
    submitNewUser: (newUserRegister) => {
        dispatch(submitNewUser(newUserRegister));
    }
})

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);

export default RegisterContainer;
