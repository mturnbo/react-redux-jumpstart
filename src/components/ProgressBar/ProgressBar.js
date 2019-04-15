import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max }) => (
  <progress className="uk-progress" value={value} max={max} />
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default ProgressBar;
