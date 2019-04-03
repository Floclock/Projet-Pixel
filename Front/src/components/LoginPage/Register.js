import React from 'react';
import PropTypes from 'prop-types';


import FormErrors from './FormErrors';
import './login.scss';

class Register extends React.Component {
    
    state = {
        username: '',
        email: '',
        password: '',
        role: '1',
        passwordConfirm: '',
        errors: {email: '', username: '', password: '', passwordConfirm:''},
        errorCheck: {email: '', username: '', password: '', passwordConfirm:''},
        emailValid: false,
        passwordValid: false,
        passwordConfirmValid: false,
        usernameValid: false,
        formValid: false,
    }


    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }


    validateInput(inputName, value) {
        let inputErrors = this.state.errors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordConfirmValid = this.state.passwordConfirmValid;

        switch(inputName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                inputErrors.email = emailValid ? '' : 'L\'email n\'est pas valide';
                break;
            case 'password':
                passwordValid = value.length >= 7;
                inputErrors.password = passwordValid ? '' : 'Le mot de passe doit comporter au moins 8 caractères';
                break;
            case 'passwordConfirm':
                passwordConfirmValid = value === this.state.password;
                inputErrors.passwordConfirm = passwordConfirmValid ? '' : 'La vérification du mot de passe ne correspond pas';
                break;
            default:
                break;
            }

            this.setState({
                errors: inputErrors,
                emailValid: emailValid,
                passwordValid: passwordValid,
                passwordConfirmValid: passwordConfirmValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordConfirmValid});
    }

    errorClassname(error) {
        return(error.length === 0 ? '' : 'error');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handlesubmit register')

        const { submitNewUser } = this.props;
        console.log(this.props);

        const newUserRegister = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
        };
        console.log(newUserRegister);
        submitNewUser(newUserRegister);
    }

    // handleBlur = (field) => {
    //     if(this.state.errors[field] > 0) {
    //         this.setState ({
    //             errorCheck[field]: true,
    //         })
    // }

            render() {
                const { messageSubmit } = this.props;
                
                return (
                <div>
                    <div className="register-text">
                        <h2>Vous souhaitez créer un compte?</h2>
                        <p>Veuillez renseigner les champs suivants</p>
                    </div>
                    <div className={`panel panel-default`}>
                        <FormErrors errors={this.state.errors}/>
                    </div>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                        <input
                        className={`input-username ${this.errorClassname(this.state.errors.username)}`}
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un Username"
                        required
                        
                        />
                    <label>
                        Email:
                    </label>
                        <input
                        className={`input-email ${this.errorClassname(this.state.errors.email)}`}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Veuillez saisir un email valide"
                        required
                        //onBlur={this.handleBlur(email)}
                        />
                    <label>
                        Mot de passe:
                    </label>
                        <input
                        className={`input-password ${this.errorClassname(this.state.errors.password)}`}
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un mot de passe"
                        required
                        />
                    <label>
                        Vérification mot de passe:
                    </label>
                        <input
                        className={`input-passwordConfirm ${this.errorClassname(this.state.errors.passwordConfirm)}`}
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        placeholder="Entrez à nouveau le mot de passe"
                        required
                        />
                        <button 
                        type='submit' 
                        className='login-form-button ripple'
                        disabled={!this.state.formValid}
                        >
                        S'enregistrer
                        </button>
                    </form>
                    {messageSubmit === 'OK'
                    && <p className="submit-success">Nouvel utilisateur enregistré</p>
                    }
                    {messageSubmit === 'NOPE'
                    && <p className="submit-error">Nouvel utilisateur non enregistré</p>
                    }
                </div>
                );
            }
}

Register.propTypes = {
    submitNewUser: PropTypes.func.isRequired,
};

export default Register;

