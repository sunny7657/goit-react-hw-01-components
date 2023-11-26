import './Profile.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="section profile">
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
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">
            <b>{stats.views}</b>
          </span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
