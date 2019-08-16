import React from 'react';
import PropTypes from 'prop-types';
import Dismiss from 'components/Dismiss';
import './Notification.scss';

const Notification = ({
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

Notification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired
};

Notification.defaultProps = {
  type: ''
};

export default Notification;
