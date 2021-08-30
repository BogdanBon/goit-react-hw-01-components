import PropTypes from 'prop-types';
import Statistical from './Statistical';
import s from './StatisticalList.module.css';

function StatisticalList({ title, data }) {
  return (
    <div>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stat_list}>
          {data.map(item => (
            <li key={item.id} className={s.item}>
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
