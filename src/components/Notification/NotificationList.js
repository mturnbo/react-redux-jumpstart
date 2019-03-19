import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeNotification } from 'actions/notificationActions';
import Notification from './Notification';
import './NotificationList.scss';

const NotificationList = ({ actions, notifications }) => {
	const { removeNotification } = actions;
	return (
		<div className="notification-list">
			{notifications.map(notification => <Notification {...notification} key={notification.id} onDismissClick={() => removeNotification(notification.id)} />)}
		</div>
	);
};

NotificationList.propTypes = {
	actions: PropTypes.shape({
		removeNotification: PropTypes.func.isRequired
	}).isRequired,
	notifications: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ removeNotification }, dispatch)
});

const mapStateToProps = state => ({
	notifications: state.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
