import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './Notification.component.scss';

const NotificationComponent = ({
  type, title, message, onDismissClick
}) => (
  <div className={`jumpstart-notification-item ${type} transition-height dismiss-effect`}>
    <div className="notification-header">
      <div className="notification-title"><h2 className="title is-4">{title}</h2></div>
      <div><Dismiss dismissCallback={onDismissClick} effect="slideUp" /></div>
    </div>
    <div className="notification-body">
      <p>{message}</p>
    </div>
  </div>
);

NotificationComponent.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

NotificationComponent.defaultProps = {
  type: ''
};

export default NotificationComponent;
