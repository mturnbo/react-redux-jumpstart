import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {
  NavBar,
  NotificationContainer,
  ModalContainer,
  DebugLogger
} from '@/components/';
// TODO: Figure out why this alias doesn't work
import menu from '../../config/menu.json';
import AppRoutes from '../../routes';
import './App.scss';

const App = () => (
  <Router>
    <div className="jumpstart-app-container">
      <NavBar menu={menu} />
      <div className="jumpstart-app-content">
        <AppRoutes />
      </div>
      <DebugLogger />
      <ModalContainer />
      <NotificationContainer />
    </div>
  </Router>
);

export default App;
