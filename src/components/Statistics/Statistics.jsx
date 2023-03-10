import PropTypes from 'prop-types'
import s from '../Statistics/Statistics.module.css'
import StatusticsItem from './StatusticsItem/StatusticsItem';
import Section from 'common/Section';


const Statistics = ({data}) => {
  return (
    <Section>
      <div  className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {data.map(e => {
          const { id, label, percentage } = e;
          return <StatusticsItem key={id} label={label} percentage={percentage} />
        })}
        </ul>
        </div>
</Section>
  )
}


Statistics.propTypes = {
  data: PropTypes.array.isRequired,
}


export default Statistics


