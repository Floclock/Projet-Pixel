import React from 'react';


import './login.scss';

const Register = () => {
    

        return (
        <div>
            <div className="register-text">
                <h2>Vous souhaitez créer un compte?</h2>
                <p>Veuillez renseigner les champs suivants</p>
            </div>
        <form className='register-form'>
            <label>
                Email:
            </label>
                <input
                className="floating-label input-email"
                type="password"
                name="password"
                id="inputEmailRegister"
                placeholder="Veuillez saisir un email valide"
                />
            <label>
                Username:
            </label>
                <input
                className="input-username"
                type="username"
                name="username"
                id="inputUsernameRegister"
                placeholder="Veuillez entrer un Username"
                />
            <label>
                Mot de passe:
            </label>
                <input
                className="input-password"
                type="password"
                name="password"
                id="inputPasswordRegister"
                placeholder="Veuillez entrer un mot de passe"
                />
            <label>
                Vérification mot de passe:
            </label>
                <input
                className="input-password-verification"
                type="password"
                name="password"
                id="inputPasswordVerificationRegister"
                placeholder="Entrez à nouveau le mot de passe"
                />
                <button 
                type='submit' 
                className='login-form-button ripple'
                >
                S'enregistrer
                </button>
            </form>
        </div>
        );
}

export default Register;

