import React from 'react'
import * as Clara from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={ Clara.transactionHistory}>
            <thead>
                <tr className={ Clara.transactionHistory__Head}> 
                    <th className={Clara.transactionHistory__back}>Type</th>
                    <th className={Clara.transactionHistory__back}>Amount</th>
                    <th className={Clara.transactionHistory__back}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index} className={Clara.transactionHistory__row}> 

                            <td className={Clara.transaction__flex}>{item.type}</td>
                            <td className={Clara.transaction__flex}>{item.amount}</td>
                            <td className={Clara.transaction__flex}>{item.currency}</td>
                        </tr>
                    )
                }

                )}
            </tbody>
        </table>
    )
}

export default TransactionHistory
