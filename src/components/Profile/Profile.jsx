import './Profile.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <h2 className="name">{username}</h2>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">
            <b>{followers}</b>
          </span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">
            <b>{views}</b>
          </span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};
