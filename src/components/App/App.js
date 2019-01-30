import React from 'react';
import {
	HashRouter as Router,
	NavLink
} from 'react-router-dom';
import AppRoutes from '../../routes';
import './App.scss';
import NotificationContainer from 'components/Notification';
import ModalContainer from 'components/Modal';

const App = () => (
	<Router>
		<div className="app-container">
			<h1>React Redux Jumpstart</h1>
			<div className="app-navigation">
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/buttons">Buttons</NavLink></li>
					<li><NavLink to="/cards">Cards</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
			<div className="app-content">
				<AppRoutes />
			</div>
			<ModalContainer />
			<NotificationContainer />
		</div>
	</Router>
);

export default App;
