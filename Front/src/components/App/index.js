import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Route, Switch } from 'react-router-dom';

import './app.scss';
import NavData from 'src/data/nav';

const App = ({ sendUrl }) => (
  <div id="app">
    <Nav />
    <Switch>
      {NavData.map(nav => (
        <Route
          exact
          path={nav.route}
          render={({ match }) => {
            const { label } = nav;
            sendUrl(match, label);
            const Components = nav.page;
            return <Components />;
          }
            }
        />
      ))}
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  sendUrl: PropTypes.func.isRequired,
};

export default App;
