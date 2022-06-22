import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({friends}) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          {<span className={isOnline ? s.isActive : s.isUnactive}></span>}
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}
// {isOnline ? s.isActive : s.isUnactive}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({avatar: PropTypes.string.isRequired, name: PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired, id: PropTypes.number.isRequired})),
}
