import PropTypes from 'prop-types';
import ProfileStatisticItem from './ProfileStatisticItem';
import ProfileStyle from './Profile.module.css';

import arrOfObjects from '../../utils/objectDes';

function ProfileStatistic({ stats }) {
  const arrOfStats = arrOfObjects(stats);

  return (
    <ul className={ProfileStyle.stats}>
      {arrOfStats.map(stat => (
        <li key={stat.id}>
          <ProfileStatisticItem label={stat.label} number={stat.number} />
        </li>
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
