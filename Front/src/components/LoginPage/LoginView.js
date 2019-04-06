import React from 'react';

import './login.scss';

class LoginView extends React.Component {

    state = {
        usernameLogin: '',
        passwordLogin: '',
        errorLogin: {usernameLogin: '', passwordLogin: '',},
        usernameLoginValid: '',
        passwordLoginValid: '',
        formValid: false,
        fieldLoginBlur: {
            usernameLogin: false,
            passwordLogin: false,
        },

    }

    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateInput(name, value) });
    }

    validateInput(inputName, value) {
        let inputErrorLogin = this.state.errorLogin;
        let usernameLoginValid = this.state.usernameLoginValid
        let passwordLoginValid = this.state.passwordLoginValid;

        switch(inputName) {
            case 'usernameLogin':
                usernameLoginValid = /^[a-zA-Z0-9]{8,20}$/.test(value);
                console.log(usernameLoginValid);
                inputErrorLogin.usernameLogin = usernameLoginValid ? '' : 'NOPE';
                console.log(value);
                break;

            case 'passwordLogin':
                passwordLoginValid = /.{8,20}/.test(value);
                console.log(passwordLoginValid);
                inputErrorLogin.passwordLogin = passwordLoginValid ? '' : 'NOPE';
                console.log(value);
                break;

            default:
                break;
            }

            this.setState({
                errorLogin: inputErrorLogin,
                usernameLoginValid: usernameLoginValid,
                passwordLoginValid: passwordLoginValid,
            }, this.validateForm);
    } 

    validateForm() {
        this.setState({formValid: this.state.usernameLoginValid && this.state.passwordLoginValid });
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

    handleBlur = (field) => () => {
        if (this.state.errorLogin[field] !== '') {
            console.log('plop')
            this.setState({
                fieldLoginBlur: {...this.state.fieldLoginBlur, [field]: true},
            })
        }  
        return null
    }

    handleFocus = (field) => () => {
        if (this.state.errorLogin[field] !== ''){
        this.setState({
            fieldLoginBlur: {...this.state.fieldLoginBlur, [field]: false},
        })
        }
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
                <label className="form-label">
                    Username:
                </label>
                    <input
                    className="input"
                    value={this.state.usernameLogin} 
                    onChange={this.handleChange}
                    type="text"
                    placeholder="veuillez entrer votre username"
                    name="usernameLogin"
                    required
                    onBlur={this.handleBlur('usernameLogin')}
                    onFocus={this.handleFocus('usernameLogin')}
                    />
                    <div className="error-box">
                    {this.state.fieldLoginBlur.usernameLogin === true &&
                        <p className="error-field">Le username ne semble pas avoir le format habituel</p>
                    }
                    </div>
                <label className="form-label">
                    Password:
                </label>
                    <input
                    className="input"
                    value={this.state.passwordLogin}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Veuillez entrer votre password"
                    name="passwordLogin"
                    required
                    onBlur={this.handleBlur('passwordLogin')}
                    onFocus={this.handleFocus('passwordLogin')}
                    />
                    <div className="error-box">
                    {this.state.fieldLoginBlur.passwordLogin === true &&
                        <p className="error-field">Le mot de passe ne semble pas avoir la longueur habituelle</p>
                    }
                    </div>
                    <button 
                    className='login-form-button ripple'
                    type='submit'
                    disabled={!this.state.formValid}
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


