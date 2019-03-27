let id = 0;

export default function createNotification(options) {
  const notification = {
    ...options,
    id: id += 1
  };

  return notification;
}
