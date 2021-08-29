import PropTypes from 'prop-types';
import defaultImg from '../default/NoImageFound.jpg.png';

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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={name} width="160" class="avatar" />
        <p class="name">Name: {name}</p>
        <p class="tag">Tag: @{tag}</p>
        <p class="location">Location: {location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{likes}</span>
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
