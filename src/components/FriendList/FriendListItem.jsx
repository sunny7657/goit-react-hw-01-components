import './FriendList.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      {isOnline ? (
        <span
          className="friend-status"
          style={{ backgroundColor: '#008000ab' }}
        >
          {isOnline}
        </span>
      ) : (
        <span
          className="friend-status"
          style={{ backgroundColor: '#ff0000a6' }}
        >
          {isOnline}
        </span>
      )}
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">
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
