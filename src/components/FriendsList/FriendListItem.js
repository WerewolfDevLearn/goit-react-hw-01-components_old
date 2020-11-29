import Proptypes from 'prop-types';
import defaultImg from '../../images/avatar-1577909_1280.png';
import FriendListItemStyle from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const finalStyle =
    FriendListItemStyle.status +
    ' ' +
    (isOnline ? FriendListItemStyle.onLine : FriendListItemStyle.offLine);

  return (
    <>
      <span className={finalStyle}></span>
      <img
        className={FriendListItemStyle.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={FriendListItemStyle.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: Proptypes.string,
  name: Proptypes.string.isRequired,
  isOnline: Proptypes.bool.isRequired,
};
export default FriendListItem;
