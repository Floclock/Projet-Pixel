import React from 'react';

import './login.scss';

const LostPass = () => (
    <div>
        <div className="recover-text">
        <h2>Vous avez oublié votre mot de passe?</h2>
        <p>Renseignez votre email, nous vous enverrons un email afin de le réinitialiser</p>
        </div>
        <form className='recover-form'>
        <label>
            Email:
        </label>
        <input
            className="input-recover"
            type="email"
            name="Email"
            id="inputEmailLogin"
            placeholder="Email"
            
            />
            <button
            className="button-recover ripple"
            type="submit"
            >
                Soumettre
            </button>
        </form>
    </div>
);

export default LostPass;
