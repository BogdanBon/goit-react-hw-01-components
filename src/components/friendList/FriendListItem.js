import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span className={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
