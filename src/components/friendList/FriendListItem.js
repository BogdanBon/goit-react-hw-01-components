import PropTypes from 'prop-types';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span class={isOnline ? 'statusOnline' : 'statusOffline'}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
