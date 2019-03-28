import React from 'react';

import './login.scss'


class LoginView extends React.Component {

    handleChangeUsername= (event) => {
        const usernameValue = event.target.value;
        const { changeUsernameInput } = this.props;

        changeUsernameInput(usernameValue);
    }
    
    handleChangePassword = (event) => {
        const passwordValue = event.target.value;
        const { changePasswordInput } = this.props;
        console.log(passwordValue)
        changePasswordInput(passwordValue);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { submitLogins, username, password } = this.props;

            const logins = {
                username,
                password,
            };
            //console.log(logins);
            submitLogins(logins + 'je suis le console log du loginview');
    }
    render() {

        const { connectionError, username, password } = this.props;
        
        return (
            <div>
                <div className="login-text">
                        <h2>Vous souhaitez vous connecter?</h2>
                        <p>Veuillez renseigner les champs suivants</p>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form">
                <label>
                    Username:
                </label>
                    <input
                    value={username} 
                    onChange={this.handleChangeUsername}
                    type="text"
                    placeholder="veuillez entrer votre username"
                    name="username"
                    required
                    />
                <label>
                    Password:
                </label>
                    <input
                    value={password}
                    onChange={this.handleChangePassword}
                    type="text"
                    placeholder="Veuillez entrer votre password"
                    name="password"
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
            </div>
        );
    }
}


export default LoginView;


