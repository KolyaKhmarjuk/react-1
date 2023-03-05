// import PropTypes from 'prop-types'
import s from '../common/Section.module.css'
 
const Section = ({children, title}) => {
    return (
    <section className={s.section}>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
    </section>
  )
}

// Section.propTypes = {

// }

export default Section
