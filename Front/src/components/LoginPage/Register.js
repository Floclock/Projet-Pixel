import React from 'react';

import FormErrors from './FormErrors';
import './login.scss';

class Register extends React.Component {
    
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {email: '', username: '', password: '', passwordConfirm:''},
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

    handleSubmit = (event) => {
        event.preventDefault();
        //const { username, password, email } = this.props;

        const newUserRegister = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        };
        //console.log(newUserRegister);
        submitNewUser(newUserRegister);

    }

    validateInput(inputName, value) {
        let inputErrors = this.state.errors;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordConfirmValid = this.state.passwordConfirmValid;

        switch(inputName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                inputErrors.email = emailValid ? '' : 'l\'email n\'est pas valide';
                break;
            case 'password':
                passwordValid = value.length >= 7;
                inputErrors.password = passwordValid ? '' : 'le mot de passe doit comporter au moins 8 caractères';
                break;
            case 'passwordConfirm':
                passwordConfirmValid = value === this.state.password;
                inputErrors.passwordConfirm = passwordConfirmValid ? '' : 'la vérification du mot de passe ne correspond pas';
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
        return(error.length === 0 ? '' : 'has-error');
    }


            render() {
        
                return (
                <div>
                    <div className="register-text">
                        <h2>Vous souhaitez créer un compte?</h2>
                        <p>Veuillez renseigner les champs suivants</p>
                    </div>
                    <div className="panel panel-default">
                        <FormErrors errors={this.state.errors} />
                    </div>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <div className={`form-group ${this.errorClassname(this.state.errors.username)}`}>
                        <input
                        className="input-username"
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un Username"
                        />
                    </div>
                    <label>
                        Email:
                    </label>
                    <div className={`form-group ${this.errorClassname(this.state.errors.email)}`}>
                        <input
                        className="floating-label input-email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Veuillez saisir un email valide"
                        />
                    </div>
                    <label>
                        Mot de passe:
                    </label>
                    <div className={`form-group ${this.errorClassname(this.state.errors.password)}`}>
                        <input
                        className="input-password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Veuillez entrer un mot de passe"
                        />
                    </div>
                    <label>
                        Vérification mot de passe:
                    </label>
                    <div className={`form-group ${this.errorClassname(this.state.errors.passwordConfirm)}`}>
                        <input
                        className="input-password-verification"
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        placeholder="Entrez à nouveau le mot de passe"
                        />
                    </div>
                        <button 
                        type='submit' 
                        className='login-form-button ripple'
                        disabled={!this.state.formValid}
                        >
                        S'enregistrer
                        </button>
                    </form>
                </div>
                );
            }
}

export default Register;

