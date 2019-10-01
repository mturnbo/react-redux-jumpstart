import React, { useState, useReducer } from 'react';
import { NotificationContext } from './Notification.context';
import initialState from '../../state/notificationState';

let notificationId = 100;

const NotificationReducer = (notifications, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      notificationId += 1;
      return [...notifications, { ...action.payload, notificationId }];
    case 'REMOVE_NOTIFICATION':
      return notifications.filter(n => n.id !== action.payload);
    default: {
      return notifications;
    }
  }
};

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useReducer(NotificationReducer, initialState);

  const add = options => {
    notificationId += 1;
    const notification = { options, notificationId };
    setNotifications([...notifications, notification]);
  };

  const remove = id => {
    const newNotifications = notifications.filter(n => n.id !== id);
    setNotifications(newNotifications);
  };

  const onDismiss = id => {
    dispatch({
      type: 'REMOVE_NOTIFICATION',
      payload: id
    });
  };

  const context = {
    notifications,
    add,
    remove
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
