import Proptypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import TransactionStyle from './Transactions.module.css';
import TransHistoryItemStyle from './TransactionHistoryItem.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={TransactionStyle.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr className={TransHistoryItemStyle.roll} key={transaction.id}>
            <TransactionHistoryItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  transactions: Proptypes.arrayOf(
    Proptypes.exact({
      id: Proptypes.string.isRequired,
      type: Proptypes.string.isRequired,
      amount: Proptypes.string.isRequired,
      currency: Proptypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
