import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} width="70" hight="70"/>
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className ={s.item}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className ={s.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className ={s.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({followers: PropTypes.number, views: PropTypes.number, likes: PropTypes.number}),
};
