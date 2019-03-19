import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './Notification.scss';

const Notification = ({ type, title, message, onDismissClick }) => {
	return (
		<div className="notification-item">
			<div className={`notification-body ${type || ''}`}>
				<Dismiss dismissCallback={onDismissClick} />
				<h2 className="title is-4">{title}</h2>
				<p>{message}</p>
			</div>
		</div>
	);
};

Notification.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onDismissClick: PropTypes.func.isRequired
};

export default Notification;
