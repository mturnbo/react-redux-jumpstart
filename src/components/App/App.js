import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {
  NavBar,
  NotificationContainer,
  ModalContainer
} from 'components/';
import AppRoutes from '../../routes';
import './App.scss';

const App = () => (
  <Router>
    <div className="app-container">
      <h1>React Redux Jumpstart</h1>
      <NavBar />
      <div className="app-content">
        <AppRoutes />
      </div>
      <ModalContainer />
      <NotificationContainer />
    </div>
  </Router>
);

export default App;
