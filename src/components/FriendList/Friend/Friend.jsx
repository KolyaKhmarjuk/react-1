import PropTypes from 'prop-types'
import s from './Friend.module.css'


const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
      <img src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.any.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default Friend

