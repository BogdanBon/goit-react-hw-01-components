import PropTypes from 'prop-types';
import Statistical from './Statistical';

function StatisticalList({ title, data }) {
  return (
    <div>
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
          {data.map(item => (
            <li key={item.id} class="item">
              <Statistical label={item.label} percentage={item.percentage} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

StatisticalList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticalList;
