import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Route, Switch } from 'react-router-dom';

import './app.scss';
import NavData from 'src/data/nav';

const App = ({ sendUrl, pathName }) => (
  <div className={`app${pathName}`}>
    <Nav />
    <Switch>
      {NavData.map(nav => (
        <Route
          exact
          path={nav.route}
          render={({ match }) => {
            const { label, subtitle } = nav;
            sendUrl(match, label, subtitle);
            const Components = nav.page;
            return <Components />;
          }
            }
        />
      ))}
    </Switch>
    <Footer color={pathName} />
  </div>
);

App.propTypes = {
  sendUrl: PropTypes.func.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default App;