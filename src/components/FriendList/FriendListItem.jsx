import './FriendList.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="friend-item">
      {isOnline ? (
        <span class="friend-status" style={{ backgroundColor: '#008000ab' }}>
          {isOnline}
        </span>
      ) : (
        <span class="friend-status" style={{ backgroundColor: '#ff0000a6' }}>
          {isOnline}
        </span>
      )}
      <img class="friend-avatar" src={avatar} alt="User avatar" width="48" />
      <p class="friend-name">
        <b>{name}</b>
      </p>
    </li>
  );
};
