import PropTypes from 'prop-types'
import s from './FriendList.module.css'
import Friend from './Friend/Friend'
import Section from 'common/Section'

const FriendList = ({ friends }) => {
  return (
    <Section>
      <ul className={s.friendList}>
        {friends.map(e => {
          const { avatar, name, isOnline } = e;
          return (
            <Friend key={e.id} friends={friends} avatar={avatar} name={name} isOnline={isOnline} />
          )
        })}
      </ul>
      </Section>
  )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList
