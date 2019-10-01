import React,{ useContext } from 'react';

export const NotificationContext = React.createContext([]);

export const useNotificationValue = () => useContext(NotificationContext);
