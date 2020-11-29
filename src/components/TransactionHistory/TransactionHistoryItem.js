import Proptypes from 'prop-types';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

TransactionHistoryItem.propTypes = {
  type: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  currency: Proptypes.string.isRequired,
};

export default TransactionHistoryItem;
