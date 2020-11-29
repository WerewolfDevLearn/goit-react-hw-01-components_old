import Proptypes from 'prop-types';
import StatisticsStyles from './Statistic.module.css';

function StatisticItem({ label, percentage }) {
  return (
    <>
      <span className={StatisticsStyles.labe}>{label}</span>
      <span className={StatisticsStyles.percentage}>{percentage}%</span>
    </>
  );
}

StatisticItem.propTypes = {
  label: Proptypes.string.isRequired,
  percentage: Proptypes.number.isRequired,
};
export default StatisticItem;
