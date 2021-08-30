import PropTypes from 'prop-types';
import './FriendListItem.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span className={isOnline ? 'statusOnline' : 'statusOffline'}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
