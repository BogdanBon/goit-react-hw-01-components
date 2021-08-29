import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ data }) {
  return (
    <div>
      <ul class="friend-list">
        {data.map(item => (
          <li key={item.id} class="item">
            <FriendListItem
              isOnline={item.isOnline}
              avatar={item.avatar}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
