import PropTypes from 'prop-types';
import ProfileStatisticItem from './PorfileStatisticItem/ProfileStatisticItem';
import ProfileStyle from '../Profile.module.css';

import arrOfObjects from '../../../utils/objectToArr';

function ProfileStatistic({ stats }) {
  const arrOfStats = arrOfObjects(stats);

  return (
    <ul className={ProfileStyle.stats}>
      {arrOfStats.map(stat => (
        <ProfileStatisticItem
          label={stat.label}
          number={stat.number}
          key={stat.id}
        />
      ))}
    </ul>
  );
}

ProfileStatistic.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileStatistic;
