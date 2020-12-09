import Proptypes from 'prop-types';
import ProfileStyle from '../../Profile.module.css';

function ProfileStatisticItem({ label, number }) {
  return (
    <li>
      <span className={ProfileStyle.label}>{label}</span>
      <span className={ProfileStyle.quantity}>{number}</span>
    </li>
  );
}

ProfileStatisticItem.propTypes = {
  label: Proptypes.string.isRequired,
  number: Proptypes.number.isRequired,
};

export default ProfileStatisticItem;
