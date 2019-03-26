import React from 'react'

import './loginview.scss'


const LoginView = () => {

    return (
        <div>
            <div className="login-text">
                    <h2>Vous souhaitez vous connecter?</h2>
                    <p>Veuillez renseigner les champs suivants</p>
            </div>
            <form onSubmit="" className='login-form'>
            <label>
                Email:
            </label>
                <input 
                className="inputLoginEmail"
                placeholder='Email' />
            <label>
                Password:
            </label>
                <input
                    type='inputPasswordLogin'
                    placeholder='Password'
                />
                <button 
                className='login-form-button ripple'
                type='submit' 
                >
                Connexion
                </button>
            </form>
        </div>
    );
    }


export default LoginView;


