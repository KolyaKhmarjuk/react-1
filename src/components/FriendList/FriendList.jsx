import PropTypes from 'prop-types'
import s from './FriendList.module.css'
import Friend from './Friend/Friend'

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(e => {
          const { avatar, name, isOnline } = e;
          return (
            <Friend key={e.id} friends={friends} avatar={avatar} name={name} isOnline={isOnline} />
          )
        })}
          
      </ul>
    </div>
  )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList
