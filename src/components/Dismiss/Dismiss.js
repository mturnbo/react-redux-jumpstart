import React from 'react';
import PropTypes from 'prop-types';
import './Dismiss.scss';

const Dismiss = ({ onClick }) => {
	return (
		<button className="dismiss" aria-label="dismiss" onClick={onClick}></button>
	);
};

Dismiss.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Dismiss;
