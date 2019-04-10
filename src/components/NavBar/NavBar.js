import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarDropdown from './NavBarDropdown';

const NavBar = ({ menu }) => (
  <nav className="uk-navbar-container" data-uk-navbar="true">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        {menu.map(item => (
          <li className="uk-active">
            <NavLink to={item.link}>{item.label}</NavLink>
            {item.subItems && <NavBarDropdown items={item.subItems} />}
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        })
      )
    }).isRequired
  ).isRequired
};

export default NavBar;
