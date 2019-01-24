import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = ({ type, title, message, onDismissClick }) => {
	const msgColorClass = type ? `is-${type}` : '';
	return (
		<React.Fragment>
			<li className="notification-item">
				<div className={`notification ${type || ''}`}>
					<button className="delete" aria-label="dismiss" onClick={onDismissClick}></button>
					<h2 className="title is-4">{title}</h2>
					<p>{message}</p>
				</div>
			</li>
		</React.Fragment>
	);
};

Notification.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onDismissClick: PropTypes.func.isRequired
};

export default Notification;
