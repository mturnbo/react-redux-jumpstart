import React from 'react';
import NotificationComponent from './Notification.component';
import { NotificationContext } from './Notification.context';
import './Notification.container.scss';

const NotificationContainer = () => (
  <NotificationContext.Consumer>
    {context => (
      <div className="jumpstart-notification-container">
        {context.notifications.map(notification => (
          <NotificationComponent
            {...notification}
            key={notification.id}
            onDismissClick={() => context.remove(notification.id)}
          />
        ))}
      </div>
    )}
  </NotificationContext.Consumer>
);

export default NotificationContainer;
