import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, category, label, onClick }) => (
  /* eslint-disable-next-line react/button-has-type */
  <button type={type} className={'btn ' + category} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button',
  category: 'default'
};

export default Button;
