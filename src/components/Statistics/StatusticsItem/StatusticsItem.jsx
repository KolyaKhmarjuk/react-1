import PropTypes from 'prop-types'
import s from '../StatusticsItem/StatusticsItem.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StatusticsItem = ({label, percentage}) => {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
}


StatusticsItem.protoType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}
export default StatusticsItem
