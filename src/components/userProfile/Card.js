import PropTypes from 'prop-types';
import defaultImg from '../default/NoImageFound.jpg.png';
import s from './Card.module.css';

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
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>Name: {name}</p>
        <p className={s.tag}>Tag: @{tag}</p>
        <p className={s.location}>Location: {location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{likes}</span>
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
