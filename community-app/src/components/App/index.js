/**
 * NPM import
 */
import React from 'react';
import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
import { Route, Switch } from 'react-router-dom';


/**
 * Local import
 */
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
    </Switch>
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
