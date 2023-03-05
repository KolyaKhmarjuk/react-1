import PropTypes from 'prop-types'
import s from '../Statistics/Statistics.module.css'
import StatusticsItem from './StatusticsItem/StatusticsItem';


const Statistics = ({data}) => {
  return (
<section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {data.map(e => {
          const { id, label, percentage } = e;
          return <StatusticsItem key={id} label={label} percentage={percentage} />
        })}
  </ul>
</section>
  )
}


Statistics.propTypes = {
  data: PropTypes.array.isRequired,
}


export default Statistics


