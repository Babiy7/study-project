import React from 'react';
import Button from '../../ReactJs/Button/Button';
import { setNotification } from './Notification';

import styles from './Notifications.module.scss';
import icon from '../../icons/notification.png';

const ICON_TYPE = 'icon';
const TIMEOUT_TYPE = 'timeout';

const Notifications = () => {
  const handleClick = (data = {}) => {
    const { type } = data;

    switch (type) {
      case TIMEOUT_TYPE: {
        setNotification('Notification timeout example', 'Description for notification', data);
        break;
      }
      case ICON_TYPE: {
        setNotification('Notification icon example', 'Description for notification', data);
        break;
      }
      default: {
        setNotification('Notification example', 'Description for notification', data);
      }
    }
  };

  return (
    <div className={styles.notificationWrapper}>
      <Button onClick={handleClick}>Click notification</Button>
      <Button onClick={() => handleClick({ icon, type: ICON_TYPE })}>Click notification with icon</Button>
      <Button isTimerButton onClick={() => handleClick({ type: TIMEOUT_TYPE })}>Click notification timeout</Button>
    </div>
  );
};

export default Notifications;
