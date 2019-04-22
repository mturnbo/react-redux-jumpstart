import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeNotification } from 'actions/notificationActions';
import Notification from './Notification';
import './NotificationContainer.scss';

const NotificationContainer = ({ notifications, remove }) => (
  <div className="jumpstart-notification-container">
    {notifications.map(notification => (
      <Notification
        {...notification}
        key={notification.id}
        onDismissClick={() => remove(notification.id)}
      />
    ))}
  </div>
);

NotificationContainer.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  remove: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeNotification(id))
});

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
