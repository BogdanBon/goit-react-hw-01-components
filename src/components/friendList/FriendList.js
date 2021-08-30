import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ data }) {
  return (
    <div>
      <ul className={s.friend_list}>
        {data.map(item => (
          <li key={item.id} className={s.item}>
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
