import React, { useState } from 'react';

import './login.scss'


const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    handleSubmit = (event) => {
        event.preventDefault();
        const logins = {
            email: this.state.email,
            password: this.state.email,
        };
        submitLogins(logins);
        
    }

    return (
        <div>
            <div className="login-text">
                    <h2>Vous souhaitez vous connecter?</h2>
                    <p>Veuillez renseigner les champs suivants</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
            <label>
                Email:
            </label>
                <input
                value={email} 
                onChange={event => setEmail(event.target.value)}
                type="text"
                placeholder="Email"
                name="email"
                required
                />
            <label>
                Password:
            </label>
                <input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="text"
                placeholder="Password"
                name="password"
                required
                />
                <button 
                className='login-form-button ripple'
                type='submit'
                disabled={!this.state.formValid}
                >
                Connexion
                </button>
            </form>
        </div>
    );
}


export default LoginView;


