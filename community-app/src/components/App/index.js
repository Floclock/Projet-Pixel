/**
 * NPM import
 */
import React from 'react';
import Nav from 'src/components/Nav';
import AboutUs from 'src/components/AboutUs';
import HomeEvent from 'src/components/HomeEvent';
import RowImages from 'src/components/RowImages';
import Info from 'src/components/Info';


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
    <AboutUs />
    <HomeEvent />
    <RowImages />
    <Info />
  </div>
);

/**
 * Export
 */
export default App;
