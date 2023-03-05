import PropTypes from 'prop-types'

import s from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => {
  return (
<div>
    <table className={s.transactionHistory}>
              
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  {transactions.map(item => (
      <tbody key={item.id}>
        <tr>
           <td>{item.type}</td>
           <td>{item.amount}</td>
           <td>{item.currency}</td>
        </tr>
      </tbody>
        ))}          
      
    </table>
</div>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
}

export default TransactionHistory
