import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './header.scss';

const Header = ({ routes }) => (
    <div>
    <header className="container-header">
    {Object.keys(routes).map(path => (
        <Route
            exact
            path={path}
            key={path}
            render={() => (
                <div className={`header-${routes[path].class}`}>
                <h1 className="sub-title1">{routes[path].title}</h1>
                    <div className="line" />
                <p className="sub-title2">{routes[path].subtitle}</p>
                </div>
            )}
            />
            ))}
    </header>
    </div>
);

Header.propTypes = {
    routes: PropTypes.object.isRequired,
};

export default Header;