import React from 'react';

import './login.scss';
import FormErrors from './FormErrors';


class LoginView extends React.Component {

    state = {
        usernameLogin: '',
        passwordLogin: '',
        errorLogin: {passwordLogin: '',},
    }

    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }

    validateInput(inputName, value) {
        let inputErrorLogin = this.state.errorLogin;
        let passwordLoginValid = this.state.passwordLoginValid;

        switch(inputName) {
            case 'passwordLogin':
                passwordLoginValid = value.length >= 7;
                inputErrorLogin.passwordLogin = passwordLoginValid ? '' : 'Aucun mot de passe ne peut être inferieur à 8 caractères.';
                break;
            default:
                break;
            }

            this.setState({
                errorLogin: inputErrorLogin,
                passwordLoginValid: passwordLoginValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.passwordLoginValid });
    }

    errorClassname(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { submitLogins } = this.props;

            const logins = {
                username: this.state.usernameLogin,
                password: this.state.passwordLogin,
            };
            console.log(logins);
            submitLogins(logins);
    }
    
    render() {

        const { message, usernameIsConnected } = this.props;
        
        return (
            <div>
                <div className="login-text">
                        <h2>Vous souhaitez vous connecter?</h2>
                        <p>Veuillez renseigner les champs suivants</p>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form">
                <div className="panel-default">
                    <FormErrors errors={this.state.errorLogin} />
                </div>
                <label>
                    Username:
                </label>
                    <input
                    value={this.state.usernameLogin} 
                    onChange={this.handleChange}
                    type="text"
                    placeholder="veuillez entrer votre username"
                    name="usernameLogin"
                    required
                    />
                <label>
                    Password:
                </label>
                    <input
                    value={this.state.passwordLogin}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Veuillez entrer votre password"
                    name="passwordLogin"
                    required
                    />
                    <button 
                    className='login-form-button ripple'
                    type='submit'
                    //disabled={!this.state.formValid}
                    >
                    Connexion
                    </button>
                </form>
                    {message === 'OK'
                    && <p className="submit-success">Bonjour {usernameIsConnected}! <br></br>Vous vous êtes connecté avec succès!</p>
                    }
                    {message === 'NOPE'
                    && <p className="submit-error">L'identifiant ou le mot de passe ne correspondent pas</p>
                    }
            </div>
        );
    }
}


export default LoginView;


