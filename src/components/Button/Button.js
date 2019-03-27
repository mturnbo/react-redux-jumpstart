import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, label, onClick }) => (
  <button type="button" className={'btn ' + type} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
