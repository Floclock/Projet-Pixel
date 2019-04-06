import React, { useState, useContext } from 'react';
import Proptypes from 'prop-types';

import LoginView from 'src/containers/LoginView';
import Register from 'src/containers/Register';
import LostPass from 'src/components/LoginPage/LostPass';


import './login.scss';

const DisplayContext = React.createContext();

const LoginPage = () => {
    const [view, setView] = useState('login');

    const login = () => {
        setView('login');
    };

    const register = () => {
        setView('register');
    };

    const lostPass = () => {
        setView('lostPass')
    };

        return(
        <section className="login-section">
            <div className="nav-login">
                <DisplayContext.Provider
                    value={{view, login, register, lostPass}}
                >
                <Display />
                </DisplayContext.Provider>
            </div>

        </section>
        );
};


const Display = () => {
    const { view, login, register, lostPass } = useContext(DisplayContext);

    return (
        <div id="login-global">
            <div className="button-box">
                <button className={`log-button${view === 'login' ? '' : '-inactive'} ripple `} onClick={login}>Se connecter</button>
                <button className={`log-button${view === 'register' ? '' : '-inactive'} ripple `} onClick={register}>S'enregistrer</button>
            </div>
        <div id="login-container">
        <div id="view-page">
            { view === 'login' && (
                <div>
                <LoginView />
                    <div className="lostPass-reminder">
                        <h3>Vous avez oublié votre mot de passe?</h3>
                        <a className="recover-link" onClick={lostPass}><span>Réinitialisez-le!</span></a>
                    </div>
                </div>
            )
            }
            { view === 'register' && (
                <Register />
            )
            }
            { view === 'lostPass' && (
                <LostPass />
            )
            }
            
        </div>
    </div>
    </div>
    );
};


export default LoginPage;

