import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {
  NavBar,
  NotificationContainer,
  ModalContainer
} from 'components/';
// TODO: Figure out why this alias doesn't work
import menu from '../../config/menu.json';
import AppRoutes from '../../routes';
import './App.scss';

const App = () => (
  <Router>
    <div className="app-container">
      <h1>React Redux Jumpstart</h1>
      <NavBar menu={menu} />
      <div className="app-content">
        <AppRoutes />
      </div>
      <ModalContainer />
      <NotificationContainer />
    </div>
  </Router>
);

export default App;
