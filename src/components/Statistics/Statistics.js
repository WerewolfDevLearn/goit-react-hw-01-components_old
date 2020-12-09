import Proptypes from 'prop-types';
import StatisticItem from './StatisticItem/StatisticItem';
import StatisticsStyles from './Statistic.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={StatisticsStyles.statistics}>
      {title && <h2 className={StatisticsStyles.title}>{title}</h2>}
      <ul className={StatisticsStyles.statList}>
        {stats.map(stat => (
          <StatisticItem
            label={stat.label}
            percentage={stat.percentage}
            key={stat.id}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: Proptypes.string,
  stats: Proptypes.arrayOf(
    Proptypes.exact({
      id: Proptypes.string.isRequired,
      label: Proptypes.string.isRequired,
      percentage: Proptypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
