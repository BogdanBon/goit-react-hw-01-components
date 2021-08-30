import PropTypes from 'prop-types';
import './TransactionsHistory.css';

function TransactionHistory({ data }) {
  return (
    <div className="transactions">
      <table className="transaction-history">
        <thead>
          <tr>
            <th className="table-border">Type</th>
            <th className="table-border">Amount</th>
            <th className="table-border">Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="table-border">{item.type}</td>
              <td className="table-border">{item.amount}</td>
              <td className="table-border">{item.currency}</td>
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
