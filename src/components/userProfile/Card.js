import PropTypes from 'prop-types';
import defaultImg from '../default/NoImageFound.jpg.png';
import './Card.css';

function Card({
  name = 'unknown',
  tag = 'unknown',
  location = 'unknown',
  avatar = defaultImg,
  followers = '0',
  views = '0',
  likes = '0',
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">Name: {name}</p>
        <p className="tag">Tag: @{tag}</p>
        <p className="location">Location: {location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Card;
