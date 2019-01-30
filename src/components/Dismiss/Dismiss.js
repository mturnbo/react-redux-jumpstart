import React from 'react';
import PropTypes from 'prop-types';
import './Dismiss.scss';

const Dismiss = ({ dismissCallback }) => (
	<button className="dismiss" aria-label="dismiss" onClick={dismissCallback}></button>
);

Dismiss.propTypes = {
	dismissCallback: PropTypes.func.isRequired
};

export default Dismiss;
