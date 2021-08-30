import PropTypes from 'prop-types';
import Statistical from './Statistical';
import './StatisticalList.css';

function StatisticalList({ title, data }) {
  return (
    <div>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {data.map(item => (
            <li key={item.id} className="item">
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
