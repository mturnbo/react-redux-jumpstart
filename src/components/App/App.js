import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes';
import {
	Navigation,
	NotificationList,
	ModalContainer
} from 'components/';

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
			<NotificationList />
		</div>
	</Router>
);

export default App;
