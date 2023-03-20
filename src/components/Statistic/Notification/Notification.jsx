import css from '../Notification/Notification.module.css';
export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};
