import Proptypes from 'prop-types';
import TransHistoryItemStyle from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={TransHistoryItemStyle.roll}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  currency: Proptypes.string.isRequired,
};

export default TransactionHistoryItem;
