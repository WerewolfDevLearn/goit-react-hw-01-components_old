import Proptypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FriendListStyle from './FriendList.module.css';
import FriendListItemStyle from './FriendListItem.module.css';
function FriendList({ friends }) {
  return (
    <ul className={FriendListStyle.friendList}>
      {friends.map(friend => (
        <li className={FriendListItemStyle.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
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
  ),
};
export default FriendList;
