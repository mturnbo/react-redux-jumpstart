import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ category, label, icon, colors, onClick }) => {
  const getStyle = () => {
    if (colors) {
      return {
        backgroundColor: colors.background,
        color: colors.text
      };
    }
    return {};
  };

  return (
    <button
      type="button"
      className={`uk-button uk-button-${category} jumpstart-button`}
      style={getStyle()}
      onClick={onClick}
    >
      {label}
      {icon && <span className="jumpstart-button-icon" uk-icon={icon} />}
    </button>
  );
};

Button.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  colors: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  category: 'default',
  icon: null,
  colors: null
};

export default Button;
