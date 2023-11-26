import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status} style={{ backgroundColor: '#008000ab' }}>
          {isOnline}
        </span>
      ) : (
        <span className={css.status} style={{ backgroundColor: '#ff0000a6' }}>
          {isOnline}
        </span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>
        <b>{name}</b>
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
