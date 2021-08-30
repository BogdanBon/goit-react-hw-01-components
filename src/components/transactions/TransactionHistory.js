import PropTypes from 'prop-types';
import s from './TransactionsHistory.module.css';

function TransactionHistory({ data }) {
  return (
    <div className={s.transactions}>
      <table className={s.transaction_history}>
        <thead>
          <tr>
            <th className={s.table_border}>Type</th>
            <th className={s.table_border}>Amount</th>
            <th className={s.table_border}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className={s.table_border}>{item.type}</td>
              <td className={s.table_border}>{item.amount}</td>
              <td className={s.table_border}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};

export default TransactionHistory;
