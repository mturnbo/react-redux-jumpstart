import React from 'react';
import {
	HashRouter as Router,
	Route,
	NavLink,
	Switch
} from 'react-router-dom';
import {
	HomePage,
	AboutPage,
	ContactPage,
	ButtonsPage,
	CardsPage,

} from 'pages';
import './App.scss';

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
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/buttons" component={ButtonsPage} />
				<Route path="/cards" component={CardsPage} />
				<Route path="/contact" component={ContactPage} />
			</div>
		</div>
	</Router>
);

export default App;
