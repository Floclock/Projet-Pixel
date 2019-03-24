import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

import routes from 'src/data/nav';

import './app.scss';

const App = ({location, history }) => {

  const changeTitle = ({ pathname }) => {
    document.title = routes[pathname].title;
  };

  const listenRoutes = () => {
    changeTitle(location);
    history.listen(changeTitle);
  };

  useEffect(listenRoutes, []);

return (
  <div id="app">
    <Nav routes={routes} />
    <main id="main">
      <Header routes={routes} />
      <div className="container">
        <Switch>
          {Object.keys(routes).map(route => (
            <Route exact key={route} path={route} component={routes[route].component} />
          ))}
        </Switch>
      <Footer />
      </div>
    </main>
  </div>
);
};

export default withRouter(App);

