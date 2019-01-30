import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes';
import {
	Navigation,
	NotificationContainer,
	ModalContainer
} from 'components/';
/*
import Navigation from 'components/Navigation';
import NotificationContainer from 'components/Notification';
import ModalContainer from 'components/Modal';
*/
import './App.scss';

const App = () => (
	<Router>
		<div className="app-container">
			<h1>React Redux Jumpstart</h1>
			<Navigation />
			<div className="app-content">
				<AppRoutes />
			</div>
			<ModalContainer />
			<NotificationContainer />
		</div>
	</Router>
);

export default App;
