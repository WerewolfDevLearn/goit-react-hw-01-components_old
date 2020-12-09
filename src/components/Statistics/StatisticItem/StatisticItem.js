import Proptypes from 'prop-types';
import StatisticsStyles from '../Statistic.module.css';
import colorGenerator from '../../../utils/colorGenerator';

function StatisticItem({ label, percentage }) {
  return (
    <li
      className={StatisticsStyles.item}
      style={{ backgroundColor: colorGenerator() }}
    >
      <span className={StatisticsStyles.labe}>{label}</span>
      <span className={StatisticsStyles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: Proptypes.string.isRequired,
  percentage: Proptypes.number.isRequired,
};
export default StatisticItem;
