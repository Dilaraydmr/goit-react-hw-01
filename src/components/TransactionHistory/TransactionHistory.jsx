import React from 'react'
import * as Clara from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index}>

                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )
                }

                )}
            </tbody>
        </table>
    )
}

export default TransactionHistory
