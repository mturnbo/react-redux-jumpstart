import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
	<div className="app-navigation">
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/buttons">Buttons</NavLink></li>
			<li><NavLink to="/cards">Cards</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		</ul>
	</div>
);

export default Navigation;
