import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBarDropdown = ({ items }) => (
  <div className="uk-navbar-dropdown">
    <ul className="uk-nav uk-navbar-dropdown-nav">
      {items.map(item => <li key={item.label}><NavLink to={item.link}>{item.label}</NavLink></li>)}
    </ul>
  </div>
);

NavBarDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default NavBarDropdown;
