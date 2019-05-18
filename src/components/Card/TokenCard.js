import React from 'react';
import PropTypes from 'prop-types';

const TokenCard = ({ code, rate }) => (
  <div className="uk-card uk-card-body uk-card-default uk-card-small uk-card-hover">
    <div className="uk-card-header">
      <h3 className="uk-card-title  uk-margin-remove-bottom">{code}</h3>
    </div>
    <div className="uk-card-body">
      <h2>{rate}</h2>
    </div>
  </div>
);

TokenCard.propTypes = {
  code: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired
};

export default TokenCard;
