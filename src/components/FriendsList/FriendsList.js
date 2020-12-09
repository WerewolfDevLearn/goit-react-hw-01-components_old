import Proptypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import FriendListStyle from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={FriendListStyle.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: Proptypes.arrayOf(
    Proptypes.exact({
      avatar: Proptypes.string,
      name: Proptypes.string.isRequired,
      isOnline: Proptypes.bool.isRequired,
      id: Proptypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
