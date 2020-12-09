import Proptypes from 'prop-types';

import ProfileStatistic from './ProfileStatistic/ProfileStatistic';
import ProfileStyle from './Profile.module.css';
import defaultPrflAvatar from '../../images/avatar-1577909_1280.png';

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={ProfileStyle.profile}>
      <div className={ProfileStyle.description}>
        <img src={avatar} alt="user avatar" className={ProfileStyle.avatar} />
        <p className={ProfileStyle.name}>{name}</p>
        <p className={ProfileStyle.tag}>@{tag}</p>
        <p className={ProfileStyle.location}>{location}</p>
      </div>
      <ProfileStatistic stats={stats} />
    </div>
  );
}
Profile.defaultProps = {
  avatar: defaultPrflAvatar,
};

Profile.propTypes = {
  avatar: Proptypes.string,
  name: Proptypes.string.isRequired,
  tag: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  stats: Proptypes.shape({
    followers: Proptypes.number.isRequired,
    views: Proptypes.number.isRequired,
    likes: Proptypes.number.isRequired,
  }).isRequired,
};

export default Profile;
