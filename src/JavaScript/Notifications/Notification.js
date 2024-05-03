export const setNotification = (title, description, data) => {
  const { icon } = data;

  Notification.requestPermission().then((permision) => {
    if (permision === 'granted') {
      const notification = new Notification(title, {
        body: description,
        icon: icon || null
      });
    }
  });
};
