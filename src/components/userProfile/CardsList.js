import PropTypes from 'prop-types';
import Card from './Card';

function CardsList({ items }) {
  return (
    <div>
      <ul>
        {items.map(e => (
          <li key={e.tag}>
            <Card
              name={e.name}
              tag={e.tag}
              location={e.location}
              avatar={e.avatar}
              followers={e.stats.followers}
              views={e.stats.views}
              likes={e.stats.likes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
  ),
};

export default CardsList;
