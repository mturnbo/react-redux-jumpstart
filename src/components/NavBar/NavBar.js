import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarDropdown from './NavBarDropdown';
import './NavBar.scss';

// TODO: Figure out why menu icon toggle doesn't work

const NavBar = ({ menu }) => {
  const renderMenuItems = menu.map(item => (
    <li className="uk-text-large" key={`menu-${item.label.replace(' ', '').toLowerCase()}`}>
      <NavLink to={item.link}>{item.label}</NavLink>
      {item.subItems && <NavBarDropdown items={item.subItems} />}
    </li>
  ));

  return (
    <div>
      <header className="headernav jumpstart-nav" data-uk-sticky="true">
        <nav className="uk-container uk-navbar">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="/">
                  React|Redux
                  <strong>Jumpstart</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@s">
              {renderMenuItems}
            </ul>
            <a
              href="#"
              className="uk-navbar-toggle uk-hidden@s"
              data-uk-navbar-toggle-icon="true"
              data-uk-toggle="target: #sidenav"
            >
              <span className="uk-margin-small-right" data-uk-icon="menu" />
            </a>
          </div>
        </nav>
      </header>

      <div id="sidenav" data-uk-offcanvas="flip: true" className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
          <ul className="uk-nav">
            {renderMenuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
