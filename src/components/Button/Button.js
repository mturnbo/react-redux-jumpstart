import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ category, label, colors, onClick }) => {
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
      className={'uk-button uk-button-' + category}
      style={getStyle()}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    background: PropTypes.string,
    text: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  category: 'default',
  colors: null
};

export default Button;
