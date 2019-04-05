import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-active"><NavLink to="/">Home</NavLink></li>
        <li className="uk-parent"><NavLink to="/about">About</NavLink></li>
        <li className="uk-parent"><NavLink to="/buttons">Buttons</NavLink></li>
        <li className="uk-parent"><NavLink to="/cards">Cards</NavLink></li>
        <li className="uk-parent"><NavLink to="/todos">Todos</NavLink></li>
        <li className="uk-parent"><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
